(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[6777],{7307:function(e,t,n){"use strict";n.r(t);var s=n(9654);t.default={question:"Show the total amount of male patients and the total amount of female patients in the patients table.<br>Display the two results in the same row.",solution:"SELECT \n  (SELECT count(*) FROM patients WHERE gender='M') AS male_count, \n  (SELECT count(*) FROM patients WHERE gender='F') AS female_count;",expectedOutput:null,alternativeSolutions:["SELECT \n  SUM(Gender = 'M') as male_count, \n  SUM(Gender = 'F') AS female_count\nFROM patients","select \n  sum(case when gender = 'M' then 1 end) as male_count,\n  sum(case when gender = 'F' then 1 end) as female_count \nfrom patients;"],hints:{keywordsUsed:["SELECT","COUNT","WHERE"],hintLines:[1],solutionPortion:"SELECT COUNT(*) FROM patients WHERE gender='M'"},usedTables:["patients"],expectedDBState:null,validator:function(e,t){return s.Z.hashColumns((null==t?void 0:t.values)||[],!1)==s.Z.hashColumns(this.expectedOutput[0].values,!1)},initalize:function(e){this.expectedOutput=e.exec(this.solution),this.expectedDBState=e}}}}]);