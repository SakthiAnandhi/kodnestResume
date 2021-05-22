// Progress bar fills whenever it is visible on screen
var observer1 = new IntersectionObserver(function (entries) {
    var element = document.getElementById("visible1")
    if (entries[0].isIntersecting === true) {
        element.style.visibility = "visible"
        element.classList.remove("spanfill");
        void element.offsetWidth;
        element.classList.add("spanfill")
        element.style.backgroundImage = "linear-gradient(90deg, rgb(14, 82, 184) ,rgb(51, 109, 216),rgb(136, 181, 233))";
    }
    // Empties the progress bar when not visible on screen
    if (entries[0].isIntersecting === false) {
        element.style.backgroundImage = "none";
    }
}, { threshold: [0.7] }); // threshold is to determine the visibility ratio of the element; here 70% of the span tag should be visible to start the filling of the progress bar

var observer2 = new IntersectionObserver(function (entries) {
    var element = document.getElementById("visible2")
    if (entries[0].isIntersecting === true) {
        element.classList.remove("spanfill");
        void element.offsetWidth;
        element.classList.add("spanfill")
        element.style.backgroundImage = "linear-gradient(90deg, rgb(14, 82, 184) ,rgb(51, 109, 216),rgb(136, 181, 233))";
    }
    if (entries[0].isIntersecting === false) {
        element.style.backgroundImage = "none";
    }
}, { threshold: [0.7] });

var observer3 = new IntersectionObserver(function (entries) {
    var element = document.getElementById("visible3")
    if (entries[0].isIntersecting === true) {
        element.classList.remove("spanfill");
        void element.offsetWidth;
        element.classList.add("spanfill")
        element.style.backgroundImage = "linear-gradient(90deg, rgb(14, 82, 184) ,rgb(51, 109, 216),rgb(136, 181, 233))";
    }
    if (entries[0].isIntersecting === false) {
        element.style.backgroundImage = "none";
    }
}, { threshold: [0.7] });

var observer4 = new IntersectionObserver(function (entries) {
    var element = document.getElementById("visible4")
    if (entries[0].isIntersecting === true) {
        element.classList.remove("spanfill");
        void element.offsetWidth;
        element.classList.add("spanfill")
        element.style.backgroundImage = "linear-gradient(90deg, rgb(14, 82, 184) ,rgb(51, 109, 216),rgb(136, 181, 233))";
    }
    if (entries[0].isIntersecting === false) {
        element.style.backgroundImage = "none";
    }
}, { threshold: [0.7] });

var observer5 = new IntersectionObserver(function (entries) {
    var element = document.getElementById("visible5")
    if (entries[0].isIntersecting === true) {
        element.classList.remove("spanfill");
        void element.offsetWidth;
        element.classList.add("spanfill")
        element.style.backgroundImage = "linear-gradient(90deg, rgb(14, 82, 184) ,rgb(51, 109, 216),rgb(136, 181, 233))";
    }
    if (entries[0].isIntersecting === false) {
        element.style.backgroundImage = "none";
    }
}, { threshold: [0.7] });

var observer6 = new IntersectionObserver(function (entries) {
    var element = document.getElementById("visible6")
    if (entries[0].isIntersecting === true) {
        element.classList.remove("spanfill");
        void element.offsetWidth;
        element.classList.add("spanfill")
        element.style.backgroundImage = "linear-gradient(90deg, rgb(14, 82, 184) ,rgb(51, 109, 216),rgb(136, 181, 233))";
    }
    if (entries[0].isIntersecting === false) {
        element.style.backgroundImage = "none";
    }
}, { threshold: [0.7] });

var observer7 = new IntersectionObserver(function (entries) {
    var element = document.getElementById("visible7")
    if (entries[0].isIntersecting === true) {
        element.classList.remove("spanfill");
        void element.offsetWidth;
        element.classList.add("spanfill")
        element.style.backgroundImage = "linear-gradient(90deg, rgb(14, 82, 184) ,rgb(51, 109, 216),rgb(136, 181, 233))";
    }
    if (entries[0].isIntersecting === false) {
        element.style.backgroundImage = "none";
    }
}, { threshold: [0.7] });


observer1.observe(document.querySelector("#visible1"));
observer2.observe(document.querySelector("#visible2"));
observer3.observe(document.querySelector("#visible3"));
observer4.observe(document.querySelector("#visible4"));
observer5.observe(document.querySelector("#visible5"));
observer6.observe(document.querySelector("#visible6"));
observer7.observe(document.querySelector("#visible7"));

// for header; everytime the header is visible on screen the animation is enabled
var observerh1 = new IntersectionObserver(function (entries) {
    var element = document.getElementById("head1")
    if (entries[0].isIntersecting === true) {
        element.classList.remove("headd");
        void element.offsetWidth;
        element.classList.add("headd")
        element.style.color="black"
    }
    if (entries[0].isIntersecting === false) {
        element.style.color="transparent"
    }
}, { threshold: [1] });

var observerh2 = new IntersectionObserver(function (entries) {
    var element = document.getElementById("head2")
    if (entries[0].isIntersecting === true) {
        element.classList.remove("headd");
        void element.offsetWidth;
        element.classList.add("headd")
        element.style.color="black"
    }
    if (entries[0].isIntersecting === false) {
        element.style.color="transparent"
    }
}, { threshold: [1] });

var observerh3 = new IntersectionObserver(function (entries) {
    var element = document.getElementById("head3")
    if (entries[0].isIntersecting === true) {
        element.classList.remove("headd");
        void element.offsetWidth;
        element.classList.add("headd")
        element.style.color="black"
    }
    if (entries[0].isIntersecting === false) {
        element.style.color="transparent"
    }
}, { threshold: [1] });

var observerh4 = new IntersectionObserver(function (entries) {
    var element = document.getElementById("head4")
    if (entries[0].isIntersecting === true) {
        element.classList.remove("headd");
        void element.offsetWidth;
        element.classList.add("headd")
        element.style.color="black"
    }
    if (entries[0].isIntersecting === false) {
        element.style.color="transparent"
    }
}, { threshold: [1] });

var observerh5 = new IntersectionObserver(function (entries) {
    var element = document.getElementById("head5")
    if (entries[0].isIntersecting === true) {
        element.classList.remove("headd");
        void element.offsetWidth;
        element.classList.add("headd")
        element.style.color="black"
    }
    if (entries[0].isIntersecting === false) {
        element.style.color="transparent"
    }
}, { threshold: [1] });


observerh1.observe(document.querySelector("#head1"));
observerh2.observe(document.querySelector("#head2"));
observerh3.observe(document.querySelector("#head3"));
observerh4.observe(document.querySelector("#head4"));
observerh5.observe(document.querySelector("#head5"));
