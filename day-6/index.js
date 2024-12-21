const snowGlobe = document.querySelector('.snow-globe');

function createSnowflake() { 
  const snowflake = document.createElement('div');
   
  snowflake.classList.add('snowflake');
  
  const size = Math.random() * 10 + 10;
  snowflake.style.fontSize = `${size}px`;
  
   const left = Math.random() * (snowGlobe.offsetWidth - size);
  snowflake.style.left = `${left}px`;

   const duration = Math.random() * 5 + 5;
  snowflake.style.animationDuration = `${duration}s`;
  
   const delay = Math.random() * 2;
  snowflake.style.animationDelay = `${delay}s`;

   snowflake.textContent = "❄️";
  
   snowGlobe.appendChild(snowflake);
  
   setTimeout(() => {
    snowflake.remove();
  }, duration * 1000);  
}
 
setInterval(createSnowflake, 100);


/* Stretch goals: 
- Give some variety to your snowflakes, so they are not all the same. Perhaps every 25th one could be a snowman ☃️?
- Remove each snowflake after a set time - this will stop the scene from being lost in a blizzard!
- Add a button that makes the snow start falling, it could trigger a CSS-animated shake of the snow globe. Then make the snow become less frequent until it slowly stops - until the button is pressed again.  
- Change the direction of the snowflakes so they don’t all fall vertically.
- Make the style your own! 
*/