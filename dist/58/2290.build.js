(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[2290],{2290:function(e,t,i){"use strict";i.r(t);var n=i(9654);t.default={question:"Show patient_id, weight, height, isObese from the patients table.<br><br>\nDisplay isObese as a boolean 0 or 1.<br><br>\nObese is defined as weight(kg)/(height(m)<sup>2</sup>) >= 30.<br><br>\nweight is in units kg.<br><br>\nheight is in units cm.",alternativeSolutions:["SELECT\n  patient_id,\n  weight,\n  height,\n  weight / power(CAST(height AS float) / 100, 2) >= 30 AS obese\nFROM patients"],solution:"SELECT patient_id, weight, height, \n  (CASE \n      WHEN weight/(POWER(height/100.0,2)) >= 30 THEN\n          1\n      ELSE\n          0\n      END) AS isObese\nFROM patients;\n-- If you divide an int by an int you will get an int. Dividing an int by a float will return a float.\n-- That's why you have to divide by 100.0 and not 100.\n-- Use CAST(variable_name AS FLOAT) function if you are dividing by two variables.",expectedOutput:null,usedTables:["patients"],hints:{keywordsUsed:["SELECT","CASE","POWER"],hintLines:[1,2,8,9],solutionPortion:"WHEN weight/(POWER(height/100.0,2)) >= 30 THEN"},expectedDBState:null,validator:function(e,t){return n.Z.hashColumns((null==t?void 0:t.values)||[],!1)==n.Z.hashColumns(this.expectedOutput[0].values,!1)},initalize:function(e){this.expectedOutput=e.exec(this.solution),this.expectedDBState=e}}}}]);