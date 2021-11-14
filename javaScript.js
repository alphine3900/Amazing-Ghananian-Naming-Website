var form = document.getElementById("Akan_form");

form.addEventListener("submit", function() {
    let century = document.getElementById("date_year")
    let bornMonth = document.getElementById("date_month")
    let bornDate = document.getElementById("date_of_birth")
    var CC = parseInt(century.value.slice(0, 2));
    var YY = parseInt(century.value.slice(2, 4));
    var MM = parseInt(bornMonth.value);
    var DD = parseInt(bornDate.value);
    const Formula = ((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7).toFixed();
    let index = "";
    if (Formula == 0) {
        index = 6;

    } else {
        index = Formula - 1;

    }


    let total_male = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
    let total_female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
    let total_Weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    let maleval = document.getElementById("male")
    let femaleval = document.getElementById("female")

    if (maleval.checked) {
        var heads = document.getElementById("header_one");
        heads.innerHTML = `Your Akan Name is ${total_male[index]} and born in ${total_Weeks[index]}`;
    } else if (femaleval.checked) {
        var heads = document.getElementById("header_one");
        heads.innerHTML = `Your Akan Name is ${total_female[index]} and born in ${total_Weeks[index]}`;
    }

})