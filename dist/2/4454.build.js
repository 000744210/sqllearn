(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[4454],{4454:function(t,e,n){"use strict";n.r(e);var s=n(9654);e.default={question:"Show first name of patients that start with the letter 'C'",solution:"SELECT\n  first_name\nFROM\n  patients\nWHERE\n  first_name LIKE 'C%'",alternativeSolutions:["SELECT first_name\nFROM patients\nWHERE substring(first_name, 1, 1) = 'C'"],expectedOutput:null,expectedDBState:null,usedTables:["patients"],hints:{keywordsUsed:["SELECT","WHERE","LIKE"],solutionPortion:"SELECT first_name FROM patients WHERE first_name LIKE"},validator:function(t,e){return s.Z.hashColumns((null==e?void 0:e.values)||[],!1)==s.Z.hashColumns(this.expectedOutput[0].values,!1)},initalize:function(t){this.expectedOutput=t.exec(this.solution),this.expectedDBState=t}}}}]);