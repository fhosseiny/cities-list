async function getCities(){

    try{

        const response = await fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
        const json = await response.json()
        console.log(json)
    }catch(err){
        console.log("Error:",err)
    }

}
