function toggle() {
    let list = document.querySelector('ul');
    if (list.classList.contains('closed')) {
        list.classList.remove('closed');
        list.classList.add('opened');
    } else {
        list.classList.remove('opened');
        list.classList.add('closed');
    }
}
