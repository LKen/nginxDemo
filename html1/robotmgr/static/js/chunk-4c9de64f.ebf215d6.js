(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c9de64f"],{"016f":function(e,t,i){"use strict";var a=i("a55a"),l=i.n(a);l.a},"469c":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"capture-detail"},[i("div",{staticClass:"row clearfix"},[i("div",{staticClass:"info fl"},[i("div",{staticClass:"label fl"},[e._v("抓拍机器人：")]),e._v(" "),i("div",{staticClass:"content text-ellipsis"},[e._v(e._s(e.robotName))])]),e._v(" "),i("div",{staticClass:"info fl"},[i("div",{staticClass:"label fl",staticStyle:{width:"85px"}},[e._v("抓拍时间：")]),e._v(" "),i("div",{staticClass:"content text-ellipsis"},[e._v(e._s(e.time))])])]),e._v(" "),i("div",{staticClass:"row clearfix"},[i("p",{staticClass:"label"},[e._v("人脸识别结果：")]),e._v(" "),i("div",{staticClass:"result"},[i("div",{staticClass:"imgBox fl"},[i("span",{staticClass:"imgBox__title"},[e._v("抓拍图片")]),e._v(" "),i("div",{staticClass:"imgBox__wrap"},[i("img",{attrs:{src:e.captureUrl,alt:"抓拍图片"}})])]),e._v(" "),0!==e.similarity&&e.registerUrl?i("div",{staticClass:"chartBox fl"},[i("el-progress",{attrs:{type:"circle",percentage:parseFloat(e.similarity.toFixed(2)),width:60,"stroke-width":2}})],1):e._e(),e._v(" "),e.registerUrl?i("div",{staticClass:"imgBox fl"},[i("span",{staticClass:"imgBox__title"},[e._v("注册图片")]),e._v(" "),i("div",{staticClass:"imgBox__wrap"},[i("img",{attrs:{src:e.registerUrl,alt:"注册图片"}})])]):e._e(),e._v(" "),i("div",{staticClass:"txtBox"},[i("p",[e._v("姓名："+e._s(e.name))]),e._v(" "),i("p",[e._v("性别："+e._s(e._f("filterGender")(e.gender)))]),e._v(" "),i("p",[e._v("年龄："+e._s(e.age))]),e._v(" "),i("p",[e._v("人员类型："+e._s(e.type))]),e._v(" "),i("p",[e._v("证件号码："+e._s(e.num))])])])]),e._v(" "),i("div",{staticClass:"row bg clearfix"},[i("p",{staticClass:"label"},[e._v("背景图片：")]),e._v(" "),i("div",{staticClass:"wrap"},[i("img",{attrs:{src:e.captureBackgroundUrl,alt:"背景图片"}})])])])},l=[],s=(i("c5f6"),{filters:{filterGender:function(e){return 1===e?"男":0===e?"女":"--"}},props:{captureUrl:{type:String,default:""},registerUrl:{type:String,default:""},captureBackgroundUrl:{type:String,default:""},name:{type:String,default:"--"},num:{type:String,default:"--"},similarity:{type:[String,Number],required:!1,default:0},robotName:{type:String,default:"--"},gender:{type:String,default:"--"},time:{type:String,default:"--"},age:{type:[String,Number],default:"--"},type:{type:String,default:"--"}},data:function(){return{}},methods:{}}),r=s,n=(i("9172"),i("2877")),o=Object(n["a"])(r,a,l,!1,null,null,null);t["a"]=o.exports},8177:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container new bg with-pagination"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-title"},[i("Toolbar",{attrs:{name:e.filename}},[i("span",{staticClass:"action",on:{click:e.getList}},[i("svg-icon",{attrs:{"icon-class":"search"}}),e._v(" "),i("span",{staticClass:"action__desc"},[e._v(e._s(e.$t("base.search")))])],1),e._v(" "),i("el-dropdown",{staticClass:"action",attrs:{trigger:"click"},on:{command:e.handleCommand}},[i("span",[i("svg-icon",{attrs:{"icon-class":"download"}}),e._v(" "),i("span",{staticClass:"action__desc"},[e._v(e._s(e.$t("base.download")))])],1),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{"data-table-action":"excel",command:"xlsx"}},[e._v("\n              Excel (.xlsx)\n            ")])],1)],1)],1)],1),e._v(" "),i("div",{staticClass:"card-body"},[i("el-row",{staticClass:"filter-container",attrs:{gutter:20}},[i("el-col",{attrs:{xs:12,sm:8,md:4}},[i("el-date-picker",{staticClass:"filter-item",attrs:{size:e.searchSize,type:"datetime",placeholder:"开始时间",align:"right","picker-options":e.pickerOptions},model:{value:e.listQuery.beginTime,callback:function(t){e.$set(e.listQuery,"beginTime",t)},expression:"listQuery.beginTime"}})],1),e._v(" "),i("el-col",{attrs:{xs:12,sm:8,md:4}},[i("el-date-picker",{staticClass:"filter-item",attrs:{size:e.searchSize,type:"datetime",placeholder:"结束时间",align:"right","picker-options":e.pickerOptions},model:{value:e.listQuery.endTime,callback:function(t){e.$set(e.listQuery,"endTime",t)},expression:"listQuery.endTime"}})],1)],1),e._v(" "),i("div",{staticClass:"card-table"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:e.list,"row-key":e.rowKey,fit:"","empty-text":e.emptyText,"highlight-current-row":""}},[i("el-table-column",{attrs:{align:e.tableAlign,label:"抓拍图"},scopedSlots:e._u([{key:"default",fn:function(e){return[i("fancyBox",{attrs:{url:e.row.captureUrl}})]}}])}),e._v(" "),i("el-table-column",{attrs:{align:e.tableAlign,label:"抓拍地点"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.address||"暂无"))]}}])}),e._v(" "),i("el-table-column",{attrs:{align:e.tableAlign,label:"机器人",prop:"deviceId",formatter:e.formatRobot}}),e._v(" "),i("el-table-column",{attrs:{align:e.tableAlign,label:"抓拍时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.captureTime))]}}])}),e._v(" "),i("el-table-column",{attrs:{align:e.tableAlign,label:"操作",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("i",{staticClass:"el-icon-edit card-table__icon",staticStyle:{cursor:"pointer"},on:{click:function(i){return e.handleEdit(t.row)}}}),e._v(" "),i("i",{staticClass:"el-icon-ext-details card-table__icon",staticStyle:{cursor:"pointer"},on:{click:function(i){return e.openDetail(t.row)}}})]}}])})],1)],1)],1)]),e._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),i("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],staticClass:"app-container__dialog",attrs:{title:"注册人脸信息",visible:e.dialogFormVisible,modal:e.needModal,"close-on-click-modal":e.closeOnClickModel,width:"450px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"dataForm",staticStyle:{width:"80%",margin:"auto"},attrs:{rules:e.rules,model:e.temp,size:e.formSize,"label-position":e.formAlign,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"名称",prop:"name"}},[i("el-input",{model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name","string"===typeof t?t.trim():t)},expression:"temp.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"年龄",prop:"age"}},[i("el-input",{attrs:{type:"number"},model:{value:e.temp.age,callback:function(t){e.$set(e.temp,"age",e._n(t))},expression:"temp.age"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"性别",prop:"gender"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.temp.gender,callback:function(t){e.$set(e.temp,"gender",t)},expression:"temp.gender"}},[i("el-option",{attrs:{label:"女",value:0}}),e._v(" "),i("el-option",{attrs:{label:"男",value:1}}),e._v(" "),i("g-icon",{staticClass:"el-input__icon",attrs:{slot:"prefix","icon-class":"list"},slot:"prefix"})],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"人员类型",prop:"personTypeCode"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.temp.personTypeCode,callback:function(t){e.$set(e.temp,"personTypeCode",t)},expression:"temp.personTypeCode"}},[e._l(e.typeList,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})}),e._v(" "),i("g-icon",{staticClass:"el-input__icon",attrs:{slot:"prefix","icon-class":"list"},slot:"prefix"})],2)],1),e._v(" "),i("el-form-item",{attrs:{label:"证件类型",prop:"certificateType"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.temp.certificateType,callback:function(t){e.$set(e.temp,"certificateType",t)},expression:"temp.certificateType"}},[i("el-option",{attrs:{label:"身份证",value:0}}),e._v(" "),i("el-option",{attrs:{label:"员工证",value:1}}),e._v(" "),i("g-icon",{staticClass:"el-input__icon",attrs:{slot:"prefix","icon-class":"list"},slot:"prefix"})],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"证件号",prop:"certificateId"}},[i("el-input",{model:{value:e.temp.certificateId,callback:function(t){e.$set(e.temp,"certificateId","string"===typeof t?t.trim():t)},expression:"temp.certificateId"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"分组",prop:"groupId"}},[i("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.temp.groupId,callback:function(t){e.$set(e.temp,"groupId",t)},expression:"temp.groupId"}},[e._l(e.groupList,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),e._v(" "),i("g-icon",{staticClass:"el-input__icon",attrs:{slot:"prefix","icon-class":"list"},slot:"prefix"})],2)],1),e._v(" "),i("el-form-item",{attrs:{label:"人脸照片",prop:"facePicUrl"}},[i("el-input",{model:{value:e.temp.picUrl,callback:function(t){e.$set(e.temp,"picUrl","string"===typeof t?t.trim():t)},expression:"temp.picUrl"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.sending,expression:"sending"}],attrs:{disabled:e.sending},on:{click:e.updateData}},[e._v("提交")])],1)],1),e._v(" "),i("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{title:"人脸识别详细信息","append-to-body":!0,top:"8vh",visible:e.dialogVisible,modal:e.needModal,"close-on-click-modal":e.closeOnClickModel,width:"700px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("capture-detail",e._b({},"capture-detail",e.temp_detail,!1)),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("确定")])],1)],1)],1)},l=[],s=(i("7f7f"),i("db72")),r=i("2f62"),n=i("0a1f"),o=i("469c"),c=i("ed08"),d=Object(r["a"])("robot"),p=d.mapState,u=n["face"].selectFaceGroup,m=n["face"].getFacePersonType,g=n["face"].searchFaceUnRecognitionInfoWeb,f=n["face"].registerFace,v={name:"UnidentifiedPersonQuery",components:{CaptureDetail:o["a"]},data:function(){var e=new Date;return e.setTime(e.getTime()-6048e5),{emptyText:null,list:[],total:null,listLoading:!0,pickerOptions:c["m"],listQuery:{page:1,limit:10,age:"",gender:1,beginTime:Object(c["l"])(e),endTime:""},needModal:!0,closeOnClickModel:!1,dialogFormVisible:!1,temp:{type:0,name:"",age:"",gender:1,personType:"1",defenceStatus:"",personTypeCode:"",certificateType:"1",certificateId:"",groupId:"",picUrl:""},tempLoading:!0,rules:{name:[{required:!0,message:"名称不能为空！",trigger:"blur"}],age:[{required:!0,message:"年龄不能为空！",trigger:"blur"}],gender:[{required:!0,message:"不能为空",trigger:"blur"}],certificateType:[{required:!0,message:"证件类型不能为空！",trigger:"blur"}],certificateId:[{required:!0,message:"证件号不能为空！",trigger:"blur"}],personTypeCode:[{required:!0,message:"人员类型不能为空！",trigger:"blur"}],picUrl:[{required:!0,message:"人脸图片不能为空！",trigger:"blur"}]},sending:!1,typeList:[],groupList:[],dialogVisible:!1,temp_detail:{},filename:this.$t("route.unidentified-person-query")}},computed:Object(s["a"])({},p({robotsList:function(e){return e.robotsList}})),created:function(){},mounted:function(){this.getList(),this.getPersonType(),this.getGroupList()},methods:{getList:function(){var e=this;this.listLoading=!0,this.emptyText=null,g(this.listQuery).then(function(t){e.list=t.data.rows,e.total=t.data.total,e.listLoading=!1},function(t){console.log(t),e.listLoading=!1,e.emptyText="网络错误"})},getGroupList:function(){var e=this;u(this.listQuery2).then(function(t){e.groupList=t.data||[]},function(e){console.log(e)})},getPersonType:function(){var e=this;m({page:1,limit:999}).then(function(t){e.typeList=t.data},function(e){console.log(e)})},rowKey:function(e){return e.id},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleCommand:function(e){if("undefined"!==typeof e)switch(e){case"xlsx":var t=["gender","age","captureUrl","captureBgUrl","captureTime","address"],i=["性别","年龄","抓拍图","抓拍背景图","抓拍时间","抓拍地点"],a=this.list,l=this.filename;this.$g_exportToExcel({field:t,field_ZH:i,list:a,filename:l},this.formatJson);break}},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})},handleEdit:function(e){var t=this;this.resetTemp();var i=e.type,a=e.age,l=e.gender,s=e.captureUrl;this.temp=Object.assign({},this.temp,{type:i,age:a,gender:l,picUrl:s}),this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs["dataForm"].clearValidate()})},resetTemp:function(){this.temp={type:0,name:"",age:"",gender:"",defenceStatus:"",personTypeCode:"",certificateType:"",certificateId:"",groupId:"",picUrl:""}},updateData:function(){var e=this;this.$refs["dataForm"].validate(function(t){t&&(e.sending=!0,f(e.temp).then(function(t){e.sending=!1,e.$message.success(t.msg),e.dialogFormVisible=!1},function(t){e.sending=!1,console.log(t)}))})},formatRobot:function(e,t,i,a){var l=this.robotsList,s="--";return l.some(function(e){return e.deviceId===i&&(s=e.robotName,!0)}),s},openDetail:function(e){var t=e.captureUrl,i=e.registerUrl,a=e.captureBackgroundUrl,l=e.name,s=e.certificateId,r=e.similarityThreshold,n=e.deviceName,o=e.gender,c=e.captureTime,d=e.age,p=e.personTypeName;this.temp_detail={captureUrl:t,registerUrl:i,captureBackgroundUrl:a,similarity:r,robotName:n,name:l||"陌生人",num:s||"--",gender:o,time:c||"--",age:d||"--",type:p||"--"},this.dialogVisible=!0}}},_=v,b=(i("016f"),i("2877")),y=Object(b["a"])(_,a,l,!1,null,"104737e7",null);t["default"]=y.exports},9172:function(e,t,i){"use strict";var a=i("d269"),l=i.n(a);l.a},a55a:function(e,t,i){},d269:function(e,t,i){}}]);