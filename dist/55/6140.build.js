(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[6140],{6140:function(e,t,n){"use strict";n.r(t);var s=n(9654);t.default={question:"Show all the even numbered Order_id from the orders table",solution:"SELECT order_id\nFROM orders\nWHERE mod(order_id,2)=0;",alternativeSolutions:["SELECT order_id\nFROM orders\nWHERE order_id % 2 = 0;"],expectedOutput:null,expectedDBState:null,usedTables:["orders"],hints:{keywordsUsed:["SELECT","WHERE","MOD"],hintLines:[2]},validator:function(e,t){return s.Z.hashColumns((null==t?void 0:t.values)||[],!1)==s.Z.hashColumns(this.expectedOutput[0].values,!1)},initalize:function(e){this.expectedOutput=e.exec(this.solution),this.expectedDBState=e}}}}]);