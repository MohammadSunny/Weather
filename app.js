
window.addEventListener('load', ()=> {
    let long=-88.039894 ;
    let lat=30.695366;

    let tempDesc = document.querySelector(".temparature-description");
    let tempDegree = document.querySelector(".temparature-degree");
    let tempLoc = document.querySelector(".location-timezone");
    let temphum = document.querySelector(".temparature-humidity");
    // if(navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(position => {
    //         long = position.coords.longitude;
    //         lat = position.coords.latitude;


            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api =`${proxy}https://api.darksky.net/forecast/e1e0cf9d52dfdb272e5dbf73c0a2bf37/${lat},${long}`;

            fetch(api)
        .then(response =>{
            return response.json();

        })
        .then(data => {
            console.log(data);
            const {temperature, humidity, summary} = data.currently;

            tempDegree.textContent = temperature;
            tempDesc.textContent = summary;
            tempLoc.textContent = data.timezone;
            temphum.textContent = humidity;
            console.log(data.timezone,humidity, summary)

        });
        // });
    // }
});