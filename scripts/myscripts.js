function openNav() {
    document.getElementById("sideNav").style.width = "250px";
};
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
};


jQuery("body").on('click', function(event) {
  if (jQuery("#sideNav").width()>=250 && !jQuery(event.target).hasClass('drop')) {
    jQuery('#sideNav').css('width','0');
  }
});

// function login() {
//   window.addEventListener('load', function() {
//
//     function showLoginForm() {
//       jQuery('#formTrigger').css('display','none');
//       jQuery("#triggeredForm").css('display','block');
//       jQuery("#username").focus();
//     }
//
//     jQuery("#formTrigger").on('click', showLoginForm);
//
//     jQuery('#signIn-btn').on('click', function() {
//       console.log('clicked on "Sign In" in footer');
//       jQuery(window).scrollTop();
//       showLoginForm();
//     });
//
//     jQuery("#submit").on('click', function() {
//       var usernameInput, passwordInput;
//       usernameInput = jQuery('#username').val();
//       passwordInput = jQuery('#password').val();
//       if (usernameInput === 'neoclient' && passwordInput === 'neolaser000') {
//         jQuery('#loginForm').trigger("reset");
//         jQuery('#triggeredForm').css('display', 'none');
//         jQuery('#formTrigger').css('display', 'block');
//         window.open('clientexclusive.html', '_blank');
//       } else if (usernameInput.length > 0 && passwordInput.length > 0) {
//         jQuery("#msg").css("display","inline").fadeOut(5000);
//       }
//     });
//
//   }, false);
// }

// document.addEventListener('DOMContentLoaded', login, false);

jQuery(document).ready(function() {

  jQuery('#homeCarousel')
    .swipe({
      swipeLeft:function(event, direction, distance, duration, fingerCount) {
        jQuery(this).carousel('next');
      },
      swipeRight:function() {
        jQuery(this).carousel('prev');
      },
      threshold:45
    });
});
