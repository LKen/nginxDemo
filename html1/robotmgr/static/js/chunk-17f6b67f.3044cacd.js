(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17f6b67f"],{"650e":function(e,t,a){},"90f3e":function(e,t,a){"use strict";var i=a("650e"),s=a.n(i);s.a},a2c1:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container bg new with-pagination"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-title"},[a("Toolbar",{attrs:{name:e.filename}},[a("span",{staticClass:"action",on:{click:e.getList}},[a("svg-icon",{attrs:{"icon-class":"search"}}),e._v(" "),a("span",{staticClass:"action__desc"},[e._v(e._s(e.$t("base.search")))])],1),e._v(" "),a("el-dropdown",{staticClass:"action",attrs:{trigger:"click"},on:{command:e.handleCommand}},[a("span",[a("svg-icon",{attrs:{"icon-class":"download"}}),e._v(" "),a("span",{staticClass:"action__desc"},[e._v(e._s(e.$t("base.download")))])],1),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{"data-table-action":"excel",command:"xlsx"}},[e._v("\n              Excel (.xlsx)\n            ")])],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"card-body"},[a("el-row",{staticClass:"filter-container",attrs:{gutter:20}},[a("el-col",{attrs:{xs:12,sm:8,md:4}},[a("el-input",{staticClass:"filter-item",attrs:{size:e.searchSize,placeholder:"机器人"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getList(t)}},model:{value:e.listQuery.deviceName,callback:function(t){e.$set(e.listQuery,"deviceName",t)},expression:"listQuery.deviceName"}},[a("svg-icon",{attrs:{slot:"prefix","class-name":"el-input__icon","icon-class":"robot"},slot:"prefix"})],1)],1),e._v(" "),a("el-col",{attrs:{xs:12,sm:8,md:4}},[a("el-date-picker",{staticClass:"filter-item",attrs:{size:e.searchSize,type:"datetime",placeholder:"开始时间","picker-options":e.pickerOptions,align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.listQuery.beginTime,callback:function(t){e.$set(e.listQuery,"beginTime",t)},expression:"listQuery.beginTime"}})],1),e._v(" "),a("el-col",{attrs:{xs:12,sm:8,md:4}},[a("el-date-picker",{staticClass:"filter-item",attrs:{size:e.searchSize,type:"datetime",placeholder:"结束时间","picker-options":e.pickerOptions,align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.listQuery.endTime,callback:function(t){e.$set(e.listQuery,"endTime",t)},expression:"listQuery.endTime"}})],1)],1),e._v(" "),a("el-row",{staticClass:"filter-container",attrs:{gutter:40}}),e._v(" "),a("div",{staticClass:"card-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:e.list,"row-key":e.rowKey,fit:"","empty-text":e.emptyText,"highlight-current-row":""}},[a("el-table-column",{attrs:{align:e.tableAlign,label:"机器人名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.deviceName||"暂无"))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:e.tableAlign,label:"下发的组"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.groupIds||"暂无"))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:e.tableAlign,label:"成功总数"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.successNum||"暂无"))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:e.tableAlign,label:"失败总数"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.failNum||"暂无"))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:e.tableAlign,label:"失败的人员ids"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.failFaceIds||"暂无"))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:e.tableAlign,label:"注册时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.registrationTime||"暂无"))]}}])})],1)],1)],1)]),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])},s=[],l=a("0a1f"),n=a("ed08"),r=l["device"].searchFaceRegistersResult,o={name:"FaceDataQuery",data:function(){var e=new Date;return e.setTime(e.getTime()-6048e5),{emptyText:null,list:[],total:null,listLoading:!0,pickerOptions:n["m"],listQuery:{page:1,limit:10,deviceName:null,beginTime:Object(n["l"])(e),endTime:null},filename:this.$t("route.face-data-query")}},mounted:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,this.emptyText=null,r(this.listQuery).then(function(t){e.list=t.data.rows,e.total=t.data.total,e.listLoading=!1},function(t){console.log(t),e.listLoading=!1,e.emptyText="网络错误"})},rowKey:function(e){return e.id},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleCommand:function(e){if("undefined"!==typeof e)switch(e){case"xlsx":var t=["deviceName","groupIds","successNum","failNum","failFaceIds","registrationTime"],a=["机器人名称","下发的组","成功总数","失败总数","失败的人员ids","注册时间"],i=this.list,s=this.filename;this.$g_exportToExcel({field:t,field_ZH:a,list:i,filename:s},this.formatJson);break}},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})}}},c=o,u=(a("90f3e"),a("2877")),d=Object(u["a"])(c,i,s,!1,null,"84d7aa3e",null);t["default"]=d.exports}}]);