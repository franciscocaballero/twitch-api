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
        logo = "http://www.alessandrobozzon.com/img/lab/nopic.png"
      }
      $('#follower-info').prepend("<div class ='row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "'>"
    +
  "</div>" + "<div class ='col-md-4'>" + displayName + "</div> " + "<div class='col-md-4'>" + status + "</div> </div>");
    }
  }
});

var deletedFollowers= ['brunofin', 'comster404'];
for (var i = 0; i < deletedFollowers.length; i++){
  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/users/freecodecamp/streams/"+deletedFollowers[i],
    headers:{
      'Client-ID': 'l34tkrfqbwfbcwnxlos39z2on9e04h'
    },
    error: function(data3){
      var logo = "http://www.alessandrobozzon.com/img/lab/nopic.png"
      var displayName = data3.statusText;
      // console.log(data3.statusText)
      var status = data3.status;
      $("#follower-info").prepend("<div class ='row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "'>"
    +
  "</div>" + "<div class = 'col-md-4'>" + displayName + "</div> " + "<div class ='col-md-4'>" + status + "</div> </div>")
    }
  });
}





});
