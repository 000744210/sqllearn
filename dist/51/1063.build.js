(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[1063],{1063:function(e,t,s){"use strict";s.r(t);var a=s(9654);t.default={question:"We need a breakdown for the total amount of admissions each doctor has started each year.\nShow the doctor_id, doctor_full_name, specialty, year, total_admissions for that year.",solution:"SELECT\n  d.doctor_id as doctor_id,\n  CONCAT(d.first_name,' ', d.last_name) as doctor_name,\n  d.specialty,\n  YEAR(a.admission_date) as selected_year,\n  COUNT(*) as total_admissions\nFROM doctors as d\n  LEFT JOIN admissions as a ON d.doctor_id = a.attending_doctor_id\nGROUP BY\n  doctor_name,\n  selected_year\nORDER BY doctor_id, selected_year",alternativeSolutions:[],expectedOutput:null,usedTables:["doctors","admissions"],hints:{keywordsUsed:["CONCAT","YEAR","COUNT","LEFT JOIN","GROUP BY"],hintLines:[4,7]},expectedDBState:null,validator:function(e,t){return a.Z.hashColumns((null==t?void 0:t.values)||[],!1,!1)==a.Z.hashColumns(this.expectedOutput[0].values,!1,!1)},initalize:function(e){this.expectedOutput=e.exec(this.solution),this.expectedDBState=e}}}}]);