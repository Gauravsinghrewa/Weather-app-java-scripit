const btn= document.getElementById("Search-btn");
const input=document.getElementById("search-input" );


const cityname= document.getElementById("city_name");
const citytime= document.getElementById("city_time");
const citytempe=document.getElementById("city_temp")

const getData= async(cityName)=>{
  const response= await  fetch(`http://api.weatherapi.com/v1/current.json?key=66d8774e0f37493782c30357241306&q=${cityName} &aqi=yes`,{
        method:"GET"
    })

    return  await response.json();

}


// const getlocation= async (position)=>{
//     const result=await getData(
//         position.coords.latitude,
//         position.coords.longitude
//     );
//     console.log(result)
// }

// const failed= async ()=>{
//     console.log("There was no fatch location")
// }


btn.addEventListener ("click",async()=>{
    // navigator.geolocation.getCurrentPosition((getlocation,failed))
    const data=input.value;
    const result= await getData(data);
    console.log(result)
    cityname.innerText=`${result.location.name}, ${result.location.region}, ${result.location.country}`
    citytime.innerText= `${result.location.localtime}`
    citytempe.innerText=`${result.current.temp_c}`;
})







