(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[3005],{5970:function(t,e,n){(t.exports=n(9252)(!1)).push([t.id,".center-margin{margin-left:auto;margin-right:auto}.drop-down-box-background{background-color:#e3e3e3;border:1px solid #b0b0b0;border-bottom-left-radius:6px;border-bottom-right-radius:6px}.inner{margin-left:auto;margin-right:auto;max-width:600px}",""])},3005:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var o=n(2880),r=n(4246),a=n(497),s={components:{DropDownBox:o.Z,TryItNow:a.Z,ModalA:r.Z}};var i=function(t){n(4434)},l=(0,n(2236).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner"},[n("h1",[t._v("SQL IN Operator")]),t._v(" "),n("p",[t._v("The IN operator allows you to specify multiple values in a WHERE clause.")]),t._v(" "),n("p",[t._v("The IN operator is a shorthand for multiple OR conditions.")]),t._v(" "),n("h2",[t._v("IN Syntax")]),t._v(" "),n("try-it-now",{attrs:{code:"SELECT column_name(s)\nFROM table_name\nWHERE column_name IN (value1, value2, ...);",tryNowButton:!1}}),t._v(" "),n("p",[t._v("or:")]),t._v(" "),n("try-it-now",{attrs:{code:"SELECT column_name(s)\nFROM table_name\nWHERE column_name IN (SELECT STATEMENT);",tryNowButton:!1}}),t._v(" "),n("h2",[t._v("IN Operator Examples")]),t._v(" "),n("p",[t._v('The following SQL statement selects all patients that are located in "SK", "AB" or "MB":')]),t._v(" "),n("try-it-now",{attrs:{code:"SELECT * FROM patients\nWHERE province_id IN ('SK', 'AB', 'MB');",tryNowButton:!0}}),t._v(" "),n("p",[t._v('The following SQL statement selects all patients that are NOT located in "SK", "AB" or "MB":')]),t._v(" "),n("try-it-now",{attrs:{code:"SELECT * FROM patients\nWHERE province_id NOT IN ('SK', 'AB', 'MB');",tryNowButton:!0}}),t._v(" "),n("p",[t._v("The following SQL statement selects all patients that have the same first_name as a doctor.")]),t._v(" "),n("try-it-now",{attrs:{code:"SELECT * FROM patients \nWHERE first_name in (SELECT first_name FROM doctors)\n-- Try running just the sub query to see the list",tryNowButton:!0}}),t._v(" "),n("br"),n("br"),n("br")],1)}),[],!1,i,null,null).exports},4434:function(t,e,n){var o=n(5970);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(5346).Z)("6a901e96",o,!0,{})}}]);