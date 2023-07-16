(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[5666],{9347:function(t,e,n){(t.exports=n(9252)(!1)).push([t.id,".center-margin{margin-left:auto;margin-right:auto}.drop-down-box-background{background-color:#e3e3e3;border:1px solid #b0b0b0;border-bottom-left-radius:6px;border-bottom-right-radius:6px}.inner{margin-left:auto;margin-right:auto;max-width:600px}.patterns{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}.patterns td,.patterns th{border:1px solid #ddd;padding:8px}.patterns td{font-size:12px}.patterns tr:nth-child(2n){background-color:#f2f2f2}.patterns tr:hover{background-color:#ddd}.patterns th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#6e6e6e;color:var(--main-full-text-color-invert)}",""])},4038:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var a=n(1683),o=n(4246),r=n(3723),s={components:{DropDownBox:a.Z,TryItNow:r.Z,ModalA:o.Z}};var i=function(t){n(9371)},l=(0,n(2236).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner"},[n("h1",[t._v("SQL UNION Operator")]),t._v(" "),n("p",[t._v("The UNION operator is used to combine the result-set of two or more SELECT statements.")]),t._v(" "),n("p",[t._v(" - Every SELECT statement within UNION must have the same number of columns")]),t._v(" "),n("p",[t._v(" - The columns must also have similar data types")]),t._v(" "),n("p",[t._v(" - The columns in every SELECT statement must also be in the same order")]),t._v(" "),n("h2",[t._v("UNION Syntax")]),t._v(" "),n("try-it-now",{attrs:{code:"SELECT column_name(s) FROM table1\n    UNION\nSELECT column_name(s) FROM table2;",tryNowButton:!1}}),t._v(" "),n("h2",[t._v("UNION ALL Syntax")]),t._v(" "),n("p",[t._v("The UNION operator selects only distinct values by default. To allow duplicate values, use UNION ALL:")]),t._v(" "),n("try-it-now",{attrs:{code:"SELECT column_name(s) FROM table1\n    UNION ALL\nSELECT column_name(s) FROM table2;",tryNowButton:!1}}),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("SQL UNION Example")]),t._v(" "),n("p",[t._v('The following SQL statement returns the first_names (only distinct values) from both the "patients" and the "physicians" table:')]),t._v(" "),n("try-it-now",{attrs:{code:"SELECT first_name FROM patients\n    UNION \nSELECT first_name FROM physicians\n    ORDER BY first_name;",tryNowButton:!0}}),t._v(" "),n("h2",[t._v("SQL UNION ALL Example")]),t._v(" "),n("p",[t._v('The following SQL statement returns the first_names (duplicate values also) from both the "patients" and the "physicians" table:')]),t._v(" "),n("try-it-now",{attrs:{code:"SELECT first_name FROM patients\n    UNION ALL\nSELECT first_name FROM physicians\n    ORDER BY first_name;",tryNowButton:!0}}),t._v(" "),n("br"),n("br"),n("br")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("b",[t._v("Note")]),t._v(": The column names in the result-set are usually equal to the column names in the first SELECT statement.")])}],!1,i,null,null).exports},9371:function(t,e,n){var a=n(9347);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(5346).Z)("70e25bb4",a,!0,{})}}]);