(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21787f"],{c6b8:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container new bg with-pagination"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-title"},[a("div",{staticClass:"g-toolbar g-toolbar--inner",staticStyle:{"margin-bottom":"0"}},[a("div",{staticClass:"g-toolbar__label"},[t._v(t._s(t.filename))]),t._v(" "),a("div",{staticClass:"g-toolbar__actions"},[a("span",{staticClass:"action",on:{click:t.getList}},[a("svg-icon",{attrs:{"icon-class":"search"}}),t._v(" "),a("span",{staticClass:"action__desc"},[t._v(t._s(t.$t("base.search")))])],1),t._v(" "),a("el-dropdown",{staticClass:"action",attrs:{trigger:"click"},on:{command:t.handleCommand}},[a("span",[a("svg-icon",{attrs:{"icon-class":"download"}}),t._v(" "),a("span",{staticClass:"action__desc"},[t._v(t._s(t.$t("base.download")))])],1),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{"data-table-action":"excel",command:"xlsx"}},[t._v("\n                Excel (.xlsx)\n              ")])],1)],1)],1)])]),t._v(" "),a("div",{staticClass:"card-body"},[a("el-row",{staticClass:"filter-container",attrs:{gutter:20}},[a("el-col",{attrs:{xs:12,sm:8,md:4}},[a("el-date-picker",{staticClass:"filter-item",attrs:{size:t.searchSize,"picker-options":t.pickerOptions,type:"datetime",placeholder:"开始时间",align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.listQuery.beginTime,callback:function(e){t.$set(t.listQuery,"beginTime",e)},expression:"listQuery.beginTime"}})],1),t._v(" "),a("el-col",{attrs:{xs:12,sm:8,md:4}},[a("el-date-picker",{staticClass:"filter-item",attrs:{size:t.searchSize,"picker-options":t.pickerOptions,type:"datetime",placeholder:"结束时间",align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.listQuery.endTime,callback:function(e){t.$set(t.listQuery,"endTime",e)},expression:"listQuery.endTime"}})],1)],1),t._v(" "),a("div",{staticClass:"card-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:t.list,"row-key":t.rowKey,fit:"","empty-text":t.emptyText,"highlight-current-row":""}},[a("el-table-column",{attrs:{align:t.tableAlign,label:"序号",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("defaultValue")(e.row.no)))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"地址"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("defaultValue")(e.row.address)))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"值守点"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("defaultValue")(e.row.point)))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"值守开始时间","min-width":"160px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("defaultValue")(e.row.beginTime)))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"值守结束时间","min-width":"160px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("defaultValue")(e.row.endTime)))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"告警记录"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("defaultValue")(e.row.alarms)))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"抓拍图片",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.picUrls?t._l(e.row.picUrls.split(","),function(t,e){return a("fancyBox",{key:e,attrs:{url:t}})}):[t._v("--")]]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"机器人"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("defaultValue")(e.row.deviceName)))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"录像"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("defaultValue")(e.row.video)))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"备注"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.remark?a("span",{staticClass:"text-ellipsis enableTap",staticStyle:{display:"inline-block"},attrs:{title:e.row.remark},on:{click:function(a){return t.handleRemark(e.row)}}},[t._v(t._s(e.row.remark))]):a("el-button",{attrs:{size:"mini",round:""},on:{click:function(a){return t.handleRemark(e.row)}}},[t._v("添加")])]}}])})],1)],1)],1)]),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])},l=[],i=a("0a1f"),s=a("ed08"),r=i["report"].unmannedReport,o=i["report"].updateUnmannedRemark,c={name:"GuardReportForm",inject:["parseTime"],data:function(){var t=new Date;return t.setTime(t.getTime()-864e5),{emptyText:null,list:[],total:null,listLoading:!0,pickerOptions:s["m"],listQuery:{page:1,limit:10,beginTime:this.parseTime(t),endTime:null},selectOptions:[],filename:this.$t("route.guard-report-form")}},created:function(){},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,this.list=[],this.emptyText=null,r(this.listQuery).then(function(e){t.list=e.data.rows,t.total=e.data.total,t.listLoading=!1},function(e){console.log(e),t.listLoading=!1,t.emptyText="网络错误"})},rowKey:function(t){return t.id},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleCommand:function(t){if("undefined"!==typeof t)switch(t){case"xlsx":var e=["no","address","point","beginTime","endTime","alarms","picUrls","deviceName","video","remark"],a=["序号","地址","值守点","值守开始时间","值守结束时间","告警记录","抓拍图片","机器人","录像","备注"],n=this.list,l=this.filename;this.$g_exportToExcel({field:e,field_ZH:a,list:n,filename:l},this.formatJson);break}},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return e[t]})})},handleRemark:function(t){var e=this;if("undefined"!==typeof t){var a=t.unmannedId;this.$prompt("请填写相关内容（必须）","提示 -- 定点值守备注",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"请输入正确的定点值守备注"}).then(function(n){var l=n.value;o({unmannedId:a,remark:l}).then(function(a){e.$message.success(a.msg),t.remark=l},function(t){console.log(t)})})}}}},u=c,d=a("2877"),m=Object(d["a"])(u,n,l,!1,null,"8240cf1a",null);e["default"]=m.exports}}]);