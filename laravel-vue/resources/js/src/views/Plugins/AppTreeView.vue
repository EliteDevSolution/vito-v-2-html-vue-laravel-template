<template>
  <b-container fluid>
    <b-row>
      <b-col cols="6">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Basic Treeview</h4>
          </template>
          <template v-slot:headerAction>
            <a class="text-primary float-right" v-b-toggle.collapse-1 role="button">
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
              <TreeView :isOpened="true" :item="treeData"></TreeView>
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
            <a class="text-primary float-right" v-b-toggle.collapse-2 role="button">
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
              <TreeView :item="treeData" :isOpened="true">
                <template v-slot:groupOpened>
                  <img
                    :src="require('../../assets/images/treeview/t-open-folder.png')"
                    alt
                    class="img-fluid height-25 mb-1"
                  />
                </template>
                <template v-slot:groupClosed>
                  <img
                    :src="require('../../assets/images/treeview/t-close-folder.png')"
                    alt
                    class="img-fluid height-25 mb-1"
                  />
                </template>
                <template v-slot:item>
                  <img
                    :src="require('../../assets/images/treeview/t-files.png')"
                    alt
                    class="img-fluid height-25 mb-1"
                  />
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
import TreeView from "../../components/core/treeview/TreeView";
import { core } from "../../config/pluginInit";
export default {
  name: "AppTreeView",
  components: { TreeView },
  mounted() {
    core.index();
  },
  data() {
    return {
      treeData: {
        name: "Laravel+Vue",
        children: [
          {
            name: "app",
            children: [
              {
                name: "Console",
                children: [{ name: ".php" }]
              },
              {
                name: "Exception",
                children: [{ name: ".php" }]
              },
              {
                name: "Http",
                children: [
                  {
                    name: "Controllers",
                    children: [{ name: ".php" }]
                  },
                  {
                    name: "Middleware",
                    children: [{ name: ".php" }]
                  },
                  { name: ".php" }
                ]
              },
              {
                name: "Providers",
                children: [{ name: ".php" }]
              },
              { name: "User.php" }
            ]
          },
          {
            name: "bootstrap",
            children: [
              {
                name: "cache",
                children: [{ name: ".gitignore" }]
              }
            ]
          },
          {
            name: "config",
            children: [{ name: ".php" }]
          },
          {
            name: "database",
            children: [
              {
                name: "factories",
                children: [{ name: ".php" }]
              },
              {
                name: "migrations",
                children: [{ name: ".php" }]
              },
              {
                name: "seeds",
                children: [{ name: ".php" }]
              },
              { name: ".gitignore" }
            ]
          },
          {
            name: "public",
            children: [
              {
                name: "css",
                children: [{ name: "app.css" }]
              },
              {
                name: "js",
                children: [{ name: "app.css" }]
              },
              {
                name: "image",
                children: [{ name: "logo.png" }]
              },
              {
                name: "fonts",
                children: [{ name: "font.ttf" }]
              },
              { name: ".htaccess" },
              { name: "faviocn.icon" },
              { name: "index.php" }
            ]
          },
          {
            name: "resources",
            children: [
              {
                name: "lang",
                children: [{ name: ".json" }]
              },
              {
                name: "js",
                children: [{ name: ".js" }]
              },
              {
                name: "scss",
                children: [{ name: ".scss" }]
              },
              {
                name: "views",
                children: [{ name: ".php" }]
              }
            ]
          },
          {
            name: "routes",
            children: [
              { name: "api.php" },
              { name: "channels.php" },
              { name: "console.php" },
              { name: "web.php" }
            ]
          },
          {
            name: "storage",
            children: [
              {
                name: "app",
                children: [{ name: ".php" }]
              },
              {
                name: "framework",
                children: [{ name: ".php" }]
              },
              {
                name: "logs",
                children: [{ name: ".php" }]
              }
            ]
          },
          {
            name: "vendor",
            children: [{ name: ".php" }]
          },
          { name: ".env" },
          { name: "env.example" },
          { name: "composer.json" },
          { name: "package.json" },
          { name: "README.md" },
          { name: "webpack.mix.js" }
        ]
      }
    };
  }
};
</script>
