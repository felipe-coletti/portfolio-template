function toggle() {
    let list = document.querySelector('ul');
    if (list.classList.contains('open')) {
        list.classList.remove('open');
    } else {
        list.classList.add('open');
    }
}