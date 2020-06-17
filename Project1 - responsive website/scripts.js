function gotoBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

const close = document.getElementById('close');
close.classList.add("icon-not-show")

const menu = document.getElementById('menu');

const navigation = document.getElementById('navigation');

close.addEventListener('click', () => {
    navigation.classList.toggle('show');

    close.classList.add("icon-not-show")
    menu.classList.remove("icon-not-show")
});

menu.addEventListener('click', () => {
    navigation.classList.toggle('show');

    menu.classList.add("icon-not-show")
    close.classList.remove("icon-not-show")
});