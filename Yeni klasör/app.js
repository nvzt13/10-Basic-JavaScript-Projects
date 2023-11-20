let latitude,longitude = "";

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onSucces,onError)
}else{
    alert("Kullabıcı konum bilgisi alınamıyor")
}

function onSucces(position){
   let latitude = position.coords.latitude;
   let longitude = position.coords.longitude;
 



   const apiKey = "c27401c134e54b8b922feab3df6ea601"
   const url = `  https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=c27401c134e54b8b922feab3df6ea601`

   fetch(url)
   .then(response  => response.json())
   .then(result => {
        let details = result.results[0].components
        let {country,postCode,province} = details
        
        document.getElementById("div").innerHTML = `
        <p>ülke : ${country}<p>
        <p>Posta Codu :${postCode} <p>
        <p>şehir : ${province}<p>`
    })
}

function onError(){
    if(erro.code ==1){
        alert("Kullanıcı erişim izni reddedildi")
    }else if (error.code ==2){
        alert("Konum alınamadı")
    }else{
        alert("Bir hata oluştu")
    }
}