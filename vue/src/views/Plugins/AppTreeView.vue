<template>
  <b-container fluid>
    <b-row>
      <b-col cols="6">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Basic Treeview</h4>
          </template>
          <template v-slot:headerAction>
            <a class="text-primary float-right" v-b-toggle.collapse-1  role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <b-collapse id="collapse-1" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#basic-treeview" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                  <pre class="text-white" id="basic-treeview"><code>
&#x3C;template&#x3E;
    &#x3C;TreeView
      :item=&#x22;items&#x22;
    &#x3E;
    &#x3C;/TreeView&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
import TreeView from '@components/core/treeview/TreeView'
export default {
components: { TreeView },
data(){
  return {
      items: {
        name: 'Vue',
        children: [
          {
            name: 'public',
            children: [
              { name: 'index.html' }
            ]
          },
          {
            name: 'src',
            children: [
              { name: 'assets' },
              { name: 'views' }
            ]
          },
          { name: '.vue.config.js' }
        ]
      }
    }
   }
  }
&#x3C;/script&#x3E;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <ul class="p-0">
              <TreeView
                :isOpened="true"
                :item="treeData"
              >
              </TreeView>
            </ul>
          </template>
        </iq-card>
      </b-col>
      <b-col cols="6">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Customize Treeview</h4>
          </template>
          <template v-slot:headerAction>
            <a class="text-primary float-right" v-b-toggle.collapse-2  role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <b-collapse id="collapse-2" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#customize-treeview" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                  <pre class="text-white" id="customize-treeview"><code>
&#x3C;template&#x3E;
    &#x3C;TreeView
      :item=&#x22;items&#x22;
    &#x3E;
      &#x3C;template v-slot:groupOpened&#x3E;
        &#x3C;img :src=&#x22;require(&#x27;./assets/images/treeview/t-open-folder.png&#x27;)&#x22; alt=&#x22;&#x22; class=&#x22;img-fluid height-25 mb-1&#x22;&#x3E;
      &#x3C;/template&#x3E;
      &#x3C;template v-slot:groupClosed&#x3E;
        &#x3C;img :src=&#x22;require(&#x27;./assets/images/treeview/t-close-folder.png&#x27;)&#x22; alt=&#x22;&#x22; class=&#x22;img-fluid height-25 mb-1&#x22;&#x3E;
      &#x3C;/template&#x3E;
      &#x3C;template v-slot:item&#x3E;
        &#x3C;img :src=&#x22;require(&#x27;./assets/images/treeview/t-files.png&#x27;)&#x22; alt=&#x22;&#x22; class=&#x22;img-fluid height-25 mb-1&#x22;&#x3E;
      &#x3C;/template&#x3E;
    &#x3C;/TreeView&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
import TreeView from '@components/core/treeview/TreeView'
export default {
components: { TreeView },
data(){
  return {
      items: {
        name: 'Vue',
        children: [
          {
            name: 'public',
            children: [
              { name: 'index.html' }
            ]
          },
          {
            name: 'src',
            children: [
              { name: 'assets' },
              { name: 'views' }
            ]
          },
          { name: '.vue.config.js' }
        ]
      }
    }
   }
  }
&#x3C;/script&#x3E;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <ul class="p-0">
              <TreeView
                :item="treeData"
                :isOpened="true"
              >
                <template v-slot:groupOpened>
                  <img :src="require('../../assets/images/treeview/t-open-folder.png')" alt="" class="img-fluid height-25 mb-1">
                </template>
                <template v-slot:groupClosed>
                  <img :src="require('../../assets/images/treeview/t-close-folder.png')" alt="" class="img-fluid height-25 mb-1">
                </template>
                <template v-slot:item>
                  <img :src="require('../../assets/images/treeview/t-files.png')" alt="" class="img-fluid height-25 mb-1">
                </template>
              </TreeView>
            </ul>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import TreeView from '../../components/core/treeview/TreeView'
import { core } from '../../config/pluginInit'
export default {
  name: 'AppTreeView',
  components: { TreeView },
  mounted () {
    core.index()
  },
  data () {
    return {
      treeData: {
        name: 'Vue',
        children: [
          {
            name: 'documantion',
            children: [
              { name: 'index.html' }
            ]
          },
          {
            name: 'public',
            children: [
              { name: 'index.html' }
            ]
          },
          {
            name: 'src',
            children: [
              {
                name: 'assets',
                children: [{
                  name: 'style.css'
                }]
              },
              {
                name: 'components',
                children: [{
                  name: 'Loader.vue'
                }]
              },
              {
                name: 'config',
                children: [{
                  name: 'config.js'
                }]
              },
              {
                name: 'FakeApi',
                children: [{
                  name: 'api.json'
                }]
              },
              {
                name: 'layouts',
                children: [{
                  name: 'Layout.vue'
                }]
              },
              {
                name: 'locales',
                children: [{
                  name: 'en.json'
                }]
              },
              {
                name: 'Model',
                children: [
                  { name: 'User.js' },
                  { name: 'Event.js' }
                ]
              },
              {
                name: 'plugins',
                children: [
                  {
                    name: 'vue-flatpicker.js'
                  },
                  {
                    name: 'index.js'
                  }
                ]
              },
              { name: 'router' },
              { name: 'store' },
              { name: 'views' }
            ]
          },
          { name: '.env' },
          { name: 'env.example' },
          { name: 'bable.config.js' },
          { name: 'firebase.json' },
          { name: 'package.json' },
          { name: 'README.md' },
          { name: 'vue.config.js' }
        ]
      }
    }
  }
}
</script>
