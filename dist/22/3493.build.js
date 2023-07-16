(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[3493],{2596:function(t,e,r){(t.exports=r(9252)(!1)).push([t.id,".center-margin{margin-left:auto;margin-right:auto}.drop-down-box-background{background-color:#e3e3e3;border:1px solid #b0b0b0;border-bottom-left-radius:6px;border-bottom-right-radius:6px}.inner{margin-left:auto;margin-right:auto;max-width:600px}.patterns{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}.patterns td,.patterns th{border:1px solid #ddd;padding:8px}.patterns td{font-size:12px}.patterns tr:nth-child(2n){background-color:#f2f2f2}.patterns tr:hover{background-color:#ddd}.patterns th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#6e6e6e;color:var(--main-full-text-color-invert)}",""])},3493:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return s}});var n=r(2880),a=r(4246),o=r(3723),_={components:{DropDownBox:n.Z,TryItNow:o.Z,ModalA:a.Z}};var i=function(t){r(433)},s=(0,r(2236).Z)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"inner"},[r("h1",[t._v("SQL JOIN")]),t._v(" "),r("p",[t._v("A JOIN clause is used to combine rows from two or more tables, based on a related column (primary, foreign key) between them.")]),t._v(" "),r("h2",[t._v("INNER JOIN Syntax")]),t._v(" "),r("try-it-now",{attrs:{code:"SELECT column_name(s)\n  FROM table1\n  JOIN table2\n  ON table1.column_name = table2.column_name;",tryNowButton:!1}}),t._v(" "),r("p",[t._v('Let\'s look at a selection from the "unit_dose_orders" table:')]),t._v(" "),t._m(0),t._v(" "),r("p",[t._v('Then, look at a selection from the "patients" table:')]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v('Notice that the "patient_id" column in the "unit_dose_orders" table refers to the "patient_id" in the "patients" table. The relationship between the two tables above is the "patient_id" column.')]),t._v(" "),r("p",[t._v("Then, we can create the following SQL statement (that contains an INNER JOIN), that selects records that have matching values in both tables:")]),t._v(" "),r("try-it-now",{attrs:{code:"SELECT unit_dose_orders.unit_dose_order_id, patients.first_name, unit_dose_orders.entered_date\n  FROM unit_dose_orders\n  JOIN patients ON unit_dose_orders.patient_id = patients.patient_id;",tryNowButton:!0}}),t._v(" "),r("h2",[t._v("Different Types of SQL JOINs")]),t._v(" "),r("p",[t._v("It is rare to need a join other than (INNER) JOIN.")]),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("Here are the different types of the JOINs in SQL:")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),r("img",{staticStyle:{"background-color":"white"},attrs:{width:"100%",src:"/img/joins4.png"}}),t._v(" "),r("h2",[t._v("JOIN Three Tables")]),t._v(" "),r("try-it-now",{attrs:{code:"SELECT unit_dose_orders.unit_dose_order_id, patients.first_name, unit_dose_orders.entered_date, medications.medication_id\n  FROM patients\n  JOIN unit_dose_orders ON patients.patient_id = unit_dose_orders.patient_id\n  JOIN medications ON unit_dose_orders.medication_id = medications.medication_id",tryNowButton:!0}}),t._v(" "),r("br"),r("br"),r("br")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"patterns"},[r("thead",[r("tr",[r("th",[t._v("unit_dose_order_id")]),t._v(" "),r("th",[t._v("patient_id")]),t._v(" "),r("th",[t._v("dosage")]),t._v(" "),r("th",[t._v("...")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("9")]),t._v(" "),r("td",[t._v("0.25 MG")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("15")]),t._v(" "),r("td",[t._v("50 MG")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("18")]),t._v(" "),r("td",[t._v("15")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"patterns"},[r("thead",[r("tr",[r("th",[t._v("patient_id")]),t._v(" "),r("th",[t._v("first_name")]),t._v(" "),r("th",[t._v("last_name")]),t._v(" "),r("th",[t._v("...")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("Miyuki")]),t._v(" "),r("td",[t._v("Riviera")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("Deunan")]),t._v(" "),r("td",[t._v("Knute")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("Lois")]),t._v(" "),r("td",[t._v("McAllister")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("b",[t._v("DISCLAIMER")]),t._v(": Our tool only supports INNER/LEFT JOIN")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("b",[t._v("(INNER) JOIN")]),t._v(": Returns records that have matching values in both tables")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("b",[t._v("LEFT (OUTER) JOIN")]),t._v(": Returns all records from the left table, and the matched records from the right table")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("b",[t._v("RIGHT (OUTER) JOIN")]),t._v(": Returns all records from the right table, and the matched records from the left table")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("b",[t._v("FULL (OUTER) JOIN")]),t._v(": Returns all records when there is a match in either left or right table")])}],!1,i,null,null).exports},433:function(t,e,r){var n=r(2596);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);(0,r(5346).Z)("6a86e7b6",n,!0,{})}}]);