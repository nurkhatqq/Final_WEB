$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    var notification = 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message;
    alert(notification);
    $('form')[0].reset();
  });
});
$(document).ready(function(){
  $(".card-img-top").hover(function(){
    $(".card-title").css("color", "grey");
  });
});
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.1694, lng: 71.4491 }, 
    zoom: 12 
  });
  const marker = new google.maps.Marker({
    position: { lat: 51.1694, lng: 71.4491 },
    map: map,
    title: "Astana"
  });
}
