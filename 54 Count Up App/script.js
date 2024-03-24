const el_counters = document.querySelectorAll('.counter');

el_counters.forEach((counter) => {
    counter.innerText = 0;

    function updateCounter() {
        //converts to number
        const target = +counter.dataset.target;
        const count = +counter.innerText;
        const increment = target / 200; //count timing ratio

        if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    }

    // updateCounter();

    window.addEventListener('scroll', () => {
        //get the current scroll position
        const scroll_height = window.pageYOffset;
        //get the element with the class 'top'
        const section_top = document.querySelector('.top');
        //get the height of the 'top' section
        const section_top_height = section_top.clientHeight;


        console.log(section_top_height);
        // If the scroll position is greater than or equal to the height of the 'top' section, it calls the updateCounter() function.
        if (scroll_height >= section_top_height) {
            updateCounter();
        }
    })
});