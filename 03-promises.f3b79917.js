!function(){var e=document.querySelector("form");console.log(e);var t=0;e.addEventListener("submit",(function(e){e.preventDefault();var n=Number(e.target.elements.delay.value),o=Number(e.target.elements.step.value);e.target.elements.amount.value;setInterval((function(){var e,a;(e=t+=1,a=n+=o,new Promise((function(t,n){Math.random()>.3?t({position:e,delay:a}):n({position:e,delay:a})}))).then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}))}),n)}))}();
//# sourceMappingURL=03-promises.f3b79917.js.map
