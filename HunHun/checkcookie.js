var coookie = document.cookie
if (coookie.length > 0){
   var d1 = document.body;
   var yeah = `
   <div class="hunhun-body-inside-hey-you">
   <p>This site uses Cookie Technology.</p>
   </div>
   <style type="text/css"> 
   .hunhun-body-inside-hey-you p{
     font-size: 25px;
     text-align: center
   }
   </style>
   `
  d1.insertAdjacentHTML('afterbegin', yeah);
}  
