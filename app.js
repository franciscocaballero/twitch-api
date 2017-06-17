$(document).ready(function(){

$.ajax({
type: "GET",
url: "https://api.twitch.tv/kraken/streams/freecodecamp",
headers:{
  'Client-ID': 'l34tkrfqbwfbcwnxlos39z2on9e04h'
},
success: function(data1){
  if (data1.stream === null){
    $("#fccStatus").html("freecodecamp is OFFLINE!");
  }else {
  $("#fccStatus").html("freecodecamp is ONLINE!");
  }
}

});

$.ajax({
  type: "GET",
  url: "https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/",
  headers: {
    'Client-ID': 'l34tkrfqbwfbcwnxlos39z2on9e04h'
  },
  success: function(data2){
    for (var i = 0; i < data2.follows.length; i++){
   var displayName = data2.follows[i].channel.display_name;
      var logo = data2.follows[i].channel.logo;
      var status = data2.follows[i].channel.status;
      if(logo === null){
        logo = "https://www.marathonsoftware.com.au/images/intro/anonymouse_224x224.jpg"
      }
      $('#follower-info').prepend("<div class ='row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "'>"
    +
  "</div>" + "<div class ='col-md-4'>" + displayName + "</div> " + "<div class='col-md-4'>" + status + "</div> </div>");
    }
  }
});







});
