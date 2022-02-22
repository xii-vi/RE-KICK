document.querySelector("#filter-icon").addEventListener("click",()=>{
    document.querySelector(".sm-filter").classList.remove("hide");
    document.querySelector(".sm-filter").classList.add("show");
    }
    )
    
document.querySelector(".close-icon").addEventListener("click",()=>{
        document.querySelector(".sm-filter").classList.add("hide");
        document.querySelector(".sm-filter").classList.remove("show");
    }
    )