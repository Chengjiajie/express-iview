webpackJsonp([25],{251:function(t,e,n){"use strict";function i(t){l||n(525)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(394),r=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);var o=n(527),p=n.n(o),l=!1,c=n(0),d=i,v=c(r.a,p.a,!1,d,null,null);v.options.__file="src\\views\\form\\article-publish\\preview.vue",e.default=v.exports},394:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{articleTitle:"",tagsList:"",classificationSelected:[],content:"",publishTime:""}},mounted:function(){this.articleTitle=localStorage.articleTitle,this.tagsList=localStorage.tagsList?JSON.parse(localStorage.tagsList):[],this.classificationSelected=localStorage.classificationSelected?JSON.parse(localStorage.classificationSelected):[],this.content=localStorage.content,this.publishTime=localStorage.publishTime}}},525:function(t,e,n){var i=n(526);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(11)("288105c9",i,!1)},526:function(t,e,n){e=t.exports=n(10)(!1),e.push([t.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.preview-main {\n  width: 100%;\n  height: 100%;\n  background: #d7e1ed;\n}\n.preview-header {\n  padding-right: 20px;\n  height: 60px;\n  background: #4a5161;\n  text-align: right;\n}\n.preview-header ul {\n  display: inline-block !important;\n}\n.preview-placeholderCon {\n  height: 200px;\n}\n.preview-placeholder {\n  height: 40px;\n  margin-bottom: 10px;\n  background: #9fafd4;\n  border-radius: 3px;\n}\n.preview-tags-con {\n  padding: 5px 0;\n  margin: 10px 0;\n}\n.preview-tip {\n  font-size: 12px;\n  color: #c3c3c3;\n}\n.preview-content-con {\n  border-top: 1px solid #edeff1;\n  border-bottom: 1px solid #edeff1;\n  padding: 12px 0 20px;\n  margin-bottom: 20px;\n}\n.preview-classifition-con {\n  padding: 5px 0;\n}\n.preview-classifition-item {\n  margin-right: 8px;\n}\n.preview-publish-time {\n  font-size: 12px;\n  color: gray;\n  margin-top: 5px;\n}\n",""])},527:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preview-main"},[n("div",{staticClass:"preview-header"},[n("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":"1"}},[n("div",{staticClass:"preview-header-nav"},[n("MenuItem",{attrs:{name:"1"}},[n("Icon",{attrs:{type:"ios-navigate"}}),t._v("\n                    导航一\n                ")],1),t._v(" "),n("MenuItem",{attrs:{name:"2"}},[n("Icon",{attrs:{type:"ios-keypad"}}),t._v("\n                    导航二\n                ")],1),t._v(" "),n("MenuItem",{attrs:{name:"3"}},[n("Icon",{attrs:{type:"ios-analytics"}}),t._v("\n                    导航三\n                ")],1),t._v(" "),n("MenuItem",{attrs:{name:"4"}},[n("Icon",{attrs:{type:"ios-paper"}}),t._v("\n                    导航四\n                ")],1)],1)])],1),t._v(" "),n("Row",{staticClass:"margin-top-20"},[n("Col",{attrs:{span:"12",offset:"5"}},[n("div",[n("Card",[n("h1",[t._v(t._s(t.articleTitle))]),t._v(" "),n("p",{staticClass:"preview-publish-time"},[n("Icon",{attrs:{type:"android-alarm-clock"}}),t._v(" 发布时间："+t._s(t.publishTime))],1),t._v(" "),n("div",{staticClass:"preview-tags-con"},[n("b",{staticClass:"preview-tip"},[n("Icon",{attrs:{type:"ios-pricetags-outline"}}),t._v(" 标签：")],1),t._l(t.tagsList,function(e){return n("Tag",{key:e,attrs:{type:"border",color:"blue"}},[t._v(t._s(e))])})],2),t._v(" "),n("div",{staticClass:"preview-content-con",domProps:{innerHTML:t._s(t.content)}}),t._v(" "),n("div",{staticClass:"preview-classifition-con"},[n("b",{staticClass:"preview-tip"},[n("Icon",{attrs:{type:"navicon-round"}}),t._v(" 目录：")],1),t._v(" "),t._l(t.classificationSelected,function(e){return n("a",{key:e,staticClass:"preview-classifition-item"},[n("Icon",{attrs:{type:"android-folder-open"}}),t._v("\n                            "+t._s(e)+"\n                        ")],1)})],2)])],1)]),t._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"4"}},[n("div",[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"paper-airplane"}}),t._v("\n                        热门文章\n                    ")],1),t._v(" "),n("div",{staticClass:"preview-placeholderCon"},[n("div",{staticClass:"preview-placeholder"}),t._v(" "),n("div",{staticClass:"preview-placeholder"}),t._v(" "),n("div",{staticClass:"preview-placeholder"}),t._v(" "),n("div",{staticClass:"preview-placeholder"})])])],1),t._v(" "),n("div",{staticClass:"margin-top-10"},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"paper-airplane"}}),t._v("\n                        最新文章\n                    ")],1),t._v(" "),n("div",{staticClass:"preview-placeholderCon"},[n("div",{staticClass:"preview-placeholder"}),t._v(" "),n("div",{staticClass:"preview-placeholder"}),t._v(" "),n("div",{staticClass:"preview-placeholder"}),t._v(" "),n("div",{staticClass:"preview-placeholder"})])])],1)])],1)],1)},a=[];i._withStripped=!0;var r={render:i,staticRenderFns:a};e.default=r}});