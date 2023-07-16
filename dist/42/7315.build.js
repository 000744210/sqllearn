(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[7315],{2735:function(e,r,t){(e.exports=t(9252)(!1)).push([e.id,".center-margin{margin-left:auto;margin-right:auto}.drop-down-box-background{background-color:#e3e3e3;border:1px solid #b0b0b0;border-bottom-left-radius:6px;border-bottom-right-radius:6px}.inner{margin-left:auto;margin-right:auto;max-width:600px}.patterns{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}.patterns td,.patterns th{border:1px solid #ddd;padding:8px}.patterns td{font-size:12px}.patterns tr:nth-child(2n){background-color:#f2f2f2}.patterns tr:hover{background-color:#ddd}.patterns th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#6e6e6e;color:var(--main-full-text-color-invert)}",""])},7315:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return d}});var n=t(2880),o=t(4246),a=t(3723),s={components:{DropDownBox:n.Z,TryItNow:a.Z,ModalA:o.Z}};var i=function(e){t(1032)},d=(0,t(2236).Z)(s,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"inner"},[t("h1",[e._v("SQL FOREIGN KEY Constraint")]),e._v(" "),t("p",[e._v("The FOREIGN KEY constraint is used to prevent actions that would destroy links between tables.")]),e._v(" "),t("p",[e._v("A FOREIGN KEY is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table.")]),e._v(" "),t("p",[e._v("The table with the foreign key is called the child table, and the table with the primary key is called the referenced or parent table.")]),e._v(" "),t("p",[e._v("The FOREIGN KEY constraint prevents invalid data from being inserted into the foreign key column, because it has to be one of the values contained in the parent table.")]),e._v(" "),t("h2",[e._v("SQL FOREIGN KEY on CREATE TABLE")]),e._v(" "),t("p",[e._v('The following SQL creates a FOREIGN KEY on the "PersonID" column when the "Orders" table is created:')]),e._v(" "),t("try-it-now",{attrs:{header:"MySQL:",code:"CREATE TABLE Orders (\n    OrderID int NOT NULL,\n    OrderNumber int NOT NULL,\n    PersonID int,\n    PRIMARY KEY (OrderID),\n    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)\n);",tryNowButton:!0}}),e._v(" "),t("try-it-now",{attrs:{header:"SQL Server / Oracle / MS Access:",code:"CREATE TABLE Orders (\n    OrderID int NOT NULL PRIMARY KEY,\n    OrderNumber int NOT NULL,\n    PersonID int FOREIGN KEY REFERENCES Persons(PersonID)\n);",tryNowButton:!1}}),e._v(" "),t("p",[e._v("To allow naming of a FOREIGN KEY constraint, and for defining a FOREIGN KEY constraint on multiple columns, use the following SQL syntax:")]),e._v(" "),t("try-it-now",{attrs:{header:"MySQL / SQL Server / Oracle / MS Access:",code:"CREATE TABLE Orders (\n    OrderID int NOT NULL,\n    OrderNumber int NOT NULL,\n    PersonID int,\n    PRIMARY KEY (OrderID),\n    CONSTRAINT FK_PersonOrder FOREIGN KEY (PersonID)\n    REFERENCES Persons(PersonID)\n);",tryNowButton:!1}}),e._v(" "),t("h2",[e._v("SQL FOREIGN KEY on ALTER TABLE")]),e._v(" "),t("p",[e._v('To create a FOREIGN KEY constraint on the "PersonID" column when the "Orders" table is already created, use the following SQL:')]),e._v(" "),t("try-it-now",{attrs:{header:"MySQL / SQL Server / Oracle / MS Access:",code:"ALTER TABLE Orders\nADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);",tryNowButton:!1}}),e._v(" "),t("p",[e._v("To allow naming of a FOREIGN KEY constraint, and for defining a FOREIGN KEY constraint on multiple columns, use the following SQL syntax:")]),e._v(" "),t("try-it-now",{attrs:{header:"MySQL / SQL Server / Oracle / MS Access:",code:"ALTER TABLE Orders\nADD CONSTRAINT FK_PersonOrder\nFOREIGN KEY (PersonID) REFERENCES Persons(PersonID);",tryNowButton:!1}}),e._v(" "),t("h2",[e._v("DROP a FOREIGN KEY Constraint")]),e._v(" "),t("p",[e._v("To drop a FOREIGN KEY constraint, use the following SQL:")]),e._v(" "),t("try-it-now",{attrs:{header:"MySQL:",code:"ALTER TABLE Orders\nDROP FOREIGN KEY FK_PersonOrder;",tryNowButton:!1}}),e._v(" "),t("try-it-now",{attrs:{header:"SQL Server / Oracle / MS Access:",code:"ALTER TABLE Orders\nDROP CONSTRAINT FK_PersonOrder;",tryNowButton:!1}}),e._v(" "),t("br"),t("br"),t("br")],1)}),[],!1,i,null,null).exports},1032:function(e,r,t){var n=t(2735);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,t(5346).Z)("34e94e3e",n,!0,{})}}]);