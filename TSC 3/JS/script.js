


let getData = async ()=>
{

    let saree = await fetch("https://dineshtextilebackend.onrender.com/saree",{
    method: "GET",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
});
 

let s = await saree.json();



let d = document.getElementById("productcont");

console.log(s);
document.getElementsByClassName("el").innerHTML = "";
s.map((item,i) => {
    const div = document.createElement("div");

  div.className="productdiv";
         div.innerHTML = `<a class="product" src="" ><div><img class="cardimg" src=${item.colors[0].image[0]}  alt="" /></div><p class="name" >${item.name}</p><p class="desc" >${item.colors[0].description}</p><p class="price" ><span>&#8377;</span>${item.colors[0].price}<span class="disc"></span></p></a>`      
        d.appendChild(div);

        let dis =Math.ceil(((item.mrp - item.colors[0].price) / item.mrp) * 100)
        if(dis > 0)
        {
          document.getElementsByClassName("disc")[i].innerHTML=`<span>&#8377;<span>${item.mrp}</span></span><span> ${dis}%</span>`;
        }
});


}


let hide = (filter,arr)=>{
  let el = document.getElementsByClassName(filter)[0];
  let a = document.getElementsByClassName(arr)[0];
  if(el.style.display === "flex")
  {
    el.style.display="none"; 
    a.style.transform="rotateX(0deg)";
  }
  else{
    el.style.display="flex";
    a.style.transform="rotateX(180deg)";
  }
}


let sort = (ind) =>{

  let s = document.getElementsByClassName("sortbox");

  console.log(s);

  for(let i =0;i<s.length;i++)
  {
    console.log(s[i]);
    s[i].style.backgroundColor = "white";
  } 
 

  s[ind].style.backgroundColor = "red";


  
};



getData();