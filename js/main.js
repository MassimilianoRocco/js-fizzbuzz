let x;
for(x=1; x<=100; x++){
    if(x%3==0){
        const para = document.createElement("li");
        const node = document.createTextNode("Fizz")
        para.appendChild(node);
        const element = document.getElementById("prova");
        element.appendChild(para);
        console.log("Fizz");
    }
    if(x % 5 == 0) {
        const para = document.createElement("li");
        const node = document.createTextNode("Buzz")
        para.appendChild(node);
        const element = document.getElementById("prova");
        element.appendChild(para);
        console.log("Buzz");
    }
    if((x % 3 == 0) && (x % 5 == 0)){
        const para = document.createElement("li");
        const node = document.createTextNode("FizzBuzz")
        para.appendChild(node);
        const element = document.getElementById("prova");
        element.appendChild(para);
        console.log("FizzBuzz");
    }
    if(x % 3 != 0 && x %  5 != 0){
        const para = document.createElement("li");
        const node = document.createTextNode(x);
        para.appendChild(node);
        const element = document.getElementById("prova");
        element.appendChild(para);
        console.log(x);
    }
}