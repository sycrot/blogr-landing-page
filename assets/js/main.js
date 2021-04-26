(function(){
    $body = document.querySelector('body');
    $openMenu = document.querySelector('.open_menu');
    $closeMenu = document.querySelector('.close_menu');
    $headerMenu = document.querySelector('.header__menu');
    $headerContent = document.querySelector('.header__content');
    $arrowLi = document.querySelectorAll('.arrow__menu');

    $openMenu.addEventListener('click', openMenu);

    var _menuOpened = false;

    function X(x) {
        if(x.matches) {
            closeMenu();
            openDesktop();
        }
    }
    var desktop = window.matchMedia('(min-width: 1080px)')
    X(desktop);
    desktop.addListener(X);
    desktop.addListener(openDesktop)

    function openDesktop() {
        $arrowLi.forEach(e => {
            if (desktop.matches) {
                e.setAttribute('src', 'assets/images/icon-arrow-light.svg')
            } else {
                e.setAttribute('src', 'assets/images/icon-arrow-dark.svg')
            }
        })
    }
    

    function openMenu(){
        $openMenu.style.display = 'none';
        $closeMenu.style.display = "block";
        $headerMenu.style.display = 'block';
        $headerContent.style.display = 'none';
        _menuOpened = true;
    }

    $closeMenu.addEventListener('click', closeMenu)
    function closeMenu() {
        $closeMenu.style.display = 'none';
        $openMenu.style.display = 'block';
        $headerMenu.style.display = 'none';
        $headerContent.style.display = 'block';
        _menuOpened = false;
    }

})()

