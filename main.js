const input = document.getElementById('text-input');
input.addEventListener('input', function(){
    let counter = 0;
    var textInput = document.getElementById("text-input").value;
    var lcInputArray = textInput.toLowerCase().split("");
    lcInputArray.forEach(function(char){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            counter += 1;
        }
    });

    var docCounter = document.getElementById("num");
    docCounter.innerHTML = counter;
})