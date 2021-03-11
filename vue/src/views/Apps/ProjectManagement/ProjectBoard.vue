<template>
  <b-container fluid>
    <b-row>
      <b-col md="12">
        <b-row>
          <b-col cols="12 text-right mb-4">
            <b-button variant="primary" v-b-modal.board>New Board</b-button>
            <b-modal id="board" centered title="New Board" hide-footer>
              <b-form @submit.prevent="saveBoard(board)">
                <b-form-group label="Title">
                  <b-input v-model="board.title" />
                </b-form-group>
                <div class="d-flex justify-content-end">
                  <b-button variant=" iq-bg-primary" class="iq-waves-effect" @click="$bvModal.hide('board')">Cancel</b-button>
                  <b-button variant="primary ml-2"  class="iq-waves-effect" type="submit">Submit</b-button>
                </div>
              </b-form>
            </b-modal>
          </b-col>
        </b-row>
        <div class="row">
          <div class="col-md-12 track">
            <iq-card bodyClass="pro-bg-card" class="bg-transparent shadow-none mr-3 w-25" :headerClass="item.color" v-for="(item, index) in boards" :key="index">
              <template v-slot:headerTitle>
                <h5 class="text-white">{{ item.title }}</h5>
              </template>
              <template v-slot:headerAction>
                <i class="ri-ball-pen-line mr-0 font-size-18" v-b-modal.board @click="editBoard(item)" />
              </template>
              <template v-slot:body>
                <draggable :list="item.list" group="scrumboard" @change="log">
                  <iq-card
                    v-for="(element, index) in item.list"
                    :key="element.name +'-'+ index"
                    bodyClass="pro-task-bg-card"
                    headerClass="pro-task-bg-card"
                  >
                    <template v-slot:headerTitle>
                      <h5 class="card-title text-muted">{{ element.name }}</h5>
                      <h6 class="text-muted">{{ element.date }}</h6>
                    </template>
                    <template v-slot:headerAction>
                      <a class="badge iq-bg-primary mr-2 p-2" v-if="element.status === 0" href="#">Low</a>
                      <a class="badge iq-bg-warning mr-2 p-2" v-if="element.status === 1" href="#">High</a>
                      <a class="badge iq-bg-danger mr-2 p-2" v-if="element.status === 2" href="#">Critical</a>
                    </template>
                    <template v-slot:body>
                      <p class="font-size-12">{{ element.description}}</p>
                      <div class="d-flex justify-content-between">
                        <div>
                          <i class="ri-ball-pen-line font-size-18" v-b-modal.task @click="editTask(element,item)" />
                          <i class="ri-attachment-line font-size-18 ml-2" />
                          <i class="ri-eye-line font-size-18 ml-2" /><span><small>54</small></span>
                          <i class="ri-chat-4-line font-size-18 ml-2" /><span><small>36</small></span>
                          <i class="ri-close-circle-line font-size-18 ml-2" />
                        </div>
                      </div>
                      <b-progress style="height: 4px" class="mt-2" :max="100" show-value>
                        <b-progress-bar :value="40" class="iq-border-radius-10" variant="success" label=" " />
                        <b-progress-bar :value="80" class="iq-border-radius-10" variant="warning" label=" " />
                        <b-progress-bar :value="50" class="iq-border-radius-10" variant="danger" label=" " />
                      </b-progress>
                    </template>
                  </iq-card>
                </draggable>
                <b-button variant=" iq-bg-primary" size="lg" block @click="addTask(item)">Add Item</b-button>
              </template>
            </iq-card>
            <b-modal id="task" centered title="New Task" hide-footer>
              <b-form @submit.prevent="saveTask(task)">
                <b-form-group label="Name">
                  <b-input v-model="task.name" />
                </b-form-group>
                <b-form-group label="Description">
                  <b-input v-model="task.description" />
                </b-form-group>
                <b-form-group label="Date">
                  <flat-pickr v-model="task.date" :config="dateConfig" class="form-control" />
                </b-form-group>
                <b-form-group label="Priority">
                  <b-form-radio-group
                    id="priority"
                    v-model="task.status"
                    :options="status"
                    name="priority"
                  />
                </b-form-group>
                <div class="d-flex justify-content-end">
                  <b-button variant=" iq-bg-primary" class="iq-waves-effect" @click="$bvModal.hide('task')">Cancel</b-button>
                  <b-button variant="primary ml-2"  class="iq-waves-effect" type="submit">Submit</b-button>
                </div>
              </b-form>
            </b-modal>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core, flatpickerSetting } from '../../../config/pluginInit'
import draggable from 'vuedraggable'
export default {
  name: 'ProjectBoard',
  mounted () {
    core.index()
  },
  components: {
    draggable
  },
  computed: {
  },
  data () {
    return {
      dateConfig: flatpickerSetting,
      status: [
        { text: 'Low', value: 0 },
        { text: 'High', value: 1 },
        { text: 'Critical', value: 2 }
      ],
      colors: [
        'bg-primary',
        'bg-success',
        'bg-warning',
        'bg-info',
        'bg-danger'
      ],
      board: this.defaultBoard(),
      task: this.defaultTask(),
      boards: [
        {
          id: 1,
          title: 'Todo',
          color: 'bg-primary',
          list: [
            { id: 1, name: 'John', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s', status: 0, date: '2020-01-1' },
            { id: 2, name: 'Joao', description: ' Lstandard dummy text ever since the 1500s dummy text of the printing and', status: 2, date: '2020-01-3' }
          ]
        },
        {
          id: 2,
          title: 'Planing',
          color: 'bg-success',
          list: [
            { id: 1, name: 'Juan', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', status: 1, date: '2020-01-5' }
          ]
        },
        {
          id: 3,
          title: 'Working',
          color: 'bg-info',
          list: [
            { id: 1, name: 'Juan', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', status: 0, date: '2020-01-6' },
            { id: 2, name: 'Edgard', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', status: 0, date: '2020-01-7' }
          ]
        },
        {
          id: 4,
          title: 'Testing',
          color: 'bg-warning',
          list: [
            { id: 1, name: 'Juan', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', status: 0, date: '2020-01-8' }

          ]
        },
        {
          id: 5,
          title: 'Complete',
          color: 'bg-danger',
          list: [
            { id: 5, name: 'Juan', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', status: 0, date: '02 jan 2020' }
          ]
        }
      ]
    }
  },
  methods: {
    defaultBoard () {
      return {
        id: 0,
        title: '',
        color: '',
        list: [
        ]
      }
    },
    defaultTask () {
      return {
        id: 0,
        name: '',
        description: '',
        status: 0
      }
    },
    log () {
    },
    saveBoard (item) {
      const board = this.boards.findIndex(b => b.id === item.id)
      if (board === -1) {
        item.id = this.boards.length
        item.color = this.colors[Math.floor(Math.random() * this.colors.length)]
        this.boards.push(item)
      }
      this.board = this.defaultBoard()
      this.$bvModal.hide('board')
    },
    saveTask (item) {
      const index = this.board.list.findIndex(task => task.id === item.id)
      if (index !== -1) {
        this.board.list[index] = item
      } else {
        this.board.list.push(item)
      }
      this.$bvModal.hide('task')
      this.task = this.defaultTask()
      this.board = this.defaultBoard()
    },
    addTask (board) {
      this.board = board
      this.task = this.defaultTask()
      this.$bvModal.show('task')
    },
    editBoard (item) {
      this.board = item
    },
    editTask (item, board) {
      this.board = board
      this.task = item
    }
  }
}
</script>
