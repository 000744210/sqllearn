var fs = require('fs');

function getDateAsYYYYMMDD() {
  const date = new Date();

  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0"); // month is zero-based
  const dd = String(date.getDate()).padStart(2, "0");


  const formatted = `${yyyy}-${mm}-${dd}`;
  return formatted;
}

var paths = [
  '/support/',
  '/question_form/',
  '/settings/',
  '/learn/select-statement/',
    '/learn/update-statement/',
    '/learn/delete-statement/',
    '/learn/insert-statement/',
    '/learn/where-clause/',
    
    // QUERY FILTERING
    '/learn/query/order_by/',
    '/learn/query/like/',
    '/learn/query/in/',
    '/learn/query/between/',
    '/learn/query/join/',
    '/learn/query/union/',
    '/learn/query/group_by/',
    '/learn/query/having/',
    '/learn/query/case/',
    '/learn/query/distinct/',
    '/learn/query/exists/',
    '/learn/query/any_all/',
    '/learn/query/ifnull/',
    '/learn/query/null_values/',
    '/learn/query/aliases/',
    '/learn/query/operators/',
    // FUNCTIONS
    // STRING
    

    '/learn/function/concat/',
    '/learn/function/len/',
    '/learn/function/lower/',
    '/learn/function/upper/',
    
    // NUMERIC
    '/learn/function/avg/',
    '/learn/function/ceil/',
    '/learn/function/count/',
    '/learn/function/floor/',
    '/learn/function/max/',
    '/learn/function/min/',
    '/learn/function/rand/',
    '/learn/function/round/',
    '/learn/function/sum/',
    
    // MATH
    '/learn/function/abs/',
    '/learn/function/power/',
    '/learn/function/sqrt/',

    // DATES
    '/learn/function/current_timestamp/',
    '/learn/function/year/',
    '/learn/function/month/',
    '/learn/function/day/',
    
    // WINDOW
    "/learn/function/window_function_basics/",
    "/learn/function/lag/",
    "/learn/function/lead/",
    "/learn/function/first_value/",
    "/learn/function/last_value/",


    // TABLES
    '/learn/table/datatypes/',
    '/learn/table/create_table/',
    '/learn/table/drop_table/',
    '/learn/table/alter_table/',
    '/learn/table/constraints/',
    '/learn/table/not_null/',
    '/learn/table/unique/',
    '/learn/table/primary_key/',
    '/learn/table/foreign_key/',
    '/learn/table/check/',
    '/learn/table/default/',
    '/learn/table/auto_increment/',
    '/learn/table/index/',
    
]
if (fs.existsSync('./learn')) {
  fs.rmdirSync('./learn', {recursive: true})
}
if (fs.existsSync('./support')) {
  fs.rmdirSync('./support', {recursive: true})
}
if (fs.existsSync('./question_form')) {
  fs.rmdirSync('./question_form', {recursive: true})
}

for(var i = 0;i<paths.length;i++){
  var path = paths[i];

  fs.mkdir('.'+path, { recursive: true }, (err) => {

  });
}

var siteMap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://www.sql-practice.com/</loc>
    <lastmod>${getDateAsYYYYMMDD()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1</priority>    
  </url>`;

for(var i = 0;i<paths.length;i++){
  var path = paths[i];

  siteMap+= `
  <url>
    <loc>https://www.sql-practice.com${path}</loc>
    <lastmod>${getDateAsYYYYMMDD()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`
}

siteMap += `\n</urlset>`

fs.writeFileSync('./sitemap.xml',siteMap,{encoding:'utf8',flag:'w'})


setTimeout(function(){
  for(var i = 0;i<paths.length;i++){
    var path = paths[i];
    fs.copyFile('./index.html', '.'+path+'/index.html', (err) => {
      if (err) throw err;
    
    });
  }
},300)