var form = document.getElementById("Akan_form");

form.addEventListener("submit", function() {
            let century = document.getElementById("date_year")
            let bornMonth = document.getElementById("date_month")
            let bornDate = document.getElementById("date_of_birth")
            var CC = parseInt(century.value.slice(0, 2));