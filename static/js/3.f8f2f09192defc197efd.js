webpackJsonp([3],{"/pdn":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticClass:"total"},[t._v("玩家数量："+t._s(t.players))]),t._v(" "),n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px","label-position":"top"}},[n("el-form-item",{attrs:{prop:"value",label:"value",rules:{required:!0,message:"value不能为空"}}},[n("el-input",{attrs:{placeholder:t.placeholder,type:"number"},model:{value:t.form.value,callback:function(e){t.$set(t.form,"value",e)},expression:"form.value"}},[n("template",{slot:"append"},[t._v("USDT")])],2)],1),t._v(" "),n("el-form-item",{staticClass:"bottomButton"},[n("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]};var r=n("VU/8")({data:function(){return{players:0,placeholder:"",form:{value:""}}},created:function(){this.init()},methods:{init:function(){var t=this;this.$contract.depositedUSDMaxLimit().call().then(function(e){t.placeholder=e.toString().fromSun()}),this.$Relations.totalAddresses().call().then(function(e){t.players=e.toString()})},submit:function(t){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.$contract.setDepositedUSDMaxLimitEverDay(e.form.value.toSun()).send().then(function(t){e.$loading(t).then(function(t){t&&(e.$refs.form.resetFields(),e.init())})})})}}},a,!1,function(t){n("Dfc5")},"data-v-193d7bcf",null);e.default=r.exports},Dfc5:function(t,e){}});