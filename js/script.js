var dropdown = document.querySelector(".drop-services");
var menuslist = document.querySelector("#drop-services");
var lists = document.querySelectorAll("ul li");
dropdown.addEventListener('click',()=>{   
    if(menuslist.style.display=="block"){
        menuslist.style.display="none";
    }else{
        menuslist.style.display="block";
    }
}); 

var dropdownother = document.querySelector(".drop-other");
var menuslistother = document.querySelector("#drop-other");
var lists = document.querySelectorAll("ul li");
dropdownother.addEventListener('click',()=>{   
    if(menuslistother.style.display=="block"){
        menuslistother.style.display="none";
    }else{
        menuslistother.style.display="block";
    }
}); 

// lists.forEach(element => {
    
// });