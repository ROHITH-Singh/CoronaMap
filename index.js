function updatemap(){

    fetch("https://rohith-singh.github.io/CoronaMap/data.json")
    .then(response => response.json())
    .then(rsp =>  {
        console.log(rsp.data);
        rsp.data.forEach(element => {
            latitude =element.latitude;
            longitude =element.longitude;
            infected=element.infected;
            dead=element.dead;

            if(infected >4000 && dead > 300)      
              rang =`rgb(255,0,0)`
             else if(infected >2000)
            rang =`#fa9e3c`
             else if(infected > 1000)
             rang  =`#f0d62e`
            else if (infected <100 && dead < 0)
             rang =`#98f02e`
            
 new mapboxgl.Marker({
    draggable: false,
    color: rang
    })
    .setLngLat([longitude, latitude])
    .addTo(map);
});
    })
}
let interval =200000000000000000000000000000000000000000000000000000000000000;
setInterval(updatemap,interval);
