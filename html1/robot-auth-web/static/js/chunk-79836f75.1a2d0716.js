(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79836f75"],{"13b6":function(t,e,i){},"169b":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{ref:"toolbar",staticClass:"g-toolbar g-toolbar--inner"},[i("div",{staticClass:"g-toolbar__label"},[i("el-input",{attrs:{size:t.formSize,placeholder:"单位名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(e)}},model:{value:t.listQuery.companyName,callback:function(e){t.$set(t.listQuery,"companyName","string"===typeof e?e.trim():e)},expression:"listQuery.companyName"}},[i("i",{staticClass:"el-input__icon el-icon-ext-user",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),i("div",{staticClass:"g-toolbar__actions"},[i("span",{staticClass:"action",on:{click:t.addUnit}},[i("g-icon",{attrs:{"icon-class":"plus"}}),t._v(" "),i("span",{staticClass:"action__desc"},[t._v(t._s(t.$t("base.plus")))])],1),t._v(" "),i("span",{staticClass:"action",on:{click:t.getList}},[i("g-icon",{attrs:{"icon-class":"search"}}),t._v(" "),i("span",{staticClass:"action__desc"},[t._v(t._s(t.$t("base.search")))])],1)])]),t._v(" "),i("div",{staticClass:"form-wrapper"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:t.list,"row-key":t.rowKey,fit:"","empty-text":t.emptyText,"highlight-current-row":"","max-height":t.tableHeight}},[i("el-table-column",{attrs:{align:t.textAlign,label:"名称",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("defaultValue")(e.row.companyName)))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:t.textAlign,label:"编码"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("defaultValue")(e.row.companyCode)))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:t.textAlign,label:"修改时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("parseTime")(e.row.updateTime)))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:t.textAlign,label:"操作",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("i",{staticClass:"el-icon-edit g-table__icon",staticStyle:{cursor:"pointer"},on:{click:function(i){return t.edit(e.row)}}}),t._v(" "),i("i",{staticClass:"el-icon-delete g-table__icon",staticStyle:{cursor:"pointer"},on:{click:function(i){return t.del(e.row)}}})]}}])})],1),t._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),i("el-dialog",{attrs:{"append-to-body":!0,top:"25vh",title:t.dialogTitle,visible:t.dialogVisible,modal:t.needModal,"close-on-click-modal":t.closeOnClickModel,width:"550px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-form",{ref:"dataForm",staticStyle:{width:"80%",margin:"0 auto"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"100px"}},[i("el-form-item",{attrs:{label:"单位名称",prop:"companyName"}},[i("el-input",{attrs:{size:t.formSize,placeholder:""},model:{value:t.temp.companyName,callback:function(e){t.$set(t.temp,"companyName","string"===typeof e?e.trim():e)},expression:"temp.companyName"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"单位编码",prop:"companyCode"}},[i("el-input",{attrs:{size:t.formSize,placeholder:""},model:{value:t.temp.companyCode,callback:function(e){t.$set(t.temp,"companyCode","string"===typeof e?e.trim():e)},expression:"temp.companyCode"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.sending,expression:"sending"}],on:{click:t.saveUnit}},[t._v("保存")])],1)],1)],1)},n=[],s=(i("20d6"),i("365c")),l=s["b"].editCustomerCompany,o=s["b"].deleteCustomerCompany,c=s["b"].selectCustomerCompany,r={name:"",data:function(){return{emptyText:null,textAlign:"center",tableHeight:650,list:[],total:null,listLoading:!0,formSize:"small",listQuery:{page:1,limit:10,companyName:null},dialogTitle:"添加使用单位",needModal:!0,closeOnClickModel:!1,dialogVisible:!1,sending:!1,temp:{id:null,companyName:"",companyCode:""},rules:{companyName:[{required:!0,message:"不能为空",trigger:"blur"}],companyCode:[{required:!0,message:"不能为空",trigger:"blur"}]}}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,this.emptyText=null,c(this.listQuery).then((function(e){t.list=e.data.rows,t.total=e.data.total,t.listLoading=!1}),(function(e){console.log(e),t.listLoading=!1,t.emptyText="网络错误"}))},rowKey:function(t){return t.id},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},addUnit:function(){var t=this;this.dialogTitle="添加使用单位",this.temp={id:null,companyName:"",companyCode:""},this.dialogVisible=!0,this.$nextTick((function(){t.$refs["dataForm"]&&t.$refs["dataForm"].clearValidate()}))},edit:function(t){var e=this;this.dialogTitle="编辑使用单位";var i=t.companyCode,a=t.companyName,n=t.id;this.temp=Object.assign({},{id:n,companyCode:i,companyName:a}),this.dialogVisible=!0,this.$nextTick((function(){e.$refs["dataForm"]&&e.$refs["dataForm"].clearValidate()}))},del:function(t){var e=this,i=t.id,a=this.list;this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){o({id:i}).then((function(i){e.$message({type:"success",message:i.msg});var n=a.indexOf(t);n>-1&&a.splice(n,1)}),(function(t){console.log(t)}))})).catch((function(){}))},saveUnit:function(){var t=this;this.sending||this.$refs["dataForm"].validate((function(e){if(e){t.sending=!0;var i=t.list,a=t.temp.id;l(t.temp).then((function(e){t.sending=!1,t.$message.success(e.msg);var n=t._.findIndex(i,{id:a});n<0?i.splice(0,0,Object.assign({},e.data)):i.splice(n,1,Object.assign({},e.data)),t.dialogVisible=!1}),(function(e){t.sending=!1,console.log(e)}))}}))}}},d=r,u=(i("b6ab"),i("2877")),m=Object(u["a"])(d,a,n,!1,null,"103fea9e",null);e["default"]=m.exports},"20d6":function(t,e,i){"use strict";var a=i("5ca1"),n=i("0a49")(6),s="findIndex",l=!0;s in[]&&Array(1)[s]((function(){l=!1})),a(a.P+a.F*l,"Array",{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")(s)},b6ab:function(t,e,i){"use strict";var a=i("13b6"),n=i.n(a);n.a}}]);