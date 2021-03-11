<template>
  <b-container fluid>
    <b-row>
      <b-col cols="6">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Basic Dragdrop Example</h4>
          </template>
          <template v-slot:headerAction>
            <a class="text-primary float-right" v-b-toggle.collapse-1 role="button">
              <i class="ri-code-s-slash-line"/>
            </a>
          </template>
          <template v-slot:body>
            <b-collapse id="collapse-1" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#basic-Min-datepicker" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                  <pre class="text-white" id="basic-dragdrop"><code>
&#x3C;template&#x3E;
  &#x3C;div class=&#x22;row&#x22;&#x3E;
    &#x3C;div class=&#x22;col-12&#x22;&#x3E;
      &#x3C;div class=&#x22;form-group d-flex justify-content-between align-items-center&#x22;&#x3E;
        &#x3C;div class=&#x22;form-check&#x22;&#x3E;
          &#x3C;input
            id=&#x22;disabled&#x22;
            type=&#x22;checkbox&#x22;
            v-model=&#x22;enabled&#x22;
            class=&#x22;form-check-input&#x22;
          /&#x3E;
          &#x3C;label class=&#x22;form-check-label&#x22; for=&#x22;disabled&#x22;&#x3E;Drag and Drop enabled&#x3C;/label&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div
          class=&#x22;buttons&#x22;
          aria-label=&#x22;Basic example&#x22;
        &#x3E;
          &#x3C;button class=&#x22;btn btn-primary btn-sm&#x22; @click=&#x22;add&#x22;&#x3E;Add&#x3C;/button&#x3E;&#x26;nbsp;
          &#x3C;button class=&#x22;btn btn-primary btn-sm&#x22; @click=&#x22;replace&#x22;&#x3E;Replace&#x3C;/button&#x3E;
        &#x3C;/div&#x3E;
      &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;row&#x22;&#x3E;
    &#x3C;div class=&#x22;col-12&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mb-2&#x22;&#x3E;Draggable&#x3C;/h5&#x3E;

      &#x3C;draggable
        :list=&#x22;list&#x22;
        :disabled=&#x22;!enabled&#x22;
        class=&#x22;list-group&#x22;
        ghost-class=&#x22;ghost&#x22;
        :move=&#x22;checkMove&#x22;
        @start=&#x22;dragging1 = true&#x22;
        @end=&#x22;dragging1 = false&#x22;
      &#x3E;
        &#x3C;div
          class=&#x22;list-group-item&#x22;
          v-for=&#x22;element in list&#x22;
          :key=&#x22;element.name&#x22;
        &#x3E;
        &#x3C;/div&#x3E;
      &#x3C;/draggable&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
import draggable from &#x27;vuedraggable&#x27;
let id = 1
export default {
  name: &#x27;DragDropDemo&#x27;,
  display:&#x27;DragDropDemo&#x27;,
  order: 0,
  components: {
  draggable
  },
  data(){
    return {
      enabled: true,
      list: [
        { name: &#x22;John&#x22;, id: 0 },
        { name: &#x22;Joao&#x22;, id: 1 },
        { name: &#x22;Jean&#x22;, id: 2 }
      ],
      dragging: false
    };
  },
  computed: {
    draggingInfo() {
      return this.dragging ? &#x22;under drag&#x22; : &#x22;&#x22;;
    }
  },
  methods: {
    add () {
      this.list.push({ name: &#x22;Juan &#x22; + id, id: id++ });
    },
    replace () {
      this.list = [{ name: &#x22;Edgard&#x22;, id: id++ }];
    },
    checkMove (e) {
      window.console.log(&#x22;Future index: &#x22; + e.draggedContext.futureIndex);
    }
  }
}
&#x3C;/script&#x3E;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <template>
              <div class="row">
                <div class="col-12">
                  <div class="form-group d-flex justify-content-between align-items-center">
                    <div class="form-check">
                      <input
                        id="disabled"
                        type="checkbox"
                        v-model="enabled"
                        class="form-check-input"
                      />
                      <label class="form-check-label" for="disabled">Drag and Drop enabled</label>
                    </div>
                    <div
                      class="buttons"
                      aria-label="Basic example"
                    >
                      <button class="btn btn-primary btn-sm" @click="add">Add</button>&nbsp;
                      <button class="btn btn-primary btn-sm" @click="replace">Replace</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <h5 class="mb-2">Draggable {{ draggingInfo }}</h5>

                  <draggable
                    :list="list"
                    :disabled="!enabled"
                    class="list-group"
                    ghost-class="ghost"
                    :move="checkMove"
                    @start="dragging1 = true"
                    @end="dragging1 = false"
                  >
                    <div
                      class="list-group-item"
                      v-for="element in list"
                      :key="element.name"
                    >
                      {{ element.name }}
                    </div>
                  </draggable>
                </div>
              </div>
            </template>
          </template>
        </iq-card>
      </b-col>
      <b-col cols="6">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Two Lists Dragdrop Example</h4>
          </template>
          <template v-slot:headerAction>
            <a class="text-primary float-right" v-b-toggle.collapse-2 role="button">
              <i class="ri-code-s-slash-line"/>
            </a>
          </template>
          <template v-slot:body>
            <b-collapse id="collapse-2" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#basic-Min-datepicker" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                  <pre class="text-white" id="two-lists-dragdrop"><code>
&#x3C;template&#x3E;
  &#x3C;div class=&#x22;row&#x22;&#x3E;
    &#x3C;div class=&#x22;col-6&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mb-2&#x22;&#x3E;Draggable 1&#x3C;/h5&#x3E;
      &#x3C;draggable class=&#x22;list-group&#x22; :list=&#x22;list1&#x22; group=&#x22;people&#x22; @change=&#x22;log&#x22;&#x3E;
        &#x3C;div
          class=&#x22;list-group-item&#x22;
          v-for=&#x22;(element, index) in list1&#x22;
          :key=&#x22;element.name&#x22;
        &#x3E;
        &#x3C;/div&#x3E;
      &#x3C;/draggable&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;col-6&#x22;&#x3E;
      &#x3C;h5 class=&#x22;mb-2&#x22;&#x3E;Draggable 2&#x3C;/h5&#x3E;
      &#x3C;draggable class=&#x22;list-group&#x22; :list=&#x22;list2&#x22; group=&#x22;people&#x22; @change=&#x22;log&#x22;&#x3E;
        &#x3C;div
          class=&#x22;list-group-item&#x22;
          v-for=&#x22;(element, index) in list2&#x22;
          :key=&#x22;element.name&#x22;
        &#x3E;
        &#x3C;/div&#x3E;
      &#x3C;/draggable&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
import draggable from &#x27;vuedraggable&#x27;
let id = 1
export default {
  name: &#x27;DragDropDemo&#x27;,
  display:&#x27;DragDropDemo&#x27;,
  order: 0,
  components: {
  draggable
  },
  data(){
    return {
      enabled: true,
      list1: [
        { name: &#x22;John&#x22;, id: 1 },
        { name: &#x22;Joao&#x22;, id: 2 },
        { name: &#x22;Jean&#x22;, id: 3 },
        { name: &#x22;Gerard&#x22;, id: 4 }
      ],
      list2: [
        { name: &#x22;Juan&#x22;, id: 5 },
        { name: &#x22;Edgard&#x22;, id: 6 },
        { name: &#x22;Johnson&#x22;, id: 7 }
      ],
      dragging: false
    };
  },
  computed: {
    draggingInfo() {
      return this.dragging ? &#x22;under drag&#x22; : &#x22;&#x22;;
    }
  },
  methods: {
    add () {
      this.list.push({ name: &#x22;Juan &#x22; + id, id: id++ });
    },
    replace () {
      this.list = [{ name: &#x22;Edgard&#x22;, id: id++ }];
    },
    checkMove (e) {
      window.console.log(&#x22;Future index: &#x22; + e.draggedContext.futureIndex);
    }
  }
}
&#x3C;/script&#x3E;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <template>
              <div class="row">
                <div class="col-6">
                  <h5 class="mb-2">Draggable 1</h5>
                  <draggable class="list-group" :list="list1" group="people" @change="log">
                    <div
                      class="list-group-item"
                      v-for="(element, index) in list1"
                      :key="element.name"
                    >
                      {{ element.name }} {{ index }}
                    </div>
                  </draggable>
                </div>

                <div class="col-6">
                  <h5 class="mb-2">Draggable 2</h5>
                  <draggable class="list-group" :list="list2" group="people" @change="log">
                    <div
                      class="list-group-item"
                      v-for="(element, index) in list2"
                      :key="element.name"
                    >
                      {{ element.name }} {{ index }}
                    </div>
                  </draggable>
                </div>
              </div>
            </template>
          </template>
        </iq-card>
      </b-col>
      <b-col cols="6">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Transitions Dragdrop Example</h4>
          </template>
          <template v-slot:headerAction>
            <a class="text-primary float-right" v-b-toggle.collapse-5 role="button">
              <i class="ri-code-s-slash-line"/>
            </a>
          </template>
          <template v-slot:body>
            <b-collapse id="collapse-5" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#basic-Min-datepicker" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                  <pre class="text-white" id="transitions-dragdrop"><code>
&#x3C;template&#x3E;
  &#x3C;div class=&#x22;row&#x22;&#x3E;
    &#x3C;div class=&#x22;col-12&#x22;&#x3E;
      &#x3C;button class=&#x22;btn btn-primary&#x22; @click=&#x22;sort&#x22;&#x3E;
        To original order
      &#x3C;/button&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;row&#x22;&#x3E;
    &#x3C;div class=&#x22;col-12&#x22;&#x3E;
      &#x3C;h5&#x3E;Transition&#x3C;/h5&#x3E;
      &#x3C;draggable
          class=&#x22;list-group&#x22;
          tag=&#x22;ul&#x22;
          v-model=&#x22;transitionList&#x22;
          v-bind=&#x22;dragOptions&#x22;
          @start=&#x22;drag = true&#x22;
          @end=&#x22;drag = false&#x22;&#x3E;
        &#x3C;transition-group type=&#x22;transition&#x22; :name=&#x22;!drag ? &#x27;flip-list&#x27; : null&#x22;&#x3E;
          &#x3C;li class=&#x22;list-group-item&#x22; v-for=&#x22;element in transitionList&#x22; :key=&#x22;element.order&#x22;&#x3E;
            &#x3C;i :class=&#x22; element.fixed ? &#x27;fa fa-anchor&#x27; : &#x27;glyphicon glyphicon-pushpin&#x27; &#x22; @click=&#x22;element.fixed = !element.fixed&#x22; aria-hidden=&#x22;true&#x22; &#x3E;&#x3C;/i&#x3E;
          &#x3C;/li&#x3E;
        &#x3C;/transition-group&#x3E;
      &#x3C;/draggable&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
import draggable from &#x27;vuedraggable&#x27;
const message = [
  &#x22;vue.draggable&#x22;,
  &#x22;draggable&#x22;,
  &#x22;component&#x22;,
  &#x22;for&#x22;,
  &#x22;vue.js 2.0&#x22;,
  &#x22;based&#x22;,
  &#x22;on&#x22;,
  &#x22;Sortablejs&#x22;
];
export default {
  name: &#x27;DragDropDemo&#x27;,
  display:&#x27;DragDropDemo&#x27;,
  order: 0,
  components: {
    draggable
  },
  data(){
    return {
      transitionList: message.map((name, index) =&#x3E; {
        return { name, order: index + 1 };
      }),
      drag: false
    },
  }
  computed: {
    draggingInfo() {
      return this.dragging ? &#x22;under drag&#x22; : &#x22;&#x22;;
    }
  },
  methods: {
    sort () {
      this.transitionList = this.transitionList.sort((a, b) =&#x3E; a.order - b.order)
    }
  }
}
&#x3C;/script&#x3E;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <template>
              <div class="row">
                <div class="col-12">
                  <div class="d-flex justify-content-between">
                    <h5 class="mb-2">Transition</h5>
                    <button class="btn btn-primary btn-sm mb-2" @click="sort">
                      To original order
                    </button>
                  </div>
                  <draggable
                    class="list-group"
                    tag="ul"
                    v-model="transitionList"
                    v-bind="dragOptions"
                    @start="drag = true"
                    @end="drag = false"
                  >
                    <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                      <li
                        class="list-group-item"
                        v-for="element in transitionList"
                        :key="element.order"
                      >
                        <i
                          :class="
                element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
              "
                          @click="element.fixed = !element.fixed"
                          aria-hidden="true"
                        ></i>
                        {{ element.name }}
                      </li>
                    </transition-group>
                  </draggable>
                </div>
              </div>
            </template>
          </template>
        </iq-card>
      </b-col>
      <b-col cols="6">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Table Column Dragdrop Example</h4>
          </template>
          <template v-slot:headerAction>
            <a class="text-primary float-right" v-b-toggle.collapse-6 role="button">
              <i class="ri-code-s-slash-line"/>
            </a>
          </template>
          <template v-slot:body>
            <b-collapse id="collapse-6" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#basic-Min-datepicker" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                  <pre class="text-white" id="table-column-dragdrop"><code>
&#x3C;template&#x3E;
  &#x3C;div class=&#x22;row&#x22;&#x3E;
    &#x3C;div class=&#x22;col-8&#x22;&#x3E;
    &#x3C;h5&#x3E;Draggable table&#x3C;/h5&#x3E;
    &#x3C;table class=&#x22;table table-striped&#x22;&#x3E;
      &#x3C;thead class=&#x22;thead-dark&#x22;&#x3E;
        &#x3C;draggable v-model=&#x22;headers&#x22; tag=&#x22;tr&#x22;&#x3E;
          &#x3C;th v-for=&#x22;header in headers&#x22; :key=&#x22;header&#x22; scope=&#x22;col&#x22;&#x3E;
          &#x3C;/th&#x3E;
        &#x3C;/draggable&#x3E;
      &#x3C;/thead&#x3E;
    &#x3C;tbody&#x3E;
      &#x3C;tr v-for=&#x22;item in list5&#x22; :key=&#x22;item.name&#x22;&#x3E;
        &#x3C;td v-for=&#x22;header in headers&#x22; :key=&#x22;header&#x22;&#x3E;
        &#x3C;/td&#x3E;
      &#x3C;/tr&#x3E;
    &#x3C;/tbody&#x3E;
    &#x3C;/table&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
import draggable from &#x27;vuedraggable&#x27;

export default {
  name: &#x27;DragDropDemo&#x27;,
  display:&#x27;DragDropDemo&#x27;,
  order: 0,
  components: {
    draggable
  },
  data(){
    return {
      headers: [&#x22;id&#x22;, &#x22;name&#x22;, &#x22;sport&#x22;],
      list: [
        { id: 1, name: &#x22;Abby&#x22;, sport: &#x22;basket&#x22; },
        { id: 2, name: &#x22;Brooke&#x22;, sport: &#x22;foot&#x22; },
        { id: 3, name: &#x22;Courtenay&#x22;, sport: &#x22;volley&#x22; },
        { id: 4, name: &#x22;David&#x22;, sport: &#x22;rugby&#x22; }
      ],
      dragging: false
    }
  }
}
&#x3C;/script&#x3E;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <template>
              <div class="row">
                <div class="col-12">
                  <h5 class="mb-2">Draggable table</h5>

                  <table class="table table-striped">
                    <thead class="thead-dark">
                    <draggable v-model="headers" tag="tr">
                      <th v-for="header in headers" :key="header" scope="col">
                        <i class="fas fa-arrows-alt"></i>{{ header }}
                      </th>
                    </draggable>
                    </thead>
                    <tbody>
                    <tr v-for="item in list5" :key="item.name">
                      <td v-for="header in headers" :key="header">{{ item[header] }}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </template>
          </template>
        </iq-card>
      </b-col>
      <b-col cols="6">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Custom Clone Dragdrop Example</h4>
          </template>
          <template v-slot:headerAction>
            <a class="text-primary float-right" v-b-toggle.collapse-3 role="button">
              <i class="ri-code-s-slash-line"/>
            </a>
          </template>
          <template v-slot:body>
            <b-collapse id="collapse-3" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#basic-Min-datepicker" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                  <pre class="text-white" id="custom-clone-dragdrop"><code>
&#x3C;template&#x3E;
  &#x3C;div class=&#x22;row&#x22;&#x3E;
      &#x3C;div class=&#x22;col-6&#x22;&#x3E;
        &#x3C;h5 class=&#x22;mb-2&#x22;&#x3E;Draggable 1&#x3C;/h5&#x3E;
        &#x3C;draggable
          class=&#x22;dragArea list-group&#x22;
          :list=&#x22;list3&#x22;
          :group=&#x22;{ name: &#x27;people&#x27;, pull: &#x27;clone&#x27;, put: false }&#x22;
          :clone=&#x22;cloneDog&#x22;
          @change=&#x22;log&#x22;
        &#x3E;
          &#x3C;div class=&#x22;list-group-item&#x22; v-for=&#x22;element in list3&#x22; :key=&#x22;element.id&#x22;&#x3E;
          &#x3C;/div&#x3E;
        &#x3C;/draggable&#x3E;
      &#x3C;/div&#x3E;

      &#x3C;div class=&#x22;col-6&#x22;&#x3E;
        &#x3C;h5 class=&#x22;mb-2&#x22;&#x3E;Draggable 2&#x3C;/h5&#x3E;
        &#x3C;draggable
          class=&#x22;dragArea list-group&#x22;
          :list=&#x22;list4&#x22;
          group=&#x22;people&#x22;
          @change=&#x22;log&#x22;
        &#x3E;
          &#x3C;div class=&#x22;list-group-item&#x22; v-for=&#x22;element in list4&#x22; :key=&#x22;element.id&#x22;&#x3E;
          &#x3C;/div&#x3E;
        &#x3C;/draggable&#x3E;
      &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
import draggable from &#x27;vuedraggable&#x27;
let idGlobal = 8
export default {
  name: &#x27;DragDropDemo&#x27;,
  display:&#x27;DragDropDemo&#x27;,
  order: 0,
  components: {
    draggable
  },
  data(){
    return {
      enabled: true,
      list3: [
        { name: &#x27;dog 1&#x27;, id: 1 },
        { name: &#x27;dog 2&#x27;, id: 2 },
        { name: &#x27;dog 3&#x27;, id: 3 },
        { name: &#x27;dog 4&#x27;, id: 4 }
      ],
      list4: [
        { name: &#x27;cat 5&#x27;, id: 5 },
        { name: &#x27;cat 6&#x27;, id: 6 },
        { name: &#x27;cat 7&#x27;, id: 7 }
      ],
      dragging: false
    };
    },
    computed: {
      draggingInfo() {
        return this.dragging ? &#x22;under drag&#x22; : &#x22;&#x22;;
      }
    },
    methods: {
      cloneDog  ({ id }) {
      return {
        id: idGlobal++,
        name: `cat ${id}`
    }
  }
}
&#x3C;/script&#x3E;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <template>
              <div class="row">
                <div class="col-6">
                  <h5 class="mb-2">Draggable 1</h5>
                  <draggable
                    class="dragArea list-group"
                    :list="list3"
                    :group="{ name: 'people', pull: 'clone', put: false }"
                    :clone="cloneDog"
                    @change="log"
                  >
                    <div class="list-group-item" v-for="element in list3" :key="element.id">
                      {{ element.name }}
                    </div>
                  </draggable>
                </div>

                <div class="col-6">
                  <h5 class="mb-2">Draggable 2</h5>
                  <draggable
                    class="dragArea list-group"
                    :list="list4"
                    group="people"
                    @change="log"
                  >
                    <div class="list-group-item" v-for="element in list4" :key="element.id">
                      {{ element.name }}
                    </div>
                  </draggable>
                </div>
              </div>
            </template>
          </template>
        </iq-card>
      </b-col>
      <b-col cols="6">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Nested Dragdrop Example</h4>
          </template>
          <template v-slot:headerAction>
            <a class="text-primary float-right" v-b-toggle.collapse-4 role="button">
              <i class="ri-code-s-slash-line"/>
            </a>
          </template>
          <template v-slot:body>
            <b-collapse id="collapse-4" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#basic-Min-datepicker" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                  <pre class="text-white" id="handle-dragdrop"><code>
&#x3C;template&#x3E;
  &#x3C;nested-draggable :tasks=&#x22;nestedList&#x22; /&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
import NestedDraggable from &#x27;@component/core/dragdrop/nested-draggable&#x27;
export default{
  components: { NestedDraggable },
  data () {
    return {
      nestedList: [
        {
          name: &#x27;task 1&#x27;,
          tasks: [
            {
              name: &#x27;task 2&#x27;,
              tasks: []
            }
          ]
        },
        {
          name: &#x27;task 3&#x27;,
          tasks: [
            {
              name: &#x27;task 4&#x27;,
              tasks: []
            }
          ]
        },
        {
          name: &#x27;task 5&#x27;,
          tasks: []
        }
      ]
    }
  }
}
&#x3C;/script&#x3E;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <template>
              <div class="row">
                <div class="col-12">
                  <h5 class="mb-2">Nested Draggable</h5>
                  <nested-draggable :tasks="nestedList" />
                </div>
              </div>
            </template>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
import draggable from 'vuedraggable'
import NestedDraggable from '../../components/core/dragdrop/nested-draggable'

let id = 1
let idGlobal = 8
const message = [
  'vue.draggable',
  'draggable',
  'component',
  'based',
  'Sortablejs'
]

export default {
  name: 'DragDropDemo',
  mounted () {
    core.index()
  },
  components: {
    draggable, NestedDraggable
  },
  display: 'DragDropDemo',
  order: 0,
  data () {
    return {
      enabled: true,
      list: [
        { name: 'John', id: 0 },
        { name: 'Joao', id: 1 },
        { name: 'Jean', id: 2 }
      ],
      dragging1: false,
      list1: [
        { name: 'John', id: 1 },
        { name: 'Joao', id: 2 },
        { name: 'Jean', id: 3 },
        { name: 'Gerard', id: 4 }
      ],
      list2: [
        { name: 'Juan', id: 5 },
        { name: 'Edgard', id: 6 },
        { name: 'Johnson', id: 7 }
      ],
      list3: [
        { name: 'dog 1', id: 1 },
        { name: 'dog 2', id: 2 },
        { name: 'dog 3', id: 3 },
        { name: 'dog 4', id: 4 }
      ],
      list4: [
        { name: 'cat 5', id: 5 },
        { name: 'cat 6', id: 6 },
        { name: 'cat 7', id: 7 }
      ],
      transitionList: message.map((name, index) => {
        return { name, order: index + 1 }
      }),
      drag: false,
      headers: ['id', 'name', 'sport'],
      list5: [
        { id: 1, name: 'Abby', sport: 'basket' },
        { id: 2, name: 'Brooke', sport: 'foot' },
        { id: 3, name: 'Courtenay', sport: 'volley' },
        { id: 4, name: 'David', sport: 'rugby' }
      ],
      dragging: true,
      nestedList: [
        {
          name: 'task 1',
          tasks: [
            {
              name: 'task 2',
              tasks: []
            }
          ]
        },
        {
          name: 'task 3',
          tasks: [
            {
              name: 'task 4',
              tasks: []
            }
          ]
        },
        {
          name: 'task 5',
          tasks: []
        }
      ]
    }
  },
  computed: {
    draggingInfo () {
      return this.dragging ? 'under drag' : ''
    },
    dragOptions () {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  },
  methods: {
    log () {},
    checkMove () {},
    add () {
      this.list.push({ name: 'Juan ' + id, id: id++ })
    },
    replace () {
      this.list = [{ name: 'Edgard', id: id++ }]
    },
    cloneDog ({ id }) {
      return {
        id: idGlobal++,
        name: `cat ${id}`
      }
    },
    removeAt (idx) {
      this.list.splice(idx, 1)
    },
    sort () {
      this.transitionList = this.transitionList.sort((a, b) => a.order - b.order)
    }
  }
}
</script>
