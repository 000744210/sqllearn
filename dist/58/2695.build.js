(self.webpackChunksqlitelearn=self.webpackChunksqlitelearn||[]).push([[2695],{1830:function(t,n,e){(t.exports=e(9252)(!1)).push([t.id,".center-margin,.inner{margin-left:auto;margin-right:auto}.inner{max-width:600px}.patterns{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}.patterns td,.patterns th{border:1px solid #ddd;padding:8px}.patterns td{font-size:12px}.patterns tr:nth-child(2n){background-color:#f2f2f2}.patterns tr:hover{background-color:#ddd}.patterns th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#6e6e6e;color:var(--main-full-text-color-invert)}",""])},2695:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return l}});var o=e(2880),a=e(1772),r=e(845),s={components:{DropDownBox:o.Z,TryItNow:r.Z,ModalA:a.Z}};var i=function(t){e(5871)},l=(0,e(2236).Z)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"inner"},[e("h1",[t._v("SQL HAVING Clause")]),t._v(" "),e("p",[t._v("\n    The HAVING clause was added to SQL because the WHERE keyword cannot be\n    used with aggregate functions.\n  ")]),t._v(" "),e("h2",[t._v("HAVING Syntax")]),t._v(" "),e("try-it-now",{attrs:{code:"SELECT column_name(s)\n  FROM table_name\n  WHERE condition\n  GROUP BY column_name(s)\n  HAVING condition\n  ORDER BY column_name(s);",tryNowButton:!1}}),t._v(" "),e("h2",[t._v("SQL HAVING Examples")]),t._v(" "),e("p",[t._v("\n    The following SQL statement lists the names of patients with a common\n    first_name (> 30 occurances).\n  ")]),t._v(" "),e("try-it-now",{attrs:{code:"SELECT COUNT(*), first_name\n  FROM patients\n  GROUP BY first_name\n  HAVING count(*) > 30;",tryNowButton:!0}}),t._v(" "),e("p",[t._v("\n    The following SQL statement lists the names of patients with a common\n    first_name (> 30 occurances). Sorted high to low:\n  ")]),t._v(" "),e("try-it-now",{attrs:{code:"SELECT COUNT(*), first_name\n  FROM patients\n  GROUP BY first_name\n  HAVING count(*) > 30\n  ORDER BY COUNT(*) DESC;",tryNowButton:!0}}),t._v(" "),e("br"),e("br"),e("br")],1)}),[],!1,i,null,null).exports},5871:function(t,n,e){var o=e(1830);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(5346).Z)("f85ff9d4",o,!0,{})}}]);