function myMenuFunction (){
    let menuBtn = document.getElementById('myNavMenu')

    if(menuBtn.className === 'nav-menu'){
        menuBtn.className += ' responisve'
    }else{
        menuBtn.className = 'nav-menu'
    }
}