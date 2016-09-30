function openNav() {
    document.getElementById("sideNav").style.width = "250px";
};
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
};

$("body").click(function(event) {
  if ($("#sideNav").width()>=250 && !$(event.target).hasClass('drop')) {
    $('#sideNav').css('width','0');
  }
});

$(document).ready(function() {
  $('#homeCarousel')
    .swipe({
      swipeLeft:function(event, direction, distance, duration, fingerCount) {
        $(this).carousel('next');
      },
      swipeRight:function() {
        $(this).carousel('prev');
      },
      threshold:45
    })
});
