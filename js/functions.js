$(document).ready(function() {

  console.log(window.location);
  
  //check for #slider element
  if($("#slider").length > 0) {
    //start slider and set options
    $('#slider').bxSlider({
      auto: true,
      pause: 5000,
      controls: false
    });
  }

  //set smooth anchor scroll
  $('.blue-arrow').click(function() {
    var bodyelem;
    if($.browser.safari) { bodyelem = $("body"); }
    else { bodyelem = $("html,body"); }

    bodyelem.animate({ scrollTop: 1000 }, 450);
  });

  /* Validation */
  //check if there is a form on the page that needs validation
  if($("#modal-login-form").length > 0 || $("#sign-up-form").length > 0 || $("#account-details-form").length > 0) {
    // validate the sign-up-form when it is submitted
    $("#sign-up-form").validate({
      rules: {
        username: {
          required: true,
          minlength: 3,
        },
        password: {
          required: true,
          minlength: 6,
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        username: {
          required: "Please enter a username",
          minlength: "It should be at least 3 characters"
        },
        password: {
          required: "Please provide a password",
          minlength: "It should be at least 6 characters long"
        },
        email: { 
          required: "Please enter email address",
          email: "Please enter a valid email address"
        }
      }
    });
    //login-form
    $("#modal-login-form").validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 6,
        }
      },
      messages: {
        email: { 
          required: "Please enter email address",
          email: "Please enter a valid email address"
        },
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 6 characters long"
        }
      }
    });
    // validate the account-details-form when it is submitted
    $("#account-details-form").validate({
      invalidHandler: function(e, validator) { 
        var errors = validator.numberOfInvalids();
        if (errors) {
          $('.error-block').children('p').removeClass('success');
        }
      },
      errorElement: "p",
      errorContainer: $(".error-block"),
      errorPlacement: function(error, element) {
        element.parents(".controls").append(error);
      },
      success: function(label) {
        var messages = new Array(
          'First Name looks great.',
          'Last Name looks great.',
          "Looks good!",
          "You got it!",
          "Username is available.",
          "Great number!"
        );
        var name = label.attr('for');
        var msg_pos = 0;
        switch(name) {
          case 'f_name': 
            msg_pos = 0; 
            break;
          case 'l_name': 
            msg_pos = 1; 
            break;
          case 'username': 
            msg_pos = 4; 
            break;
          case 'email': 
            msg_pos = 3; 
            break;
          case 'mobile': 
            msg_pos = 5; 
            break;
          default: 
            msg_pos = 2; 
            break;
        }
        
        label.text(messages[msg_pos]).addClass("success");
      },
      rules: {
        f_name: {
          required: true
        },
        l_name: {
          required: true
        },
        username: {
          required: true,
          minlength: 3,
        },
        password: {
          required: true,
          minlength: 6,
        },
        email: {
          required: true,
          email: true
        },
        mobile: {
          required: true
        }
      },
      messages: {
        f_name: {
          required: "Please enter your First name"
        },
        l_name: {
          required: "Please enter your Last name"
        },
        username: {
          required: "Please enter a username",
          minlength: "It should be at least 3 characters"
        },
        password: {
          required: "Please provide a password",
          minlength: "It should be at least 6 characters long"
        },
        email: { 
          required: "Please enter email address",
          email: "Please enter a valid email address"
        },
        mobile: {
          required: "Please enter your Mobile phone number"
        }
      }
    });
    //end
    
  }

});


//jquery function for animated anchor scroll
jQuery.fn.anchorAnimate = function(settings) {

  settings = jQuery.extend({
    speed : 800
  }, settings); 
  
  return this.each(function(){
    var caller = this
    $(caller).click(function (event) {  
      event.preventDefault()
      var locationHref = window.location.href
      var elementClick = $(caller).attr("href")
      
      var destination = $(elementClick).offset().top;
      $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
        window.location.hash = elementClick
      });
        return false;
    })
  })
}