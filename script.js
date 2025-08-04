async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function load() {
    //

    // add event listeners
    const logoContainer = document.getElementById('logo-container');
    logoContainer.addEventListener('click', () => changePage('home'));
    const rankItems = document.querySelectorAll('#shop-item');
    rankItems.forEach(item => {
        item.addEventListener('click', () => changePage('ranks'));
    });
    const homeButton = document.querySelector('.homeBtn');
    homeButton.addEventListener('click', () => changePage('home'));
}

async function changePage(page) {
    if (page === 'home') {
        console.log('Loaded home');
        document.getElementById('home').style.display = 'inline-block';
        document.getElementById('ranks').style.display = 'none';
    } else if (page === 'ranks') {
        console.log('Loaded ranks');
        document.getElementById('home').style.display = 'none';
        document.getElementById('ranks').style.display = 'flex';
    }
}