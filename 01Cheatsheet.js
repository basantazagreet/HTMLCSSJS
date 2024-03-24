/*1 Counter App:
*/
//Buttons ma ekai patak add Event Listener ra individual buttons:
e.target.classList.contains('btn-subtract')

count_element.textContent--;
setColor();

/*2 Random Number Generator*/
{
    return Math.floor(Math.random() * 1000) + 1;
}

/*3 Random Hex color code generator */

{
    //hex ma convert gareko tyo decimal int lai
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    //rgb nikaleko 255-garna complementary color lai
    var b = parseInt(hexColor.substring(4, 6), 16);
    //Zero handling in r,g,b
    ('0' + complementaryR.toString(16)).slice(-2)
}

/*4 Modal Popup*/
//css
{
    //modal position fixed
    //close button absolute positioned
    //slide down animation on open
    //slide up animation class
}

//JS
{
    //slide up animation class set on close
    //Modal click outside box closes modal
    if (!modal_box.contains(e.target))
        closeModal();
}


/*5 Palindrome checker*/

{
    //end and start with while loop
}

/*6 Vowel counter*/

{
    if (str[i].match(/([a,e,i,o,u])/)) {
        count++;
    }
}

/*7 Click to copy*/
{
    navigator.clipboard.writeText(el_text.value)
        .then(() => {
            //copied html
        })
}

//8 Character count
{
    //Keydown captures word, backspace hit garda reduces.
    input_element.addEventListener('keydown', () => {
        count.textContent = input_element.value.length;
    });
}

//9 Connection status
{
    setOnline();
    setOffline();
    //boolean connectionStatus() vitra try catch, wikipedia photo fetched+time
    return fetchResult.status >= 200 && fetchResult.status < 300;
    //harek 5 secs ma function call and status shown
}

//10 Geolocation

{
    navigator.geolocation.getCurrentPosition(showPosition);


    const showPosition = (position) => {
        lat.textContent = `Latitude: ${position.coords.latitude}`;
        lng.textContent = `Longitude: ${position.coords.longitude}`;
    }
}


//11 HTTP Request

{
    fetch('http://localhost:3000/user')
        .then((response) => {
            return response.json();
        })
        .then((users) => {
            console.log(users);
            let output = '';
            users.forEach(user => {
                output += `
            <ul>
            <li>${user.name}</li>
            <li>${user.email}</li>
            <li>${user.password}</li>
            </ul>
            <hr>
            `
            });

            users_div.innerHTML = output;
        })
}

//ajax
{

    const http = new XMLHttpRequest();

    http.open('GET', 'http://localhost:3000/user', true);

    http.onload = function () {
        if (this.status === 200) {
            let users = JSON.parse(this.responseText);
            var output = '';
            users.forEach(user => {
                output += `
                <ul>
                <li>${user.name}</li>
                <li>${user.email}</li>
                <li>${user.password}</li>
                </ul>
                <hr>
                `;
            });
            users_div.innerHTML = output;
        }
    }

    http.send();
}

//12 Google drive button generator

//css tabbed pane with radio button
{
    //#login:checked~section .content-link ma display block
    //radio button hidden and label with for shown
}

{
    //audio and embed links generated using src

    //Useful function call passing target as parameter from one part
    return copyText(embed_video);

    //another part
    const copyText = (target) => {
        navigator.clipboard.writeText(target.value);
    }
}


//13 Quiz App

{
    class Question {
        //text, choices, answer

        isCorrectAnswer(choice) {
            return this.answer === choice;
        }
    }

    class Quiz {

        // score,questions,questionIndex
        //getQuestionAtCurrentIndex();
        //updateScoreAndIndex(answer) correct vaye;
        //isEnded()

    }

    function displayQuestion() {
        //Ended handle, Question and choices at index display. showProgress()

        //Logic: choices display ma 
        guess('btn' + i, choices[i]);
    }
    function guess(id, guess_choice) {
        let button = document.getElementById(id);
        button.onclick = function () {
            //updateScoreAndIndex vitra isCorrectAnswer call vacha
            quiz.updateScoreAndIndex(guess_choice);
            displayQuestion();
        }
    }

    showProgress();

    //final score HTML concatenated in the container div

    //Timer logic
}

//14 Random quote generator

//fetch garecha quotes ra output += <ul></ul> garecha
{
    //array shuffle harek item lai random index ma swap garne
    shuffle(payload)
}


//15 Weather App

//css
{
    //element-container inside a container
}

//JS
{
    //fetch using api and input value
    //Logic: Current day and month in english extracted.
    //Values populated from the api and icon also set.
}



//16 List search

{
    //key up ma list ko array vitra value check.
    if (el_country_list[i].textContent.toLowerCase().includes(value)) {
        el_country_list[i].style.display = 'block';
    }
}


//17 Date Countdown
{
    //timer vitra
    let days = Math.floor(time_in_secs / (3600 * 24));
    let hours = Math.floor((time_in_secs / 3600) % 24);
    let minutes = Math.floor((time_in_secs / 60) % 60);
    let seconds = Math.floor((time_in_secs % 60));
}


//19 Tip Calculator

//HTML select element ko first item disabled garna
{
    <option value="0" disabled selected>Select an Option</option>
    //parseFloat and toFixed(2) mostly used.
}


// 20-25 Smooth scroll effect

//.active class decha active ma aani .active::after use garecha absolute pos le
//Top button position fixed cha.

{
    //<a> bata li ma active class add garna 
    e.target.parentElement.classList.add('active');
    //<a> ma href ma #two cha.
    const href = this.getAttribute('href');
    //#two lai select garyo.
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });

    //Toggle garna sticky class
    el_header.classList.toggle('sticky', window.scrollY > 0);


    //30% scroll vasi kei kaam garna
    const el_root = document.documentElement;
    const scroll_total = el_root.scrollHeight - el_root.clientHeight;
    if (el_root.scrollTop / scroll_total > 0.3) { }

    //Top button handling
    el_top_button.addEventListener('click', () => {
        el_root.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    });
}



//26 Responsive mobile menu
//close and open button absolutely positioned
//Navlist translated on Y axis by -200%

{
    el_nav_list.style.transform = 'translateY(0)';
}


//27 Responsive mobile Menu 2

//nav wrapper and navlist together
{
    /*.nav-list, .nav-wrapper{
        position: fixed;
        top:0;
        left:0;
        transform: translateX(200%);
    }*/
}

{
    //Absolutely positioned buttons also translated
    el_nav_wrapper.style.transform = 'translateX(0)';
    el_nav_list.style.transform = 'translateX(0)';


    el_nav_wrapper.addEventListener('click', (e) => {
        if (!el_nav_list.contains(e.target))
            closeMenu();
    });
}


//28 Responsive mobile sub-menu

//Responsive part all as above
//nav-list class also given to sub-menu
//submenu translateX given -100%

{
    el_nav_list.style.transform = 'translateX(-200%)';
    el_submenu.style.transform = 'translateX(0)';
    el_nav_wrapper.style.transform = 'translateX(0)';
}




//29 Page Scroll indicator and Newsletter

//position fixed scroll indicator with height 3px
// ko vitra arko 'progress' div
//Newsletter fixed on bottom left

{
    ////safari and chrome browsers
    const current_state = document.body.scrollTop || document.documentElement.scrollTop;
    //Client height is not reflected on scrollbar when it is zero(on top)
    const page_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scroll_percentage = (current_state / page_height) * 100;
    //percentage passed to style.width property
}


//30 Animation on scroll

//data-aos="fade-up" passed to an element
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>

{
    AOS.init({
        duration: 1000,
    });
}


//31 Random password generator

{
    //sabai char if checked concatenate on initial password
    let initial_password = "";
    el_uppercase.checked ? initial_password += ucase : "";

    //harek char position ma random char halne

    for (let i = 0; i < len; i++) {
        password += init_pass.charAt(
            Math.floor(Math.random() * init_pass.length)
        );
    }
}


//32 Local Storage

{
    //Person object pass garna user ma
    localStorage.setItem('user', JSON.stringify(person));
}


//33 Todo App

{
    //Add tasks
    tasks.push(el_input.value);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    //Retrieve tasks if not set create empty
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    //ForEach loop ma textnode banako li element ma aani appendchild gareko ol ma
    el_li.appendChild(document.createTextNode(task));

    //Delete button in forEach loop, create and appendchild used
    el_trash.innerHTML = `<i class="fas fa-trash-alt" id="${index}" onclick="deleteTask(this.id)"></i> `;

    //Delete 
    tasks.splice(index, 1);
}


//34 Notes app

{
    //Object banara pass garecha LS ma title and description
    notes.push(noteObj);
    localStorage.setItem('notes', JSON.stringify(notes));

    //appendchild haina sidhai individual notes HTML concatenated 
    //delete ma onclick ra id passed, edit ma pani tei

    //Edit ma yo code cha ra button click handles rest
    el_noteTitle.value = notes[index].title;
    notes.splice(index, 1);
}


//35 BMI Calculator
{
    //Function parameters passed.
    setResult(`Obese BMI:<span>${BMI}</span>`, 'red')
}


//36 Calculator

{
    //equal ma equals class halne
    //UL ma li elements lai
    // display: grid;
    //grid-template-columns: repeat(auto-fit, minmax(55px, 1fr));
}


{
    //push key value to console
    el_result.innerHTML += keys[i].innerHTML;

    //equals press vaye calculate
    return (el_result.innerHTML = eval(el_result.innerHTML));
}



//37 Digital clock

{
    returnDate() //array banara days[d.getDay()]; gareko technique

    //Hours handling for time.
    if (hrs == 0) {
        hrs = 12;
    }
    if (hrs > 12) {
        hrs = hrs - 12;
        session = 'PM';
    }
    //hrs, mins, secs and session printed
}



//38 Weight converter

//Eutai event handler 'input' meaning value pass gare
{
    function convertWeight(e) {
        if (e.target.classList.contains('pounds')) {
            let x = e.target.value;
            el_kilograms.value = (x / 2.2046).toFixed(2);
            //sabai ma esari nai values set.
        }
    }
}


//39 Temperature converter
{
    //Aaru exactly as above
    let x = parseFloat(e.target.value);
}


//40 Running game

//gif used for both hero and vilan

//Jump lai just animate class used 
{
    //yo pani jump function mai
    el_vilan.style.animation = "move 1s infinite linear";
}

//isAlive check garna
{
    let isAlive = setInterval(() => {
        let hero_top = parseInt(window.getComputedStyle(el_hero).getPropertyValue('top'));
        let vilan_left = parseInt(window.getComputedStyle(el_vilan).getPropertyValue('left'));

        if (vilan_left < 40 && vilan_left > 20 && hero_top >= 130) {
            el_vilan.style.animation = "none";
            alert('Game over');
        }
    }, 10)
}



//42 Word count

{
    //Yesko length ho no. of words
    let words = el_input.value.match(/\b[-?(\w+)?]+\b/gi);

    //limit reach gare typing disable garna keydown event ma
    if (words.length > WORD_LIMIT - 1 && e.code !== 'Backspace') {
        e.preventDefault();
    }

    //225 words per min le speed nikalera minute:seconds ma laijane
}



//43 Accordion

//content: "\f067"; icon in after pseudo class 
//Minus sign used in .active::after pseudo class

{
    //Accordion event listener ma desc element select garna
    const desc = this.nextElementSibling;

    //Desc visible garauna with transition for 'max-height'
    desc.style.maxHeight = desc.scrollHeight + "px";

    //max height set cha vane accordion close pani garne click event ma
    //aaru sabai ma max-height null garaune ra active class hataune

}


//44 Random Joke Generator

//Fetch used simple


//45 Modules, imports and exports


import { num1, num2 } from "./js/variable.js";
import { add } from './js/functions.js';
import * as varr from './js/variable.js'


//46 Github profile app

//code broken down into functions and variables


//Normal api used for user

//Map function used for repo


//47 Wikipedia search app

//ForEach function used to map through output array



//49 Image Slider

//Slides stacked on top of each other
/*
.slide{
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  opacity:0;
  transform: translateX(-50%);
  transition: all 0.5s ease;
}

.current .content{
  opacity: 1;
  transform: translateX(0);
  transition: all 0.5s ease;
}
*/

//sibling used for selection, current class toggle for slide view
{
    const el_current = document.querySelector('.current');

    if (el_current.nextElementSibling) {
        el_current.nextElementSibling.classList.add('current');
    } else {
        el_slides[0].classList.add('current');
    }

    //auto scroll disable on click and re-enable after click
    if (auto_scroll) {
        clearInterval(slide_interval);
        auto();
    }
}


//50 Data attribute and JS

{
    //data-link="about" gare html ma
    const filter2 = e.target.dataset.link;
}



//51 Product filter

//Harek product lai class decha shirt, watch etc.

{
    //button ko active class toggle garecha.
    //Harek product ma filter ra display block ki none
    el_store_products.forEach((product) => {
        if (filter === 'all') {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });

    //Search lai title h2 select garyo ra tesko forEach loop ma item halera,
    //parent ko parent lai display block garyo
    if (item.toLowerCase().indexOf(text) != -1) {
        product.parentElement.parentElement.style.display = "block";
        el_no_result.style.display = "none";
    } else {
        product.parentElement.parentElement.style.display = "none";
    }
}



//52 Product Carousel slider

//display of slider overflow-x auto
{
    /*section{
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }*/
}


{
    //scroll-left += 10 on a timer
    el_next.addEventListener('click', () => {
        let scroll_amount = 0;
        let slide_timer = setInterval(() => {
            el_slider.scrollLeft += 10;
            scroll_amount += 10;
            if (scroll_amount >= 100) {
                window.clearInterval(slide_timer);
            }
        }, 25);
    });

    //mouseover ma clear interval aani mouseout ma reenable timer
    //mouseout ma reenable timer technique
    return (play = setInterval(autoPlay, 10));

    //slider end vaye 0 ma lyauna total scroll width - scrollbar ko width
    if (el_slider.scrollLeft >= (el_slider.scrollWidth - el_slider.clientWidth - 1)) {
        el_slider.scrollLeft = 0;
    }
}

//53 Vertical tabs

//data-filter="about" given on buttons and same className given to tabs
// and active class given to the current button

{
    //Active class toggle garna:
    const el_current = document.getElementsByClassName('active');
    el_current[0].className = el_current[0].className.replace(' active', "");
    this.className += " active";

    el_Contents.forEach((content) => {
        if (content.classList.contains(filter)) {
            content.style.display = "block";
        }
        //Natra display none
    });
}



//54 Count up app

//data-target="450" a value given to each counter.
{
 //+ converts it to a number
const target = +counter.dataset.target;

//target divided to 20 and each section added on timer

//function called only on scroll to that position
//window.pageYOffset >= section_top.clientHeight
if (scroll_height >= section_top_height) {
    updateCounter();
}
}


//55 Digital Piano
{
    //keydown ma keycode in data-key pass gariyo
    const el_audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    //aaru press gare function return
    if(!el_key) return;


    //transitionend event ma removeTransition function cha
    //transform scale ma matra apply garna
    if(e.propertyName !== 'transform')    return;
    this.classList.remove('playing');
}









