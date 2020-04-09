(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8442"],{"53c1":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container new bg with-pagination"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-title"},[a("Toolbar",{attrs:{name:t.filename}},[a("span",{staticClass:"action",on:{click:t.getList}},[a("svg-icon",{attrs:{"icon-class":"search"}}),t._v(" "),a("span",{staticClass:"action__desc"},[t._v(t._s(t.$t("base.search")))])],1),t._v(" "),a("el-dropdown",{staticClass:"action",attrs:{trigger:"click"},on:{command:t.handleCommand}},[a("span",[a("svg-icon",{attrs:{"icon-class":"download"}}),t._v(" "),a("span",{staticClass:"action__desc"},[t._v(t._s(t.$t("base.download")))])],1),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{"data-table-action":"excel",command:"xlsx"}},[t._v("\n              Excel (.xlsx)\n            ")])],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"card-body"},[a("el-row",{staticClass:"filter-container",attrs:{gutter:20}},[a("el-col",{attrs:{xs:12,sm:8,md:4}},[a("el-input",{staticClass:"filter-item",attrs:{size:t.searchSize,placeholder:"检测点编号"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(e)}},model:{value:t.listQuery.targetNo,callback:function(e){t.$set(t.listQuery,"targetNo",e)},expression:"listQuery.targetNo"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),a("el-col",{attrs:{xs:12,sm:8,md:4}},[a("el-input",{staticClass:"filter-item",attrs:{size:t.searchSize,placeholder:"检测点名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(e)}},model:{value:t.listQuery.targetName,callback:function(e){t.$set(t.listQuery,"targetName",e)},expression:"listQuery.targetName"}},[a("i",{staticClass:"el-input__icon el-icon-document",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),a("el-col",{attrs:{xs:12,sm:8,md:4}},[a("el-select",{staticClass:"filter-item",attrs:{clearable:"",placeholder:"是否异常",size:t.searchSize},on:{change:t.getList},model:{value:t.listQuery.isError,callback:function(e){t.$set(t.listQuery,"isError",e)},expression:"listQuery.isError"}},[t._l(t.selectOptions,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),t._v(" "),a("svg-icon",{attrs:{slot:"prefix","class-name":"el-input__icon","icon-class":"list"},slot:"prefix"})],2)],1),t._v(" "),a("el-col",{attrs:{xs:12,sm:8,md:4}},[a("el-date-picker",{staticClass:"filter-item",attrs:{size:t.searchSize,type:"date",placeholder:"开始时间",align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.listQuery.beginTime,callback:function(e){t.$set(t.listQuery,"beginTime",e)},expression:"listQuery.beginTime"}})],1),t._v(" "),a("el-col",{attrs:{xs:12,sm:8,md:4}},[a("el-date-picker",{staticClass:"filter-item",attrs:{size:t.searchSize,type:"date",placeholder:"结束时间",align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.listQuery.endTime,callback:function(e){t.$set(t.listQuery,"endTime",e)},expression:"listQuery.endTime"}})],1)],1),t._v(" "),a("div",{staticClass:"card-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:t.list,"row-key":t.rowKey,fit:"","highlight-current-row":"","empty-text":t.emptyText}},[a("el-table-column",{attrs:{align:t.tableAlign,label:"检测点编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.targetNo||"暂无"))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"监测点名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.picName||e.row.targetName||"暂无"))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.time||"暂无"))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"图片"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("fancyBox",{attrs:{url:t.row.picUrl}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"检测值"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.currentValue||"暂无"))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"是否异常",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[1!==e.row.isError?a("el-tag",{attrs:{type:"success"}},[t._v("正常")]):a("el-tag",{attrs:{type:"danger"}},[t._v("异常")])]}}])})],1)],1)],1)]),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])},i=[],s=a("0a1f"),n=a("ed08"),r=s["patrol"].searchTemperatureRecordList,o={name:"TiTemperatureQuery",data:function(){var t=new Date;return t.setTime(t.getTime()-6048e5),{emptyText:null,list:[],total:null,listLoading:!0,pickerOptions:n["m"],listQuery:{page:1,limit:10,targetNo:null,targetName:null,isError:null,beginTime:Object(n["l"])(t),endTime:Object(n["l"])(new Date)},selectOptions:[{value:"",label:"状态"},{value:1,label:"上线"},{value:0,label:"下线"}],filename:this.$t("route.ti-temperature-query")}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,this.emptyText=null,r(this.listQuery).then(function(e){t.list=e.data.rows,t.total=e.data.total,t.listLoading=!1},function(e){console.log(e),t.listLoading=!1,t.emptyText="网络错误"})},rowKey:function(t){return t.id},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleCommand:function(t){if("undefined"!==typeof t)switch(t){case"xlsx":var e=["targetNo","targetName","time","picUrl","currentValue","isError"],a=["检测点编号","监测点名称","时间","图片","检测值","是否异常"],l=this.list,i=this.filename;this.$g_exportToExcel({field:e,field_ZH:a,list:l,filename:i},this.formatJson);break}},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return e[t]})})}}},c=o,u=a("2877"),d=Object(u["a"])(c,l,i,!1,null,"50614268",null);e["default"]=d.exports}}]);