webpackJsonp([2],{"0bij":function(e,t){},g44J:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px","label-position":"top"}},[r("el-form-item",{attrs:{disabled:"",prop:"roundID",label:"当前兑换轮次"}},[r("el-input",{attrs:{disabled:"",placeholder:e.placeholder1,type:"number"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"total",label:"总量",rules:{required:!0,message:"total不能为空"}}},[r("el-input",{attrs:{placeholder:e.placeholder2,type:"number"},model:{value:e.form.total,callback:function(t){e.$set(e.form,"total",t)},expression:"form.total"}},[r("template",{slot:"append"},[e._v("MPC")])],2)],1),e._v(" "),r("el-form-item",{attrs:{disabled:"",prop:"current",label:"已兑换"}},[r("el-input",{attrs:{disabled:"",placeholder:e.placeholder3,type:"number"}},[r("template",{slot:"append"},[e._v("MPC")])],2)],1),e._v(" "),r("el-form-item",{attrs:{prop:"prop",label:"兑换比例",rules:{required:!0,message:"prop不能为空"}}},[r("el-input",{attrs:{placeholder:e.placeholder4,type:"number"},model:{value:e.form.prop,callback:function(t){e.$set(e.form,"prop",t)},expression:"form.prop"}},[r("template",{slot:"append"},[e._v("MPC")])],2)],1),e._v(" "),r("el-form-item",{staticClass:"bottomButton"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("追加新轮次")])],1)],1)],1)},staticRenderFns:[]};var l=r("VU/8")({data:function(){return{placeholder1:"",placeholder2:"",placeholder3:"",placeholder4:"",form:{total:"",prop:""}}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.$Swap.swapInfo().call().then(function(t){e.placeholder1=t.roundID,e.placeholder2=t.total.toString().fromSun(),e.placeholder3=t.current.toString().fromSun(),e.placeholder4=t.prop.toString()})},submit:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.$Swap.UpdateSwapInfo(e.form.total.toSun(),e.form.prop).send().then(function(t){e.$loading(t).then(function(t){t&&(e.$refs.form.resetFields(),e.init())})})})}}},o,!1,function(e){r("0bij")},null,null);t.default=l.exports}});