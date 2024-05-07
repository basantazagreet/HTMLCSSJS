const el_name = document.querySelector("#username");
const el_dob = document.querySelector("#dob");
const el_btn = document.querySelector(".btn");
const el_showName = document.querySelector('.u-name');
const months = [31,28,31,30,31,30,31,31,30,31,30,31];


el_btn.addEventListener("click", calculateAge);


function calculateAge(e){
    e.preventDefault();
    let today = new Date();
    let dobInput = new Date(el_dob.value);
    let birthMonth, birthDate, birthYear;
    let birthDetails = {
        date: dobInput.getDate(),
        month: dobInput.getMonth() + 1,
        year: dobInput.getFullYear()
    };

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    if(birthDetails.year > currentYear || 
        (birthDetails.month > currentMonth && birthDetails.year == currentYear)||
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
     ){
        alert("Invalid date");
        return;
    }


    birthYear = currentYear - birthDetails.year;

    if(currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;
    }else{
        birthYear--;
        //12 aayo 1 year bata
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if(currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
    }else{
        birthMonth--;
        //1 month ko equivalent days aayo, o index for currentMonth 
        //and zero index for the array so 2 ghataayeko
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;

        //Month difference 1 ko case ma difference will be 11 bcz we used 1
        // month and after using a year
        if(birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }

    displayResult(birthDate, birthMonth, birthYear);

    function displayResult(bDate, bMonth, bYear){
        el_showName.textContent = el_name.value;
        document.querySelector(".age-year").textContent = bYear + "Years";
        document.querySelector(".age-month").textContent = bMonth + "Months";
        document.querySelector(".age-day").textContent = bDate + "Days";
    }

}