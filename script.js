function sendEmail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }

    emailjs.send('service_rdsi4xj', 'template_y47uutb',parms).then(alert("Email sent"))

    
}