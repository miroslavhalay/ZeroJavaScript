
//Частина 1

let kmInDay = +prompt("Скільки кілометрів на день ви проходите? ");

if (kmInDay <= 3){
    console.log("Мало");
}

if (kmInDay > 3 && kmInDay < 20) {       
    console.log( "Красунчик" );
}

if (kmInDay  >= 20){
    console.log("Марафонець!!");
}


//Частина 2

if (kmInDay <= 3){
    console.log("Мало");
}

else if(kmInDay >= 20){
   
    console.log("Марафонець!!");
}

else console.log("Красунчик");


//Частина 3
//Не використовуючи ні &&, ні else.

if (kmInDay <= 3){
    console.log("Мало");
}


if (kmInDay >= 4 )
    if(kmInDay <=19){
        console.log("Красунчик");
}

if (kmInDay  >= 20){
    console.log("Марафонець!!");
}