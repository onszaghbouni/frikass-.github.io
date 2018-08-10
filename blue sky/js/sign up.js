document.getElementById('sing up').addEventListener('sing up' , sing up);
function login(e)
{
e.preventDefault();   
     var email = getInputVal('email');
     var password = getInputVal('password');
     var password = getInputVal('password');
     var phone = getInputVal('phone');
     	//save message
     	saveMessage ( email, password, password, phone);
    document.getElementById('sing up').reset();
}
function saveMessage( email, password, password, phone){
    var messagesRef = firebase.database().ref('messages');
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        email: email,
        password: password,
        password: password,
        phone: phone,
    });
    toastr["success"]("you're logged in", "congratulations ")

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
  }
//submit form
function getInputVal(id)
{
    return document.getElementById(id).value;
}
