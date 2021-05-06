var fs = require('fs');

var paths = ['/learn/select-statement',
    '/learn/update-statement',
    '/learn/delete-statement',
    '/learn/insert-statement',
    '/learn/where-clause',
    
    // QUERY FILTERING
    '/learn/query/order_by',
    '/learn/query/like',
    '/learn/query/in',
    '/learn/query/between',
    '/learn/query/join',
    '/learn/query/union',
    '/learn/query/group_by',
    '/learn/query/having',
    '/learn/query/case',
    '/learn/query/distinct',
    '/learn/query/exists',
    '/learn/query/any_all',
    '/learn/query/ifnull',
    '/learn/query/null_values',
    '/learn/query/aliases',
    
    // FUNCTIONS
    // STRING
    
    '/learn/function/ascii',
    '/learn/function/char',
    '/learn/function/charindex',
    '/learn/function/concat',
    '/learn/function/datalength',
    '/learn/function/difference',
    '/learn/function/len',
    '/learn/function/lower',
    '/learn/function/ltrim',
    '/learn/function/nchar',
    '/learn/function/replace',
    '/learn/function/replicate',
    '/learn/function/reverse',
    '/learn/function/rtrim',
    '/learn/function/str',
    '/learn/function/stuff',
    '/learn/function/substring',
    '/learn/function/trim',
    '/learn/function/unicode',
    '/learn/function/upper',
    
    // NUMERIC
    '/learn/function/avg',
    '/learn/function/ceil',
    '/learn/function/count',
    '/learn/function/floor',
    '/learn/function/max',
    '/learn/function/min',
    '/learn/function/rand',
    '/learn/function/round',
    '/learn/function/sum',
    
    // MATH
    '/learn/function/abs',
    '/learn/function/exp',
    '/learn/function/power',
    '/learn/function/sign',
    '/learn/function/sqrt',
    '/learn/function/square',

    // DATES
    '/learn/function/current_timestamp',
    '/learn/function/year',
    '/learn/function/month',
    '/learn/function/day',
    
    // TABLES
    '/learn/table/datatypes',
    '/learn/table/create_table',
    '/learn/table/drop_table',
    '/learn/table/alter_table',
    '/learn/table/constraints',
    '/learn/table/not_null',
    '/learn/table/unique',
    '/learn/table/primary_key',
    '/learn/table/foreign_key',
    '/learn/table/check',
    '/learn/table/default',
    '/learn/table/auto_increment',
    '/learn/table/index',
    
    // OTHER INFOMATION
    '/learn/date_standardized',
    '/learn/patterns',
]
if (fs.existsSync('./learn')) {
  fs.rmdirSync('./learn', {recursive: true})
}
for(var i = 0;i<paths.length;i++){
  var path = paths[i];

  fs.mkdir('.'+path, { recursive: true }, (err) => {

  });
}
setTimeout(function(){
  for(var i = 0;i<paths.length;i++){
    var path = paths[i];
    fs.copyFile('./index.html', '.'+path+'/index.html', (err) => {
      if (err) throw err;
    
    });
  }
},300)