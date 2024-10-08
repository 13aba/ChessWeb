


//Main content
const mainContent = document.querySelector(".main-content");
//Navigation bar
const navBar = document.querySelector('.nav-bar');
const navBarHeight = navBar.offsetHeight;

window.addEventListener("load", () => {
    
    //Add padding to the top of main content equal to nav bar so its not covered
    mainContent.style.paddingTop = `${navBarHeight}px`;
})

window.addEventListener('scroll', () => {
    // Dynamic navigation menu
    // Retrieve the navigation menu from the DOM
    const companyLogo = document.querySelector('.company-logo-scroll');

    

    // Make navigation menu fixed to the top of the screen when a certain vertical scroll threshold is reached
    navBar.classList.toggle('sticky', window.scrollY > navBar.offsetTop);

    // Display the company logo in a white box in the top left corner of the fixed navigation menu when a 
    // vertical scroll threshold is reached 
    companyLogo.classList.toggle('company-logo-scroll-active', window.scrollY > navBar.offsetTop);

    mainContent.style.paddingTop = `${navBarHeight}px`;

    // Scroll to top button
    const scrollUp = document.querySelector('.scroll-up-button');
    // Display scroll button when scrolled 
    scrollUp.classList.toggle('visible', window.scrollY > navBar.offsetTop);
    //Scroll to top when pressed
    scrollUp.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
            });
            
        });
})


