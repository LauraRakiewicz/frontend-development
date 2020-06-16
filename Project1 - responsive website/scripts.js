function gotoBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

const close = document.getElementById('close');
const navigation = document.getElementById('navigation');

close.addEventListener('click', () => {
    navigation.classList.toggle('show');
});