(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[8690],{8690:function(e,t,n){"use strict";n.r(t);var s=n(9654);t.default={question:"Show all the contact_name, address, city of all customers which are not from 'Germany', 'Mexico', 'Spain'",solution:"SELECT contact_name, address, city\nFROM customers\nWHERE Country NOT IN ('Germany','Mexico', 'Spain')",alternativeSolutions:[],expectedOutput:null,expectedDBState:null,usedTables:["customers"],hints:{keywordsUsed:["SELECT","WHERE","NOT","IN"],hintLines:[2]},validator:function(e,t){return s.Z.hashColumns((null==t?void 0:t.values)||[],!1)==s.Z.hashColumns(this.expectedOutput[0].values,!1)},initalize:function(e){this.expectedOutput=e.exec(this.solution),this.expectedDBState=e}}}}]);