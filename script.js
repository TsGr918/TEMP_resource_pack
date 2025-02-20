// Website Logo
const logos = [
    "assets/logo.gif",
    "https://media1.tenor.com/m/2d90tt-h2yQAAAAC/ayline-yukime.gif"
];
const randomLogo = logos[Math.floor(Math.random() * logos.length)];
document.getElementById("logo").src = randomLogo;


$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });
});

// Function for the landing page button
function scrollToSection(id) {
    $("html, body").animate(
        {
            scrollTop: $(id).offset().top,
        },
        800
    );
}
