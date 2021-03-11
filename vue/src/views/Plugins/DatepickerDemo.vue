<template>
  <b-container fluid>
    <b-row>
      <b-col cols="6">
        <iq-card body-class="pt-0">
          <template v-slot:headerTitle>
            <h4 class="card-title">Basic Example</h4>
          </template>
          <template v-slot:headerAction>
            <a class="text-primary float-right" v-b-toggle.collapse-1  role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p><span class="text-danger">flatpickr</span> without any config.</p>
            <b-collapse id="collapse-1" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#basic-datepicker" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                  <pre class="text-white" id="basic-datepicker"><code>
&#x3C;template&#x3E;
&#x3C;flat-pickr class=&#x22;form-control&#x22; :config=&#x22;basicConfig&#x22; placeholder=&#x22;Select Date&#x22;&#x3E;&#x3C;/flat-pickr&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
export default {
  name: &#x27;DatepickerDemo&#x27;,
data(){
  return {
      basicConfig: {}
    }
   }
  }
&#x3C;/script&#x3E;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <flat-pickr class="form-control" value="" :config="basicConfig" placeholder="Select Date"></flat-pickr>
          </template>
        </iq-card>
      </b-col>
      <b-col cols="6">
        <iq-card body-class="pt-0">
          <template v-slot:headerTitle>
            <h4 class="card-title">Basic Datetime Example</h4>
          </template>
          <template v-slot:headerAction>
            <a class="text-primary float-right" v-b-toggle.collapse-2  role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p><span class="text-danger">flatpickr</span> with date and time config.</p>
            <b-collapse id="collapse-2" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#basic-datepicker-time" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                  <pre class="text-white" id="basic-datepicker-time"><code>
&#x3C;template&#x3E;
&#x3C;flat-pickr class=&#x22;form-control&#x22; :config=&#x22;basicTimeConfig&#x22; placeholder=&#x22;Select DateTime&#x22;&#x3E;&#x3C;/flat-pickr&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
export default {
  name: &#x27;DatepickerDemo&#x27;,
data(){
  return {
       basicTimeConfig: {
        enableTime: true,
        dateFormat: &#x27;Y-m-d H:i&#x27;
      }
    }
   }
  }
&#x3C;/script&#x3E;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <flat-pickr class="form-control" value="" :config="basicTimeConfig" placeholder="Select DateTime"></flat-pickr>
          </template>
        </iq-card>
      </b-col>
      <b-col cols="6">
        <iq-card body-class="pt-0">
          <template v-slot:headerTitle>
            <h4 class="card-title">Basic Mindate Example</h4>
          </template>
          <template v-slot:headerAction>
            <a class="text-primary float-right" v-b-toggle.collapse-3  role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p><span class="text-danger">flatpickr</span> with min date config.</p>
            <b-collapse id="collapse-3" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#basic-Min-datepicker" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                  <pre class="text-white" id="basic-Min-datepicker"><code>
&#x3C;template&#x3E;
&#x3C;flat-pickr class=&#x22;form-control&#x22; :config=&#x22;basicMinTimeConfig&#x22; placeholder=&#x22;Select Date&#x22;&#x3E;&#x3C;/flat-pickr&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
export default {
  name: &#x27;DatepickerDemo&#x27;,
data(){
  return {
       basicMinTimeConfig: {
        minDate: &#x27;2020-01&#x27;
      }
    }
   }
  }
&#x3C;/script&#x3E;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <flat-pickr class="form-control" value="" :config="basicMinTimeConfig" placeholder="Select Date"></flat-pickr>
          </template>
        </iq-card>
      </b-col>
      <b-col cols="6">
        <iq-card body-class="pt-0">
          <template v-slot:headerTitle>
            <h4 class="card-title">Basic Maxdate Example</h4>
          </template>
          <template v-slot:headerAction>
            <a class="text-primary float-right" v-b-toggle.collapse-4  role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p><span class="text-danger">flatpickr</span> with max date config.</p>
            <b-collapse id="collapse-4" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#basic-Min-datepicker" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                  <pre class="text-white" id="basic-Disable-datepicker"><code>
&#x3C;template&#x3E;
 &#x3C;flat-pickr class=&#x22;form-control&#x22; :config=&#x22;basicMaxDateConfig&#x22; placeholder=&#x22;Select Date&#x22;&#x3E;&#x3C;/flat-pickr&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
export default {
  name: &#x27;DatepickerDemo&#x27;,
data(){
  return {
        basicMaxDateConfig: {
        disable: [ &#x27;2020-01-30&#x27;, &#x27;2020-02-21&#x27;, &#x27;2020-03-08&#x27;, new Date(2025, 4, 9) ],
        dateFormat: &#x27;Y-m-d&#x27;
      }
    }
   }
  }
&#x3C;/script&#x3E;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <flat-pickr class="form-control" value="" :config="basicMaxDateConfig" placeholder="Select Date"></flat-pickr>
          </template>
        </iq-card>
      </b-col>
      <b-col cols="6">
        <iq-card body-class="pt-0">
          <template v-slot:headerTitle>
            <h4 class="card-title">Basic Multipledate Example</h4>
          </template>
          <template v-slot:headerAction>
            <a class="text-primary float-right" v-b-toggle.collapse-5  role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p><span class="text-danger">flatpickr</span> with multiple date config.</p>
            <b-collapse id="collapse-5" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#basic-Min-datepicker" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                  <pre class="text-white" id="basic-Multiple-datepicker"><code>
&#x3C;template&#x3E;
 &#x3C;flat-pickr class=&#x22;form-control&#x22; :config=&#x22;basicMultipleDateConfig&#x22; placeholder=&#x22;Select Date&#x22;&#x3E;&#x3C;/flat-pickr&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
export default {
  name: &#x27;DatepickerDemo&#x27;,
data(){
  return {
        basicMultipleDateConfig: {
        mode: &#x27;multiple&#x27;,
        dateFormat: &#x27;Y-m-d&#x27;
      }
    }
   }
  }
&#x3C;/script&#x3E;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <flat-pickr class="form-control" value="" :config="basicMultipleDateConfig" placeholder="Select Date"></flat-pickr>
          </template>
        </iq-card>
      </b-col>
      <b-col cols="6">
        <iq-card body-class="pt-0">
          <template v-slot:headerTitle>
            <h4 class="card-title">Basic Rangedate Example</h4>
          </template>
          <template v-slot:headerAction>
            <a class="text-primary float-right" v-b-toggle.collapse-6  role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p><span class="text-danger">flatpickr</span> with range date config.</p>
            <b-collapse id="collapse-6" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#basic-Min-datepicker" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                  <pre class="text-white" id="basic-Range-datepicker"><code>
&#x3C;template&#x3E;
  &#x3C;flat-pickr class=&#x22;form-control&#x22; :config=&#x22;basicRangeDateConfig&#x22; placeholder=&#x22;Select Date&#x22;&#x3E;&#x3C;/flat-pickr&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
export default {
  name: &#x27;DatepickerDemo&#x27;,
data(){
  return {
        basicRangeDateConfig: {
        mode: &#x27;range&#x27;
      }
    }
   }
  }
&#x3C;/script&#x3E;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <flat-pickr class="form-control" value="" :config="basicRangeDateConfig" placeholder="Select Date"></flat-pickr>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'

export default {
  name: 'DatepickerDemo',
  mounted () {
    core.index()
  },
  data () {
    return {
      date: new Date(),
      basicConfig: {},
      basicTimeConfig: {
        enableTime: true,
        dateFormat: 'Y-m-d H:i'
      },
      basicMinTimeConfig: {
        minDate: 'today'
      },
      basicMaxDateConfig: {
        maxDate: 'today'
      },
      basicMultipleDateConfig: {
        mode: 'multiple',
        dateFormat: 'Y-m-d'
      },
      basicRangeDateConfig: {
        mode: 'range'
      }
    }
  },
  methods: {
    onChangeDateOption () {
    }
  }
}
</script>
