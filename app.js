window.addEventListener('load', ()=> {
    let long;
    let lat;


    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;


            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api =`${proxy}https://api.darksky.net/forecast/e1e0cf9d52dfdb272e5dbf73c0a2bf37/$(lat),$(long)`;

            fetch(api)
        .then(response =>{
            return response.json();

        })
        .then(data => {
            console.log(data);

        });
        });
    }
});