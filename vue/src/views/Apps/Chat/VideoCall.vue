<template>
  <b-card class="wrapper meeting iq-card mb-0">
    <template v-slot:header>
      Room:&nbsp;<span id="room-name">{{channel}}</span>
    </template>
    <div class="ag-main">
      <div class="ag-container">
        <AgoraVideoCall
          :videoProfile="videoProfile"
          :channel="channel"
          :transcode="transcode"
          :attendeeMode="attendeeMode"
          :baseMode="baseMode"
          :appId="appId"
          :uid="uid"></AgoraVideoCall>
      </div>
    </div>
  </b-card>
</template>
<script>
import * as Cookies from 'js-cookie'
import { AGORA_APP_ID } from '../../../config/agora.config'
import AgoraVideoCall from '../../../components/Agora/AgoraVideoCall'
export default {
  name: 'VideoCall',
  components: {
    AgoraVideoCall
  },
  data () {
    return {
      videoProfile: Cookies.get('videoProfile').split(',')[0] || '480p_4',
      channel: Cookies.get('channel') || 'test',
      transcode: Cookies.get('transcode') || 'interop',
      attendeeMode: Cookies.get('attendeeMode') || 'video',
      baseMode: Cookies.get('baseMode') || 'avc',
      uid: undefined
    }
  },
  mounted () {
  },
  created () {
    this.appId = AGORA_APP_ID
    if (!this.appId) {
      return alert('Get App ID first!')
    }
  }
}
</script>
