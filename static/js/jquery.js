$(document).ready(function(){

    sendId($("#url").val());

function sendId(url){
    
    $.ajax({
        url: url,
        dataType: 'json',
        success: function(data) {
          
          var address = new Object();
          address.street = data.results[0].location.street;
          address.city = data.results[0].location.city + " - " + data.results[0].location.state;
           
          var arrayAddress = new Array();
          arrayAddress.push(address);
           
           
           
          var user = new Object();
          user.lastname = data.results[0].name.last;
          user.firstname = data.results[0].name.first;
          user.email = data.results[0].email;
          user.image = data.results[0].picture.medium;
          user.address = arrayAddress;
       
          var showJson = JSON.stringify(user);
          
          $('#showUser').html(showJson);
          console.log(user);

        }
      });
}

});