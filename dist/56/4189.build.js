(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[4189],{4189:function(t,e,n){"use strict";n.r(e);var i=n(9654);e.default={question:"Show the first_name, last_name, and height of the patient with the greatest height.",solution:"SELECT\n  first_name,\n  last_name,\n  MAX(height) AS height\nFROM patients;",alternativeSolutions:["SELECT\n  first_name,\n  last_name,\n  height\nFROM patients\nWHERE height = (\n    SELECT max(height)\n    FROM patients\n  )"],expectedOutput:null,expectedDBState:null,usedTables:["patients"],hints:{keywordsUsed:["SELECT","MAX"],hintLines:[3],solutionPortion:"MAX(height)"},validator:function(t,e){return i.Z.hashColumns((null==e?void 0:e.values)||[],!1)==i.Z.hashColumns(this.expectedOutput[0].values,!1)},initalize:function(t){this.expectedOutput=t.exec(this.solution),this.expectedDBState=t}}}}]);