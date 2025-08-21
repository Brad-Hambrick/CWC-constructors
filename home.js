const pageContent = document.getElementById("pageContent");
const homeContent = `
        <div class="homeContainer">
            <h3 class="homecontentHeader">Trusted Wood Framing Experts Since 1986</h3>
            <p>Founded in 1986, Complete Wood Constructors has built a strong reputation as a reliable leader in wood framing construction. Based in Nashville, TN, we’ve spent nearly four decades completing projects of every size and scope—from single & multi-family residential homes to large commercial developments.</p><br>
            <p>Our team is committed to precision craftsmanship, safety, and efficiency on every job site. We work closely with builders, developers, and contractors to deliver framing solutions that meet timelines, exceed expectations, and provide the structural strength every project deserves.</p><br>
            <p>As a family-rooted company with a long history in the industry, we take pride in combining traditional craftsmanship with modern building practices. Our dedication to quality and consistency has made us a trusted partner throughout the region for generations.</p><br>
            <p>Whether you’re starting a new build or tackling a large-scale project, Complete Wood Constructors has the experience and expertise to get the job done right. <strong>Contact us today to discuss your project and see how we can bring your vision to life.</strong></p><br>
            <p><strong>Our reputation is your guarantee. </strong></p>
        </div>
    `;

const previousContent = `
        <div>
            <h1>THIS IS OUR PREVIOUS WORK</h1>
        </div>
    `;

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

                    <button id="submitButton" onclick="sendMail()" type="submit">Send Message</button>
                </form>
            </div>
    `;

function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("message").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_11egvfj", "template_cxhrjuc", params)
    .then(alert("Your message has been sent"));
}

const submitButton = document.getElementById("submitButton");

window.onload = pageContent.innerHTML = homeContent;

function homeFunction() {
  pageContent.innerHTML = homeContent;
}

function previousJobs() {
  pageContent.innerHTML = previousContent;
}

function contactFunction() {
  pageContent.innerHTML = contactPage;
}
