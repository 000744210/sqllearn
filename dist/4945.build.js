(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[4945],{4945:function(e,t,n){"use strict";n.r(t);var s=n(9654);t.default={question:"Show patient_id, first_name, last_name from the patients table.<br>Order the rows by the first_name ascending and then by the last_name descending.",solution:"SELECT\n  patient_id,\n  first_name,\n  last_name\nFROM patients\nORDER BY\n  first_name ASC,\n  last_name DESC;",alternativeSolutions:[],expectedOutput:null,usedTables:["patients"],hints:{keywordsUsed:["SELECT","ORDER BY","ASC","DESC"],solutionPortion:"ORDER BY first_name ASC, last_name DESC"},expectedDBState:null,validator:function(e,t){return s.Z.hashColumns((null==t?void 0:t.values)||[],!0)==s.Z.hashColumns(this.expectedOutput[0].values,!0)},initalize:function(e){this.expectedOutput=e.exec(this.solution),this.expectedDBState=e}}}}]);