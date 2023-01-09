/*
FUNCTION NAME: printsAllKeys
PARAM: object called capitals 
RETURN: print to console all names of countries 
=============================== PSEUDO

iterate through every key/value pair 
print current key value

*/
console.log("hello world")
function printsAllKeys(obj: any): any {
    for (let key in obj) {
        console.log(key)
    }
}

const capitals = {
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

  printsAllKeys(capitals)