document.getElementById('checkButton').ondblclick = function() {
    let correctAnswers = {
        xor00: "0",
        xor01: "1",
        xor10: "1",
        xor11: "0"
    };

    let score = 0;
    for (let key in correctAnswers) {
        let selectElement = document.getElementById(key);
        if (selectElement.value === correctAnswers[key]) {
            score++;
            selectElement.style.backgroundColor = "lightgreen";  // Позначення правильної відповіді
        } else {
            selectElement.style.backgroundColor = "lightcoral";  // Позначення неправильної відповіді
        }
    }

    alert("Ваша оцінка: " + score + " з 4");
};
