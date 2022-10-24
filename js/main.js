
/* Functionalies bundled inside IIFE method */
(function(){
    let currentSlide = 0;   //Current slide number
    let testimonials = [];

    /* ELEMENT SELECTORS */
    let leftArrow = document.querySelector(".leftArrow");
    let rightArrow = document.querySelector(".rightArrow");
    let image = document.querySelector("#image");
    let title = document.querySelector("#title");
    let content = document.querySelector("#content");

    /* CLICK EVENT LISTENERS ADDED */
    leftArrow.addEventListener("click", leftButtonClicked);
    rightArrow.addEventListener("click", rightButtonClicked);

    function leftButtonClicked() {
        currentSlide--; //Reducing current slide by 1
        normalizeCurrentSlide();
    }

    function rightButtonClicked() {
        currentSlide++; //Increasing current slide by 1
        normalizeCurrentSlide();
    }

    /* Condition for currentSlide to have length greater than or equal to 0 and less than the array length */
    function normalizeCurrentSlide() {
        currentSlide = currentSlide < 0 ? testimonials.length - 1 : currentSlide > testimonials.length - 1 ? 0 : currentSlide;  //Here we used ternary operator
        loadTestimonials();
    }

    /* Constructor to create objects */
    function createTestimonial(image, title, content) {
        this.image = image;
        this.title = title;
        this.content = content;
    }

    function createContent(img, title, content) {
        let image = `images/bg_img_${img}.jpg`;
        let obj = new createTestimonial(image, title, content);
        testimonials.push(obj);
    }
    createContent(1, "Greenary", "Greenary: If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.");
    createContent(2, "Gardenary", "Gardenary : If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.");
    createContent(3, "River Bridge", "River Bridge: If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.");

    /* Load the testimonial detail on every click of the button */
    function loadTestimonials() {
        let testimonial = testimonials[currentSlide];
        image.src = testimonial.image;
        title.innerText = testimonial.title;
        content.innerText = testimonial.content;
    }
    loadTestimonials(); //Load the first testimonial from the array in the page while page loads
})();