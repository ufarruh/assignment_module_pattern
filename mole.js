var APP = APP || {};

APP.mole = (function(){

  var stub = {}
  var $moles = $(".mole");

   stub.molePop = function(){
    setInterval(function(){
      var mole = $moles[Math.floor(Math.random() * $moles.length)]
      $(mole).toggleClass("target");
    }, 300);
  }

  return stub;
})();


APP.mole.molePop();
