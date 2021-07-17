async function locations(location){
    const res_location = await fetch(`/api/location/search/?query=${location}`)
    const data_location = await res_location.json()
}
async function date(date){
    let response = locations(input.value)
    let user = await response
    let woeid = user.woeid
    const res_date = await fetch(`/api/location/${woeid}/${date}/`)
    const data_date = await res_date.json()
}
let searchb = document.querySelector('.searchb')
let image = document.querySelector('.image')
let info = document.querySelector('.info')
let temperature = document.querySelector('.temperature')
let ltn = document.querySelector('.location')
searchb.addEventListener('onclick',() => {
    image.innerHTML = "";
    ltn.innerHTML = "";
    temperature.innerHTML = "";
    info.innerHTML = "";
    let img = document.querySelector("#image_X");
    img.classList.remove('image');
    img.classList.add('newimg');

})