'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }


// Sidebar functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", async function () { 
    await new Promise(resolve => setTimeout(resolve, 50)); 
    elementToggleFunc(sidebar); 
});


// Testimonials functionality with async event handling
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// async modal toggle function
const testimonialsModalFunc = async function () {
    await new Promise(resolve => setTimeout(resolve, 50));
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

// Add click event to modal items
testimonialsItem.forEach((item) => {
    item.addEventListener("click", async function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
        await testimonialsModalFunc();
    });
});

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);


// Custom select functionality
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

selectItems.forEach((item) => {
    item.addEventListener("click", function () {
        const selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
    });
});

// Filter functionality
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
    filterItems.forEach((item) => {
        if (selectedValue === "all" || selectedValue === item.dataset.category) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

// Navigation functionality
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((navLink) => {
    navLink.addEventListener("click", function () {
        pages.forEach((page) => {
            if (this.innerHTML.toLowerCase() === page.dataset.page) {
                page.classList.add("active");
                navigationLinks.forEach((link) => link.classList.remove("active"));
                navLink.classList.add("active");
                window.scrollTo(0, 0);
            } else {
                page.classList.remove("active");
            }
        });
    });
});

// NEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
// Disable right-click and key combinations
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.shiftKey && e.key === 'I') || e.key === 'F12') {
        e.preventDefault();
    }
});


// Form validation functionality
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach((input) => {
    input.addEventListener("input", async function () {
        await new Promise(resolve => setTimeout(resolve, 10));
        formBtn.disabled = !form.checkValidity();
    });
});

// Disable right-click and inspect element
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('keydown', function (event) {
        if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
            event.preventDefault();
        }
    });

    // Footer security with tamper detection
    const correctFooterText = "Rishmika Sandanu";
    const correctFooterLink = "https://github.com/RishBroProMax";

    function checkFooterIntegrity() {
        const footerLinkElement = document.querySelector('#footer .footer-content a');
        const footerText = footerLinkElement ? footerLinkElement.textContent.trim() : "";
        const footerLink = footerLinkElement ? footerLinkElement.getAttribute('href') : "";

        if (footerText !== correctFooterText || footerLink !== correctFooterLink) {
            alert("Unauthorized modification detected! Access denied.");
            document.body.innerHTML = '<h1>⚠ Access Denied ⚠</h1><p>The footer has been altered. Access is restricted.</p>';
        }
    }

    const footer = document.querySelector('#footer');
    const observer = new MutationObserver(() => {
        checkFooterIntegrity();
    });

    observer.observe(footer, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true
    });

    checkFooterIntegrity();
});
