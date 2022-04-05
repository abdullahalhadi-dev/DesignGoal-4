const body = document.querySelector('body'),
    nav = document.querySelector('nav'),
    modeToggle = document.querySelector('.dark-light'),
    searchToggle = document.querySelector('.searchToggle'),
    siderbarClose = document.querySelector('.siderbarClose');



    modeToggle.addEventListener("click", () => {
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
    })

    searchToggle.addEventListener("click", () => {
        searchToggle.classList.toggle("active");
 
    })