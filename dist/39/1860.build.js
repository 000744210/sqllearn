(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[1860],{5329:function(e,t,n){(e.exports=n(9252)(!1)).push([e.id,".center-margin{margin-left:auto;margin-right:auto}.center-text{text-align:center}.drop-down-box-background{background-color:#e3e3e3;border:1px solid #b0b0b0;border-bottom-left-radius:6px;border-bottom-right-radius:6px}.inner{margin-left:auto;margin-right:auto;max-width:600px}.patterns{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}.patterns td,.patterns th{border:1px solid #ddd;padding:8px}.patterns td{font-size:12px}.patterns tr:nth-child(2n){background-color:#f2f2f2}.patterns tr:hover{background-color:#ddd}.patterns th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#6e6e6e;color:var(--main-full-text-color-invert)}",""])},1860:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var o={components:{},data:function(){return{newQuestion_question:"",newQuestion_solution:""}},methods:{newQuestionFormSubmit:function(){if(""!=this.newQuestion_question||""!=this.newQuestion_solution){this.$notify({group:"sqlCommands",title:"Question Has Been Sent",text:"You have submitted a question to be reviewed and included to the website.",type:"success",duration:15e3});var e=new FormData;e.append("_subject","Question Submission"),e.append("question",this.newQuestion_question),e.append("solution",this.newQuestion_solution),e.append("_captcha","false"),fetch("https://formsubmit.co/301bd4a8ae8218c51faa398dd02f26bf",{method:"POST",body:e}),this.newQuestion_question="",this.newQuestion_solution=""}},postDataRedirect:function(e,t,n){var o=document.createElement("form");if(o.method="POST",o.action=n,o.target="_blank",e.constructor===Array&&t.constructor===Array)for(var i=0;i<e.length;i++){var s=document.createElement("input");s.type="hidden",s.value=e[i],s.name=t[i],o.appendChild(s)}else{var a=document.createElement("input");a.type="hidden",a.value=e,a.name=t,o.appendChild(a)}var r=document.createElement("input");r.type="hidden",r.value="false",r.name="_captcha",o.appendChild(r),document.body.appendChild(o),o.submit()}}};var i=function(e){n(2793)},s=(0,n(2236).Z)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inner"},[n("h1",{staticClass:"center-text"},[e._v("Submit A Question & Solution")]),e._v(" "),e._m(0),e._v(" "),n("div",{staticStyle:{padding:"10px"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newQuestion_question,expression:"newQuestion_question"}],staticStyle:{width:"100%"},attrs:{placeholder:"Question"},domProps:{value:e.newQuestion_question},on:{input:function(t){t.target.composing||(e.newQuestion_question=t.target.value)}}}),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newQuestion_solution,expression:"newQuestion_solution"}],staticStyle:{width:"100%"},attrs:{placeholder:"Solution"},domProps:{value:e.newQuestion_solution},on:{input:function(t){t.target.composing||(e.newQuestion_solution=t.target.value)}}}),e._v(" "),n("div",{staticClass:"submit-question-btn",on:{click:e.newQuestionFormSubmit}},[e._v("\n      Submit\n    ")])]),e._v(" "),n("br"),n("br"),n("br")])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"questionBox"},[e._v("\n    Help expand our question list. Create a question and the solution query to\n    the question."),n("br"),n("br"),e._v("It is preferred if the question is based on the\n    patients table for ease of learning. Do not use a syntax that is not\n    supported in the the main sql languages (pl/sql, MySql, SqlServer, pgSQL, etc)."),n("br"),n("br"),e._v("Please verify that your solution is\n    correct. The backend of this website uses sqlite 3.35.0.\n  ")])}],!1,i,null,null).exports},2793:function(e,t,n){var o=n(5329);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(5346).Z)("6a1ed37e",o,!0,{})}}]);