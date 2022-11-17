var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all",true)
// request.open("GET","https://restcountries.com/v2/all",true)

request.send();

request.onload = function() {
    var data = JSON.parse(request.response)
    console.log(data)

    for(var i=0; i<data.length; i++){
        console.log(data[i].flags.png);
    }
    for(var i=0; i<data.length; i++){
        console.log(data[i].name.common);
    }

        data.forEach((country) => {
            console.log(country.region)
        })

        data.forEach((country) => {
            console.log(country.subregion)
        })

    
    for (var obj of data){
        console.log(obj.population);
    }
}
    
