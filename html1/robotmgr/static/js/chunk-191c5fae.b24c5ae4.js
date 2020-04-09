(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-191c5fae"],{"0674":function(t,e,a){},"0a0e":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container new bg with-pagination"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-title"},[a("div",{staticClass:"g-toolbar g-toolbar--inner"},[a("div",{staticClass:"g-toolbar__prefix",on:{click:function(e){return t.$router.replace({path:"/data-center/data-report/guard-report",query:{beginDate:t.beginDate,endDate:t.endDate}})}}},[a("svg-icon",{attrs:{"icon-class":"back"}})],1),t._v(" "),a("div",{staticClass:"g-toolbar__label"},[t._v(t._s(t.filename))]),t._v(" "),a("div",{staticClass:"g-toolbar__actions"},[a("span",{staticClass:"action",on:{click:t.getList}},[a("svg-icon",{attrs:{"icon-class":"search"}}),t._v(" "),a("span",{staticClass:"action__desc"},[t._v(t._s(t.$t("base.search")))])],1),t._v(" "),a("el-dropdown",{staticClass:"action",attrs:{trigger:"click"},on:{command:t.handleCommand}},[a("span",[a("svg-icon",{attrs:{"icon-class":"download"}}),t._v(" "),a("span",{staticClass:"action__desc"},[t._v(t._s(t.$t("base.download")))])],1),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{"data-table-action":"excel",command:"xlsx"}},[t._v("\n                Excel (.xlsx)\n              ")])],1)],1)],1)])]),t._v(" "),a("div",{staticClass:"card-body"},[a("el-row",{staticClass:"filter-container",attrs:{gutter:20}},[a("el-col",{attrs:{xs:12,sm:8,md:4}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择 - 机器人",clearable:"",size:t.searchSize},model:{value:t.listQuery.deviceId,callback:function(e){t.$set(t.listQuery,"deviceId",e)},expression:"listQuery.deviceId"}},[t._l(t.computedSelectOption,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),t._v(" "),a("svg-icon",{attrs:{slot:"prefix","class-name":"el-input__icon","icon-class":"list"},slot:"prefix"})],2)],1),t._v(" "),a("el-col",{attrs:{xs:12,sm:8,md:4}},[a("el-date-picker",{staticClass:"filter-item",attrs:{size:t.searchSize,"picker-options":t.pickerOptions,type:"date",placeholder:"选择日期",align:"right","value-format":"yyyy-MM-dd"},model:{value:t.listQuery.date,callback:function(e){t.$set(t.listQuery,"date",e)},expression:"listQuery.date"}})],1)],1),t._v(" "),a("div",{staticClass:"card-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:t.list,"row-key":t.rowKey,fit:"","empty-text":t.emptyText,"highlight-current-row":""}},[a("el-table-column",{attrs:{align:t.tableAlign,label:"机器人名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.deviceName||"--"))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"值守时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("filterTime")(e.row)))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"告警次数",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s("共"+e.row.alarmCount+"次"||!1))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"地图名称",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.mapName||"--"))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"备注",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.remark||"--"))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"详情",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{effect:"dark",content:"查看详情",placement:"top"}},[a("i",{staticClass:"el-icon-document card-table__icon",on:{click:function(a){return t.handleDetail(e.row)}}})])]}}])})],1)],1)],1)]),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{center:"","custom-class":"app-container__dialog",title:"值守报表详情",visible:t.dialogFormVisible,"append-to-body":!0,modal:t.needModal,"close-on-click-modal":t.closeOnClickModel,width:"1200px",top:"5vh"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("div",{staticClass:"report"},[a("el-row",{staticClass:"report-info",attrs:{gutter:30}},[a("el-col",{staticClass:"report-info__label text-left",attrs:{span:4}},[t._v("值守点")]),t._v(" "),a("el-col",{staticClass:"report-info__content",attrs:{span:20}},[t._v(t._s(t.detail.pointName||"--"))])],1),t._v(" "),a("el-row",{staticClass:"report-info",attrs:{gutter:30}},[a("el-col",{staticClass:"report-info__label text-left",attrs:{span:4}},[t._v("机器人")]),t._v(" "),a("el-col",{staticClass:"report-info__content",attrs:{span:20}},[t._v(t._s(t.detail.deviceName||"--"))])],1),t._v(" "),a("el-row",{staticClass:"report-info",attrs:{gutter:30}},[a("el-col",{staticClass:"report-info__label text-left",attrs:{span:4}},[t._v("地图名称")]),t._v(" "),a("el-col",{staticClass:"report-info__content",attrs:{span:20}},[t._v(t._s(t.detail.mapName||"--"))])],1),t._v(" "),a("el-row",{staticClass:"report-info",attrs:{gutter:30}},[a("el-col",{staticClass:"report-info__label text-left",attrs:{span:4}},[t._v("值守时间")]),t._v(" "),a("el-col",{staticClass:"report-info__content",attrs:{span:20}},[t._v(t._s((t.detail.beginTimeText||"--")+" 至 "+(t.detail.endTimeText||"--")))])],1),t._v(" "),a("el-row",{staticClass:"report-info",attrs:{gutter:30}},[a("el-col",{staticClass:"report-info__label text-left",attrs:{span:4}},[t._v("备注")]),t._v(" "),a("el-col",{staticClass:"report-info__content",attrs:{span:20}},[t._v(t._s(t.detail.remark||"--"))])],1),t._v(" "),a("h2",{staticClass:"report__title text-left"},[t._v("告警图片")]),t._v(" "),a("div",{staticClass:"report-carousel"},[a("div",{staticClass:"fancybox-panel"},[t.computedAlarmPics&&t.computedAlarmPics.length<1?a("p",{staticClass:"fancybox-panel__tip"},[t._v("（暂无告警图片）")]):a("el-scrollbar",{attrs:{vertical:!1}},[a("div",{staticClass:"fancybox-panel__list"},t._l(t.computedAlarmPics,function(e,l){return a("div",{key:l,staticClass:"fancybox-panel__item"},[a("div",{staticClass:"title text-center"},[t._v(t._s(e.alarmTypeName))]),t._v(" "),a("fancyBox",{attrs:{url:e.picUrl,width:t.fancyBoxWidth,height:t.fancyBoxHeight}}),t._v(" "),a("div",{staticClass:"foot text-center"},[t._v(t._s(e.alarmTime))])],1)}),0)])],1)]),t._v(" "),a("h2",{staticClass:"report__title text-left"},[t._v("值守图片")]),t._v(" "),a("div",{staticClass:"report-carousel"},[a("div",{staticClass:"fancybox-panel"},[t.computedUnattendedPics&&t.computedUnattendedPics.length<1?a("p",{staticClass:"fancybox-panel__tip"},[t._v("（暂无巡逻图片）")]):a("el-scrollbar",{attrs:{vertical:!1}},[a("div",{staticClass:"fancybox-panel__list"},t._l(t.computedUnattendedPics,function(e,l){return a("div",{key:l,staticClass:"fancybox-panel__item"},[a("div",{staticClass:"title text-center"},[t._v(t._s(e.picName))]),t._v(" "),a("fancyBox",{attrs:{url:e.picUrl,width:t.fancyBoxWidth,height:t.fancyBoxHeight}}),t._v(" "),a("div",{staticClass:"foot text-center"},[t._v(t._s(e.captureTime))])],1)}),0)])],1)]),t._v(" "),a("h2",{staticClass:"report__title text-left"},[t._v("仪表记录列表")]),t._v(" "),a("div",{staticClass:"report-form"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading2,expression:"listLoading2"}],staticStyle:{width:"100%"},attrs:{data:t.list2,"row-key":t.rowKey,fit:"","empty-text":t.emptyText2,"highlight-current-row":"","max-height":"400"}},[a("el-table-column",{attrs:{align:t.tableAlign,label:"设备编码",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.dev_code||"--"))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"设备名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.devName||"--"))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"面板编码",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.panelCode||"--"))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"面板名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.panelName||"--"))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.time||"--"))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"图片",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("fancyBox",{attrs:{url:t.row.picUrl}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"目标编号",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.targetNo||"--"))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"目标名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.targetName||"--"))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"类型",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(t._f("filterType")(e.row.type))+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"当前值",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.currentValue||"--"))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"是否异常",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[1!==e.row.isError?a("el-tag",{attrs:{type:"success"}},[t._v("正常")]):a("el-tag",{attrs:{type:"danger"}},[t._v("异常")])]}}])})],1)],1),t._v(" "),a("h2",{staticClass:"report__title text-left"},[t._v("热成像温度列表")]),t._v(" "),a("div",{staticClass:"report-form"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading3,expression:"listLoading3"}],staticStyle:{width:"100%"},attrs:{data:t.list3,"row-key":t.rowKey,fit:"","empty-text":t.emptyText3,"highlight-current-row":"","max-height":"400"}},[a("el-table-column",{attrs:{align:t.tableAlign,label:"检测点编号",width:"160px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.targetNo||"暂无"))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"监测点名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.picName||e.row.targetName||"暂无"))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.time||"暂无"))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"图片",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("fancyBox",{attrs:{url:t.row.picUrl}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"检测值",width:"140px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.currentValue||"暂无"))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:t.tableAlign,label:"是否异常",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[1!==e.row.isError?a("el-tag",{attrs:{type:"success"}},[t._v("正常")]):a("el-tag",{attrs:{type:"danger"}},[t._v("异常")])]}}])})],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确定")])],1)])],1)},i=[],n=(a("ac6a"),a("db72")),s=a("2f62"),r=a("0a1f"),o=a("ed08"),c=Object(s["a"])("robot"),d=c.mapState,u=r["patrol"].selectUnattendedReportForAll,p=r["patrol"].findUnattendedReportDetail,f=r["patrol"].searchRecordList,_=r["patrol"].searchTemperatureRecordList,m={name:"GuardReportDetail",filters:{filterTime:function(t){if("undefined"===typeof t)return"--";var e=t.beginTime,a=t.endTime;return"".concat(e," 至 ").concat(a)},filterType:function(t){var e="";return 1===t?e="仪表":2===t?e="状态灯":3===t&&(e="温度"),e}},data:function(){return{emptyText:null,list:[],total:null,listLoading:!0,pickerOptions:o["m"],listQuery:{page:1,limit:10,deviceId:null,date:null},beginDate:null,endDate:null,detail:{},list2:[],emptyText2:null,list3:[],emptyText3:null,listLoading2:!0,listLoading3:!0,needModal:!0,closeOnClickModel:!1,dialogFormVisible:!1,temp:{robotName:null,beginTime:null,endTime:null,picInfos:null,alarmPics:null,patrolTime:null},fancyBoxWidth:"150px",fancyBoxHeight:"150px",filename:this.$t("route.guard-report-detail")}},computed:Object(n["a"])({},d(["robotsList"]),{computedSelectOption:function(){var t=this.robotsList,e=[{label:"请选择 - 机器人",value:null}];return Array.isArray(t)&&t.length>0?e.concat(t.map(function(t){return{label:t.robotName,value:t.deviceId}})):e},computedAlarmPics:function(){var t=this.detail;if(!t)return[];if(!Array.isArray(t.alarmPics)||0===t.alarmPics.length)return[];var e=[];return t.alarmPics.forEach(function(t){var a=t.alarmTypeName;(Array.isArray(t.picInfos)||0!==t.picInfos.length)&&(e=e.concat(t.picInfos.map(function(t){return Object.assign(t,{alarmTypeName:a})})))}),e},computedUnattendedPics:function(){var t=this.detail;if(!t)return[];if(!Array.isArray(t.unattendedPics)||0===t.unattendedPics.length)return[];var e=[],a=t.pointName;return t.unattendedPics.forEach(function(t){var l=t.unattendedTime;(Array.isArray(t.picInfos)||0!==t.picInfos.length)&&(e=e.concat(t.picInfos.map(function(t){return t.picName?t:Object.assign(t,{picName:a,captureTime:l})})))}),e}}),created:function(){},mounted:function(){var t=this.$route.query,e=t.calendar,a=t.beginDate,l=t.endDate;e&&(this.beginDate=a,this.endDate=l,this.listQuery.date=Object(o["l"])(e,"{y}-{m}-{d}")),this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,this.list=[],this.emptyText=null,u(this.listQuery).then(function(e){t.list=e.data.rows,t.total=e.data.total,t.listLoading=!1},function(e){console.log(e),t.listLoading=!1,t.emptyText="网络错误"})},rowKey:function(t){return t.id},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleCommand:function(t){if("undefined"!==typeof t)switch(t){case"xlsx":var e=["deviceName","filterTime","alarmCount","mapName","remark"],a=["机器人名称","值守时间","告警次数","地图名称","备注"],l=this.list,i=this.filename;this.$g_exportToExcel({field:e,field_ZH:a,list:l,filename:i},this.formatJson);break}},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){if("filterTime"===t){var a=e.beginTime,l=e.endTime;return"".concat(a," 至 ").concat(l)}return"alarmCount"===t?"共".concat(e[t],"次"):e[t]})})},handleDetail:function(t){var e=this;if("undefined"!==typeof t){var a=t.statId;this.temp=Object.assign({},this.temp,t),this.dialogFormVisible=!0,p({statId:a}).then(function(t){e.detail=t.data;var a=t.data,l=a.beginTimeText,i=a.endTimeText;e.fetchTableData(l,i)},function(t){console.log(t)})}},fetchTableData:function(t,e){var a=this;t&&e&&(f({beginTime:t,endTime:e,limit:500}).then(function(t){a.list2=t.data.rows,a.listLoading2=!1},function(t){a.listLoading2=!1,a.emptyText2="网络错误",console.log(t)}),_({beginTime:t,endTime:e,limit:500}).then(function(t){a.list3=t.data.rows,a.listLoading3=!1},function(t){a.listLoading3=!1,a.emptyText3="网络错误",console.log(t)}))}}},v=m,g=(a("4dd1"),a("2877")),b=Object(g["a"])(v,l,i,!1,null,"ecdb61a8",null);e["default"]=b.exports},"4dd1":function(t,e,a){"use strict";var l=a("0674"),i=a.n(l);i.a}}]);