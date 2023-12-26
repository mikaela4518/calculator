//stp1= meghdar 1 ro az karbar begir , be number tabdil kon , zakhire kon
let value1 = Number(prompt("عدد اول را وارد کنید : "))

//stp2= oparation ro az karbar begir va zakhire kon
let oparation = prompt("عملگر مورد نظر را وارد کنید : ")

//stp3= meghdar 2 ro az karbar begir , be number tabdil kon , zakhire kon
let value2 = Number(prompt("عدد دوم را وارد کنید : "))

//stp4= natije ro zakhire kon
let result = 0;

// stp5= oparation ro ba ( +,-,/,*,% ) moghayese kon va hamon ro anjam bede
if (oparation == "+") {

    result = value1 + value2;
    alert(result)

}
else if (oparation == "-") {

    result = value1 - value2;
    alert(result)

}
else if (oparation == "/") {

    result = value1 / value2;
    alert(result)

}
else if (oparation == "*") {

    result = value1 * value2;
    alert(result)

}
else if (oparation == "%") {

    result = value1 % value2;
    alert(result)

}
else {
    alert(" عملیات خواسته شده قابل انجام نمی باشد.لطفا از یکی از عملگر های       ( + , - , / , * , % ) استفاده کنید.")
}


