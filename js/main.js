
var allData = [];
var forcast_data = [];
let input = document.querySelector('.form_input');

input.addEventListener('input', function () {
    weather(this.value)
})


async function weather(term='cairo') {
    let weatherRes = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=0957893f9daf4b8d8ef103005230808&q=${term}&days=3&aqi=no&alerts=no`)

    let weatherJason = await weatherRes.json();

    allData = weatherJason;

    forcast_data = allData.forecast.forecastday

    console.log(forcast_data);
    display_data();
    displayNextData();

}
weather();


function display_data() {

    let day = new Date();
    day.getDate();

    day.toLocaleString('en-US', { weekday: "long" });
    day.toLocaleString('en-US', { month: "long" });



    document.querySelector('.today').innerHTML = `

            <div class="d-flex justify-content-between dates text-white p-2 day_weather">
                <div class="day ">

                    ${forcast_data[0].date = day.toLocaleString('en-US', { weekday: "long" })}
                </div>
                <div class="date ">${forcast_data[0].date = day.getDate() + day.toLocaleString('en-US', { month: "long" })}</div>
            </div>



          <div >
            <div class="location mt-4 fs-4 text-white">${allData.location.name}</div>


            <div class="container">
                <div class="row">


                    <div class="col-md-6">
                        <div class="degree text-white">

                            <h2>${allData.current.temp_c} <sup>o</sup>c</h2>

                        </div>
                    </div>


                    <div class="col-md-6">
                        <div class="degree_icon">

                            <img src="${allData.current.condition.icon}" alt="" class="w-75 ">
                        </div>
                    </div>
                </div>



            </div>
            <div>
                <p>${allData.current.condition.text}</p>
            </div>

            <div class="row p-3">

                <div class="col-md-4 weather_icon">
                    <img src="images/icon-umberella@2x.png" alt="" class="w-25">
                    <span>${allData.current.humidity}%</span>


                </div>
                <div class="col-md-4 weather_icon">
                    <img src="images/icon-wind@2x.png" alt="" class="w-25">
                    <span>${allData.current.wind_kph}km/h</span>


                </div>
                <div class="col-md-4 weather_icon">


                    <img src="images/icon-compass@2x.png" alt="" class="w-25">
                    <span>${allData.current.wind_dir}</span>
                </div>
            </div>
            </div>


        `
}

function displayNextData() {



    let day = new Date('2023-08-17');

    day.getDate();

    day.toLocaleString('en-US', { month: "long" });






    document.querySelector('.tomorrow').innerHTML = ` 
    <div class="header d-flex justify-content-center align-items-center p-1">

        <p>${forcast_data[1].date = day.getDate() + day.toLocaleString('en-US', { month: "long" })}</p>


    </div>



    <div class="   p-5 second_weather">

        <figure class="text-center">
            <img src="${forcast_data[1].day.condition.icon} " alt="">
        </figure>


        <div class="degree_weather fs-2 text-center">

            <p class="text-white">${forcast_data[1].day.maxtemp_c} <sup>o</sup>c</p>

        </div>

        <div class="text-center ">
            <p class="text-white">${forcast_data[1].day.mintemp_c} <sup>o</sup></p>
        </div>
        <div class="text-center">

            <p>${forcast_data[1].day.condition.text}</p>
        </div>



    </div>

`

    document.querySelector('.afterTomorrow').innerHTML = ` 
<div class="header d-flex justify-content-center align-items-center p-1">

    <p>${forcast_data[2].date = day.getDate() + 1 + day.toLocaleString('en-US', { month: "long" })}</p>


</div>



<div class="   p-5 second_weather">

    <figure class="text-center">
        <img src="${forcast_data[2].day.condition.icon} " alt="">
    </figure>


    <div class="degree_weather fs-2 text-center">

        <p class="text-white">${forcast_data[2].day.maxtemp_c} <sup>o</sup>c</p>

    </div>

    <div class="text-center ">
        <p class="text-white">${forcast_data[2].day.mintemp_c} <sup>o</sup></p>
    </div>
    <div class="text-center">

        <p>${forcast_data[2].day.condition.text}</p>
    </div>



</div>

`

}
















