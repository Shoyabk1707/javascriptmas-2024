const calendarContainer = document.getElementById('calendar');

// Create an array of objects to track the state of each day
const daysState = Array(24).fill(false); // Initial state for all days (false = closed)

for (let i = 1; i <= 24; i++) {
  let box = document.createElement('li');
  box.classList.add('calendar-box');
  box.setAttribute('aria-label', `Day ${i}`);

  let number = document.createElement('p');
  number.classList.add('day-number');
  number.innerHTML = i;

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');

  let description = document.createElement('p');
  description.classList.add('description');
  description.innerHTML = "Open me!";

  // Toggle state on click
  box.addEventListener('click', () => {
    // Toggle the opened state
    daysState[i - 1] = !daysState[i - 1];

    // Toggle 'opened' class based on the current state
    box.classList.toggle('opened', daysState[i - 1]);

    // Change description based on the state
    description.innerHTML = daysState[i - 1] ? "Opened!" : "Open me!";

    // Special celebration effect for the 24th day
    if (i === 24 && daysState[i - 1]) {
      triggerCelebration(); // Trigger the special effect for Christmas Eve
    }
  });

  box.appendChild(number);
  box.appendChild(icon);
  box.appendChild(description);
  calendarContainer.appendChild(box);
}

// Function to trigger the celebration (confetti animation)
function triggerCelebration() {
  // Show a festive message (optional)
  alert("Merry Christmas Eve! 🎄🎉");

  // Trigger the confetti effect
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { x: 0.5, y: 0.5 },
    colors: ['#ff0000', '#FFD700', '#00ff00', '#ffffff'], // Red, Gold, Green, White
  });
}
