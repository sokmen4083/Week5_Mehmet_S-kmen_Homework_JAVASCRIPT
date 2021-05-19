let cars = ["audi","bmw","ford","opel","fiat","honda","toyota","renault","tesla","volvo",
"skoda","nissan","ferrari","vw","alfa romeo","mitsubishi","TOGG;)"];

//Filter cars that do not have car characters;)
let realCars = cars.filter(filterUnWantedChars);
output("<strong>Filter cars that do not have car characters;).</strong><br>" + realCars);


//Find the cars with the letter 'o' in them and the number of these cars
let carIncludingCharO = realCars.filter(filterCarsIncludingCharO);
output("<br><br>");
output("<strong>Find the cars with the letter 'o' in them and the number of these cars.</strong><br>" + carIncludingCharO);
output("<br><strong>How many: </strong>" + carIncludingCharO.length);


//Find the number of cars with the letter 'o' twice inside and Cars with the letter 'o' twice inside
let carsContianingTwoOs = realCars.filter(findAutosWithTwoOs);
output("<br><br>");
output("<strong>Find the number of cars with the letter 'o' twice inside.</strong><br>" + carsContianingTwoOs.length);
output("<br><br>");
output("<strong>Cars with the letter 'o' twice inside </strong><br>" + carsContianingTwoOs);


//Cars with car name length less than 5
let numberOf = realCars.filter(uzn5);
output("<br><br>");
output("<strong>Cars with car name length less than 5</strong><br>" + numberOf);


//Cars with the initial letter 'f' and cars with the last letter 'x'
let firstletterF = realCars.filter(firstLetterOfF);
output("<br><br>");
output("<strong>Cars with the initial letter 'f'</strong><br>" + firstletterF);
let firstletterx = firstletterF.map(lastLetterOFx);
output("<br><br>");
output("<strong>cars with the last letter 'x'</strong><br>" + firstletterx);


//Cars 3 to 6 in length, Those with the letter 'a' in the name of cars between 3 and 6 in length and 
// Those with the letter 'a' in the name of cars between 3 and 6 in length will have 'my favorite' in front of their name.
let length3and6 = realCars.filter(uzn36); 
output("<br><br>");
output("<strong>Cars 3 to 6 in length</strong><br>" + length3and6);
let length3and6aaa = length3and6.filter(aaaa);
output("<br><br>");
output("<strong>Those with the letter 'a' in the name of cars between 3 and 6 in length</strong><br>" + length3and6aaa);
let myfavorite = length3and6aaa.map(favori);
output("<br><br>");
output("<strong>Those with the letter 'a' in the name of cars between 3 and 6 in length will have 'my favorite' in front of their name.</strong><br>" + myfavorite);



//Cars with 'o' or 'a' in their names, Ismi icinde 'o' veya 'a' gecen arabaların sayısı and
//Total number of characters of cars with 'o' or 'a' in their names 
let karakterOA = realCars.filter(krkoa);
output("<br><br>");
output("<strong>Cars with 'o' or 'a' in their names</strong><br>" + karakterOA);
output("<br><br>");
output("<strong>Ismi icinde 'o' veya 'a' gecen arabaların sayısı</strong><br>" +karakterOA.length);
let reducer = (accumulator, currentValue) => accumulator + currentValue;
let karakteroveyaa = karakterOA.reduce(reducer);
output("<br><br>");
output("<strong>Total number of characters of cars with 'o' or 'a' in their names</strong><br>" + karakteroveyaa.length);




//Cars with 'o' or 'i' in the name, Number of cars with 'o' or 'i' in the name and
//Total number of characters of cars with 'o' or 'i' in their names
let karakterOI = realCars.filter(krkoi);
output("<br><br>");
output("<strong>Cars with 'o' or 'i' in the name</strong><br>" + karakterOI);
output("<br><br>");
output("<strong>Number of cars with 'o' or 'i' in the name</strong><br>" +karakterOI.length);
let reducer2 = (accumulator, currentValue) => accumulator + currentValue;
let karakteroveyai = karakterOI.reduce(reducer2);
output("<br><br>");
output("<strong>Total number of characters of cars with 'o' or 'i' in their names</strong><br>" +karakteroveyai.length);



