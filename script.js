var arr= [
    {name: "Peatals of roses", image: "/image/MIN-2_240205_023510_3bffc4938efc5a84218a376ddce74378.jpg"},
    {name: "Animals of town", image: "/image/Public-Campaign-Photography-Portrait-Millana-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg"},
    {name: "The crowd of city", image: "/image/Converse-Basketball-Photography-02_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg"},
    {name: "Nike basketball", image: "/image/BOLDLY-1_1a58980f77ae6d8c6a1e26c40e92a05d.jpg"},
    {name: "Home cover", image: "/image/v1.5-HomeCover-B_66386012852979bf6f60b2d90a344eff.jpg"},
    {name:"orange peeled", image:"image/Mineral_FW_200645_EDITED_66386012852979bf6f60b2d90a344eff.jpg"},
    {name: "apple juice", image:"image/v1.5-home-feature_66386012852979bf6f60b2d90a344eff.jpg"},
    {name: "john", image: "image/21_john-elliott-nepal_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg"},
    {name:"Frame", image: "image/Frame-17_e49f8295ccc5a85e1a76e2d68c06456f.jpg " },
    {name:"Newthumb", image:"image/NewThumb_e49f8295ccc5a85e1a76e2d68c06456f.jpg "},
    {name:"Reebok", image:"image/Reebok-Split-From-Packaging-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg "}
]

function showTheCards(){
   var clutter = ""
    arr.forEach((obj)=>{
       clutter += ` <div class="box">
       <img src="${obj.image}" alt="">
   </div>`;
    })

    document.querySelector(".container")
    .innerHTML = clutter;
}

function handleSearchFunctionality(){
   var input = document.querySelector("#searchinput")

   let overlay =document.querySelector(".overlay")
   input.addEventListener("focus", function(){
    overlay.style.display="block"
   })

    input.addEventListener("blur",()=>{
    overlay.style.display="none";
   })

   
   input.addEventListener("input",()=>{
    const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
    
    var flag = ""
    filteredArray.forEach((obj)=>{
        flag += `<div class="sear-box">
        <i class="fa-solid fa-magnifying-glass"></i>
    <h3>${obj.name}</h3>
    </div>`
    })
    document.querySelector(".searchdata").style.display="block"
    document.querySelector(".searchdata").innerHTML = flag;
   })
}


showTheCards();
handleSearchFunctionality();


// function dropdownfunction(){
    let downopt =document.querySelector("#downopt")
const droparr = document.querySelector("#dropdown")
const arrow = document.querySelector(".downkey");
let arflag = 0
droparr.addEventListener("click",()=>{
   if(arflag == 0){
    arrow.style.transform="rotate(180deg)";
    arflag = 1;
    downopt.style.display = "block"
    downopt.style.display = "flex"
    downopt.style.transition ="0.5s all ease";
   }else{
    arrow.style.transform="rotate(0deg)";
    arflag = 0;
    downopt.style.display = "none"
   }
})



// dropdownfunction();


const toggle = document.querySelector("#tog")
const btn = document.querySelector(".btn")
let count = 0;

toggle.addEventListener("click",()=>{
    if(count == 0){
        btn.style.float = "right";
        toggle.style.backgroundColor = "rgb(31, 180, 31)";
        count = 1;
        console.log("click")
    }
    else{
        btn.style.float = "left";
        toggle.style.backgroundColor ="lightblue"
        count = 0;
        console.log("clicked")
    }
})

toggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme");
    console.log("dark")
})

const post = document.querySelector(".post");
post.addEventListener("click",()=>{
    downopt.style.display = "none";
    arrow.style.transform="rotate(0deg)";
})