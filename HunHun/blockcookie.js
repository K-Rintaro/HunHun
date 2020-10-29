chrome.cookies.getAll({secure: false}, function  (cookies) {
    console.log(cookies);
    var haaa = Number(cookies.length)
    console.log(haaa)
    var count = 0;
    let timer;
    var countup = function(){
      timer = count++;
      var important = cookies[timer].name;
      var important2 = cookies[timer].domain;
      var important3 = cookies[timer].path
      console.log(important);
      chrome.cookies.remove({url: "http://" + important2 + important3, name: important}, function (cookies){
      console.log(cookies)
      });
    } 
    var id = setInterval(function(){
        countup();
        if (count ===  haaa){
            clearInterval(id)
        }
    }, 1)
    if (haaa === 0){
        clearInterval(id)
    }
})

chrome.cookies.getAll({}, function (cookies) {
    console.log(cookies)
})



