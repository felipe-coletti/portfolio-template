function toggle() {
    let list = document.querySelector('ul');
    
    if (list.classList.contains('closed')) {
        list.classList.replace('closed', 'opened');
    } else {
        list.classList.replace('opened', 'closed');
    }
}
