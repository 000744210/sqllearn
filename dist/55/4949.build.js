(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[4949],{7118:function(e,t,n){"use strict";n.r(t);var l=n(9654);t.default={question:"Write a query to find list of patients first_name, last_name, and allergies where allergies are not null and are from the city of 'Hamilton'",solution:"SELECT\n  first_name,\n  last_name,\n  allergies\nFROM patients\nWHERE\n  city = 'Hamilton'\n  and allergies is not null",alternativeSolutions:[],expectedOutput:null,expectedDBState:null,usedTables:["patients"],hints:{keywordsUsed:["SELECT","WHERE","IS","NULL","NOT"],hintLines:[1]},validator:function(e,t){return l.Z.hashColumns((null==t?void 0:t.values)||[],!1)==l.Z.hashColumns(this.expectedOutput[0].values,!1)},initalize:function(e){this.expectedOutput=e.exec(this.solution),this.expectedDBState=e}}}}]);