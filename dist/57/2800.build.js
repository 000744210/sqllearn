(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[2800],{3042:function(e,t,n){(e.exports=n(9252)(!1)).push([e.id,".center-margin,.inner{margin-left:auto;margin-right:auto}.inner{max-width:600px}",""])},2800:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var a=n(2880),o=n(845),i={components:{DropDownBox:a.Z,TryItNow:o.Z}};var r=function(e){n(8283)},s=(0,n(2236).Z)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inner"},[n("h1",[e._v("SQL INSERT Statement")]),e._v(" "),n("p",[e._v("INSERT INTO statement is used to insert new records in a table.")]),e._v(" "),n("h2",[e._v("INSERT INTO Syntax")]),e._v(" "),n("p",[e._v("It is possible to write the INSERT INTO statement in two ways:")]),e._v(" "),n("p",[e._v("1. Specify both the column names and the values to be inserted:")]),e._v(" "),n("try-it-now",{attrs:{code:"INSERT INTO tablename (column1, column2, column3, ...)\n    VALUES (value1, value2, value3, ...);",tryNowButton:!1}}),e._v(" "),n("p",[e._v("\n      2. If you are adding values for all the columns of the table, you do not\n      need to specify the column names in the SQL query. However, make sure the\n      order of the values is in the same order as the columns in the table.\n      Here, the INSERT INTO syntax would be as follows:\n    ")]),e._v(" "),n("try-it-now",{attrs:{code:"INSERT INTO tablename\n    VALUES (value1, value2, value3, ...);",tryNowButton:!1}}),e._v(" "),n("h2",[e._v("INSERT INTO Example")]),e._v(" "),n("p",[e._v("\n      The following SQL statement inserts a new record in the patients table:\n    ")]),e._v(" "),n("try-it-now",{attrs:{code:"-- Insert a record\nINSERT INTO patients (first_name, last_name, gender, birth_date, city, province_id, allergies, weight, height)\n    VALUES ('John', 'Smith', 'M', '1994-02-21', 'Hamilton','ON', NULL, 132, 182);\n \n-- Select the most recent record by id to display it.\nselect * from patients\n\twhere patient_id = (select max(patient_id) from patients);",tryNowButton:!0}}),e._v(" "),n("h2",[e._v("Insert Data Only in Specified Columns")]),e._v(" "),n("p",[e._v("It is also possible to only insert data in specific columns.")]),e._v(" "),n("p",[e._v("\n      If the table column allow for NULL values then you do not need to include\n      the column in your insert statement.\n    ")]),e._v(" "),n("p",[e._v('\n      The following SQL statement will insert a new record, but only insert data\n      in the "first_name", "last_name", and "gender" columns (patient_id will be\n      updated automatically):\n    ')]),e._v(" "),n("try-it-now",{attrs:{code:"-- Insert a record\nINSERT INTO patients (first_name, last_name, gender)\n    VALUES ('Jane', 'Doe','F');\n    \n-- Select the most recent record by id to display it.\nselect * from patients\n\twhere patient_id = (select max(patient_id) from patients);",tryNowButton:!0}}),e._v(" "),n("br"),n("br"),n("br")],1)}),[],!1,r,null,null).exports},8283:function(e,t,n){var a=n(3042);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,n(5346).Z)("10214382",a,!0,{})}}]);