$openMenu = document.querySelector('.open_menu');
$closeMenu = document.querySelector('.close_menu');
$headerMenu = document.querySelector('.header__menu');
$headerContent = document.querySelector('.header__content');

$openMenu.addEventListener('click', openMenu)

function openMenu(){
    $openMenu.style.display = 'none';
    $closeMenu.style.display = "block";
    $headerMenu.style.display = 'block';
    $headerContent.style.display = 'none';
}

$closeMenu.addEventListener('click', closeMenu)
function closeMenu() {
    $closeMenu.style.display = 'none';
    $openMenu.style.display = 'block';
    $headerMenu.style.display = 'none';
    $headerContent.style.display = 'block';
}
