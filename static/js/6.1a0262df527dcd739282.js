webpackJsonp([6],{gAJg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px","label-position":"top"}},[n("el-form-item",{attrs:{prop:"value",label:"value",rules:{required:!0,message:"value不能为空"}}},[n("el-input",{attrs:{placeholder:e.placeholder,type:"number"},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}},[n("template",{slot:"append"},[e._v("MPC")])],2)],1),e._v(" "),n("el-form-item",{staticClass:"bottomButton"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]},l=n("VU/8")({data:function(){return{placeholder:"",form:{value:""}}},created:function(){this.init()},methods:{init:function(){var e=this;this.$contract.exchangeRateUSDToMC().call().then(function(t){e.placeholder=t.toString()})},submit:function(e){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;t.$contract.setExchangeRateUSDToMC(t.form.value).send().then(function(e){t.$loading(e).then(function(e){e&&(t.$refs.form.resetFields(),t.init())})})})}}},r,!1,null,null,null);t.default=l.exports}});