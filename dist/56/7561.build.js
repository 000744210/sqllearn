(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[7561],{7561:function(e,t,n){"use strict";n.r(t);var i=n(9654);t.default={question:"Show the difference between the largest weight and smallest weight for patients with the last name 'Maroni'",solution:"SELECT\n  (MAX(weight) - MIN(weight)) AS weight_delta\nFROM patients\nWHERE last_name = 'Maroni';",alternativeSolutions:[],expectedOutput:null,expectedDBState:null,usedTables:["patients"],hints:{keywordsUsed:["SELECT","MAX","MIN","WHERE"],hintLines:[1],solutionPortion:"SELECT (MAX(weight) - MIN(weight))"},validator:function(e,t){return i.Z.hashColumns((null==t?void 0:t.values)||[],!1)==i.Z.hashColumns(this.expectedOutput[0].values,!1)},initalize:function(e){this.expectedOutput=e.exec(this.solution),this.expectedDBState=e}}}}]);