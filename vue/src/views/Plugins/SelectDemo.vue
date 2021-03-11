<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title pt-3"><b>Dropdown Options</b></h4>
            <p>vue-select accepts arrays of strings or objects to use as options through the options prop</p>
          </template>
          <template v-slot:body>
            <b-row>
              <b-col cols="12">
                <iq-card class="shadow-none border">
                  <template v-slot:headerTitle>
                    <h4 class="card-title"><b>Basic</b></h4>
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
                          <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#basic-datepicker" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                          <pre class="text-white" id="basic-dropdown"><code>
&#x3C;template&#x3E;
  &#x3C;v-select name=&#x22;user_id&#x22;  :options=&#x22;[ &#x27;Name &#x27;,&#x27;name&#x27;]&#x22;/&#x3E;
  &#x3C;v-select name=&#x22;user_id&#x22; :options=&#x22;[{label: &#x27;Name &#x27;,value: &#x27;name&#x27;}]&#x22; /&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
export default {
 name: &#x27;SelectDemo&#x27;,
data(){
  return {}
   }
  }
&#x3C;/script&#x3E;
</code></pre>
                        </kbd>
                      </div>
                    </b-collapse>
                    <v-select name="user_id"  :options="[ 'Name ','name']"/>
                    <p>When provided an array of objects, vue-select will display a single value of the object. By default, vue-select will look for a key named label on the object to use as display text</p>
                    <v-select name="user_id" :options="[{label: 'Name ',value: 'name'}]" />
                  </template>
                </iq-card>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12">
                <iq-card class="shadow-none border">
                  <template v-slot:headerTitle>
                    <h4 class="card-title"><b>Option label</b></h4>
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
                          <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#basic-datepicker" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                          <pre class="text-white" id="Option-label-dropdown"><code>
&#x3C;template&#x3E;
  &#x3C;v-select name=&#x22;user_id&#x22; label=&#x22;countryName&#x22; :options= countries /&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
export default {
 name: &#x27;SelectDemo&#x27;,
data(){
  return {
      countries: [
        {
          countryCode: &#x27;GE&#x27;,
          countryName: &#x27;Germany&#x27;
        },
        {
          countryCode: &#x27;AUS&#x27;,
          countryName: &#x27;Australia&#x27;
        },
        {
          countryCode: &#x27;CA&#x27;,
          countryName: &#x27;Canada&#x27;
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
                    <p>When the options array contains objects, vue-select looks for the label key to display by default. You can set your own label to match your source data using the label prop</p>
                    <v-select name="user_id" label="countryName" :options= countries />
                  </template>
                </iq-card>
              </b-col>
            </b-row>
          </template>
        </iq-card>
      </b-col>
      <b-col cols="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title"><b>Selecting values</b></h4>
          </template>
          <template v-slot:body>
            <b-row>
              <b-col cols="12">
                <iq-card class="shadow-none border">
                  <template v-slot:headerTitle>
                    <h4 class="card-title"><b>Default</b></h4>
                    <p>The most common use case for vue-select is to have the chosen value synced with a parent component. vue-select takes advantage of the v-model syntax to sync values with a parent</p>
                  </template>
                  <template v-slot:headerAction>
                    <a class="text-primary float-right" v-b-toggle.collapse-3  role="button">
                      <i class="ri-code-s-slash-line" />
                    </a>
                  </template>
                  <template v-slot:body>
                    <b-collapse id="collapse-3" class="mb-2">
                      <div class="card">
                        <kbd class="bg-dark">
                          <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#basic-datepicker" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                          <pre class="text-white" id="default-dropdown"><code>
&#x3C;template&#x3E;
 &#x3C;v-select name=&#x22;user_id&#x22; v-model=&#x22;selected&#x22; :options=&#x22;options&#x22; /&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
export default {
 name: &#x27;SelectDemo&#x27;,
data(){
  return {
      options: [
        { id: 1, label: &#x27;foo&#x27; },
        { id: 3, label: &#x27;bar&#x27; },
        { id: 2, label: &#x27;baz&#x27; }
      ],
      selected: { id: 3, label: &#x27;bar&#x27; }
   }
  }
}
&#x3C;/script&#x3E;
</code></pre>
                        </kbd>
                      </div>
                    </b-collapse>
                    <v-select name="user_id" v-model="selected" :options="options" />
                  </template>
                </iq-card>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12">
                <iq-card class="shadow-none border">
                  <template v-slot:headerTitle>
                    <h4 class="card-title"><b>Single/Multiple Selection</b></h4>
                    <p>By default, vue-select supports choosing a single value. If you need multiple values, use the multiple prop</p>
                  </template>
                  <template v-slot:headerAction>
                    <a class="text-primary float-right" v-b-toggle.collapse-4  role="button">
                      <i class="ri-code-s-slash-line" />
                    </a>
                  </template>
                  <template v-slot:body>
                    <b-collapse id="collapse-4" class="mb-2">
                      <div class="card">
                        <kbd class="bg-dark">
                          <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#basic-datepicker" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                          <pre class="text-white" id="single-multiple-dropdown"><code>
&#x3C;template&#x3E;
  &#x3C;v-select multiple :closeOnSelect=&#x22;false&#x22; v-model=&#x22;selectedselection&#x22; :options=&#x22;optionsselection&#x22;&#x3E;&#x3C;/v-select&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
export default {
 name: &#x27;SelectDemo&#x27;,
data(){
  return {
      selectedselection: [&#x27;foo&#x27;, &#x27;bar&#x27;],
      optionsselection: [&#x27;foo&#x27;, &#x27;bar&#x27;, &#x27;baz&#x27;]
   }
  }
}
&#x3C;/script&#x3E;
</code></pre>
                        </kbd>
                      </div>
                    </b-collapse>
                    <v-select multiple :closeOnSelect="false" v-model="selectedselection" :options="optionsselection"></v-select>
                  </template>
                </iq-card>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12">
                <iq-card class="shadow-none border">
                  <template v-slot:headerTitle>
                    <h4 class="card-title"><b>Tagging</b></h4>
                    <p>To allow input that's not present within the options, set the taggable prop to true. If you want new tags to be pushed to the options list, set push-tags to true</p>
                  </template>
                  <template v-slot:headerAction>
                    <a class="text-primary float-right" v-b-toggle.collapse-5  role="button">
                      <i class="ri-code-s-slash-line" />
                    </a>
                  </template>
                  <template v-slot:body>
                    <b-collapse id="collapse-5" class="mb-2">
                      <div class="card">
                        <kbd class="bg-dark">
                          <!--                  <a href="javascript:void(0)" v-b-tooltip.hover data-copy-target="#basic-datepicker" title="Copy" class="text-white float-right" data-copy="true">Copy</a>-->
                          <pre class="text-white" id="tagging-dropdown"><code>
&#x3C;template&#x3E;
  &#x3C;h6&#x3E;Vue Select - Taggable&#x3C;/h6&#x3E;
    &#x3C;v-select taggable /&#x3E;&#x3C;br&#x3E;
  &#x3C;h6&#x3E;Vue Select - Taggable &#x26;amp; Push-Tags&#x3C;/h6&#x3E;
    &#x3C;v-select taggable push-tags/&#x3E;
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
export default {
 name: &#x27;SelectDemo&#x27;,
data(){
  return {
     taggable: {
        type: Boolean,
        default: false
      },
      pushTags: {
        type: Boolean,
        default: false
      }
   }
  }
}
&#x3C;/script&#x3E;
</code></pre>
                        </kbd>
                      </div>
                    </b-collapse>
                    <h6>Vue Select - Taggable</h6>
                    <v-select taggable /><br>
                    <h6>Vue Select - Taggable &amp; Push-Tags</h6>
                    <v-select taggable push-tags/>
                  </template>
                </iq-card>
              </b-col>
            </b-row>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'

export default {
  name: 'SelectDemo',
  mounted () {
    core.index()
  },
  data () {
    return {
      countries: [
        {
          countryCode: 'GE',
          countryName: 'Germany'
        },
        {
          countryCode: 'AUS',
          countryName: 'Australia'
        },
        {
          countryCode: 'CA',
          countryName: 'Canada'
        }
      ],
      options: [
        { id: 1, label: 'foo' },
        { id: 3, label: 'bar' },
        { id: 2, label: 'baz' }
      ],
      selected: { id: 3, label: 'bar' },
      selectedselection: ['foo', 'bar'],
      optionsselection: ['foo', 'bar', 'baz'],
      taggable: {
        type: Boolean,
        default: false
      },
      pushTags: {
        type: Boolean,
        default: false
      }

    }
  }
}

</script>
