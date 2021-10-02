
let number_of_apartments = document.getElementById("n-of-apartments");
let floors_residential = document.getElementById("n-of-floors-res");
let basement_residential = document.getElementById("n-of-basement-res");
let floors_hybrid= document.getElementById("n-of-floors-hyb");
let basement_hybrid= document.getElementById("n-of-basement-hyb");
let floors_commercial= document.getElementById("n-of-floors-com");
let basement_commercial= document.getElementById("n-of-basements-com");
let floors_corporation= document.getElementById("n-of-floors-corp");
let basement_corporation= document.getElementById("n-of-basement-corp");
let number_of_companies= document.getElementById("n-of-companies");
let number_of_parking_spots = document.getElementById("number-of-parking-spots");
let number_of_corporations= document.getElementById("number-of-corporations");
let number_of_elevators = document.getElementById("amount");
let occupancy_corpo= document.getElementById("corpomax");
let occupancy_hybrid = document.getElementById("hybridmax")
let business_hours= document.getElementById("business-hours");
let buildingtype= document.getElementById("buildingtype")
//------------Building element-------------------//
let corporatediv= document.getElementById("corporatediv")
let residentialdiv= document.getElementById("residentialdiv")
let hybriddiv= document.getElementById("hybriddiv")
let commercialdiv= document.getElementById("commercialdiv")
//--------------End Building--------------------//

let columns_amount= document.getElementById("columns-amount")
let elevator_unit_price= document.getElementById("unit")
let elevator_total_price= document.getElementById("total")
let installation_cost= document.getElementById("cost")
let final_price= document.getElementById("final")
let standard= document.getElementById("pricestandard")
let premium= document.getElementById("pricepremium")
let excelium= document.getElementById("priceexcelium")
let elevator_commercial = document.getElementById("n-of-elevators")



function hideandshow(){
    console.log(buildingtype.value)
    if (buildingtype.value==="residential"){
        residentialdiv.style.display="block"
        commercialdiv.style.display="none"
        hybriddiv.style.display="none"
        corporatediv.style.display="none"
    };
    if (buildingtype.value==="commercial"){
        commercialdiv.style.display="block"
        hybriddiv.style.display="none"
        corporatediv.style.display="none"
        residentialdiv.style.display="none"
    };
    if (buildingtype.value==="hybrid"){
        hybriddiv.style.display="block"
        corporatediv.style.display="none"
        residentialdiv.style.display="none"
        commercialdiv.style.display="none"
    };
    if (buildingtype.value==="corporate"){
        corporatediv.style.display="block"
        hybriddiv.style.display="none"
        residentialdiv.style.display="none"
        commercialdiv.style.display="none"
    }


    

}

function calcCommercial(){
    let number_of_shaft = elevator_commercial.value
    let number_of_cages = number_of_shaft
    number_of_elevators.value = number_of_cages
   
    


}



function calcResidential(){
    let averagedoorperfloor = Math.ceil(parseInt(number_of_apartments.value)/(parseInt(floors_residential.value) *6));
     console.log(averagedoorperfloor)

    let number_of_columns = Math.ceil(averagedoorperfloor /20)

    let newcolumn = Math.ceil( floors_residential.value / 20)
    
   
    let elevator_shaft = Math.ceil(floors_residential.value / 6)
    number_of_elevators.value = averagedoorperfloor*number_of_columns
    console.log(elevator_shaft)

    if (floors_residential.value >= 20){
        number_of_elevators.value = newcolumn + (number_of_columns + (elevator_shaft *2))

    }




    
}



function calcCorporate() {
    let number_of_stories = parseInt(floors_corporation.value) + parseInt(basement_corporation.value)
    console.log(number_of_stories)
    let total_occupant = number_of_stories * parseInt(occupancy_corpo.value)
    console.log(total_occupant)
    let elevator_required = Math.ceil(total_occupant / 1000)
    let elevator_columns = Math.ceil(number_of_stories / 20)
    let elevator_per_columns = elevator_required / elevator_columns
    number_of_elevators.value = elevator_per_columns * elevator_columns

    
}

function calcHybrid(){

    let number_of_stories = parseInt(floors_hybrid.value) + parseInt(basement_hybrid.value)
    console.log(number_of_stories)
    let total_occupant = number_of_stories * parseInt(occupancy_hybrid.value)
    console.log(total_occupant)
    let elevator_required = Math.ceil(total_occupant / 1000)
    let elevator_columns = Math.ceil(number_of_stories / 20)
    let elevator_per_columns = Math.ceil(elevator_required / elevator_columns)
    number_of_elevators.value = elevator_per_columns * elevator_columns

    
}





function radiostandard(){
    if (pricestandard){
        unit.value = parseInt(pricestandard.value)
        elevator_unit_price.value = 7565
    elevator_total_price.value = 7565 * parseInt(number_of_elevators.value)
    installation_cost.value = elevator_total_price.value * 0.10
    final_price.value = parseInt(elevator_total_price.value) + parseInt(installation_cost.value)
     

    
    
    
    
    }

}
function radiopremium(){
     if (pricepremium){
        unit.value = parseInt(pricepremium.value)
        elevator_unit_price.value = 12345
        elevator_total_price.value = 12345 * parseInt(number_of_elevators.value)
        installation_cost.value = elevator_total_price.value * 0.13
        final_price.value = parseInt(elevator_total_price.value) + parseInt(installation_cost.value)
     

}

}

function radioexcelium(){
   if (priceexcelium){
    elevator_unit_price.value = 15400
    elevator_total_price.value = 15400 * parseInt(number_of_elevators.value)
    installation_cost.value = elevator_total_price.value * 0.16
    final_price.value = parseInt(elevator_total_price.value) + parseInt(installation_cost.value)
     
 

}

}