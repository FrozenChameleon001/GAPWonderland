// Set the date we're counting down to
var countdownDate = new Date("Dec 20, 2024 17:30:00").getTime();

// Update the countdown every 1 second
var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Event Started!";
    }
}, 1000);

// Smooth scrolling for navigation links with offset for fixed navbar
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        const offset = 120;  // Adjust this value to set the desired offset (e.g., 50px)

        // Calculate the scroll position with the offset
        const targetPosition = targetSection.offsetTop - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});