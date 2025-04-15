
  //. Hover Effect
  const hoverBtn = document.getElementById("hoverButton");
  hoverBtn.onmouseover = function () {
    hoverBtn.style.background = "#ff7043";
  };
  hoverBtn.onmouseleave = function () {
    hoverBtn.style.background = "#29b6f6";
  };
  //.botton 
  let count = 0;

  document.getElementById("alertButton").addEventListener("click", function () {
    alert("This is an alert!");
  });
  
  document.getElementById("countButton").addEventListener("click", function () {
    count++;
    const display = document.getElementById("countDisplay");
  
    display.textContent = `You clicked ${count} times.`;
  
    // count color
    display.style.color = count % 2 === 0 ? "pink" : "blue";
    
    // For loop 
    for (let i = 1; i <= 5; i++) {
      alert(`This is message #${i}`);
    }
  });
  