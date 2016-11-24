var pingPong = function(number) {
    newPingPong.type()
    return newPing;
  };
var pingPong = function(number) {
    if (number % 3 === 0) {
        newPing.type()
        return newPing;
    }
    if (number % 5 === 0){
       newPing.type()
       return newPong;
    }
    if (number % 15 === 0){
        newPingPong.type()
        return newPingPong;
} else {
      return newPingPong;
    }
  };

    $(document).ready(function(){
    $("#ping-pong form") .submit(function(event) {
      event.preventDefault();
      var year = parseInt($("input#number") .val());
      var result = pingPong(number);
      $("#result").text(result);
    });
});    
       