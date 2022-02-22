const filterComp = document.querySelector(".filter").innerHTML = `<div class="ml-5 filter-wrapper">
<p class="py-4">FILTER & SEARCH</p>
<div class="flex flex-direction-col">
    <p class="py-4">Filter by Gender</p>
    <label class="py-1" for="All Genders">
        <input type="radio" value="All Genders" name="radio-button" /> All Genders
    </label>
    <label class="py-1" for="Men">
        <input type="radio" value="Men" name="radio-button" /> Men
    </label>
    <label class="py-1" for="Women">
        <input type="radio" value="Women" name="radio-button" /> Women
    </label>
</div>
<p class="py-4">Filter by Price</p>
<div class="flex flex-direction-col">
    <input class="simple-slider" id="slider-value" type="range" min="5000" max="50000" value="10000" />
</div>
<div class="mt-5">
    <span class="btn btn-primary">5000</span>
    <span id="value" class="btn btn-primary">10000</span>
</div>


<p class="py-4">Filter by Rating</p>
<div class="flex flex-direction-col">
    <label class="py-1"><input type="checkbox" />
        4★ & above
    </label>
    <label class="py-1"><input type="checkbox" />
        3★ & above
    </label>
    <label class="py-1"><input type="checkbox" />
        2★ & above
    </label>
    <label class="py-1"><input type="checkbox" />
        1★ & above
    </label>
</div>

<p class="py-4">Filter by Shoe Size</p>
<div class="flex flex-direction-col filter-container">
    <label class="py-1"><input type="checkbox" />
        5
    </label>
    <label class="py-1"><input type="checkbox" />
        5.5
    </label>
    <label class="py-1"><input type="checkbox" />
        6
    </label>
    <label class="py-1"><input type="checkbox" />
        6.5
    </label>
    <label class="py-1"><input type="checkbox" />
        7
    </label>
    <label class="py-1"><input type="checkbox" />
        7.5
    </label>
    <label class="py-1"><input type="checkbox" />
        8
    </label>
    <label class="py-1"><input type="checkbox" />
        8.5
    </label>
    <label class="py-1"><input type="checkbox" />
        9
    </label>
    <label class="py-1"><input type="checkbox" />
        9.5
    </label>
    <label class="py-1"><input type="checkbox" />
        10
    </label>
    <label class="py-1"><input type="checkbox" />
        10.5
    </label>
    <label class="py-1"><input type="checkbox" />
        11
    </label>
    <label class="py-1"><input type="checkbox" />
        11.5
    </label>
    <label class="py-1"><input type="checkbox" />
        12
    </label>
    <label class="py-1"><input type="checkbox" />
        12.5
    </label>
    <label class="py-1"><input type="checkbox" />
        13
    </label>
    <label class="py-1"><input type="checkbox" />
        13.5
    </label>
</div>

<p class="py-4">Filter by Brand</p>
<div class="flex flex-direction-col filter-container">
    <label class="py-1"><input type="checkbox" />
        Adidas
    </label>
    <label class="py-1"><input type="checkbox" />
        Adidas Originals
    </label>
    <label class="py-1"><input type="checkbox" />
        Asics
    </label>
    <label class="py-1"><input type="checkbox" />
        Converse
    </label>
    <label class="py-1"><input type="checkbox" />
        Crocs
    </label>
    <label class="py-1"><input type="checkbox" />
        Fila
    </label>
    <label class="py-1"><input type="checkbox" />
        New Balance
    </label>
    <label class="py-1"><input type="checkbox" />
        Nike
    </label>
    <label class="py-1"><input type="checkbox" />
        Puma
    </label>
    <label class="py-1"><input type="checkbox" />
        Reebok
    </label>
    <label class="py-1"><input type="checkbox" />
        Vans
    </label>
</div>

<p class="py-4">Filter by Color</p>
<div class="flex flex-direction-col filter-container">
    <label class="py-1"><input type="checkbox" />
        Black
    </label>
    <label class="py-1"><input type="checkbox" />
        Blue
    </label>
    <label class="py-1"><input type="checkbox" />
        Brown
    </label>
    <label class="py-1"><input type="checkbox" />
        Cream
    </label>
    <label class="py-1"><input type="checkbox" />
        Gold
    </label>
    <label class="py-1"><input type="checkbox" />
        Green
    </label>
    <label class="py-1"><input type="checkbox" />
        Grey
    </label>
    <label class="py-1"><input type="checkbox" />
        Maroon
    </label>
    <label class="py-1"><input type="checkbox" />
        Multi
    </label>
    <label class="py-1"><input type="checkbox" />
        Orange
    </label>
    <label class="py-1"><input type="checkbox" />
        Pink
    </label>
    <label class="py-1"><input type="checkbox" />
        Purple
    </label>
    <label class="py-1"><input type="checkbox" />
        Red
    </label>
    <label class="py-1"><input type="checkbox" />
        Silver
    </label>
    <label class="py-1"><input type="checkbox" />
        White
    </label>
    <label class="py-1"><input type="checkbox" />
        Yellow
    </label>
</div>

<div class=" text-center mt-4">
    <button class="btn btn-primary p-3">Apply Filters</button>
    <p class="py-2 active-page-text"><a>Reset Filters</a></p>
</div>

</div>`

filterComp();