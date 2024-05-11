(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[6731],{6731:function(s,n,i){"use strict";i.r(n);var t=i(9654);n.default={question:"For each day display the total amount of admissions on that day. Display the amount changed from the previous date.",solution:"SELECT\n admission_date,\n count(admission_date) as admission_day,\n count(admission_date) - LAG(count(admission_date)) OVER(ORDER BY admission_date) AS admission_count_change \nFROM admissions\n group by admission_date",alternativeSolutions:["WITH admission_counts_table AS (\n  SELECT admission_date, COUNT(patient_id) AS admission_count\n  FROM admissions\n  GROUP BY admission_date\n  ORDER BY admission_date DESC\n)\nselect\n  admission_date, \n  admission_count, \n  admission_count - LAG(admission_count) OVER(ORDER BY admission_date) AS admission_count_change \nfrom admission_counts_table"],expectedOutput:null,usedTables:["admissions"],hints:{keywordsUsed:["WITH","COUNT","GROUP BY","ORDER BY","LAG","OVER","DESC"],hintLines:[3]},expectedDBState:null,validator:function(s,n){return t.Z.hashColumns((null==n?void 0:n.values)||[],!0)==t.Z.hashColumns(this.expectedOutput[0].values,!0)},initalize:function(s){this.expectedOutput=s.exec(this.solution),this.expectedDBState=s}}}}]);