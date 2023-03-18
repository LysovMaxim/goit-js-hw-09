
function createPromise(position, delay) {
  return new Promise ((resolve, reject)=> {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
  })
}
const formEl = document.querySelector('form');
console.log(formEl);

let position = 0;

formEl.addEventListener("submit", (event) => {
  event.preventDefault()
 
  let delay = Number(event.target.elements.delay.value);
  let step = Number(event.target.elements.step.value);
  let amount = event.target.elements.amount.value;

  setInterval(() => {

    position += 1;
    delay += step
    
  
    createPromise(position, delay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    })
  },delay)
}) 


