(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[7306],{3131:function(t,e,a){(t.exports=a(9252)(!1)).push([t.id,"#contact{background-color:var(--bg-panel-color);padding:10px;margin-top:20px;border:2px solid var(--border-shade);border-radius:10px}.center-margin{margin-left:auto;margin-right:auto}.center-text{text-align:center}.drop-down-box-background{background-color:#e3e3e3;border:1px solid #b0b0b0;border-bottom-left-radius:6px;border-bottom-right-radius:6px}.inner{margin-left:auto;margin-right:auto;max-width:600px}.patterns{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}.patterns td,.patterns th{border:1px solid #ddd;padding:8px}.patterns td{font-size:12px}.patterns tr:nth-child(2n){background-color:#f2f2f2}.patterns tr:hover{background-color:#ddd}.patterns th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#6e6e6e;color:var(--main-full-text-color-invert)}.inner label,.inner textarea{font-size:.8rem;letter-spacing:1px}.inner input,.inner textarea{padding:10px;max-width:555px;line-height:1.5;border-radius:5px;border:1px solid #ccc;box-shadow:1px 1px 1px #999;margin-bottom:20px}.inner label{display:block;margin-bottom:10px}",""])},7306:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return l}});var o=a(8891),n=a.n(o),r={components:{},data:function(){return{email:"",body:""}},methods:{formSubmit:function(){if(""!=this.body){this.$notify({group:"sqlCommands",title:"Email Has Been Sent",text:"An email has been sent to the developer of sql-pracice.com including your message.",type:"success",duration:15e3});var t=new FormData;t.append("email",this.email),t.append("body",this.body),t.append("_subject","Contacting sql-practice.com"),t.append("_captcha","false");var e=new File([localStorage.getItem("store")],"savefile.json",{type:"text/plain;charset=utf-8"}),a=new File([JSON.stringify(this.getLog(),null,4)],"debug.json",{type:"text/plain;charset=utf-8"});t.append("attachment",e),t.append("debug",a),fetch("https://formsubmit.co/301bd4a8ae8218c51faa398dd02f26bf",{method:"POST",body:t}),this.email="",this.body="",n().track("Email Sent",{email:this.email,body:this.body})}}}};var i=function(t){a(3219)},l=(0,a(2236).Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inner",attrs:{id:"contact"}},[a("h1",{staticClass:"center-text"},[t._v("Contact Form")]),t._v(" "),a("div",{staticStyle:{padding:"10px"}},[a("label",{attrs:{for:"emailInput"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticStyle:{width:"100%"},attrs:{id:"emailInput",placeholder:"name@example.com (optional)"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"bodyInput"}},[t._v("Body")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],staticStyle:{width:"555px"},attrs:{id:"bodyInput",placeholder:"body"},domProps:{value:t.body},on:{input:function(e){e.target.composing||(t.body=e.target.value)}}}),t._v(" "),a("div",{staticClass:"submit-question-btn",on:{click:t.formSubmit}},[t._v("\n      Submit\n    ")])]),t._v(" "),a("br"),a("br"),a("br")])}),[],!1,i,null,null).exports},3219:function(t,e,a){var o=a(3131);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,a(5346).Z)("24cca3e4",o,!0,{})}}]);