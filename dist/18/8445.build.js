(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[8445],{8445:function(e,t,n){"use strict";n.r(t);var i=n(9654);t.default={question:"Provide the description of each item, along with the total cost of the quantity on hand (rounded to the nearest whole dollar), and the associated primary vendor.",solution:"SELECT\n  i.item_description,\n  ROUND(i.item_cost * i.quantity_on_hand, 0) as total_cost,\n  v.vendor_name\nFROM items i\n  JOIN vendors v ON i.primary_vendor_id = v.vendor_id\nGROUP BY i.item_description;",alternativeSolutions:[],expectedOutput:null,usedTables:["vendors","items"],hints:{keywordsUsed:["SELECT","ROUND","JOIN","GROUP BY"],hintLines:[2]},expectedDBState:null,validator:function(e,t){return i.Z.hashColumns((null==t?void 0:t.values)||[],!1)==i.Z.hashColumns(this.expectedOutput[0].values,!1)},initalize:function(e){this.expectedOutput=e.exec(this.solution),this.expectedDBState=e}}}}]);