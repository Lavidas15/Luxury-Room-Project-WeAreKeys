

// smoothly transition

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]').
not('[href="#0"]').
click(function (event) {
  // On-page links
  if (
  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&

  location.hostname == this.hostname)
  {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top },
      1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {// Checking if the target was focused
          return false;
        } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
    });
}
}
});
(function ($) {
    "use strict";   
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel, .related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });



    
})(jQuery);

//Validation email

function validate(){
    let mail = document.getElementById('text').value;

    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    if (regx.text(mail)){
        alert("You have provided a valid email ID");
    }
    else{
        alert("Sorry! Incorrect email ID"); 
       }
}

// Check in Check Out

function searchBtns(){
    document.getElementById('reservation').classList.add('hide');
    let firstDate = document.getElementById('checkIn').value;
    let secondDate = document.getElementById('checkOut').value;
    let peopleBook = document.getElementById('peopleBook');
    let emailPeopleBook = document.getElementById('emailPeopleBook');
    let submitPeopleBook = document.getElementById('submitPeopleBook');
    let cancelPeopleBook = document.getElementById('cancelPeopleBook');
    
    
    if(firstDate <= secondDate){

        document.getElementById('people').classList.remove('hide');
        document.getElementById('header-carousel').classList.add("hide");
        document.getElementById('checkIn').classList.remove('error');
        document.getElementById('checkOut').classList.remove('error');

        submitPeopleBook.addEventListener('click', () => {
            if (peopleBook.value == "" && emailPeopleBook.value ==""){
                peopleBook.classList.add('error');
                emailPeopleBook.classList.add('error')
            }
            else if(peopleBook.value ==""){
                peopleBook.classList.add('error');
                emailPeopleBook.classList.remove('error');
            }
            else if(emailPeopleBook.value ==""){
                emailPeopleBook.classList.add('error')
                peopleBook.classList.remove('error');
            }else{
            // alert(`Great job ${document.getElementById('nameBook').value}! You will receive an email to ${document.getElementById('emailBook').value} with your ${numberBook.value} ticket(s)!`)
            document.getElementById('reservationMsg').classList.remove('hide');
            peopleBook.classList.remove('error');
            emailPeopleBook.classList.remove('error');
            document.getElementById('header-carousel').classList.remove('hide');
            document.getElementById('people').classList.add('hide');
            peopleBook.value = '';
            personBook.value = "1"
            emailPeopleBook.value = '';
            }
        })
        cancelPeopleBook.addEventListener('click', () =>{
            document.getElementById('header-carousel').classList.remove('hide');
            document.getElementById('people').classList.add('hide');
            document.getElementById('reservation').classList.remove('hide')
            peopleBook.value = '';
            personBook.value = "1"
            emailPeopleBook.value = '';
        });

    }else {
        document.getElementById('checkIn').classList.add('error');
        document.getElementById('checkOut').classList.add('error');
        document.getElementById('people').classList.add('hide')
        document.getElementById('header-carousel').classList.remove('hide');
    }
    
    
}


// Display Confirmation for the reservation
let reservationBtn = document.getElementById('reservationBtn');
reservationBtn.addEventListener('click', () => {
    document.getElementById('reservationMsg').classList.add('hide')
    document.getElementById('header-carousel').classList.remove("hide");
    document.getElementById('reservation').classList.remove('hide')
})

// Book Tickets
let discover = document.getElementById('discover');
let bookTicket = document.getElementById('book');
let buttonCenter = document.getElementById('btnCenter');
let buttonFood = document.getElementById("btnFood");
let buttonBar = document.getElementById('btnBar');
let buttonMuseum = document.getElementById('btnMuseum');
let buttonNature = document.getElementById('btnNature');
let buttonSpa = document.getElementById('btnSpa');
let nameBook = document.getElementById('nameBook');
let numberBook = document.getElementById('numberBook')
let emailBook =document.getElementById('emailBook');
let submitBook = document.getElementById('submitBook');
let cancelBook = document.getElementById('cancelBook');
let successBookBtn = document.getElementById('successBookBtn');

buttonCenter.addEventListener('click' , () => {
    discover.classList.add("hide");
    bookTicket.classList.remove('hide');
})
buttonFood.addEventListener('click' , () => {
    discover.classList.add("hide");
    bookTicket.classList.remove('hide');
})
buttonBar.addEventListener('click' , () => {
    discover.classList.add("hide");
    bookTicket.classList.remove('hide');
})
buttonMuseum.addEventListener('click' , () => {
    discover.classList.add("hide");
    bookTicket.classList.remove('hide');
})
buttonNature.addEventListener('click' , () => {
    discover.classList.add("hide");
    bookTicket.classList.remove('hide');
})
buttonSpa.addEventListener('click' , () => {
    discover.classList.add("hide");
    bookTicket.classList.remove('hide');
})

// Submit-Cancel buttons for Reservation
submitBook.addEventListener('click', () => {
    if (nameBook.value == "" && emailBook.value ==""){
        nameBook.classList.add('error');
        emailBook.classList.add('error')
    }
    else if(nameBook.value ==""){
        nameBook.classList.add('error');
        emailBook.classList.remove('error');
    }
    else if(emailBook.value ==""){
        emailBook.classList.add('error')
        nameBook.classList.remove('error');
    }else{
    // alert(`Great job ${document.getElementById('nameBook').value}! You will receive an email to ${document.getElementById('emailBook').value} with your ${numberBook.value} ticket(s)!`)
    document.getElementById('bookMsg').classList.remove('hide');
    bookTicket.classList.add('hide');
    nameBook.classList.remove('error');
    emailBook.classList.remove('error');
    nameBook.value = '';
    numberBook.value = "1"
    emailBook.value = '';
    }
})

cancelBook.addEventListener('click', () => {
    discover.classList.remove("hide");
    bookTicket.classList.add('hide');
    nameBook.value = '';
    numberBook.value = "1"
    emailBook.value = '';
})
successBookBtn.addEventListener('click', () => {
    document.getElementById('bookMsg').classList.add('hide')
    discover.classList.remove("hide");
})


// Email contact

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "1",
        Password : "1",
        To : 'anastasios.lavidas@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New Contact Form from WeAreKeys Project",
        Body : "Name: " + document.getElementById('name').value 
        + "<br> Email: " + document.getElementById('email').value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent succesfully!")
    );
}


// Newsletter

let btnSubmit = document.querySelector(".subscribe_btn");
let btnDismiss = document.querySelector(".btn_dismiss");
let formContainer = document.querySelector(".form_container");
let successEl = document.querySelector(".success_message");
let inputEl = document.querySelector(".form-newsletter input");

btnSubmit.addEventListener('click' ,() => {
    if(inputEl.value != ""){
        formContainer.classList.add("hide");
        successEl.classList.remove("hide");
    }else{
        inputEl.classList.add("active");
    }
})
btnDismiss.addEventListener('click', () =>{
    formContainer.classList.remove("hide");
    successEl.classList.add('hide');
    inputEl.value = "";
})


