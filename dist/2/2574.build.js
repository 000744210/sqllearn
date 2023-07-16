(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[2574],{2574:function(n,i,s){"use strict";s.r(i);var t=s(9654);i.default={question:"Show the nursing_unit_id and count of admissions for each nursing_unit_id. Exclude the following nursing_unit_ids: 'CCU', 'OR', 'ICU', 'ER'.",solution:"SELECT\n  nursing_unit_id,\n  COUNT(*) AS total_admissions\nFROM admissions\nWHERE\n  nursing_unit_id NOT IN ('CCU', 'OR', 'ICU', 'ER')\nGROUP BY nursing_unit_id;",alternativeSolutions:["SELECT\n  nursing_unit_id,\n  count(*) count_of_admissions\nFROM admissions\nGROUP BY nursing_unit_id\nHAVING\n  nursing_unit_id NOT IN ('CCU', 'OR', 'ICU', 'ER');"],expectedOutput:null,expectedDBState:null,usedTables:["admissions"],hints:{keywordsUsed:["SELECT","COUNT","WHERE","GROUP BY","NOT","IN"],solutionPortion:"nursing_unit_id NOT IN ('CCU', 'OR', 'ICU', 'ER') GROUP BY\nnursing_unit_id;"},validator:function(n,i){return t.Z.hashColumns((null==i?void 0:i.values)||[],!1)==t.Z.hashColumns(this.expectedOutput[0].values,!1)},initalize:function(n){this.expectedOutput=n.exec(this.solution),this.expectedDBState=n}}}}]);