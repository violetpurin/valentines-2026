let currentStep = 0;

const steps = [
  "9x-7i>9x-21u",
  "-7i>-21u",
  "i<3u"
];

const instructions = [
  "step 1: distribute the 3",
  "step 2: subtract 9x from both sides",
  "step 3: divide by −7"
];

const displayedInequalities = [
  "9x - 7i &gt; 9x - 21u",
  "-7i &gt; -21u",
  "-7i &gt; -21u"
];

function normalize(input) {
  return input
    .replace(/\s+/g, "")
    .replace(/−/g, "-");
}

function displayInput() {
  const input = document.getElementById("answer").value;
  const instructionText = document.getElementById("step-instruction");
  const inequalityText = document.getElementById("inequality");

  if (normalize(input) === steps[currentStep]) {
    document.getElementById("answer").value = "";
    inequalityText.innerHTML = displayedInequalities[currentStep];
    currentStep++;

    if (currentStep === steps.length) {
      setTimeout(() => {
        window.location.href = "valentines.html";
      }, 800);
    } else {
      instructionText.textContent = instructions[currentStep];
    }
  } else {
    instructionText.textContent = "try again D:";
    setTimeout(() => {
      instructionText.textContent = instructions[currentStep];
    }, 3000);
  }
}

function startPuzzle() {
  document.getElementById("greeting").classList.add("hidden");
  document.getElementById("puzzle").classList.remove("hidden");
}


