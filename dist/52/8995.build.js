(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[8995],{8995:function(e,t,s){"use strict";s.r(t);var n=s(9654);t.default={question:"Show the first_name, last_name. hire_date of the most recently hired employee.",solution:"select \n    first_name,\n    last_name,\n    max(hire_date) as hire_date\n  from employees",alternativeSolutions:[],expectedOutput:null,expectedDBState:null,usedTables:["employees"],hints:{keywordsUsed:["SELECT","MAX"],hintLines:[3]},validator:function(e,t){return n.Z.hashColumns((null==t?void 0:t.values)||[],!1)==n.Z.hashColumns(this.expectedOutput[0].values,!1)},initalize:function(e){this.expectedOutput=e.exec(this.solution),this.expectedDBState=e}}}}]);