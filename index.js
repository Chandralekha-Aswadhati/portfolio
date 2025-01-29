var typed = new Typed(".text",{
    strings:["Software Engineer","Web Developer","Tech Enthusiast"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(navLink => navLink.classList.remove('active')); // Remove active from all
        link.classList.add('active'); // Add active to the clicked link
    });
});
