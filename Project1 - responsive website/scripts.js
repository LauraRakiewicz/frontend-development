const selectElement = (s) => document.querySelector(s);
selectElement('.open').addEventListener('click', () => {
    selectElement('nav-list').classList.add('active');
});

// close
selectElement('.close').addEventListener('click', () => {
    selectElement('nav-list').classList.remove('active');
});

function gotoBottom(){
    window.scrollTo(0,document.body.scrollHeight);
}