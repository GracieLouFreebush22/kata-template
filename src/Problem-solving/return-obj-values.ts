/*
function name: printAllValues 
param: an object of strings 
returns: nit a return but will console log all values 
==================================================
*/
console.log("i am running")
function printAllValues(obj: any): any{
    for (let pairs in obj){
        console.log(obj[pairs])
    }
}

const Capitals = {
    Afghanistan: "Kabul",
    Angola: "Luanda",
    Brazil: "Brasília",
    Canada: "Ottawa",
    China: "Beijing",
    Cuba: "Havana",
    Denmark: "Copenhagen",
    Iceland: "Reykjavík",
    Japan: "Tokyo",
    Kazakhstan: "Astana",
    Mexico: "Mexico City",
    Nigeria: "Abuja",
    Philippines: "Manila",
    Ukraine: "Kiev",
  };

printAllValues(Capitals)
