(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1935:function(e,c,a){"use strict";a.r(c);var t=a(16),i={name:"FormSwitches",mounted:function(){t.c.index()},data:function(){return{state:[{label:"False/Inactive",checked:!1,disabled:!1},{label:"True/Active",checked:!0,disabled:!1},{label:"Disabled/Active",checked:!0,disabled:!0},{label:"Disabled/Inactive",checked:!1,disabled:!0}],text:[{activeLabel:"On",inactiveLabel:"Off",label:"Primary",class:"primary",checked:!0},{activeLabel:"True",inactiveLabel:"False",label:"Success",class:"success",checked:!0},{activeLabel:"Yes",inactiveLabel:"No",label:"Danger",class:"danger",checked:!0}],color:[{label:"Primary",color:"primary",checked:!0},{label:"Success",color:"success",checked:!0},{label:"Danger",color:"danger",checked:!0},{label:"Warning",color:"warning",checked:!0},{label:"Dark",color:"dark",checked:!0},{label:"Info",color:"info",checked:!0}],icon:[{activeLabel:'<i class="fa fa-check"></i>',inactiveLabel:'<i class="fa fa-check"></i>',label:"Primary",color:"primary",checked:!1},{activeLabel:'<i class="fa fa-check"></i>',inactiveLabel:'<i class="fa fa-check"></i>',label:"Success",color:"success",checked:!0},{activeLabel:'<i class="fa fa-times"></i>',inactiveLabel:'<i class="fa fa-times"></i>',label:"Warning",color:"warning",checked:!0},{activeLabel:'<i class="fa fa-exclamation-triangle"></i>',inactiveLabel:'<i class="fa fa-exclamation-triangle"></i>',label:"Danger",color:"danger",checked:!0},{activeLabel:'<i class="fa fa-thumb-tack"></i>',inactiveLabel:'<i class="fa fa-thumb-tack"></i>',label:"Dark",color:"dark",checked:!0},{activeLabel:'<i class="fa fa-info"></i>',inactiveLabel:'<i class="fa fa-info"></i>',label:"Info",color:"info",checked:!0}]}}},l=a(8),s=Object(l.a)(i,(function(){var e=this,c=e.$createElement,a=e._self._c||c;return a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",{attrs:{lg:"12"}},[a("iq-card",{scopedSlots:e._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[e._v("State")])]},proxy:!0},{key:"body",fn:function(){return[a("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo")]),e._v(" "),e._l(e.state,(function(c,t){return[a("b-form-checkbox",{key:t,attrs:{disabled:c.disabled,name:"check-button",switch:"",inline:""},model:{value:c.checked,callback:function(a){e.$set(c,"checked",a)},expression:"item.checked"}},[e._v(e._s(c.label))])]}))]},proxy:!0}])})],1),e._v(" "),a("b-col",{attrs:{lg:"12"}},[a("iq-card",{scopedSlots:e._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[e._v("Text")])]},proxy:!0},{key:"body",fn:function(){return[a("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo")]),e._v(" "),e._l(e.text,(function(c,t){return[a("div",{key:t,staticClass:"custom-control custom-switch custom-switch-text custom-control-inline custom-switch-color"},[a("div",{staticClass:"custom-switch-inner"},[a("p",{staticClass:"mb-0"},[e._v(e._s(c.label))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:c.checked,expression:"item.checked"}],staticClass:"custom-control-input",class:"bg-"+c.class,attrs:{type:"checkbox",id:"customSwitch-11"+t},domProps:{checked:Array.isArray(c.checked)?e._i(c.checked,null)>-1:c.checked},on:{change:function(a){var t=c.checked,i=a.target,l=!!i.checked;if(Array.isArray(t)){var s=e._i(t,null);i.checked?s<0&&e.$set(c,"checked",t.concat([null])):s>-1&&e.$set(c,"checked",t.slice(0,s).concat(t.slice(s+1)))}else e.$set(c,"checked",l)}}}),e._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"customSwitch-11"+t,"data-on-label":c.activeLabel,"data-off-label":c.inactiveLabel}})])])]}))]},proxy:!0}])})],1),e._v(" "),a("b-col",{attrs:{lg:"12"}},[a("iq-card",{scopedSlots:e._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[e._v("Color")])]},proxy:!0},{key:"body",fn:function(){return[a("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo")]),e._v(" "),e._l(e.color,(function(c,t){return[a("b-form-checkbox",{key:t,staticClass:"custom-switch-color",attrs:{color:c.color,disabled:c.disabled,name:"check-button",switch:"",inline:""},model:{value:c.checked,callback:function(a){e.$set(c,"checked",a)},expression:"item.checked"}},[e._v(e._s(c.label))])]}))]},proxy:!0}])})],1),e._v(" "),a("b-col",{attrs:{lg:"12"}},[a("iq-card",{scopedSlots:e._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[e._v("Icon")])]},proxy:!0},{key:"body",fn:function(){return[a("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo")]),e._v(" "),e._l(e.icon,(function(c,t){return[a("div",{key:t,staticClass:"custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline"},[a("div",{staticClass:"custom-switch-inner"},[a("p",{staticClass:"mb-0"},[e._v("Primary")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:c.checked,expression:"item.checked"}],staticClass:"custom-control-input",class:"bg-"+c.color,attrs:{type:"checkbox",id:"customSwitch-1-"+t},domProps:{checked:Array.isArray(c.checked)?e._i(c.checked,null)>-1:c.checked},on:{change:function(a){var t=c.checked,i=a.target,l=!!i.checked;if(Array.isArray(t)){var s=e._i(t,null);i.checked?s<0&&e.$set(c,"checked",t.concat([null])):s>-1&&e.$set(c,"checked",t.slice(0,s).concat(t.slice(s+1)))}else e.$set(c,"checked",l)}}}),e._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"customSwitch-1-"+t}},[a("span",{staticClass:"switch-icon-left",domProps:{innerHTML:e._s(c.activeLabel)}}),e._v(" "),a("span",{staticClass:"switch-icon-right",domProps:{innerHTML:e._s(c.inactiveLabel)}})])])])]}))]},proxy:!0}])})],1)],1)],1)}),[],!1,null,null,null);c.default=s.exports}}]);
//# sourceMappingURL=67.js.map