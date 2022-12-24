function toggle() {
    let list = document.querySelector('ul');
    if (list.classList.contains('open')) {
        list.classList.remove('open');
        list.classList.add('closed');
    } else {
        list.classList.remove('closed');
        list.classList.add('open');
    }
}
