

window.addEventListener('scroll', () => {
    // Retrieve the navigation menu from the DOM
    const navBar = document.querySelector('.nav-bar');
    const companyLogo = document.querySelector('.company-logo-scroll');

    // Compute the distance from the top of the page
    let offsetTop = navBar.offsetTop;

    // Make navigation menu fixed to the top of the screen when a certain vertical scroll threshold is reached
    navBar.classList.toggle('sticky', window.scrollY > navBar.offsetTop);

    // Display the company logo in a white box in the top left corner of the fixed navigation menu when a 
    // vertical scroll threshold is reached 
    companyLogo.classList.toggle('company-logo-scroll-active', window.scrollY > navBar.offsetTop);
})