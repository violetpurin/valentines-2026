
document.addEventListener("DOMContentLoaded", function() {
    const ralts_sound = document.getElementById('ralts_sound');
    const kirlia_sound = document.getElementById('kirlia_sound')
    const gardevoir_sound = document.getElementById('gardevoir_sound');

    ralts_sound.volume = 0.5;
    kirlia_sound.volume = 0.5;
    gardevoir_sound.volume = 0.5;

    let sounds_enabled = true;
});

function displayInput() {
        const inputText = document.getElementById("answer").value;

        if (inputText == "i <3 u") {
            console.log("correct")
        }
};
