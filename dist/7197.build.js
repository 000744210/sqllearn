(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[7197],{7197:function(t,e,n){"use strict";n.r(e);var a=n(9654);e.default={question:"Show how many patients have a birth_date with 2010 as the birth year.",solution:"SELECT COUNT(*) AS total_patients\nFROM patients\nWHERE YEAR(birth_date) = 2010;",alternativeSolutions:["SELECT count(first_name) AS total_patients\nFROM patients\nWHERE\n  birth_date >= '2010-01-01'\n  AND birth_date <= '2010-12-31'"],expectedOutput:null,expectedDBState:null,usedTables:["patients"],hints:{keywordsUsed:["SELECT","COUNT","WHERE","YEAR"],solutionPortion:"WHERE YEAR(birth_date) = 2010"},validator:function(t,e){return a.Z.hashColumns((null==e?void 0:e.values)||[],!1)==a.Z.hashColumns(this.expectedOutput[0].values,!1)},initalize:function(t){this.expectedOutput=t.exec(this.solution),this.expectedDBState=t}}}}]);