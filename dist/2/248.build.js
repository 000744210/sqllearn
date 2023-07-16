(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[248],{248:function(s,e,n){"use strict";n.r(e);var t=n(9654);e.default={question:"Show all of the month's day numbers and how many admission_dates occurred on that number. Sort by the day with most admissions to least admissions.",solution:"SELECT\n  DAY(admission_date) AS day_number,\n  COUNT(*) AS number_of_admissions\nFROM admissions\nGROUP BY day_number\nORDER BY number_of_admissions DESC",alternativeSolutions:[],expectedOutput:null,expectedDBState:null,usedTables:["admissions"],hints:{keywordsUsed:["SELECT","DAY","COUNT","GROUP BY","ORDER BY","DESC"],solutionPortion:"SELECT DAY(admission_date) as day_number, COUNT(*) as number_of_admissions"},validator:function(s,e){return t.Z.hashColumns((null==e?void 0:e.values)||[],!0)==t.Z.hashColumns(this.expectedOutput[0].values,!0)},initalize:function(s){this.expectedOutput=s.exec(this.solution),this.expectedDBState=s}}}}]);