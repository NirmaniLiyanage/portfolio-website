document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidePanel = document.getElementById('side-panel');
    const closeBtn = document.getElementById("close-btn");

    menuToggle.addEventListener('change', function() {
        if (this.checked) {
            sidePanel.style.left = "0";
        } else {
            sidePanel.style.left = "-100%";
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 550) {
            sidePanel.style.left = "-100%";
            menuToggle.checked = false;
        }
    });

    closeBtn.addEventListener("click", function () {
        sidePanel.style.left = "-100%";
        menuToggle.checked = false;
    });
});


const form = document.querySelector("form");
        const Fullname = document.getElementById("name");
        const emailField = document.getElementById("email");
        const subject = document.getElementById("subject");
        const phone = document.getElementById("phone");
        const message = document.getElementById("message");

        function sendEmail(){
            console.log("Preparing to send email...");
            const bodyMessage = `Full Name: ${Fullname.value}<br> Email: ${emailField.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;
            console.log("Email body:", bodyMessage);

            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "nirmaniliyanage897@gmail.com",
                Password: "AF4436C7DCD565FA8A5355A515FC6FD01FDE",
                To: "nirmaniliyanage897@gmail.com",
                From: "nirmaniliyanage897@gmail.com",
                Subject: subject.value,
                Body: bodyMessage
            }).then(
                message => {
                    if (message == "OK") {
                        Swal.fire({
                            title: "Success!",
                            text: "Message sent successfully!",
                            icon: "success"
                          });
                    }
                }
            ).catch(
                error => {
                    console.error("Failed to send email:", error);
                    alert("Failed to send email: " + error);
                }
            );
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log("Form submitted");
            sendEmail();
        });

        