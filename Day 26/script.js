var details=[
    {
        title:"FREE",
        price:"$0",
        adva:["Single User","5GB Storage","Unlimited Public Projects",
        "Community Access"],
        disadv:["Unlimited Private","Dedicated Phone Support",
        "Free Subdomain","Monthly Status Report"],
        ad:"id1",
    },
    {
        title:"PLUS",
        price:"$9",
        adva:["5 User","50GB Storage","Unlimited Public Projects",
        "Community Access","Unlimited Private","Dedicated Phone Support",
        "Free Subdomain"],
        disadv:["Monthly Status Report"],
        ad:"id2",
    },
    {
        title:"PRO",
        price:"$49",
        adva:["Unlimited User","150GB Storage","Unlimited Public Projects",
        "Community Access","Unlimited Private","Dedicated Phone Support",
        "Unlimited Free Subdomain","Monthly Status Report"],
        disadv:[],
        ad:"id3",
    }
];



var main_div= document.createElement("section");
main_div.setAttribute("class","pricing py-5");


function main(){
details.map(({title,price,ad,}) =>{
    var main1= document.createElement("div");
main1.setAttribute("class","container");
main1.innerHTML=`   
 <div class="container">
<div class="row">
  <!-- Free Tier -->
  <div class="col-lg-4">
    <div class="card mb-5 mb-lg-0">
      <div class="card-body">
        <h5 class="card-title text-muted text-uppercase text-center">${title}</h5>
        <h6 class="card-price text-center">${price}<span class="period">/month</span></h6>
        <hr>
        <ul class="fa-ul">
          <li id=${ad}><span  class="fa-li"><i class="fas fa-check"></i></span></li>
          </ul>
          <div class="d-grid">
             <a href="#" class="btn btn-primary text-uppercase">Button</a>
           </div>
        </div>
        </div>
        </div>
        </div>
        </div>`
     
main_div.append(main1);
  });

document.body.append(main_div);
}



function second(){
  const inne = document.querySelector(".fa-ul");
  
details.map(({adva,disadv,ad,dis})=>{
  let add= document.getElementById(ad);
  
  adva.map((x)=>{
    add.innerHTML+=`<li id=${ad}><span  class="fa-li"><i class="fas fa-check">${x}</i></span></li>`;
    
  });
  
  console.log(disadv.length);
  if(disadv.length != 0){
    disadv.map((x)=>{
      add.innerHTML+=`<li id=${dis} class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>${x}</li>`;
      
    });
  }

}) 
}


main();
second();