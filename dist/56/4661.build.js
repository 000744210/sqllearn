(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[4661],{8228:function(t,e,n){(t.exports=n(9252)(!1)).push([t.id,".center-margin{margin-left:auto;margin-right:auto}.drop-down-box-background{background-color:#e3e3e3;border:1px solid #b0b0b0;border-bottom-left-radius:6px;border-bottom-right-radius:6px}.inner{margin-left:auto;margin-right:auto;max-width:600px}.patterns{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}.patterns td,.patterns th{border:1px solid #ddd;padding:8px}.patterns td{font-size:12px}.patterns tr:nth-child(2n){background-color:#f2f2f2}.patterns tr:hover{background-color:#ddd}.patterns th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#6e6e6e;color:var(--main-full-text-color-invert)}",""])},4661:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var r=n(2880),o=n(4246),i=n(497),a={components:{DropDownBox:r.Z,TryItNow:i.Z,ModalA:o.Z}};var s=function(t){n(2869)},l=(0,n(2236).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner"},[n("h1",[t._v("SQL CASE Statement")]),t._v(" "),n("p",[t._v("The CASE statement goes through conditions and returns a value when the first condition is met (like an if-then-else statement). So, once a condition is true, it will stop reading and return the result. If no conditions are true, it returns the value in the ELSE clause.")]),t._v(" "),n("p",[t._v("If there is no ELSE part and no conditions are true, it returns NULL.")]),t._v(" "),n("h2",[t._v("CASE Syntax")]),t._v(" "),n("try-it-now",{attrs:{code:"CASE\n      WHEN condition1 THEN result1\n      WHEN condition2 THEN result2\n      WHEN conditionN THEN resultN\n      ELSE result\n  END;",tryNowButton:!1}}),t._v(" "),n("h2",[t._v("SQL CASE Examples")]),t._v(" "),n("p",[t._v("The following SQL goes through conditions and returns a value when the first condition is met:")]),t._v(" "),n("try-it-now",{attrs:{code:"SELECT patient_id, height,\n  CASE\n      WHEN height > 175 THEN 'height is greater than 175'\n      WHEN height = 175 THEN 'height is 175'\n      ELSE 'height is under 175'\n  END AS height_group\n  FROM patients;\n  ",tryNowButton:!0}}),t._v(" "),n("p",[t._v("The following SQL will order the patients by allergies. However, if allergies is NULL, then order by patient_id:")]),t._v(" "),n("try-it-now",{attrs:{code:"SELECT patient_id, first_name, allergies\n  FROM patients\n  ORDER BY\n  (CASE\n      WHEN allergies IS NULL THEN first_name\n      ELSE allergies\n  END);",tryNowButton:!0}}),t._v(" "),n("br"),n("br"),n("br")],1)}),[],!1,s,null,null).exports},2869:function(t,e,n){var r=n(8228);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(5346).Z)("baf70014",r,!0,{})}}]);