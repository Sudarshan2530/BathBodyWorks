
let storeData = JSON.parse(localStorage.getItem('bagItem'));

console.log(storeData)


displayData(storeData)
function displayData(data){
    document.querySelector('#cart').innerHTML = null;
    let bag = document.getElementById('cart')
    data.map((elem, i)=>{
        
        var box = document.createElement("div");
    
  
        var img = document.createElement("img");
         img.src = elem.image_url;
         img.style.width = '50px';
         img.style.height= '60px'
         
         
         var name = document.createElement("h4");
         name.textContent = elem.name;
         
         
         var priceCont = document.createElement('div');
         priceCont.style.display = 'flex';
         priceCont.style.gap = '5px'
         priceCont.style.marginTop = '-20px';
         
         var tag = document.createElement('p');
         tag.innerHTML=elem.type;
         tag.style.marginTop = '-20px';
     
         var price = document.createElement("p");
         price.innerText = elem.price;
         price.style.color = "red";
     
          
         var sPrice = document.createElement('p')
         sPrice.innerText = elem.sPrice;
         var btn = document.createElement('button');
         btn.innerText = 'ADD TO BAG';
         btn.setAttribute = ('id', 'bag')
             btn.addEventListener('click', function(){
                 addToBag(elem)
             })
         
        priceCont.append(sPrice, price)
         box.append(img, name, price);
         bag.append(box)
         
        
         
       });

}
displayData(storeData);



function removeFromBucket(el, i){
    storeData.splice(el, 1);
    localStorage.setItem('bagItem', JSON.stringify(storeData));
    // window.location.reload();
    displayData(storeData);
}