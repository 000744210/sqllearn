(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[6634],{6634:function(e,n,i){"use strict";i.r(n);var p=i(9654);n.default={question:"Show the provinces that has more patients identified as 'M' than 'F'. Must only show full province_name",solution:"SELECT pr.province_name\nFROM patients AS pa\n  JOIN provinces AS pr ON pa.province_id = pr.province_id\nGROUP BY pr.province_name\nHAVING\n  COUNT( CASE WHEN gender = 'M' THEN 1 END) > COUNT( CASE WHEN gender = 'F' THEN 1 END);",alternativeSolutions:["SELECT province_name\nFROM (\n    SELECT\n      province_name,\n      SUM(gender = 'M') AS n_male,\n      SUM(gender = 'F') AS n_female\n    FROM patients pa\n      JOIN provinces pr ON pa.province_id = pr.province_id\n    GROUP BY province_name\n  )\nWHERE n_male > n_female","SELECT pr.province_name\nFROM patients AS pa\n  JOIN provinces AS pr ON pa.province_id = pr.province_id\nGROUP BY pr.province_name\nHAVING\n  COUNT(gender = 'M') > COUNT(gender = 'F');","SELECT province_name\nFROM patients p\n  JOIN provinces r ON p.province_id = r.province_id\nGROUP BY province_name\nHAVING\n  SUM(CASE WHEN gender = 'M' THEN 1 ELSE -1 END) > 0"],expectedOutput:null,usedTables:["patients","provinces"],hints:{keywordsUsed:["SELECT","CASE","COUNT","HAVING","GROUP BY"],solutionPortion:"HAVING COUNT(CASE WHEN gender = 'M' THEN 1 END) > COUNT(CASE WHEN gender = 'F' THEN 1 END)"},expectedDBState:null,validator:function(e,n){return p.Z.hashColumns((null==n?void 0:n.values)||[],!1)==p.Z.hashColumns(this.expectedOutput[0].values,!1)},initalize:function(e){this.expectedOutput=e.exec(this.solution),this.expectedDBState=e}}}}]);