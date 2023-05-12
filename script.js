var words = ["javascript", "html", "css", "jquery", "bootstrap", "react", "angular", "nodejs"];
var word = words[Math.floor(Math.random() * words.length)];
var remaining = 6;
var letters = [];

for (var i = 0; i < word.length; i++) {
    letters.push("_");
}

document.getElementById("word").innerHTML = letters.join(" ");

document.getElementById("remaining").innerHTML = remaining;

document.addEventListener("keydown", function(event) {
    var letter = event.key.toLowerCase();

    if (letter >= "a" && letter <= "z") {
        if (word.includes(letter)) {
            for (var i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    letters[i] = letter;
                }
            }

            document.getElementById("word").innerHTML = letters.join(" ");

            if (!letters.includes("_")) {
                alert("Parabéns, você ganhou!");
                restart();
            }
        } else {
            remaining--;
            document.getElementById("remaining").innerHTML = remaining;

            if (remaining === 0) {
                alert("Você perdeu, a palavra era " + word);
                restart();
            }
        }

        if (!document.getElementById(letter)) {
            var button = document.createElement("button");
            button.id = letter;
            button.innerHTML = letter.toUpperCase();
            button.addEventListener("click", function() {
                this.disabled = true;

                var letter = this.id.toLowerCase();

                if (word.includes(letter)) {
                    for (var i = 0; i < word.length; i++) {
                        if (word[i] === letter) {
                            letters[i] = letter;
                        }
                    }

                    document.getElementById("word").innerHTML = letters.join(" ");

                    if (!letters.includes("_")) {
                        alert("Parabéns, você ganhou!");
                        restart();
                    }
                } else {
                    remaining--;
                    document.getElementById("remaining").innerHTML = remaining;

                    if (remaining === 0) {
                        alert("Você perdeu, a palavra era " + word);
                        restart();
                    }
                }
            });

            document.getElementById("letters").appendChild(button);
        }
    }
});

document.getElementById("restart").addEventListener("click", function() {
    restart();
});

function restart() {
    word = words[Math.floor(Math.random() * words.length)];
    remaining = 6;
    letters = [];

    for (var i = 0; i < word.length; i++) {
        letters.push("_");
    }

    document.getElementById("word").innerHTML = letters.join(" ");
    document.getElementById("remaining").innerHTML = remaining;

    var buttons = document.querySelectorAll("#letters button");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
}
