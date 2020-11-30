const input_text = document.querySelector('#search');
input_text.addEventListener('keyup', () => {

    let ul = document.querySelector('.contacts');
    let li = ul.querySelectorAll('li.contact-name');

    for(let i = 0; i < li.length; ++i) {
        let a = li[i].getElementsByTagName('a')[0];
       
        if(a.innerHTML.toLowerCase().indexOf(input_text.value.toLowerCase()) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
});