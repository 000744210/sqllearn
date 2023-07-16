(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[7626],{588:function(t,e,n){(t.exports=n(9252)(!1)).push([t.id,"\n.center-margin{margin-left:auto;margin-right:auto\n}\n.drop-down-box-background{background-color:#e3e3e3;border:1px solid #b0b0b0;border-bottom-left-radius:6px;border-bottom-right-radius:6px\n}\n.inner{margin-left:auto;margin-right:auto;max-width:600px\n}\n.patterns{font-family:Arial, Helvetica, sans-serif;border-collapse:collapse;width:100%\n}\n.patterns td,.patterns th{border:1px solid #ddd;padding:8px\n}\n.patterns td{font-size:12px\n}\n.patterns tr:nth-child(even){background-color:#f2f2f2\n}\n.patterns tr:hover{background-color:#ddd\n}\n.patterns th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#6e6e6e;color:var(--main-full-text-color-invert)\n}\n",""])},7626:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var a=n(7026),o=n(4736),r=n(7688),l={components:{DropDownBox:a.Z,TryItNow:r.Z,ModalA:o.Z}},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner"},[n("h1",[t._v("SQL ALTER TABLE Statement")]),t._v(" "),n("p",[t._v("The ALTER TABLE statement is used to add, delete, or modify columns in an existing table.")]),t._v(" "),n("p",[t._v("The ALTER TABLE statement is also used to add and drop various constraints on an existing table.")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("ALTER TABLE - ADD Column Syntax")]),t._v(" "),n("try-it-now",{attrs:{code:"ALTER TABLE table_name\nADD column_name datatype;",tryNowButton:!1}}),t._v(" "),n("p",[t._v('The following SQL adds an "Email" column to the "patients" table:')]),t._v(" "),n("try-it-now",{attrs:{code:"ALTER TABLE patients\nADD email varchar(255);\n\nselect patient_id, email from patients;",tryNowButton:!0}}),t._v(" "),n("h2",[t._v("ALTER TABLE - DROP COLUMN Syntax")]),t._v(" "),n("p",[t._v("To delete a column in a table, use the following syntax (Note: Some database systems don't allow deleting a column):")]),t._v(" "),n("try-it-now",{attrs:{code:"ALTER TABLE table_name\nDROP COLUMN column_name;",tryNowButton:!1}}),t._v(" "),n("p",[t._v('The following SQL deletes the "last_name" column from the "patients" table:')]),t._v(" "),n("try-it-now",{attrs:{code:"ALTER TABLE patients\nDROP COLUMN last_name;\n\nselect * from patients",tryNowButton:!0}}),t._v(" "),n("h2",[t._v("ALTER TABLE - ALTER/MODIFY COLUMN Syntax")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("To change the data type of a column in a table, use the following syntax:")]),t._v(" "),n("try-it-now",{attrs:{code:"ALTER TABLE table_name\nALTER COLUMN column_name datatype;",header:"SQL Server / MS Access:",tryNowButton:!1}}),t._v(" "),n("try-it-now",{attrs:{code:"ALTER TABLE table_name\nMODIFY COLUMN column_name datatype;",header:"My SQL / Oracle (prior version 10G):",tryNowButton:!1}}),t._v(" "),n("try-it-now",{attrs:{code:"ALTER TABLE table_name\nMODIFY column_name datatype;",header:"Oracle 10G and later:",tryNowButton:!1}}),t._v(" "),n("br"),n("br"),n("br")],1)};s._withStripped=!0;var i=n(2236);var d=function(t){n(4949)},c=(0,i.Z)(l,s,[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("b",[t._v("Note:")]),t._v(" We do not support ALTER/MODIFY COLUMN syntax.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("b",[t._v("Note:")]),t._v(" We do not support ALTER/MODIFY COLUMN syntax.")])}],!1,d,null,null);c.options.__file="src\\learning-resource-pages\\Alter_Table.vue";var p=c.exports},4949:function(t,e,n){var a=n(588);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(5346).Z)("a80a3a40",a,!1,{})}}]);