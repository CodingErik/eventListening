let eventType = document.querySelector("#event-type");

let mouseEventsEl = document.querySelector("#click-events");
let y = document.getElementById('y');
let x = document.getElementById('x');
let target = document.getElementById('target');

let keyEventsEl = document.querySelector("#key-events");
let key = document.getElementById('key');
let code = document.getElementById('code');
let status = document.getElementById('status');
let body = document.body;


function toggleDisplay(event) {
  var value = event.target.value;
  if (value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
    body.addEventListener('keypress', function(event) {
      key.textContent = event.key;
      code.textContent = event.code;
      status.textContent = event.type;
    })
  }
  else {
    mouseEventsEl.classList.remove("hide")
    keyEventsEl.classList.add("hide")
    body.addEventListener('click', function(event) {
      target.textContent = event.target;
      y.textContent = event.clientY;
      x.textContent = event.clientX;
      
    })

  }
}

eventType.addEventListener('change', toggleDisplay);