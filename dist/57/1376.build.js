(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[1376],{1376:function(t,e,n){"use strict";n.r(e);var s=n(9654);e.default={question:"Show the city, company_name, contact_name of all customers from cities which contains the letter 'L' in the city name,\nsorted by contact_name",solution:"SELECT city, company_name, contact_name\nFROM customers\nWHERE city LIKE '%L%'\nORDER BY contact_name",alternativeSolutions:[],expectedOutput:null,expectedDBState:null,usedTables:["customers"],hints:{keywordsUsed:["SELECT","WHERE","LIKE","ORDER BY"],hintLines:[2]},validator:function(t,e){return s.Z.hashColumns((null==e?void 0:e.values)||[],!0)==s.Z.hashColumns(this.expectedOutput[0].values,!0)},initalize:function(t){this.expectedOutput=t.exec(this.solution),this.expectedDBState=t}}}}]);