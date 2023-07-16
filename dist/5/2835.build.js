(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[2835],{7135:function(t,e,n){(t.exports=n(9252)(!1)).push([t.id,".center-margin{margin-left:auto;margin-right:auto}.drop-down-box-background{background-color:#e3e3e3;border:1px solid #b0b0b0;border-bottom-left-radius:6px;border-bottom-right-radius:6px}.inner{margin-left:auto;margin-right:auto;max-width:600px}",""])},2835:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var o=n(1683),a=n(4246),r=n(9414),i={components:{DropDownBox:o.Z,TryItNow:r.Z,ModalA:a.Z}};var s=function(t){n(2681)},l=(0,n(2236).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner"},[n("h1",[t._v("SQL BETWEEN Operator")]),t._v(" "),n("p",[t._v("The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates.")]),t._v(" "),n("p",[t._v("The BETWEEN operator is inclusive: begin and end values are included.")]),t._v(" "),n("try-it-now",{attrs:{code:"SELECT column_name(s) FROM table_name\n  WHERE column_name BETWEEN value1 AND value2;",tryNowButton:!1}}),t._v(" "),n("p",[t._v("The following SQL statement selects all patients with a weight between 100 and 120:")]),t._v(" "),n("try-it-now",{attrs:{code:"SELECT * FROM patients\n  WHERE weight BETWEEN 100 AND 120;",tryNowButton:!0}}),t._v(" "),n("h2",[t._v("NOT BETWEEN Example")]),t._v(" "),n("p",[t._v("To display the products outside the range of the previous example, use NOT BETWEEN:")]),t._v(" "),n("try-it-now",{attrs:{code:"SELECT * FROM patients\n  WHERE weight NOT BETWEEN 100 AND 120;",tryNowButton:!0}}),t._v(" "),n("h2",[t._v("BETWEEN with IN Example")]),t._v(" "),n("p",[t._v("The following SQL statement selects all patients with a weight between 100 and 120. In addition; do not show patients located in 'ON', 'SK', or 'AB':")]),t._v(" "),n("try-it-now",{attrs:{code:"SELECT * FROM patients\n  WHERE weight NOT BETWEEN 100 AND 120\n  AND province_id NOT IN ('ON', 'SK', 'AB');",tryNowButton:!0}}),t._v(" "),n("h2",[t._v("Between with text")]),t._v(" "),n("p",[t._v("Text is compared based on the ASCII value of the text. For example, 'c'(99) is between 'a'(97) and 'e'(101) but 'C'(67) is not between 'a'(97) and 'e'(101).")]),t._v(" "),n("p",[t._v("The following SQL statement selects all patients with their first_name between 'Alex' and 'Ben'")]),t._v(" "),n("try-it-now",{attrs:{code:"SELECT * FROM patients\n  WHERE first_name BETWEEN 'Alex' AND 'Ben'",tryNowButton:!0}}),t._v(" "),n("br"),n("br"),n("br")],1)}),[],!1,s,null,null).exports},2681:function(t,e,n){var o=n(7135);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(5346).Z)("1f79c2b4",o,!0,{})}}]);