(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[7524],{7524:function(e,t,n){"use strict";n.r(t);var s=n(9654);t.default={question:"Show first name, last name, and gender of patients whose gender is 'M'",solution:"SELECT\n  first_name,\n  last_name,\n  gender\nFROM patients\nWHERE gender = 'M';",alternativeSolutions:[],expectedOutput:null,expectedDBState:null,usedTables:["patients"],hints:{keywordsUsed:["SELECT","WHERE"],hintLines:[4,5],solutionPortion:"SELECT first_name, last_name, gender FROM patients WHERE gender"},validator:function(e,t){return s.Z.hashColumns((null==t?void 0:t.values)||[],!1)==s.Z.hashColumns(this.expectedOutput[0].values,!1)},initalize:function(e){this.expectedOutput=e.exec(this.solution),this.expectedDBState=e}}}}]);