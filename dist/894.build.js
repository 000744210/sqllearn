(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[894],{3299:function(t,e,o){(t.exports=o(9252)(!1)).push([t.id,'.export-btn{background-color:var(--bg-button-color);border:1px solid var(--border-shade);border-radius:4px;margin:4px;padding:10px;text-align:center;cursor:pointer}.setting-export-gridbox{display:grid;grid-template-columns:1fr 1fr 1fr}.setting-scroll-body{padding:20px}.label-color{color:var(--main-text-color)}.ck-container,.export-style{display:block;position:relative;margin-bottom:12px;font-size:22px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ck-container{padding-left:35px;cursor:pointer}.ck-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{border-radius:4px;position:absolute;top:0;left:0;height:25px;width:25px;background-color:#eee;border:1px solid}.ck-container:hover input~.checkmark{background-color:#ccc}.ck-container input:checked~.checkmark{background-color:#2196f3}.checkmark:after{content:"";position:absolute;display:none}.ck-container input:checked~.checkmark:after{display:block}.ck-container .checkmark:after{left:9px;top:5px;width:5px;height:10px;border:solid #fff;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.setting-title{color:var(--main-text-color)!important}.center-margin{margin-left:auto;margin-right:auto}.center-text{text-align:center}.setting-main-body-style{max-height:90%;margin-top:5%;background-color:#fff;border-radius:5px;border:1px solid #b0b0b0}.setting-inner{background-color:var(--bg-panel-color);margin-left:auto;margin-right:auto;max-width:600px}',""])},3162:function(t,e,o){var n,r,a;r=[],void 0===(a="function"==typeof(n=function(){"use strict";function e(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function n(t,e,o){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){s(n.response,e,o)},n.onerror=function(){console.error("could not download file")},n.send()}function r(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(o){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,c=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(t,e,o){var c=i.URL||i.webkitURL,s=document.createElement("a");e=e||t.name||"download",s.download=e,s.rel="noopener","string"==typeof t?(s.href=t,s.origin===location.origin?a(s):r(s.href)?n(t,e,o):a(s,s.target="_blank")):(s.href=c.createObjectURL(t),setTimeout((function(){c.revokeObjectURL(s.href)}),4e4),setTimeout((function(){a(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,o,i){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,i),o);else if(r(t))n(t,o,i);else{var c=document.createElement("a");c.href=t,c.target="_blank",setTimeout((function(){a(c)}))}}:function(t,e,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof t)return n(t,e,o);var a="application/octet-stream"===t.type,s=/constructor/i.test(i.HTMLElement)||i.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||a&&s||c)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location=t,r=null},u.readAsDataURL(t)}else{var p=i.URL||i.webkitURL,d=p.createObjectURL(t);r?r.location=d:location.href=d,r=null,setTimeout((function(){p.revokeObjectURL(d)}),4e4)}});i.saveAs=s.saveAs=s,t.exports=s})?n.apply(e,r):n)||(t.exports=a)},894:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return i}});var n=o(3162),r={components:{},data:function(){return{}},mounted:function(){},methods:{importClick:function(){var t=this;new Promise((function(t){var e=document.createElement("input");e.type="file",e.multiple=!1,e.accept="txt/*",e.onchange=function(){var o=Array.from(e.files);t(o[0])},e.click()})).then((function(e){return e.text().then((function(e){var o=JSON.parse(e);t.$store.commit("importSave",o),confirm("Save file has been loaded.")}))}))},exportClick:function(){var t=new Blob([localStorage.getItem("store")],{type:"text/plain;charset=utf-8"});(0,n.saveAs)(t,"savefile sql-practice.com.txt")},resetClick:function(){confirm("Are you sure you want to reset your progress?")&&(localStorage.clear(),location.reload())},getSettingValue:function(t){return this.$store.getters.getSettingValue(t)},setSettingValue:function(t,e){this.$store.commit("setSettingValue",{key:t,value:e})}}};var a=function(t){o(8778)},i=(0,o(2236).Z)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"setting-inner setting-main-body-style"},[o("h1",{staticClass:"center-text setting-title"},[t._v("Settings")]),t._v(" "),o("div",{staticClass:"setting-scroll-body"},[o("label",{staticClass:"ck-container label-color"},[t._v("Dark Mode\n      "),o("input",{attrs:{type:"checkbox"},domProps:{checked:t.getSettingValue("isDarkMode")},on:{change:function(e){return t.setSettingValue("isDarkMode",e.target.checked)}}}),t._v(" "),o("span",{staticClass:"checkmark"})]),t._v(" "),o("label",{staticClass:"ck-container label-color"},[t._v("Auto Run After Typing\n      "),o("input",{attrs:{type:"checkbox"},domProps:{checked:t.getSettingValue("autoRun")},on:{change:function(e){return t.setSettingValue("autoRun",e.target.checked)}}}),t._v(" "),o("span",{staticClass:"checkmark"})]),t._v(" "),o("div",{staticClass:"export-style label-color",staticStyle:{"margin-top":"20px"}},[o("div",{staticClass:"center-text"},[t._v("Save File")]),t._v(" "),o("div",{staticClass:"setting-export-gridbox"},[o("div",{staticClass:"export-btn",on:{click:t.importClick}},[t._v("Import")]),t._v(" "),o("div",{staticClass:"export-btn",on:{click:t.exportClick}},[t._v("Export")]),t._v(" "),o("div",{staticClass:"export-btn",on:{click:t.resetClick}},[t._v("Reset")])])])])])}),[],!1,a,null,null).exports},8778:function(t,e,o){var n=o(3299);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);(0,o(5346).Z)("27ee2644",n,!0,{})}}]);