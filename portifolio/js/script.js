// Scrollspy - Update active link on scroll
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

// Tooltip functionality
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.innerText = link.getAttribute('data-tooltip');
        link.appendChild(tooltip);
    });
    link.addEventListener('mouseleave', () => {
        link.querySelector('.tooltip').remove();
    });
});

// Scroll to About Section on CTA click
function scrollToAbout() {
    document.querySelector("#about").scrollIntoView({ behavior: 'smooth' });
}


// modals
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Optional: Close the modal when clicking outside the modal content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
// email sending
(function () {
    emailjs.init("gROxMEzoBj9e_eSpk"); // Replace with your actual user_id
})();

function sendEmail(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    emailjs.sendForm('service_51r2ddc', 'template_lxl8c8a', '#contact-form')
        .then((response) => {
            alert('Message sent successfully!');
        }, (error) => {
            alert('Failed to send message, please try again.');
        });
}