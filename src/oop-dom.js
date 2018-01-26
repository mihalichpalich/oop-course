class Elem {
  constructor(selector) {
    this.elem = document.querySelector(selector);
  }

  html(text) {
    this.elem.innerHTML = text;
  }

  attr(name, value) {
    this.elem.setAttribute(name, value);
  }
}

var elem = new Elem("#test");
elem.html("!");
elem.attr('title', 'привет');