(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[2720],{2720:function(e,t,n){"use strict";n.r(t);var s=n(9654);t.default={question:'Show first name, last name and role of every person that is either patient or physician.<br>The roles are either "Patient" or "Physician"',solution:'SELECT first_name, last_name, "Patient" as "Role" FROM patients\n    union\nselect first_name, last_name, "Physician" from physicians;',expectedOutput:null,alternativeSolutions:[],expectedDBState:null,usedTables:["patients","physicians"],hints:{keywordsUsed:["SELECT","UNION"],solutionPortion:'SELECT first_name, last_name, "Patient" as "Role" FROM patients union '},validator:function(e,t){return s.Z.hashColumns((null==t?void 0:t.values)||[],!1)==s.Z.hashColumns(this.expectedOutput[0].values,!1)},initalize:function(e){this.expectedOutput=e.exec(this.solution),this.expectedDBState=e}}}}]);