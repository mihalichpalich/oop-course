class Rectangle {
  constructor(width, height) {
    var elem = document.createElement('div');

    elem.style.width = width + 'px';
    elem.style.height = height + 'px';
    elem.style.border = `1px solid red`;

    document.body.appendChild(elem);
  }

}

var elem1 = new Rectangle(100, 150);
var elem2 = new Rectangle(150, 100);