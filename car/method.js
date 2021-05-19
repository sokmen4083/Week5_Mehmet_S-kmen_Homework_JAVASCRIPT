
//The function of Filter cars that do not have car characters;)
function filterUnWantedChars(auto){ 
    if(auto.includes(";)")){
        return false;
    }
    return true;
};



//The function of Find the cars with the letter 'o' in them and the number of these cars
function filterCarsIncludingCharO(auto){
    if(auto.includes("o")){
        return true;
    }
    return false;
}
function findNumberOfChar(text, char){
    let anArray = text.split("")
    let charArray = anArray.filter(function(harf){
        if(harf == char){
            return true;
        }

        return false;
    });

    return charArray.length;
}





//The function of Find the number of cars with the letter 'o' twice inside and Cars with the letter 'o' twice inside
function findAutosWithTwoOs(auto){
    let numberOfOs = findNumberOfChar(auto, "o");
    if(numberOfOs == 2){
        return true;
    }
    return false;
};





//The function of Cars with car name length less than 5
function uzn5(auto) {
    if (auto.length < 5) {
       return true; 
    }
    return false;
}
    




//The Function of Cars with the initial letter 'f' and cars with the last letter 'x'
function firstLetterOfF (auto){
    if(auto.startsWith("f")){
        return true;
    }
    return false;
}
function lastLetterOFx(auto) {
    let anArray = auto.split('');
    anArray[(auto.length -1)] = 'x';
    return anArray.join('');
}



//The function of Cars 3 to 6 in length, Those with the letter 'a' in the name of cars between 3 and 6 in length and 
// Those with the letter 'a' in the name of cars between 3 and 6 in length will have 'my favorite' in front of their name.
function uzn36(auto) {
    if (auto.length < 6 && auto.length > 3) {
       return true; 
    }
    return false;
}
function aaaa(auto) {
    if(auto.includes("a")){
        return true;
    }
    return false;
}
function favori(auto) {
    auto =`myfavorite ${auto}`;
    return auto;
}





//The function of Cars with 'o' or 'a' in their names, Ismi icinde 'o' veya 'a' gecen arabaların sayısı and
//Total number of characters of cars with 'o' or 'a' in their names 
function krkoa(auto) {
    if(auto.includes("a") || auto.includes("o")){
        return true;
    }
    return false;
}




//The function of Cars with 'o' or 'i' in the name, Number of cars with 'o' or 'i' in the name and
//Total number of characters of cars with 'o' or 'i' in their names
function krkoi(auto) {
    if(auto.includes("i") || auto.includes("o")){
        return true;
    }
    return false;
}
