// Revealing Module Pattern

var myModule = (function(){
  var _hidVar = "This is a hidden var";

  var _hidMethod = function(){
    return "Hello from hidden method";
  }

  var publicVar = "this a public variable";

  var setVar = function(newVar){
      return publicVar = newVar;
  }

  var getVar = function(){
    return publicVar;
  };

  var publicMethod = function(){
    return _hidMethod() + " and " + publicVar;
  }

  return {
    getVar: getVar,
    setVar: setVar,
    publicMethod: publicMethod
  }
})();



// Stub Object Pattern
var myStubModule = (function(){
    var stub = {};
    var publicVar = "Hello from publicVar";

    stub.getVar = function () { return publicVar; }
    stub.setVar = function (newVar) { return publicVar = newVar; }

    return stub;
})();
