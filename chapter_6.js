// Rest Parameter ' How to use " ... " (Extract each value and walk into it);

walkInto = (...text) => {
    for (let i of text){
        console.log(i);
    }
}

walkInto("snapty99","GitHub", "JavaScript", "Learning")

calculate = (...numberArr) => {
    for (let i of numberArr){
        console.log("current: " + i);
    }
}

calculate(1,2,3,4);