let lastScroll = 0;
const headerTop = document.querySelector('.header-top');
const mobileMenu = document.querySelector('.mobile-menu');
let timeout = null;

window.addEventListener('scroll', () =>{
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if(currentScroll > lastScroll){
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            headerTop.style.transform = "translateY(-100%)";
            if (mobileMenu) {
                mobileMenu.style.transform = 'translateX(150%)'; 
            }
        }, 300);
    }
    else{
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            headerTop.style.transform = "translateY(0)";
        }, 300);
    }

    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});


// Botão de voltar ao topo
document.addEventListener('DOMContentLoaded', function () {
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        // Mostrar/ocultar botão conforme scroll com transição suave
        window.addEventListener('scroll', function () {
            if (window.scrollY > 200) {
                backToTopBtn.style.transform = 'translateY(0)';
                backToTopBtn.style.opacity = '1';
            } 
            else {
                backToTopBtn.style.transform = 'translateY(100%)';
                backToTopBtn.style.opacity = '0';
            }
        });

        // Scroll suave ao clicar
        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Inicialmente oculto
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.transform = 'translateY(100%)';
        backToTopBtn.style.display = 'flex';
    }

    // Modo escuro/claro
    const moonBtn = document.querySelector('.fa-moon');
    const sunBtn = document.querySelector('.fa-sun');
    if (moonBtn) {

        // Alterna modo escuro
        function setDarkMode(isDark) {
            document.body.classList.toggle('dark', isDark);
            moonBtn.style.display = isDark ? 'none' : 'inline-block';
            sunBtn.style.display = isDark ? 'inline-block' : 'none';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }

        moonBtn.addEventListener('click', function () {
            setDarkMode(true);
        });
        
        sunBtn.addEventListener('click', function () {
            setDarkMode(false);
        });

        // Carrega preferência
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
        }
    }

    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            if (mobileMenu.style.transform === 'translateX(0px)') {
                mobileMenu.style.transform = 'translateX(150%)'; 
            } else {
                mobileMenu.style.transform = 'translateX(0)'; 
            }
        });
    }
});
