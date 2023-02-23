
function Submite(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "fresharlence@gmail.com",
        Password : "Vinit@12345678",
        To : 'vinitsharma2480@gmail.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    // alert("form is subvmited")
    
}

export default Submite;