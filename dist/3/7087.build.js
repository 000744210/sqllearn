(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[7087],{2177:function(t,n,e){(t.exports=e(9252)(!1)).push([t.id,".center-margin{margin-left:auto;margin-right:auto}.drop-down-box-background{background-color:#e3e3e3;border:1px solid #b0b0b0;border-bottom-left-radius:6px;border-bottom-right-radius:6px}.inner{margin-left:auto;margin-right:auto;max-width:600px}.patterns{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}.patterns td,.patterns th{border:1px solid #ddd;padding:8px}.patterns td{font-size:12px}.patterns tr:nth-child(2n){background-color:#f2f2f2}.patterns tr:hover{background-color:#ddd}.patterns th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#6e6e6e;color:var(--main-full-text-color-invert)}",""])},7087:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return c}});var r=e(9643),o=e(4246),a=e(9414),s={components:{DropDownBox:r.Z,TryItNow:a.Z,ModalA:o.Z}};var i=function(t){e(5558)},c=(0,e(2236).Z)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"inner"},[e("h1",[t._v("SQL UNIQUE Constraint")]),t._v(" "),e("p",[t._v("The UNIQUE constraint ensures that all values in a column are different.")]),t._v(" "),e("p",[t._v("Both the UNIQUE and PRIMARY KEY constraints provide a guarantee for uniqueness for a column or set of columns.")]),t._v(" "),e("p",[t._v("A PRIMARY KEY constraint automatically has a UNIQUE constraint.")]),t._v(" "),e("p",[t._v("However, you can have many UNIQUE constraints per table, but only one PRIMARY KEY constraint per table.")]),t._v(" "),e("h2",[t._v("SQL UNIQUE Constraint on CREATE TABLE")]),t._v(" "),e("p",[t._v('The following SQL creates a UNIQUE constraint on the "ID" column when the "Persons" table is created:')]),t._v(" "),e("try-it-now",{attrs:{header:"SQL Server / Oracle / MS Access:",code:"CREATE TABLE Persons (\n    ID int NOT NULL UNIQUE,\n    LastName varchar(255) NOT NULL,\n    FirstName varchar(255),\n    Age int\n);",tryNowButton:!0}}),t._v(" "),e("try-it-now",{attrs:{header:"MySQL:",code:"CREATE TABLE Persons (\n    ID int NOT NULL,\n    LastName varchar(255) NOT NULL,\n    FirstName varchar(255),\n    Age int,\n    UNIQUE (ID)\n);",tryNowButton:!1}}),t._v(" "),e("p",[t._v("To name a UNIQUE constraint, and to define a UNIQUE constraint on multiple columns, use the following SQL syntax:")]),t._v(" "),e("try-it-now",{attrs:{header:"MySQL / SQL Server / Oracle / MS Access:",code:"CREATE TABLE Persons (\n    ID int NOT NULL,\n    LastName varchar(255) NOT NULL,\n    FirstName varchar(255),\n    Age int,\n    CONSTRAINT UC_Person UNIQUE (ID,LastName)\n);",tryNowButton:!1}}),t._v(" "),e("h2",[t._v("SQL UNIQUE Constraint on ALTER TABLE")]),t._v(" "),e("p",[t._v('To create a UNIQUE constraint on the "ID" column when the table is already created, use the following SQL:')]),t._v(" "),e("try-it-now",{attrs:{header:"MySQL / SQL Server / Oracle / MS Access:",code:"ALTER TABLE Persons\nADD UNIQUE (ID);",tryNowButton:!1}}),t._v(" "),e("p",[t._v("To name a UNIQUE constraint, and to define a UNIQUE constraint on multiple columns, use the following SQL syntax:")]),t._v(" "),e("try-it-now",{attrs:{header:"MySQL / SQL Server / Oracle / MS Access:",code:"ALTER TABLE Persons\nADD CONSTRAINT UC_Person UNIQUE (ID,LastName);",tryNowButton:!1}}),t._v(" "),e("h2",[t._v("DROP a UNIQUE Constraint")]),t._v(" "),e("p",[t._v("To drop a UNIQUE constraint, use the following SQL:")]),t._v(" "),e("try-it-now",{attrs:{header:"MySQL:",code:"ALTER TABLE Persons\nDROP INDEX UC_Person;",tryNowButton:!1}}),t._v(" "),e("try-it-now",{attrs:{header:"SQL Server / Oracle / MS Access:",code:"ALTER TABLE Persons\nDROP CONSTRAINT UC_Person;",tryNowButton:!1}}),t._v(" "),e("br"),e("br"),e("br")],1)}),[],!1,i,null,null).exports},5558:function(t,n,e){var r=e(2177);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,e(5346).Z)("f6e26ad4",r,!0,{})}}]);