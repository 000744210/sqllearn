(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[6573],{3042:function(e,t,n){(e.exports=n(9252)(!1)).push([e.id,".center-margin{margin-left:auto;margin-right:auto}.drop-down-box-background{background-color:#e3e3e3;border:1px solid #b0b0b0;border-bottom-left-radius:6px;border-bottom-right-radius:6px}.inner{margin-left:auto;margin-right:auto;max-width:600px}",""])},6573:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var o=n(1683),a=n(9414),r={components:{DropDownBox:o.Z,TryItNow:a.Z}};var i=function(e){n(8283)},s=(0,n(2236).Z)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inner"},[n("h1",[e._v("SQL INSERT Statement")]),e._v(" "),n("p",[e._v(" INSERT INTO statement is used to insert new records in a table.")]),e._v(" "),n("h2",[e._v("INSERT INTO Syntax")]),e._v(" "),n("p",[e._v("It is possible to write the INSERT INTO statement in two ways:")]),e._v(" "),n("p",[e._v("1. Specify both the column names and the values to be inserted:")]),e._v(" "),n("try-it-now",{attrs:{code:"INSERT INTO tablename (column1, column2, column3, ...)\n    VALUES (value1, value2, value3, ...);",tryNowButton:!1}}),e._v(" "),n("p",[e._v("2. If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query. However, make sure the order of the values is in the same order as the columns in the table. Here, the INSERT INTO syntax would be as follows:")]),e._v(" "),n("try-it-now",{attrs:{code:"INSERT INTO tablename\n    VALUES (value1, value2, value3, ...);",tryNowButton:!1}}),e._v(" "),n("h2",[e._v("INSERT INTO Example")]),e._v(" "),n("p",[e._v("The following SQL statement inserts a new record in the patients table:")]),e._v(" "),n("try-it-now",{attrs:{code:"-- Insert a record\nINSERT INTO patients (first_name, last_name, gender, birth_date, city, province_id, allergies, weight, height)\n    VALUES ('John', 'Smith', 'M', '1994-02-21', 'Hamilton','ON', 'NKA', 132, 182);\n \n-- Select the most recent record by id to display it.\nselect * from patients\n\twhere patient_id = (select max(patient_id) from patients);",tryNowButton:!0}}),e._v(" "),n("h2",[e._v("Insert Data Only in Specified Columns")]),e._v(" "),n("p",[e._v("It is also possible to only insert data in specific columns.")]),e._v(" "),n("p",[e._v("If the table column allow for NULL values then you do not need to include the column in your insert statement.")]),e._v(" "),n("p",[e._v('The following SQL statement will insert a new record, but only insert data in the "first_name", "last_name", and "gender" columns (patient_id will be updated automatically):')]),e._v(" "),n("try-it-now",{attrs:{code:"-- Insert a record\nINSERT INTO patients (first_name, last_name, gender)\n    VALUES ('Jane', 'Doe','F');\n    \n-- Select the most recent record by id to display it.\nselect * from patients\n\twhere patient_id = (select max(patient_id) from patients);",tryNowButton:!0}}),e._v(" "),n("br"),n("br"),n("br")],1)}),[],!1,i,null,null).exports},8283:function(e,t,n){var o=n(3042);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,n(5346).Z)("10214382",o,!0,{})}}]);