(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[5552],{5552:function(i,s,n){"use strict";n.r(s);var e=n(9654);s.default={question:"For every admission, display the patient's full name, their admission diagnosis, and their physician's full name who diagnosed their problem.",solution:"SELECT\n  CONCAT(patients.first_name, ' ', patients.last_name) as patient_name,\n  diagnosis,\n  CONCAT(physicians.first_name,' ',physicians.last_name) as physician_name\nFROM patients\n  JOIN admissions ON admissions.patient_id = patients.patient_id\n  JOIN physicians ON physicians.physician_id = admissions.attending_physician_id;",alternativeSolutions:[],expectedOutput:null,expectedDBState:null,usedTables:["patients","admissions","physicians"],hints:{keywordsUsed:["SELECT","CONCAT","JOIN"],hintLines:[0,1,4]},validator:function(i,s){return e.Z.hashColumns((null==s?void 0:s.values)||[],!1,!1)==e.Z.hashColumns(this.expectedOutput[0].values,!1,!1)},initalize:function(i){this.expectedOutput=i.exec(this.solution),this.expectedDBState=i}}}}]);