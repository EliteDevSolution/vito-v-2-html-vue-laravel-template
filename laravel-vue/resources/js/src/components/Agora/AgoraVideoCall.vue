<template>
  <div id="ag-canvas">
    <div class="ag-btn-group">
      <span
        @click="handleExit"
        class="ag-btn exitBtn"
        :class="{'disabled': !readyState}"
        title="Exit">
        <i class="ri-logout-box-line ag-icon ag-icon-leave"></i>
      </span>
      <span v-if="attendeeMode === 'video'"
        @click="handleCamera"
        class="ag-btn videoControlBtn"
        title="Enable/Disable Video">
        <i class="ri-camera-line ag-icon-camera" />
        <i class="ri-camera-off-line ag-icon-camera-off" />
      </span>
      <span v-if="attendeeMode !== 'audience'"
        @click="handleMic"
        class="ag-btn audioControlBtn"
        title="Enable/Disable Audio">
        <i class="ri-mic-2-fill ag-icon-mic"></i>
        <i class="ri-mic-off-line ag-icon-mic-off"></i>
      </span>
      <span
        @click="switchDisplay"
        class="ag-btn displayModeBtn"
        :class="{'disabled': streamList.length > 4}"
        title="Switch Display Mode">
        <i class="ri-tv-2-line ag-icon-switch-display"></i>
      </span>
      <span
        class= "ag-btn disableRemoteBtn"
        :class="{'disabled': streamList.length > 4 || displayMode !== 'pip'}"
        @click="hideRemote"
        title="Hide Remote Stream">
        <i class="ri-base-station-line ag-icon-remove-pip"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { merge } from 'lodash'
import * as Cookies from 'js-cookie'
const tileCanvas = {
  1: ['span 12/span 24'],
  2: ['span 12/span 12/13/25', 'span 12/span 12/13/13'],
  3: ['span 6/span 12', 'span 6/span 12', 'span 6/span 12/7/19'],
  4: [
    'span 6/span 12',
    'span 6/span 12',
    'span 6/span 12',
    'span 6/span 12/7/13'
  ],
  5: [
    'span 3/span 4/13/9',
    'span 3/span 4/13/13',
    'span 3/span 4/13/17',
    'span 3/span 4/13/21',
    'span 9/span 16/10/21'
  ],
  6: [
    'span 3/span 4/13/7',
    'span 3/span 4/13/11',
    'span 3/span 4/13/15',
    'span 3/span 4/13/19',
    'span 3/span 4/13/23',
    'span 9/span 16/10/21'
  ],
  7: [
    'span 3/span 4/13/5',
    'span 3/span 4/13/9',
    'span 3/span 4/13/13',
    'span 3/span 4/13/17',
    'span 3/span 4/13/21',
    'span 3/span 4/13/25',
    'span 9/span 16/10/21'
  ]
}

export default {
  data () {
    return {
      client: {},
      localStream: {},
      shareClient: {},
      shareStream: {},
      displayMode: 'pip',
      streamList: [],
      readyState: false
    }
  },

  props: [
    'transcode',
    'attendeeMode',
    'videoProfile',
    'channel',
    'baseMode',
    'appId',
    'uid'
  ],

  methods: {
    streamInit (uid, attendeeMode, videoProfile, config) {
      const defaultConfig = {
        streamID: uid,
        audio: true,
        video: true,
        screen: false
      }

      switch (attendeeMode) {
        case 'audio-only':
          defaultConfig.video = false
          break
        case 'audience':
          defaultConfig.video = false
          defaultConfig.audio = false
          break
        default:
        case 'video':
          break
      }

      // eslint-disable-next-line no-undef
      const stream = AgoraRTC.createStream(merge(defaultConfig, config))
      stream.setVideoProfile(videoProfile)
      return stream
    },

    subscribeStreamEvents () {
      const rt = this
      rt.client.on('stream-added', function (evt) {
        const stream = evt.stream
        // eslint-disable-next-line handle-callback-err
        rt.client.subscribe(stream, function (err) {
        })
      })

      rt.client.on('peer-leave', function (evt) {
        rt.removeStream(evt.uid)
      })

      rt.client.on('stream-subscribed', function (evt) {
        const stream = evt.stream
        rt.addStream(stream)
      })

      rt.client.on('stream-removed', function (evt) {
        const stream = evt.stream
        rt.removeStream(stream.getId())
      })
    },

    removeStream (uid) {
      this.streamList.map((item, index) => {
        if (item.getId() === uid) {
          item.close()
          const element = document.querySelector('#ag-item-' + uid)
          if (element) {
            element.parentNode.removeChild(element)
          }
          const tempList = [...this.streamList]
          tempList.splice(index, 1)
          this.streamList = tempList
        }
      })
    },

    addStream (stream, push = false) {
      const repeatition = this.streamList.some(item => {
        return item.getId() === stream.getId()
      })
      if (repeatition) {
        return
      }
      if (push) {
        this.streamList = this.streamList.concat([stream])
      } else {
        this.streamList = [stream].concat(this.streamList)
      }
    },

    handleCamera (e) {
      e.currentTarget.classList.toggle('off')
      this.localStream.isVideoOn()
        ? this.localStream.disableVideo()
        : this.localStream.enableVideo()
    },

    handleMic (e) {
      e.currentTarget.classList.toggle('off')
      this.localStream.isAudioOn()
        ? this.localStream.disableAudio()
        : this.localStream.enableAudio()
    },

    switchDisplay (e) {
      if (
        e.currentTarget.classList.contains('disabled') ||
        this.streamList.length <= 1
      ) {
        return
      }
      if (this.displayMode === 'pip') {
        this.displayMode = 'tile'
      } else if (this.displayMode === 'tile') {
        this.displayMode = 'pip'
      } else if (this.displayMode === 'share') {
        // do nothing or alert, tbd
      } else {
      }
    },

    hideRemote (e) {
      if (
        e.currentTarget.classList.contains('disabled') ||
        this.streamList.length <= 1
      ) {
        return
      }
      const id = this.streamList[this.streamList.length - 1].getId()
      const list = Array.from(
        document.querySelectorAll(`.ag-item:not(#ag-item-${id})`)
      )
      list.map(item => {
        if (item.style.display !== 'none') {
          item.style.display = 'none'
        } else {
          item.style.display = 'block'
        }
      })
    },

    handleExit (e) {
      if (e.currentTarget.classList.contains('disabled')) {
        return
      }
      try {
        this.client && this.client.unpublish(this.localStream)
        this.localStream && this.localStream.close()
        this.client &&
          this.client.leave(
            () => {
            },
            () => {
            }
          )
      } finally {
        this.readyState = false
        this.client = null
        this.localStream = null
        // redirect to index
        Cookies.set('channel', undefined)
        this.$store.dispatch('Chat/videoCallAction', false)
      }
    }
  },

  created () {
    const $ = this
    // init AgoraRTC local client
    // eslint-disable-next-line no-undef
    $.client = AgoraRTC.createClient({ mode: $.transcode })
    $.client.init($.appId, () => {
      $.subscribeStreamEvents()
      $.client.join($.appId, $.channel, $.uid, uid => {
        // create local stream
        // It is not recommended to setState in function addStream
        $.localStream = this.streamInit(uid, $.attendeeMode, $.videoProfile)
        $.localStream.init(
          () => {
            if ($.attendeeMode !== 'audience') {
              $.addStream($.localStream, true)
              // eslint-disable-next-line handle-callback-err
              $.client.publish($.localStream, err => {
              })
            }
            $.readyState = true
          },
          // eslint-disable-next-line handle-callback-err
          err => {
            $.readyState = true
          }
        )
      })
    })
  },

  mounted () {
    this.$nextTick(() => {
      // add listener to control btn group
      const canvas = document.querySelector('#ag-canvas')
      const btnGroup = document.querySelector('.ag-btn-group')
      canvas.addEventListener('mousemove', () => {
        if (global._toolbarToggle) {
          clearTimeout(global._toolbarToggle)
        }
        btnGroup.classList.add('active')
        global._toolbarToggle = setTimeout(function () {
          btnGroup.classList.remove('active')
        }, 2000)
      })
    })
  },

  beforeUpdate () {
    const $ = this
    // rerendering
    const canvas = document.querySelector('#ag-canvas')
    // pip mode (can only use when less than 4 people in channel)
    if ($.displayMode === 'pip') {
      const no = $.streamList.length
      if (no > 4) {
        $.displayMode = 'tile'
        return
      }
      $.streamList.map((item, index) => {
        const id = item.getId()
        let dom = document.querySelector('#ag-item-' + id)
        if (!dom) {
          dom = document.createElement('section')
          dom.setAttribute('id', 'ag-item-' + id)
          dom.setAttribute('class', 'ag-item')
          canvas.appendChild(dom)
          item.play('ag-item-' + id)
        }
        if (index === no - 1) {
          dom.setAttribute('style', 'grid-area: span 12/span 24/13/25')
        } else {
          dom.setAttribute(
            'style',
            `grid-area: span 3/span 4/${4 + 3 * index}/25;
          z-index:1;width:calc(100% - 20px);height:calc(100% - 20px)`
          )
        }
        item.player.resize && item.player.resize()
      })
    } else if ($.displayMode === 'tile') {
      // tile mode
      const no = $.streamList.length
      $.streamList.map((item, index) => {
        const id = item.getId()
        let dom = document.querySelector('#ag-item-' + id)
        if (!dom) {
          dom = document.createElement('section')
          dom.setAttribute('id', 'ag-item-' + id)
          dom.setAttribute('class', 'ag-item')
          canvas.appendChild(dom)
          item.play('ag-item-' + id)
        }
        dom.setAttribute('style', `grid-area: ${tileCanvas[no][index]}`)
        item.player.resize && item.player.resize()
      })
    } else if ($.displayMode === 'share') {
      // screen share mode (tbd)
    }
  },

  beforeDestroy () {
    this.client && this.client.unpublish(this.localStream)
    this.localStream && this.localStream.close()
    this.client &&
      this.client.leave(
        () => {
        },
        () => {
        }
      )
  }
}
</script>
