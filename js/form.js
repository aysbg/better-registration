$(document).ready(function() {
  //validating form on submit
  $('#single-form').submit(function() {
    //if input field for first name is empty
    if($('#f_name').val() == '') {
      showErrors("f_name","Please enter your First name!");
    }
    //if input field for last name is empty
    if($('#l_name').val() == '') {
      showErrors("l_name","Please enter your Last name!"); 
    }
    //if input field for username is empty
    if($('#username').val() == '') {
      showErrors("username","Please enter your Username!"); 
    }
    //if input field for password is empty
    if($('#password').val() == '') {
      showErrors("password","Please enter your Password!"); 
    }
    //if input field for email is empty
    if($('#email').val() == '') {
      showErrors("email","Please enter your E-mail address!"); 
    }
    //if input field for mobile is empty
    if($('#mobile').val() == '') {
      showErrors("mobile","Please enter your Mobile number!"); 
    }

    return false;
  });

  //binding events to input fields
  $("#f_name").keyup(function() {
    if($(this).val().length > 2) {
      removeErrors("f_name", 'That looks great! Thank you!');
    }
  });
  $("#l_name").keyup(function() {
    if($(this).val().length > 2) {
      removeErrors("l_name", 'That looks great! Thank you!');
    }
  });
  $("#username").keyup(function() {
    if($(this).val().length > 3) {
      removeErrors("username", 'Good One!');
    }
  });
  $("#password").keyup(function() {
    if($(this).val().length > 3) {
      removeErrors("password", 'Looking good!');
    }
  });
  $("#email").keyup(function() {
    if($(this).val().length > 3) {
      removeErrors("email", 'Nice email address!');
    }
  });
  $("#mobile").keyup(function() {
    if($(this).val().length > 3) {
      removeErrors("mobile", 'Cool number!');
    }
  });
});

//displaying error message and icon
function showErrors(inputId, errorMessage) {
  //find p.error and display it
  $("#"+inputId).parent('.controls')
              .find('p.error')
              .css('display', 'inline');
  //add error class to input                  
  $("#"+inputId).addClass('error');
  //find help-block, change text and color property
  $("#"+inputId).parent('.controls')
              .find('.help-block')
              .text(errorMessage)
              .css('color', '#953B39');
}

//displaying success message and icon
function removeErrors(inputId, successMessage) {
  $("#"+inputId).parent('.controls')
        .find('p.error')
        .css('display', 'none');

  $("#"+inputId).parent('.controls')
        .find('p.success')
        .css('display', 'inline');

  $("#"+inputId).removeClass('error');
  $("#"+inputId).parent('.controls')
              .find('.help-block')
              .text(successMessage)
              .css('color', '#339900');
}



