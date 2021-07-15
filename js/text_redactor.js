let div = document.getElementById('text');

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyE' && event.ctrlKey) {
        div.innerHTML = '<textarea>' + div.innerHTML + '</textarea>';
        event.preventDefault();
        
        textArea = this.querySelector('textarea');
        textArea.classList.add('text_area');
    }
})