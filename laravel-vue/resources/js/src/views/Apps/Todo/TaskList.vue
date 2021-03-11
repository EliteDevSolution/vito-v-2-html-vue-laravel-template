<template>
  <b-row>
    <b-col sm="12">
      <iq-card>
        <template v-slot:body>
          <div class="d-flex justify-content-between align-items-center">
            <div class="todo-date d-flex mr-3">
              <i :class="`ri-calendar-2-line text-${category.color} mr-2`"></i>
              <span>{{ project.project_name }}</span>
            </div>
            <div class="todo-notification d-flex align-items-center">
              <b-button variant=" iq-bg-primary iq-waves-effect" v-b-modal.add_task size="lg">Add Task</b-button>
              <TaskForm :new-id="taskList.length" :category="categoryList"/>
            </div>
          </div>
        </template>
      </iq-card>
      <iq-card>
        <b-form class="position-relative">
          <b-form-group class="mb-0" label-for="search">
            <b-form-input class="todo-search bg-white" placeholder="Search" v-model="search" />
          </b-form-group>
        </b-form>
      </iq-card>
    </b-col>
    <b-col md="12">
      <iq-card body-class="p-0" v-if="filteredList.length > 0">
        <template v-slot:body>
          <ul class="todo-task-lists m-0 p-0">
              <template v-for="(item,index) in filteredList">
                <li class="d-flex align-items-center p-3" v-if="(category.isHidden || item.category_id === category.id) && item.project_id === project.id" :key="index">
                  <div class="user-img img-fluid">
                    <img :src="checkUser(item.user_id,'image')" alt="story-img" class="rounded-circle avatar-40">
                  </div>
                  <div class="media-support-info ml-3">
                    <h6 class="d-inline-block">
                      <del v-if="item.task_status">
                        {{ item.task_title }} for {{ project.project_name }}
                      </del>
                      <template v-else>
                        {{ item.task_title }} for {{ project.project_name }}
                      </template>
                    </h6>
                    <span class="badge badge-danger ml-3 text-white" v-if="item.status === 'Expiring'">{{ item.status }}</span>
                    <span class="badge badge-primary ml-3 text-white" v-if="item.status === 'Complete'">{{ item.status }}</span>
                    <span class="badge badge-info ml-3 text-white" v-if="item.status === 'Urgent'">{{ item.status }}</span>
                    <p class="mb-0">by {{ checkUser(item.user_id,'name') }}</p>
                  </div>
                  <div class="iq-card-header-toolbar d-flex align-items-center">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" name="todo-check" class="custom-control-input" @change="updateStatue(item)" :id="'check' + index" :checked="item.task_status">
                      <label class="custom-control-label" :for="'check' + index"></label>
                    </div>
                  </div>
                </li>
              </template>
          </ul>
        </template>
      </iq-card>
      <template v-else>
        <div class="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="138"
            height="138"
            class="hits-empty-state-image"
          >
            <defs>
              <linearGradient id="c" x1="50%" x2="50%" y1="100%" y2="0%">
                <stop offset="0%" stop-color="#F5F5FA" />
                <stop offset="100%" stop-color="#FFF" />
              </linearGradient>
              <path
                id="b"
                d="M68.71 114.25a45.54 45.54 0 1 1 0-91.08 45.54 45.54 0 0 1 0 91.08z"
              />
              <filter
                id="a"
                width="140.6%"
                height="140.6%"
                x="-20.3%"
                y="-15.9%"
                filterUnits="objectBoundingBox"
              >
                <feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                  stdDeviation="5.5"
                />
                <feColorMatrix
                  in="shadowBlurOuter1"
                  result="shadowMatrixOuter1"
                  values="0 0 0 0 0.145098039 0 0 0 0 0.17254902 0 0 0 0 0.380392157 0 0 0 0.15 0"
                />
                <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter2" />
                <feGaussianBlur
                  in="shadowOffsetOuter2"
                  result="shadowBlurOuter2"
                  stdDeviation="1.5"
                />
                <feColorMatrix
                  in="shadowBlurOuter2"
                  result="shadowMatrixOuter2"
                  values="0 0 0 0 0.364705882 0 0 0 0 0.392156863 0 0 0 0 0.580392157 0 0 0 0.2 0"
                />
                <feMerge>
                  <feMergeNode in="shadowMatrixOuter1" />
                  <feMergeNode in="shadowMatrixOuter2" />
                </feMerge>
              </filter>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <circle
                cx="68.85"
                cy="68.85"
                r="68.85"
                fill="#5468FF"
                opacity=".07"
              />
              <circle
                cx="68.85"
                cy="68.85"
                r="52.95"
                fill="#5468FF"
                opacity=".08"
              />
              <use fill="#000" filter="url(#a)" xlink:href="#b" />
              <use fill="url(#c)" xlink:href="#b" />
              <path
                d="M76.01 75.44c5-5 5.03-13.06.07-18.01a12.73 12.73 0 0 0-18 .07c-5 4.99-5.03 13.05-.07 18a12.73 12.73 0 0 0 18-.06zm2.5 2.5a16.28 16.28 0 0 1-23.02.09A16.29 16.29 0 0 1 55.57 55a16.28 16.28 0 0 1 23.03-.1 16.28 16.28 0 0 1-.08 23.04zm1.08-1.08l-2.15 2.16 8.6 8.6 2.16-2.15-8.6-8.6z"
                fill="#5369FF"
              />
            </g>
          </svg>
          <p class="mt-2">Sorry, we can't find any matches to your query!</p>
          <p>Please try another query.</p>
        </div>
      </template>
    </b-col>
  </b-row>
</template>
<script>
import { Users } from '../../../FackApi/api/chat'
import TaskForm from './TaskForm'
import { mapGetters } from 'vuex'
export default {
  name: 'TaskList',
  components: { TaskForm },
  props: [
    'taskList',
    'project',
    'category'
  ],
  mounted () {
  },
  computed: {
    ...mapGetters({
      categoryList: 'Todo/categoryState'
    }),
    filteredList () {
      return this.taskList.filter(item => {
        return item.task_title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    checkUser (item, type) {
      const user = Users.find(user => user.id === item)
      let final
      if (user !== undefined) {
        switch (type) {
          case 'name':
            final = user.name
            break
          case 'image':
            final = user.image
            break
          case 'role':
            final = user.role
            break
        }
        return final
      }
      return false
    },
    updateStatue (item) {
      this.$store.dispatch('Todo/updateStatusAction', item)
    }
  }
}
</script>
