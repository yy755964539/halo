(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228c74"],{db44:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"page-header-index-wide"},[o("a-row",{attrs:{gutter:12}},[o("a-col",{attrs:{span:24}},[o("div",{staticStyle:{"margin-bottom":"16px"}},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请输入文章标题"}]}],expression:"['title', { rules: [{ required: true, message: '请输入文章标题' }] }]"}],attrs:{size:"large",placeholder:"请输入文章标题"},model:{value:e.postToStage.title,callback:function(t){e.$set(e.postToStage,"title",t)},expression:"postToStage.title"}})],1),o("div",{attrs:{id:"editor"}},[o("halo-editor",{ref:"md",attrs:{boxShadow:!1,toolbars:e.toolbars,ishljs:!0,autofocus:!1},on:{imgAdd:e.handleAttachmentUpload},nativeOn:{keydown:[function(t){return(t.type.indexOf("key")||83===t.keyCode)&&t.ctrlKey?e.handleSaveDraft(t):null},function(t){return(t.type.indexOf("key")||83===t.keyCode)&&t.metaKey?e.handleSaveDraft(t):null}]},model:{value:e.postToStage.originalContent,callback:function(t){e.$set(e.postToStage,"originalContent",t)},expression:"postToStage.originalContent"}})],1)])],1),o("PostSetting",{attrs:{post:e.postToStage,tagIds:e.selectedTagIds,categoryIds:e.selectedCategoryIds,visible:e.postSettingVisible},on:{close:e.onPostSettingsClose,onRefreshPost:e.onRefreshPostFromSetting,onRefreshTagIds:e.onRefreshTagIdsFromSetting,onRefreshCategoryIds:e.onRefreshCategoryIdsFromSetting}}),o("AttachmentDrawer",{model:{value:e.attachmentDrawerVisible,callback:function(t){e.attachmentDrawerVisible=t},expression:"attachmentDrawerVisible"}}),o("footer-tool-bar",{style:{width:e.isSideMenu()&&e.isDesktop()?"calc(100% - "+(e.sidebarOpened?256:80)+"px)":"100%"}},[o("a-button",{attrs:{type:"danger"},on:{click:e.handleSaveDraft}},[e._v("保存草稿")]),o("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.handlePreview}},[e._v("预览")]),o("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:e.handleShowPostSetting}},[e._v("发布")]),o("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"dashed"},on:{click:function(){return t.attachmentDrawerVisible=!0}}},[e._v("附件库")])],1)],1)},s=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),i=a("ac0d"),r=a("2f62"),d=a("c1df"),l=a.n(d),c=a("7fdf"),g=a("ed4e"),p=a("5a70"),u=a("2749"),h=a("6ea2"),f=(a("6648"),a("caf6")),S=a("a796");function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(a,!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var w={mixins:[i["a"],i["b"]],components:{PostSetting:c["a"],haloEditor:h["haloEditor"],FooterToolBar:p["a"],AttachmentDrawer:g["a"]},data:function(){return{toolbars:u["a"],wrapperCol:{xl:{span:24},sm:{span:24},xs:{span:24}},attachmentDrawerVisible:!1,postSettingVisible:!1,postToStage:{},selectedTagIds:[],selectedCategoryIds:[]}},beforeRouteEnter:function(t,e,a){var o=t.query.postId;a((function(t){o&&f["a"].get(o).then((function(e){var a=e.data.data;t.postToStage=a,t.selectedTagIds=a.tagIds,t.selectedCategoryIds=a.categoryIds}))}))},destroyed:function(){this.postSettingVisible&&(this.postSettingVisible=!1),this.attachmentDrawerVisible&&(this.attachmentDrawerVisible=!1),window.onbeforeunload=null},beforeRouteLeave:function(t,e,a){if(this.postSettingVisible&&(this.postSettingVisible=!1),this.attachmentDrawerVisible&&(this.attachmentDrawerVisible=!1),this.postToStage.originalContent){var o=window.confirm("当前文章数据未保存，确定要离开吗？");o?a():a(!1)}else a()},mounted:function(){window.onbeforeunload=function(t){return t=t||window.event,t&&(t.returnValue="当前文章数据未保存，确定要离开吗？"),"当前文章数据未保存，确定要离开吗？"}},computed:m({},Object(r["c"])(["options"])),methods:{handleSaveDraft:function(){var t=this;this.postToStage.status="DRAFT",this.postToStage.title||(this.postToStage.title=l()(new Date).format("YYYY-MM-DD-HH-mm-ss")),this.postToStage.originalContent||(this.postToStage.originalContent="开始编辑..."),this.postToStage.id?f["a"].update(this.postToStage.id,this.postToStage,!1).then((function(e){t.$log.debug("Updated post",e.data.data),t.$message.success("保存草稿成功！")})):f["a"].create(this.postToStage,!1).then((function(e){t.$log.debug("Created post",e.data.data),t.$message.success("保存草稿成功！"),t.postToStage=e.data.data}))},handleAttachmentUpload:function(t,e){var a=this,o=new FormData;o.append("file",e),S["a"].upload(o).then((function(e){var o=e.data;if(200===o.status){var s=a.$refs.md;s.$img2Url(t,encodeURI(o.data.path)),a.$message.success("图片上传成功！")}else a.$message.error("图片上传失败："+o.message)}))},handleShowPostSetting:function(){this.postSettingVisible=!0},handlePreview:function(){var t=this;this.postToStage.status="DRAFT",this.postToStage.title||(this.postToStage.title=l()(new Date).format("YYYY-MM-DD-HH-mm-ss")),this.postToStage.originalContent||(this.postToStage.originalContent="开始编辑..."),this.postToStage.id?f["a"].update(this.postToStage.id,this.postToStage,!1).then((function(e){t.$log.debug("Updated post",e.data.data),f["a"].preview(t.postToStage.id).then((function(t){window.open(t.data,"_blank")}))})):f["a"].create(this.postToStage,!1).then((function(e){t.$log.debug("Created post",e.data.data),t.postToStage=e.data.data,f["a"].preview(t.postToStage.id).then((function(t){window.open(t.data,"_blank")}))}))},onPostSettingsClose:function(){this.postSettingVisible=!1},onRefreshPostFromSetting:function(t){this.postToStage=t},onRefreshTagIdsFromSetting:function(t){this.selectedTagIds=t},onRefreshCategoryIdsFromSetting:function(t){this.selectedCategoryIds=t}}},T=w,v=a("2877"),y=Object(v["a"])(T,o,s,!1,null,null,null);e["default"]=y.exports}}]);