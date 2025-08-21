const pageContent = document.getElementById("pageContent");

const contactPage = `
        <h2 class="contactHeader">Contact Us</h2>
            <div class="contactCont">
                <div class="phoneCont">    
                    <h3>Thank you for your interest in Complete Wood Constructors.
                    <br>
                    <br>feel free to send us a message in the form below or
                    <br>
                    <br>You can also contact Barry Thompson, owner/operator, at
                    <br>
                    <br>(615) 394-3145</h1>
                </div>

                <form id="contactForm" onsubmit="return handleSubmit(event)">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>

                    <label for="email">Email Address:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" required>

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button id="submitButton" onclick="submitEmail()" type="submit">Send Message</button>
                </form>
            </div>
    `;

const submitButton = document.getElementById("submitButton");

function contactFunction() {
  pageContent.innerHTML = contactPage;
}

function submitEmail() {
  window.alert("Your email has been sent");
}
