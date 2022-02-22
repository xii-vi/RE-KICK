document.querySelector(".open-menu").addEventListener("click",()=>{
    document.querySelector(".mobile-sidebar").classList.add("show");
    document.querySelector(".mobile-sidebar").classList.remove("hide");
    document.querySelector(".open-menu").classList.add("hide");
    document.querySelector(".open-menu").classList.remove("show");
    document.querySelector(".close-menu").classList.add("show");
    document.querySelector(".close-menu").classList.remove("hide");
    }
    )
    
document.querySelector(".close-menu").addEventListener("click",()=>{
        document.querySelector(".mobile-sidebar").classList.add("hide");
        document.querySelector(".mobile-sidebar").classList.remove("show");
        document.querySelector(".close-menu").classList.add("hide");
        document.querySelector(".close-menu").classList.remove("show");
        document.querySelector(".open-menu").classList.add("show");
        document.querySelector(".open-menu").classList.remove("hide");
    }
    )
    const smMenu = document.querySelector(".mobile-sidebar").innerHTML=`
    <div class="product-category-small flex flex-direction-col">
                        <a href="">NEW ARRIVALS</a>
                        <a href="/pages/product-page/sneaker.html">SNEAKERS</a>
                        <a href="/pages/product-page/streetwear.html">STREETWEARS</a>
                        <a href="#">ACCESSORIES</a>
                        <a href="#">BRANDS</a>
                        <a href="#">HEAT</a>
                        <a href="#">BLOG</a>
                        <a href="#">SALE</a>
                        <hr />
                        <a href="/pages/wishlist.html">Wishlist</a>
                        <a href="/pages/login.html"></i>My account</a>
    </div>;`
    
smMenu();

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