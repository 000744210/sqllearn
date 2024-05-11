(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[8212],{7443:function(t,e,n){(t.exports=n(9252)(!1)).push([t.id,".center-margin{margin-left:auto;margin-right:auto}.drop-down-box-background{background-color:#e3e3e3;border:1px solid #b0b0b0;border-bottom-left-radius:6px;border-bottom-right-radius:6px}.inner{margin-left:auto;margin-right:auto;max-width:600px}.patterns{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}.patterns td,.patterns th{border:1px solid #ddd;padding:8px}.patterns td{font-size:12px}.patterns tr:nth-child(2n){background-color:#f2f2f2}.patterns tr:hover{background-color:#ddd}.patterns th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#6e6e6e;color:var(--main-full-text-color-invert)}",""])},8212:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var r=n(2880),a=n(4246),o=n(497),i={components:{DropDownBox:r.Z,TryItNow:o.Z,ModalA:a.Z}};var s=function(t){n(4900)},l=(0,n(2236).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner"},[n("h1",[t._v("SQL Last_Value() Window Function")]),t._v(" "),n("p",[t._v("\n      The LAST_VALUE() function is a window function that returns the last value\n      in an ordered partition of a result set.\n    ")]),t._v(" "),n("h2",[t._v("Syntax")]),t._v(" "),n("try-it-now",{attrs:{code:"LAST_VALUE ( scalar_expression )  \nOVER ( \n    [PARTITION BY partition_expression, ... ]\n    ORDER BY sort_expression [ASC | DESC], ...\n)",tryNowButton:!1}}),t._v(" "),n("h2",[t._v("Parameter Values")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Last_Value() Example")]),t._v(" "),n("p",[t._v("\n      The following SQL statement displays the youngest patient's birth_date for\n      the province the patient is in.\n    ")]),t._v(" "),n("try-it-now",{attrs:{code:"select\n  patient_id,\n  province_id,\n  last_value(birth_date)\n  over(partition by province_id -- group by province_id\n       order by birth_date -- order it by birth_date for the last_value\n       -- select all rows in the partiton\n       rows between UNBOUNDED PRECEDING and unbounded following\n  ) as youngest_birth_date\nfrom patients\norder by patient_id",tryNowButton:!0}}),t._v(" "),n("br"),n("br"),n("br")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"patterns"},[n("thead",[n("tr",[n("th",[t._v("Parameter")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("scalar_expression")]),t._v(" "),n("td",[t._v("\n            Required. scalar_expression is an expression evaluated against the\n            value of the last row in an ordered partition of the result set. The\n            scalar_expression can be a column, subquery, or expression evaluates\n            to a single value. It cannot be a window function.\n          ")])])])])}],!1,s,null,null).exports},4900:function(t,e,n){var r=n(7443);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(5346).Z)("69ee51f6",r,!0,{})}}]);