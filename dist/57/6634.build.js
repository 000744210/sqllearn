(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[6634],{6634:function(n,e,i){"use strict";i.r(e);var p=i(9654);e.default={question:"Show the provinces that has more patients identified as 'M' than 'F'. Must only show full province_name",solution:"SELECT pr.province_name\nFROM patients AS pa\n  JOIN province_names AS pr ON pa.province_id = pr.province_id\nGROUP BY pr.province_name\nHAVING\n  COUNT( CASE WHEN gender = 'M' THEN 1 END) > COUNT( CASE WHEN gender = 'F' THEN 1 END);",alternativeSolutions:["SELECT province_name\nFROM (\n    SELECT\n      province_name,\n      SUM(gender = 'M') AS n_male,\n      SUM(gender = 'F') AS n_female\n    FROM patients pa\n      JOIN province_names pr ON pa.province_id = pr.province_id\n    GROUP BY province_name\n  )\nWHERE n_male > n_female","SELECT pr.province_name\nFROM patients AS pa\n  JOIN province_names AS pr ON pa.province_id = pr.province_id\nGROUP BY pr.province_name\nHAVING\n  SUM(gender = 'M') > SUM(gender = 'F');","SELECT province_name\nFROM patients p\n  JOIN province_names r ON p.province_id = r.province_id\nGROUP BY province_name\nHAVING\n  SUM(CASE WHEN gender = 'M' THEN 1 ELSE -1 END) > 0","SELECT pr.province_name\nFROM patients AS pa\n  JOIN province_names AS pr ON pa.province_id = pr.province_id\nGROUP BY pr.province_name\nHAVING\n  COUNT( CASE WHEN gender = 'M' THEN 1 END) > COUNT(*) * 0.5;","SELECT province_name from province_names\nWHERE province_id IN \n(SELECT province_id\nFROM patients\ngroup by province_id \nhaving SUM(gender = 'M') > SUM(gender = 'F'))"],expectedOutput:null,usedTables:["patients","province_names"],hints:{keywordsUsed:["SELECT","CASE","COUNT","HAVING","GROUP BY"],hintLines:[5],solutionPortion:"HAVING COUNT(CASE WHEN gender = 'M' THEN 1 END) > COUNT(CASE WHEN gender = 'F' THEN 1 END)"},expectedDBState:null,validator:function(n,e){return p.Z.hashColumns((null==e?void 0:e.values)||[],!1)==p.Z.hashColumns(this.expectedOutput[0].values,!1)},initalize:function(n){this.expectedOutput=n.exec(this.solution),this.expectedDBState=n}}}}]);