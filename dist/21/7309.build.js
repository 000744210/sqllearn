(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[7309],{5736:function(t,e,n){(t.exports=n(9252)(!1)).push([t.id,"\n.center-margin{margin-left:auto;margin-right:auto\n}\n.drop-down-box-background{background-color:#e3e3e3;border:1px solid #b0b0b0;border-bottom-left-radius:6px;border-bottom-right-radius:6px\n}\n.inner{margin-left:auto;margin-right:auto;max-width:600px\n}\n",""])},7309:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return E}});var r=n(7026),o=n(4736),a=n(7688),i={components:{DropDownBox:r.Z,TryItNow:a.Z,ModalA:o.Z}},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner"},[n("h1",[t._v("SQL WHERE Clause")]),t._v(" "),n("p",[t._v("The WHERE clause is used to filter records.")]),t._v(" "),n("p",[t._v("It is used to extract only those records that fulfill a specified condition.")]),t._v(" "),n("try-it-now",{attrs:{code:"SELECT column1, column2, ...\n  FROM tablename\n  WHERE condition;",tryNowButton:!1}}),t._v(" "),n("h2",[t._v("WHERE Clause Example")]),t._v(" "),n("p",[t._v('The following SQL statement selects all the patients with the gender "F", in the "patients" table:')]),t._v(" "),n("try-it-now",{attrs:{code:"SELECT * FROM patients\n  WHERE gender ='F';",tryNowButton:!0}}),t._v(" "),n("h2",[t._v("Text Fields vs. Numeric Fields")]),t._v(" "),n("p",[t._v("SQL requires single quotes around text values (most database systems will also allow double quotes).")]),t._v(" "),n("p",[t._v("However, numeric fields should not be enclosed in quotes:")]),t._v(" "),n("try-it-now",{attrs:{code:"SELECT * FROM patients\n  WHERE patient_id=1;",tryNowButton:!0}}),t._v(" "),n("h2",[t._v("Operators")]),t._v(" "),n("p",[t._v("The following operators can be used in the WHERE clause:")]),t._v(" "),n("try-it-now",{attrs:{header:"Equal, =",code:"SELECT * FROM patients\n  WHERE patient_id = 1;",tryNowButton:!0}}),t._v(" "),n("try-it-now",{attrs:{header:"Greater Than, >",code:"SELECT * FROM patients\n  WHERE patient_id > 5;",tryNowButton:!0}}),t._v(" "),n("try-it-now",{attrs:{header:"Less Than, <",code:"SELECT * FROM patients\n  WHERE patient_id < 5;",tryNowButton:!0}}),t._v(" "),n("try-it-now",{attrs:{header:"Greater Than Or Equal To, >=",code:"SELECT * FROM patients\n  WHERE patient_id >= 5;",tryNowButton:!0}}),t._v(" "),n("try-it-now",{attrs:{header:"Less Than Or Equal To, <=",code:"SELECT * FROM patients\n  WHERE patient_id <= 5;",tryNowButton:!0}}),t._v(" "),n("try-it-now",{attrs:{header:"Not Equal, <> or != depending on sql version",code:"SELECT * FROM patients\n  WHERE patient_id <> 5;\n  -- No patient_id 5 row",tryNowButton:!0}}),t._v(" "),n("try-it-now",{attrs:{header:"Between, inclusive range",code:"SELECT * FROM patients\n  WHERE patient_id BETWEEN 4 AND 6;",tryNowButton:!0}}),t._v(" "),n("try-it-now",{attrs:{header:"Like, pattern search",code:"SELECT * FROM patients\n  WHERE first_name LIKE 'a%';\n  -- First names starting with 'a'.\n  -- View sql patterns for more info.",tryNowButton:!0}}),t._v(" "),n("p",[t._v("Read More: "),n("modal-a",{attrs:{href:"/learn/query/like"}},[t._v("Patterns")])],1),t._v(" "),n("try-it-now",{attrs:{header:"In, in a collection",code:"SELECT * FROM patients\n  WHERE patient_id IN (1,3,6,9);\n  -- the values can be replaced with a sub-query.",tryNowButton:!0}}),t._v(" "),n("br"),n("br"),n("br")],1)};s._withStripped=!0;var l=n(2236);var d=function(t){n(9353)},u=(0,l.Z)(i,s,[],!1,d,null,null);u.options.__file="src\\learning-resource-pages\\Where.vue";var E=u.exports},9353:function(t,e,n){var r=n(5736);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(5346).Z)("2d86cbe4",r,!1,{})}}]);