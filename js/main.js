const rowElem = document.getElementById("row");

for(let x=1; x<=100; x++){
    const boxElem = document.createElement("div");

    if(x%15 == 0){
        console.log("FizzBuzz");
        boxElem.innerHTML= "FizzBuzz";
    }
    else if(x%3 == 0){
        console.log("fizz");
        boxElem.innerHTML= "Fizz";
        
    }
    else if(x%5 == 0){
        console.log("Buzz");
        boxElem.innerHTML= "Buzz";
    }
    else{
        console.log(x);
        boxElem.innerHTML= x;
    }
    rowElem.append(boxElem);
}