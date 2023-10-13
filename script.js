// for onclick

document.onclick = function (e) {
  let x = e.pageX;
  let y = e.pageY;

  let span = document.createElement("span");
  span.classList.add("click_effect");
  span.style.top = y + "px";
  span.style.left = x + "px";
  document.body.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 600);
};

// moving cursor
let colors = [
  "red",
  "yellow",
  "blue",
  "green",
  "violet",
  "orange",
  "pink",
  "brown",
];
let i = 0;

document.onmousemove = function (e) {
  i++;

  let span = document.createElement("span");
};

document.onmousemove = function (e) {
  i++;
  let x = e.pageX;
  let y = e.pageY;

  let span = document.createElement("span");
  span.classList.add("follower");
  span.style.top = y + "px";
  span.style.left = x + "px";
  span.style.backgroundColor = colors[i - 1];
  document.body.appendChild(span);

  if (i == colors.length) {
    i = 0;
  }
};

document.onmousemove = function (e) {
  i++;
  let x = e.pageX;
  let y = e.pageY;

  let span = document.createElement("span");
  span.classList.add("follower");
  span.style.top = y + "px";
  span.style.left = x + "px";
  span.style.backgroundColor = colors[i - 1];
  document.body.appendChild(span);

  if (i == colors.length) {
    i = 0;
  }
  setTimeout(() => {
    span.remove();
  }, 1000);
};
