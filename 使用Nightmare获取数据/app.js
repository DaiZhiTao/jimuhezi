var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://box.jimu.com/Venus/List')
  .evaluate(function(){
      var project = document.querySelectorAll('.project');
      var projectLen = project.length;
      var data = [];
      for(let i = 0 ;i < projectLen ;i++){
          data[i] = {
              'name':project[i].querySelector('.title').innerHTML,
              'rate':project[i].querySelector('.invest-item-profit').innerText+'%',
              'month':project[i].querySelector('.time .num').innerText+'月',
              'status':project[i].querySelector('.status .num').innerText,
          };
      }
      return data;
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
