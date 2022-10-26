var addtobox = document.querySelector(".shop-item-button")

for (var index = 0; index <= addtobox.length; index++) {
    addtobox[index].addEventListener("click",tiklandi)
    console.log(addtobox[index])
}


function tiklandi(event) {
   var button = event.target

   var resim =button.parentElement.document.querySelector(".shop-item-image")
   var isim = button.parentElement.document.querySelector(".shop-item-title")
   var fiyat = button.parentElement.document.querySelector(".shop-item-price")
    console.log(resim,isim,fiyat)
}