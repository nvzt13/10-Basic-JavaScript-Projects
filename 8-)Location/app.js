let latitude = "";
let longitude = ""

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onSucces,onError)
}else{
    alert("Kullabıcı konum bilgisi alınamıyor")
}



console.log(latitude)
// function onSucces

function onSucces(position){
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    initMap();

   const apiKey = "c27401c134e54b8b922feab3df6ea601"
   const url = `  https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`

   fetch(url)
   .then(response  => response.json())
   .then(result => {
        let details = result.results[0].components
        let {country,postCode,province} = details
    })

}

// function onError

function onError(){
    if(erro.code ==1){
        alert("Kullanıcı erişim izni reddedildi")
    }else if (error.code ==2){
        alert("Konum alınamadı")
    }else{
        alert("Bir hata oluştu")
    }
}

let map;

function initMap(){
    map = new google.maps.Map(document.getElementById("map"), {
        center : {lat :latitude, lng :longitude},
        zoom : 14,
    })

    const marker = new google.maps.Marker({
        position:{lat :latitude, lng :longitude},
        map:map
    })
}

   
