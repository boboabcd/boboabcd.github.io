webpackJsonp([4],{"xc2+":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{placeholder:"",form:{value:""}}},created:function(){this.$contract&&this.init()},methods:{init:function(){var e=this;this.$contract.queueTime().call().then(function(t){e.placeholder=parseInt(t.toNumber()/86400)})},submit:function(e){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;t.$contract.setQueueTime(86400*t.form.value).send().then(function(e){t.$loading(e).then(function(e){e&&(t.$refs.form.resetFields(),t.init())})})})}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px","label-position":"top"}},[r("el-form-item",{attrs:{prop:"value",label:"value",rules:{required:!0,message:"value不能为空"}}},[r("el-input",{attrs:{placeholder:e.placeholder,type:"number"},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}},[r("template",{slot:"append"},[e._v("日")])],2)],1),e._v(" "),r("el-form-item",{staticClass:"bottomButton"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]},o=r("VU/8")(n,l,!1,null,null,null);t.default=o.exports}});