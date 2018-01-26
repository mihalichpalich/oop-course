class Elem {
  constructor(selector) {
    this.elem = document.querySelector(selector);
  }

  html(text) {
    this.elem.innerHTML = text;
    return this;
  }

  attr(name, value) {
    this.elem.setAttribute(name, value);
    return this;
  }
}

var elem = new Elem("#test");
elem.html("!").attr('title', 'привет').attr('class', 'www');