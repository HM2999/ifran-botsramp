window.addEventListener('scroll', () => {
    let div = document.getElementById("my");
    let contentposition = div.getBoundingClientRect().top;
    let screenposition = window.innerHeight / 1.5;
    if (contentposition < screenposition) {
    
        div.classList.add('open');
    } else {
        content.classList.remove('open');
    }

});
