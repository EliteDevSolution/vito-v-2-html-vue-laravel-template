<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <iq-card body-class="pt-0" id="iq-file-manager">
          <template v-slot:headerAction>
            <a class="text-primary float-right" v-b-toggle.collapse-1 role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <b-collapse id="collapse-1" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#basic-datepicker" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                  <pre class="text-white" id="Filemanager"><code>
&#x3C;template&#x3E;
    &#x3C;file-manager&#x3E;&#x3C;/file-manager&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;

    export default {
        name: &#x27;FileManagerDemo&#x27;,
    }
&#x3C;/script&#x3E;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <file-manager></file-manager>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from "../../config/pluginInit";

export default {
  name: "FileManagerDemo",
  mounted() {
    core.index();
  },
  data() {
    return {
      settings: {
        // axios headers
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          Authorization: `Bearer ${window.localStorage.getItem("user-token")}`
        },
        baseUrl: "http://127.0.0.1:8000/file-manager/", // overwrite base url Axios
        windowsConfig: 2, // overwrite config
        lang: "en", // set language
        translation: {
          // add new translation
          name: "en",
          content: {
            about: "Über",
            back: "Zurück"
          }
        }
      }
    };
  }
};
</script>
<style>
.btn-info {
  background: var(--iq-primary);
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, var(--iq-primary)),
    color-stop(100%, var(--iq-primary-light))
  ) !important;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(var(--iq-primary)),
    to(var(--iq-primary-light))
  ) !important;
  background: linear-gradient(
    to right,
    var(--iq-primary) 0%,
    var(--iq-primary-light) 100%
  ) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#827af3", endColorstr="#b47af3", GradientType=1) !important;
  border-color: var(--iq-primary) !important;
}
</style>
