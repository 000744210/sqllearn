(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[5552],{5552:function(t,e,s){"use strict";s.r(e);var i=s(9654);e.default={question:"For every admission, display the patient's full name, their admission diagnosis, and their doctor's full name who diagnosed their problem.",solution:"SELECT\n  CONCAT(patients.first_name, ' ', patients.last_name) as patient_name,\n  diagnosis,\n  CONCAT(doctors.first_name,' ',doctors.last_name) as doctor_name\nFROM patients\n  JOIN admissions ON admissions.patient_id = patients.patient_id\n  JOIN doctors ON doctors.doctor_id = admissions.attending_doctor_id;",alternativeSolutions:[],expectedOutput:null,expectedDBState:null,usedTables:["patients","admissions","doctors"],hints:{keywordsUsed:["SELECT","CONCAT","JOIN"],hintLines:[0,1,4]},validator:function(t,e){return i.Z.hashColumns((null==e?void 0:e.values)||[],!1,!1)==i.Z.hashColumns(this.expectedOutput[0].values,!1,!1)},initalize:function(t){this.expectedOutput=t.exec(this.solution),this.expectedDBState=t}}}}]);