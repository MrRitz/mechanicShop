console.log("Myles the Mechanic");


function contactPage() {
    services_page.style.display = "none";
    feedback_page.style.display = "none";
    about_page.style.display = "none";
    contact_page.style.display = "block";
    home_page.style.display = "none";
    
}

function servicesPage() {
    contact_page.style.display = "none";
    feedback_page.style.display = "none";
    about_page.style.display = "none";
    services_page.style.display = "block";
    home_page.style.display = "none";
}

function feedbackPage() {
    contact_page.style.display = "none";
    services_page.style.display = "none";
    about_page.style.display = "none";
    feedback_page.style.display = "block";
    home_page.style.display = "none";
}

function aboutPage() {
    contact_page.style.display = "none";
    services_page.style.display = "none";
    feedback_page.style.display = "none";
    about_page.style.display = "block";
    home_page.style.display = "none";
}

let rateOne = document.getElementById("rateOne");
let rateTwo = document.getElementById("rateTwo");
let rateThree = document.getElementById("rateThree");
let rateFour = document.getElementById("rateFour");
let rateFive = document.getElementById("rateFive");
let rating = document.getElementById("rating");

function rate_1() {
    rateOne.classList.add("checked");
    if (rating.value === "five") {
        rating.value = "five";
    } else if (rating.value === "four") {
        rating.value = "four";
    } else if (rating.value === "three") {
        rating.value = "three";
    } else if (rating.value === "two") {
        rating.value = "two";
    } else {
        rating.value = "one";
    }
}

function rate_2() {
    rateTwo.classList.add("checked");
    rateOne.classList.add("checked");

    if (rating.value === "five") {
        rating.value = "five";
    } else if (rating.value === "four") {
        rating.value = "four";
    } else if (rating.value === "three") {
        rating.value = "three";
    } else {
        rating.value = "two";
    }
}

function rate_3() {
    rateThree.classList.add("checked");
    rateOne.classList.add("checked");
    rateTwo.classList.add("checked");
    
    if (rating.value === "five") {
        rating.value = "five";
    } else if (rating.value === "four") {
        rating.value = "four";
    } else {
        rating.value = "three";
    }
}

function rate_4() {
    rateFour.classList.add("checked");
    rateThree.classList.add("checked");
    rateTwo.classList.add("checked");
    rateOne.classList.add("checked");
    
    if (rating.value === "five") {
        rating.value = "five";
    } else {
        rating.value = "four";
    }
}

function rate_5() {
    rateFive.classList.add("checked");
    rateFour.classList.add("checked");
    rateThree.classList.add("checked");
    rateTwo.classList.add("checked");
    rateOne.classList.add("checked");
    rating.value = "five";
    

}
    
function clearRate() {
    rateOne.classList.remove("checked")
    rateTwo.classList.remove("checked")
    rateThree.classList.remove("checked")
    rateFour.classList.remove("checked")
    rateFive.classList.remove("checked")
    rating.value = "zero";
    
}

