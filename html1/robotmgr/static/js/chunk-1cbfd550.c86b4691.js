(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cbfd550"],{"31a4":function(t,e,l){},fc97:function(t,e,l){"use strict";var a=l("31a4"),s=l.n(a);s.a},fecb1:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"app-container new bg with-pagination"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-title"},[l("Toolbar",{attrs:{name:t.filename}},[l("span",{staticClass:"action",on:{click:t.getList}},[l("svg-icon",{attrs:{"icon-class":"search"}}),t._v(" "),l("span",{staticClass:"action__desc"},[t._v(t._s(t.$t("base.search")))])],1),t._v(" "),l("el-dropdown",{staticClass:"action",attrs:{trigger:"click"},on:{command:t.handleCommand}},[l("span",[l("svg-icon",{attrs:{"icon-class":"download"}}),t._v(" "),l("span",{staticClass:"action__desc"},[t._v(t._s(t.$t("base.download")))])],1),t._v(" "),l("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[l("el-dropdown-item",{attrs:{"data-table-action":"excel",command:"xlsx"}},[t._v("\n              Excel (.xlsx)\n            ")])],1)],1)],1)],1),t._v(" "),l("div",{staticClass:"card-body"},[l("el-row",{staticClass:"filter-container",attrs:{gutter:20}},[l("el-col",{attrs:{xs:12,sm:8,md:4}},[l("el-input",{staticClass:"filter-item",attrs:{size:t.searchSize,placeholder:"设备编号"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(e)}},model:{value:t.listQuery.devCode,callback:function(e){t.$set(t.listQuery,"devCode",e)},expression:"listQuery.devCode"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),l("el-col",{attrs:{xs:12,sm:8,md:4}},[l("el-input",{staticClass:"filter-item",attrs:{size:t.searchSize,placeholder:"设备名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(e)}},model:{value:t.listQuery.devName,callback:function(e){t.$set(t.listQuery,"devName",e)},expression:"listQuery.devName"}},[l("i",{staticClass:"el-input__icon el-icon-document",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),l("el-col",{attrs:{xs:12,sm:8,md:4}},[l("el-select",{staticClass:"filter-item",attrs:{placeholder:"是否异常",clearable:"",size:t.searchSize},on:{change:t.getList},model:{value:t.listQuery.isError,callback:function(e){t.$set(t.listQuery,"isError",e)},expression:"listQuery.isError"}},[t._l(t.selectOptions,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),t._v(" "),l("svg-icon",{attrs:{slot:"prefix","class-name":"el-input__icon","icon-class":"list"},slot:"prefix"})],2)],1),t._v(" "),l("el-col",{attrs:{xs:12,sm:8,md:4}},[l("el-select",{staticClass:"filter-item",attrs:{placeholder:"是否设置识别",clearable:"",size:t.searchSize},on:{change:t.getList},model:{value:t.listQuery.isSet,callback:function(e){t.$set(t.listQuery,"isSet",e)},expression:"listQuery.isSet"}},[t._l(t.selectOptions2,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),t._v(" "),l("svg-icon",{attrs:{slot:"prefix","class-name":"el-input__icon","icon-class":"list"},slot:"prefix"})],2)],1)],1),t._v(" "),l("div",{staticClass:"card-table"},[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:t.list,"row-key":t.rowKey,fit:"","empty-text":t.emptyText,"highlight-current-row":""}},[l("el-table-column",{attrs:{align:t.tableAlign,label:"设备编码",width:"160px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.devCode||"暂无"))]}}])}),t._v(" "),l("el-table-column",{attrs:{align:t.tableAlign,label:"设备名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.devName||"暂无"))]}}])}),t._v(" "),l("el-table-column",{attrs:{align:t.tableAlign,label:"面板编码"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.panelCodes||"暂无"))]}}])}),t._v(" "),l("el-table-column",{attrs:{align:t.tableAlign,label:"图片"},scopedSlots:t._u([{key:"default",fn:function(t){return[l("fancyBox",{attrs:{url:t.row.picurls}})]}}])}),t._v(" "),l("el-table-column",{attrs:{align:t.tableAlign,label:"是否设置识别区域"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("fliterIsSet")(e.row.isSet)))]}}])}),t._v(" "),l("el-table-column",{attrs:{align:t.tableAlign,label:"是否异常"},scopedSlots:t._u([{key:"default",fn:function(e){return[1!==e.row.isError?l("el-tag",{attrs:{type:"success"}},[t._v("正常")]):l("el-tag",{attrs:{type:"danger"}},[t._v("异常")])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:t.tableAlign,label:"创建时间",width:"160px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.addTime||"暂无"))]}}])}),t._v(" "),l("el-table-column",{attrs:{align:t.tableAlign,label:"操作",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-tooltip",{directives:[{name:"hidden-dev",rawName:"v-hidden-dev.wpf.reverse",modifiers:{wpf:!0,reverse:!0}}],attrs:{effect:"dark",content:"编辑",placement:"top"}},[l("i",{staticClass:"el-icon-edit card-table__icon",staticStyle:{cursor:"pointer"},on:{click:function(l){return t.handleEdit(e.row)}}})]),t._v(" "),l("el-tooltip",{attrs:{effect:"dark",content:"详情",placement:"top"}},[l("i",{staticClass:"el-icon-view card-table__icon",staticStyle:{cursor:"pointer"},on:{click:function(l){return t.handleDetail(e.row)}}})])]}}])})],1)],1)],1)]),t._v(" "),l("div",{staticClass:"pagination-container"},[l("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),l("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{center:"","custom-class":"app-container__dialog",title:"仪表记录详情",visible:t.dialogFormVisible,"append-to-body":!0,modal:t.needModal,"close-on-click-modal":t.closeOnClickModel,width:"900px",top:"5vh"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[l("div",{staticClass:"report"},[l("el-row",{staticClass:"report-info",attrs:{gutter:30}},[l("el-col",{staticClass:"report-info__label text-right",attrs:{span:12}},[t._v("设备编号")]),t._v(" "),l("el-col",{staticClass:"report-info__content",attrs:{span:12}},[t._v(t._s(t.temp.devCode))])],1),t._v(" "),l("el-row",{staticClass:"report-info",attrs:{gutter:30}},[l("el-col",{staticClass:"report-info__label text-right",attrs:{span:12}},[t._v("设备名称")]),t._v(" "),l("el-col",{staticClass:"report-info__content",attrs:{span:12}},[t._v(t._s(t.temp.devName))])],1),t._v(" "),l("el-row",{staticClass:"report-info",attrs:{gutter:30}},[l("el-col",{staticClass:"report-info__label text-right",attrs:{span:12}},[t._v("抓拍时间")]),t._v(" "),l("el-col",{staticClass:"report-info__content",attrs:{span:12}},[t._v(t._s(t.temp.addTime))])],1),t._v(" "),l("h2",{staticClass:"report__title text-center"},[t._v("面板照片")]),t._v(" "),l("div",{staticClass:"report-carousel"},[l("el-carousel",{attrs:{autoplay:!1,type:"card",height:"250px"}},t._l(t.temp.picurls,function(t,e){return l("el-carousel-item",{key:e},[l("fancyBox",{attrs:{url:t,width:"100%",height:"250px"}})],1)}),1)],1),t._v(" "),l("h2",{staticClass:"report__title text-center"},[t._v("仪表记录明细")]),t._v(" "),l("div",{staticClass:"report-form"},[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tempLoading,expression:"tempLoading"}],staticStyle:{width:"100%"},attrs:{data:t.temp.formData,"row-key":t.rowKey,fit:"","empty-text":t.emptyText2,"highlight-current-row":"","max-height":"400"}},[l("el-table-column",{attrs:{align:t.tableAlign,label:"面板编码",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.panelCode||"暂无"))]}}])}),t._v(" "),l("el-table-column",{attrs:{align:t.tableAlign,label:"面板名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.panelName||"暂无"))]}}])}),t._v(" "),l("el-table-column",{attrs:{align:t.tableAlign,label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.time||"暂无"))]}}])}),t._v(" "),l("el-table-column",{attrs:{align:t.tableAlign,label:"图片",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(t){return[l("fancyBox",{attrs:{url:t.row.picUrl}})]}}])}),t._v(" "),l("el-table-column",{attrs:{align:t.tableAlign,label:"识别点编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.targetNo||"暂无"))]}}])}),t._v(" "),l("el-table-column",{attrs:{align:t.tableAlign,label:"识别点名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.targetName))]}}])}),t._v(" "),l("el-table-column",{attrs:{align:t.tableAlign,label:"类型",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(t._f("filterType")(e.row.type))+"\n            ")]}}])}),t._v(" "),l("el-table-column",{attrs:{align:t.tableAlign,label:"当前值"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.currentValue))]}}])}),t._v(" "),l("el-table-column",{attrs:{align:t.tableAlign,label:"是否异常",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[1!==e.row.isError?l("el-tag",{attrs:{type:"success"}},[t._v("正常")]):l("el-tag",{attrs:{type:"danger"}},[t._v("异常")])]}}])})],1)],1)],1),t._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确定")])],1)])],1)},s=[],i=(l("28a5"),l("0a1f")),n=i["patrol"].searchPicList,r=i["patrol"].searchRecordListById,o={name:"InstrumentsQuery",filters:{fliterIsSet:function(t){var e="--";return 1===t?e="已设置":0===t&&(e="未设置"),e},filterType:function(t){var e="";return 1===t?e="仪表":2===t?e="状态灯":3===t&&(e="温度"),e}},data:function(){return{emptyText:null,list:[],total:null,listLoading:!0,listQuery:{page:1,limit:10,devCode:null,devName:null,isError:null,isSet:null},selectOptions:[{value:"",label:"是否异常"},{value:0,label:"否"},{value:1,label:"是"}],selectOptions2:[{value:"",label:"是否设置识别"},{value:0,label:"否"},{value:1,label:"是"}],needModal:!0,closeOnClickModel:!1,dialogFormVisible:!1,temp:{devRecordId:null,devCode:null,devName:null,addTime:null,picurls:[],formData:[]},emptyText2:null,tempLoading:!0,filename:this.$t("route.instruments-query")}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,this.emptyText=null,n(this.listQuery).then(function(e){t.list=e.data.rows,t.total=e.data.total,t.listLoading=!1},function(e){console.log(e),t.listLoading=!1,t.emptyText="网络错误"})},rowKey:function(t){return t.id},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleCommand:function(t){if("undefined"!==typeof t)switch(t){case"xlsx":var e=["devCode","devName","panelCodes","picurls","isSet","isError","addTime"],l=["设备编码","设备名称","面板编码","图片","是否设置识别区域","是否异常","创建时间"],a=this.list,s=this.filename;this.$g_exportToExcel({field:e,field_ZH:l,list:a,filename:s},this.formatJson);break}},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return e[t]})})},handleEdit:function(t){"undefined"!==typeof window.external.startImageRecognize?window.external.startImageRecognize(t.panelCodes):this.$message({message:"请前往 wpf 客户端操作",type:"warning"})},handleDetail:function(t){var e=this;this.temp=Object.assign({},this.temp,t),this.$set(this.temp,"picurls",this.temp.picurls.split(",")),this.dialogFormVisible=!0,this.emptyText=null,r({recordId:this.temp.devRecordId}).then(function(t){e.temp.formData=t.data.rows,e.tempLoading=!1},function(){e.tempLoading=!1,e.emptyText="网络错误"})}}},c=o,u=(l("fc97"),l("2877")),d=Object(u["a"])(c,a,s,!1,null,"1d56cb58",null);e["default"]=d.exports}}]);