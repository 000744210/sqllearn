(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[4459],{3240:function(t,e,a){(t.exports=a(9252)(!1)).push([t.id,".center-margin{margin-left:auto;margin-right:auto}.drop-down-box-background{background-color:#e3e3e3;border:1px solid #b0b0b0;border-bottom-left-radius:6px;border-bottom-right-radius:6px}.inner{margin-left:auto;margin-right:auto;max-width:600px}.patterns{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}.patterns td,.patterns th{border:1px solid #ddd;padding:8px}.patterns td{font-size:12px}.patterns tr:nth-child(2n){background-color:#f2f2f2}.patterns tr:hover{background-color:#ddd}.patterns th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#6e6e6e;color:var(--main-full-text-color-invert)}",""])},4459:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return l}});var n=a(9643),o=a(4246),r=a(9414),s={components:{DropDownBox:n.Z,TryItNow:r.Z,ModalA:o.Z}};var i=function(t){a(5515)},l=(0,a(2236).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inner"},[a("h1",[t._v("SQL CREATE TABLE Statement")]),t._v(" "),a("p",[t._v("The CREATE TABLE statement is used to create a new table in a database.")]),t._v(" "),a("h3",[t._v("Syntax")]),t._v(" "),a("try-it-now",{attrs:{code:"CREATE TABLE table_name (\n    column1 datatype,\n    column2 datatype,\n    column3 datatype,\n   ....\n);",tryNowButton:!1}}),t._v(" "),a("p",[t._v("The column parameters specify the names of the columns of the table.")]),t._v(" "),a("p",[t._v("The datatype parameter specifies the type of data the column can hold (e.g. varchar, integer, date, etc.).")]),t._v(" "),a("h2",[t._v("SQL CREATE TABLE Example")]),t._v(" "),a("p",[t._v('The following example creates a table called "Persons" that contains five columns: PersonID, LastName, FirstName, Address, and City:')]),t._v(" "),a("try-it-now",{attrs:{code:"CREATE TABLE Persons (\n    PersonID int,\n    LastName varchar(255),\n    FirstName varchar(255),\n    Address varchar(255),\n    City varchar(255)\n);",tryNowButton:!0}}),t._v(" "),a("h2",[t._v("Create Table Using Another Table")]),t._v(" "),a("p",[t._v("A copy of an existing table can also be created using CREATE TABLE.")]),t._v(" "),a("p",[t._v("The new table gets the same column definitions. All columns or specific columns can be selected.")]),t._v(" "),a("p",[t._v("If you create a new table using an existing table, the new table will be filled with the existing values from the old table.")]),t._v(" "),a("h3",[t._v("Syntax")]),t._v(" "),a("try-it-now",{attrs:{code:"CREATE TABLE new_table_name AS\n    SELECT column1, column2,...\n    FROM existing_table_name\n    WHERE ....;",tryNowButton:!1}}),t._v(" "),a("p",[t._v('The following SQL creates a new table called "TestPatients" (which is a copy of the "Patients" table with the patient_id, first_name, last_name copied): ')]),t._v(" "),a("try-it-now",{attrs:{code:"CREATE TABLE TestPatients AS\nSELECT patient_id,first_name, last_name\nFROM patients;",tryNowButton:!0}}),t._v(" "),a("br"),a("br"),a("br")],1)}),[],!1,i,null,null).exports},5515:function(t,e,a){var n=a(3240);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);(0,a(5346).Z)("447d6016",n,!0,{})}}]);