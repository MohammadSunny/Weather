
window.addEventListener('load', ()=> {
    let long=-88.8853 ;
    let lat=30.3960;

    let tempDesc = document.querySelector(".temparature-description");
    let tempDegree = document.querySelector(".temparature-degree");
    let tempLoc = document.querySelector(".location-timezone");
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
            const {temperature, summary, icon} = data.currently;

            tempDegree.textContent = temperature;
            tempDesc.textContent = summary;
            tempLoc.textContent = data.timezone;
            console.log(data.timezone, summary)
            setIcons(icon, document.querySelector(".icon"))

        });
        // });
    // }

    function setIcons(icon, iconID) {
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, skycons[currentIcon]);
    }
});