(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[4752],{4752:function(t,e,n){"use strict";n.r(e);var i=n(9654);e.default={question:"Show all columns for patients who have one of the following patient_ids:<br>\n1,45,534,879,1000",solution:"SELECT *\nFROM patients\nWHERE\n  patient_id IN (1, 45, 534, 879, 1000);",alternativeSolutions:[],expectedOutput:null,expectedDBState:null,usedTables:["patients"],hints:{keywordsUsed:["SELECT","WHERE","IN"],solutionPortion:"WHERE patient_id IN"},validator:function(t,e){return i.Z.hashColumns((null==e?void 0:e.values)||[],!1)==i.Z.hashColumns(this.expectedOutput[0].values,!1)},initalize:function(t){this.expectedOutput=t.exec(this.solution),this.expectedDBState=t}}}}]);