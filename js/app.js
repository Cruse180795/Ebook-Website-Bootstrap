
const userScroll = () =>{
    const navBar = document.querySelector('.navbar');

    window.addEventListener('scroll', () =>{
        if(window.scrollY > 50){
            navBar.classList.add('bg-dark');
            navBar.classList.add('navbar-transparent');
        }
        else{
            navBar.classList.remove('bg-dark');
navBar.classList.remove('navbar-transparent');
            
        }
    });
}


document.addEventListener('DOMContentLoaded', userScroll);