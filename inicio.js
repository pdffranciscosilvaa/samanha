function toggleMenu() {  
    let menu = document.getElementById('menuLateral');  
    let content = document.getElementById('mainContent');  
    menu.classList.toggle('active'); 

    if (menu.classList.contains('active')) {  
        content.style.marginLeft = "250px";
    } else {  
        content.style.marginLeft = "0";  
    }  
}  