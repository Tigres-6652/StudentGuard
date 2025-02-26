const header = document.querySelector('.header')

    window.addEventListener('scroll',function(){
        header.classList.toggle('active', this.window.scrollY > 0)
    })