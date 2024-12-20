(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[709],{471:function(t,e,n){(t.exports=n(9252)(!1)).push([t.id,".center-margin,.inner{margin-left:auto;margin-right:auto}.inner{max-width:600px}.patterns{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}.patterns td,.patterns th{border:1px solid #ddd;padding:8px}.patterns td{font-size:12px}.patterns tr:nth-child(2n){background-color:#f2f2f2}.patterns tr:hover{background-color:#ddd}.patterns th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#6e6e6e;color:var(--main-full-text-color-invert)}",""])},709:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var a=n(2880),r=n(1772),o=n(845),s={components:{DropDownBox:a.Z,TryItNow:o.Z,ModalA:r.Z}};var i=function(t){n(7678)},l=(0,n(2236).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner"},[n("h1",[t._v("SQL Lead() Window Function")]),t._v(" "),n("p",[t._v("\n      The Lead() function returns the record offsetted by the specified amount.\n    ")]),t._v(" "),n("h2",[t._v("Syntax")]),t._v(" "),n("try-it-now",{attrs:{code:"Lead(expression [, offset])",tryNowButton:!1}}),t._v(" "),n("h2",[t._v("Parameter Values")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Lead() Example")]),t._v(" "),n("p",[t._v("\n      The following SQL statement displays every patients first_name and the patient's first_name after them.\n    ")]),t._v(" "),n("try-it-now",{attrs:{code:"select\n  patient_id,\n  first_name,\n  lead(first_name, 1) over() as next_name\nfrom patients",tryNowButton:!0}}),t._v(" "),n("br"),n("br"),n("br")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"patterns"},[n("thead",[n("tr",[n("th",[t._v("Parameter")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("expression")]),t._v(" "),n("td",[t._v("\n            Required. The value to be returned based on the specified offset. It\n            is an expression of any type that returns a single (scalar) value.\n            expression cannot be an analytic function.\n          ")])]),t._v(" "),n("tr",[n("td",[t._v("offset")]),t._v(" "),n("td",[t._v("\n            Optional. The number of rows forwards from the current row from which to\n            obtain a value. If not specified, the default is 1. offset can be a\n            column, subquery, or other expression that evaluates to a positive\n            integer. offset cannot be a\n            negative value or an analytic function.\n          ")])])])])}],!1,i,null,null).exports},7678:function(t,e,n){var a=n(471);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(5346).Z)("19544714",a,!0,{})}}]);