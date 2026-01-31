const textDisplay = document.getElementById("span1");
            const phrases = ["CONNECT.", "TALK.", "EXCHANGE-IDEAS."];
            let i = 0;
            let j = 0;
            let currentPhrase = [];
            let isDeleting = false;
            let isEnd = false;

            function loop() {
                isEnd = false;
                textDisplay.innerHTML = currentPhrase.join("");

                if (i < phrases.length) {
                    if (!isDeleting && j <= phrases[i].length) {
                        currentPhrase.push(phrases[i][j]);
                        j++;
                        textDisplay.innerHTML = currentPhrase.join("");
                    }

                    if (isDeleting && j <= phrases[i].length) {
                        currentPhrase.pop(phrases[i][j]);
                        j--;
                        textDisplay.innerHTML = currentPhrase.join("");
                    }

                    if (j == phrases[i].length) {
                        isEnd = true;
                        isDeleting = true;
                    }

                    if (isDeleting && j === 0) {
                        setTimeout(function () {
                            currentPhrase = [];
                            isDeleting = false;
                            i++;
                            if (i === phrases.length) {
                                i = 0;
                            }
                        }, 200); //wait after deleted
                    }
                }
                const spedUp = Math.random() * (80 - 50) + 50;
                const normalSpeed = Math.random() * (300 - 200) + 100;
                const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
                setTimeout(loop, time);
            }

            loop();