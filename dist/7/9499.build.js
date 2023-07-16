(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[9499],{9499:function(n,i,t){"use strict";t.r(i);var e=t(9654);i.default={question:"Show the patient_id, nursing_unit_id, room, and bed for patient_id 542's most recent admission_date.",solution:"SELECT\n  patient_id,\n  nursing_unit_id,\n  room,\n  bed\nFROM admissions\nWHERE patient_id = 542\nGROUP BY patient_id\nHAVING\n  admission_date = MAX(admission_date);",alternativeSolutions:["SELECT\n  patient_id,\n  nursing_unit_id,\n  room,\n  bed\nFROM admissions\nWHERE\n  patient_id = '542'\n  AND admission_date = (\n    SELECT MAX(admission_date)\n    FROM admissions\n    WHERE patient_id = '542'\n  )","SELECT\n  patient_id,\n  nursing_unit_id,\n  room,\n  bed\nFROM admissions\nWHERE patient_id = 542\nORDER BY admission_date DESC\nLIMIT 1","SELECT\n  patient_id,\n  nursing_unit_id,\n  room,\n  bed\nFROM admissions\nGROUP BY patient_id\nHAVING\n  patient_id = 542\n  AND max(admission_date)"],expectedOutput:null,expectedDBState:null,usedTables:["admissions"],hints:{keywordsUsed:["SELECT","WHERE","GROUP BY","HAVING","MAX"],hintLines:[8,9],solutionPortion:"HAVING admission_date = MAX(admission_date);"},validator:function(n,i){return e.Z.hashColumns((null==i?void 0:i.values)||[],!1)==e.Z.hashColumns(this.expectedOutput[0].values,!1)},initalize:function(n){this.expectedOutput=n.exec(this.solution),this.expectedDBState=n}}}}]);