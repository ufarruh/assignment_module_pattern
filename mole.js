// setInterval(function(){
//   mole.style.backgroundColor = "red";
//   //mole.style.backgroundColor = "black";
// }, 1000);


 var $moles = $(".mole");
 var mole = $moles[Math.floor(Math.random() * $moles.length)]
 //mole.style.backgroundColor = "black";
 //mole.style.backgroundColor = "red";

 setInterval(function(){
   mole.animate({ width: '300px'}, "slow");
 });
