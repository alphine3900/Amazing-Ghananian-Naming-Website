var form = document.getElementById("Akan_form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    var bornDate = document.getElementById("date_of_birth");

    var mydate = new Date(bornDate.value)


    var total_male = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
    var total_female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
    var total_Weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    var maleval = document.getElementById("male")
    var femaleval = document.getElementById("female")

    if (maleval.checked) {
        var heads = document.getElementById("header_one");
        heads.innerHTML = `Your Akan Name is ${total_male[mydate.getDay()]} and born in ${total_Weeks[mydate.getDay()]}`;
        return false;

    } else if (femaleval.checked) {
        var heads = document.getElementById("header_one");
        heads.innerHTML = `Your Akan Name is ${total_female[mydate.getDay()]} and born in ${total_Weeks[mydate.getDay()]}`;
        return false;

    }

})