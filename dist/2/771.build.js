(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[771],{771:function(i,t,n){"use strict";n.r(t);var s=n(9654);t.default={question:"Show patient_id, first_name, last_name from patients whos primary_diagnosis is 'Dementia'.<br><br>Primary diagnosis is stored in the admissions table.",solution:"SELECT\n  patients.patient_id,\n  first_name,\n  last_name\nFROM patients\n  JOIN admissions ON admissions.patient_id = patients.patient_id\nWHERE primary_diagnosis = 'Dementia';",alternativeSolutions:["SELECT\n  patient_id,\n  first_name,\n  last_name\nFROM patients\nWHERE patient_id IN (\n    SELECT patient_id\n    FROM admissions\n    WHERE primary_diagnosis = 'Dementia'\n  );"],expectedOutput:null,usedTables:["patients","admissions"],hints:{keywordsUsed:["SELECT","WHERE","JOIN"],solutionPortion:"JOIN admissions ON admissions.patient_id = patients.patient_id"},expectedDBState:null,validator:function(i,t){return s.Z.hashColumns((null==t?void 0:t.values)||[],!1)==s.Z.hashColumns(this.expectedOutput[0].values,!1)},initalize:function(i){this.expectedOutput=i.exec(this.solution),this.expectedDBState=i}}}}]);