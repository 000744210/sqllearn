(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[4173],{5850:function(t,e,n){(t.exports=n(9252)(!1)).push([t.id,".center-margin{margin-left:auto;margin-right:auto}.drop-down-box-background{background-color:#e3e3e3;border:1px solid #b0b0b0;border-bottom-left-radius:6px;border-bottom-right-radius:6px}.inner{margin-left:auto;margin-right:auto;max-width:600px}",""])},4173:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var r=n(5807),o=n(9414),i={components:{DropDownBox:r.Z,TryItNow:o.Z}};var a=function(t){n(6630)},l=(0,n(2236).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner"},[n("h1",[t._v("SQL UPDATE Statement")]),t._v(" "),n("p",[t._v("The UPDATE statement is used to modify the existing records in a table.")]),t._v(" "),n("h2",[t._v("UPDATE Syntax")]),t._v(" "),n("try-it-now",{attrs:{code:"UPDATE tablename\n    SET column1 = value1, column2 = value2, ...\n    WHERE condition;",tryNowButton:!1}}),t._v(" "),n("p",[t._v("Note: Be sure to specify the where clause. Failing to include the where clause will result in all of the rows to be updated.")]),t._v(" "),n("p",[t._v("The following SQL statement updates the first patient (patient_id = 1) with a new first_name and a new weight.")]),t._v(" "),n("try-it-now",{attrs:{code:"UPDATE patients\n    SET first_name = 'John', weight = 120\n    WHERE patient_id = 1;",tryNowButton:!0}}),t._v(" "),n("h2",[t._v("UPDATE Multiple Records")]),t._v(" "),n("p",[t._v("It is the WHERE clause that determines how many records will be updated.")]),t._v(" "),n("p",[t._v('The following SQL statement will update the allergies to NULL for all records where allergies is "NKA"')]),t._v(" "),n("try-it-now",{attrs:{code:"UPDATE patients\n    SET allergies = NULL\n    WHERE allergies = 'NKA';",tryNowButton:!0}}),t._v(" "),n("br"),n("br"),n("br")],1)}),[],!1,a,null,null).exports},6630:function(t,e,n){var r=n(5850);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(5346).Z)("5302b762",r,!0,{})}}]);