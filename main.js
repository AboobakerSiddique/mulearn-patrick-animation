const patrickTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const patrickTiming = {
    duration: 500,
    iterations: 1,
    fill: 'forwards'
  }
  
  const patrick1 = document.querySelector("#patrick1");
  const patrick2 = document.querySelector("#patrick2");
  const patrick3 = document.querySelector("#patrick3");
  
  patrick1.animate(patrickTumbling, patrickTiming).finished
    .then(() => patrick2.animate(patrickTumbling, patrickTiming).finished)
    .then(() => patrick3.animate(patrickTumbling, patrickTiming).finished)
    .catch(error => console.error(`Error animating patricks: ${error}`));