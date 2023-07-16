(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[3442],{3240:function(t,e,n){(t.exports=n(9252)(!1)).push([t.id,"\n.center-margin{margin-left:auto;margin-right:auto\n}\n.drop-down-box-background{background-color:#e3e3e3;border:1px solid #b0b0b0;border-bottom-left-radius:6px;border-bottom-right-radius:6px\n}\n.inner{margin-left:auto;margin-right:auto;max-width:600px\n}\n.patterns{font-family:Arial, Helvetica, sans-serif;border-collapse:collapse;width:100%\n}\n.patterns td,.patterns th{border:1px solid #ddd;padding:8px\n}\n.patterns td{font-size:12px\n}\n.patterns tr:nth-child(even){background-color:#f2f2f2\n}\n.patterns tr:hover{background-color:#ddd\n}\n.patterns th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#6e6e6e;color:var(--main-full-text-color-invert)\n}\n",""])},3442:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var a=n(7026),r=n(4736),o=n(7688),s={components:{DropDownBox:a.Z,TryItNow:o.Z,ModalA:r.Z}},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner"},[n("h1",[t._v("SQL CREATE TABLE Statement")]),t._v(" "),n("p",[t._v("The CREATE TABLE statement is used to create a new table in a database.")]),t._v(" "),n("h3",[t._v("Syntax")]),t._v(" "),n("try-it-now",{attrs:{code:"CREATE TABLE table_name (\n    column1 datatype,\n    column2 datatype,\n    column3 datatype,\n   ....\n);",tryNowButton:!1}}),t._v(" "),n("p",[t._v("The column parameters specify the names of the columns of the table.")]),t._v(" "),n("p",[t._v("The datatype parameter specifies the type of data the column can hold (e.g. varchar, integer, date, etc.).")]),t._v(" "),n("h2",[t._v("SQL CREATE TABLE Example")]),t._v(" "),n("p",[t._v('The following example creates a table called "Persons" that contains five columns: PersonID, LastName, FirstName, Address, and City:')]),t._v(" "),n("try-it-now",{attrs:{code:"CREATE TABLE Persons (\n    PersonID int,\n    LastName varchar(255),\n    FirstName varchar(255),\n    Address varchar(255),\n    City varchar(255)\n);",tryNowButton:!0}}),t._v(" "),n("h2",[t._v("Create Table Using Another Table")]),t._v(" "),n("p",[t._v("A copy of an existing table can also be created using CREATE TABLE.")]),t._v(" "),n("p",[t._v("The new table gets the same column definitions. All columns or specific columns can be selected.")]),t._v(" "),n("p",[t._v("If you create a new table using an existing table, the new table will be filled with the existing values from the old table.")]),t._v(" "),n("h3",[t._v("Syntax")]),t._v(" "),n("try-it-now",{attrs:{code:"CREATE TABLE new_table_name AS\n    SELECT column1, column2,...\n    FROM existing_table_name\n    WHERE ....;",tryNowButton:!1}}),t._v(" "),n("p",[t._v('The following SQL creates a new table called "TestPatients" (which is a copy of the "Patients" table with the patient_id, first_name, last_name copied): ')]),t._v(" "),n("try-it-now",{attrs:{code:"CREATE TABLE TestPatients AS\nSELECT patient_id,first_name, last_name\nFROM patients;\n\n-- the query created a table with the results in it.\nselect * from TestPatients;",tryNowButton:!0}}),t._v(" "),n("br"),n("br"),n("br")],1)};i._withStripped=!0;var l=n(2236);var c=function(t){n(5515)},d=(0,l.Z)(s,i,[],!1,c,null,null);d.options.__file="src\\learning-resource-pages\\Create_Table.vue";var p=d.exports},5515:function(t,e,n){var a=n(3240);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);(0,n(5346).Z)("447d6016",a,!1,{})}}]);