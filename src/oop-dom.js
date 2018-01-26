class Rectangle {
  constructor(width, height) {
    this._elem = document.createElement('div');

    this.setWidth(width);
    this.setHeight(height);

    this._elem.style.border = `1px solid red`;

    document.body.appendChild(this._elem);
  }

  setWidth(width) {
    this._elem.style.width = width + 'px';
  }

  setHeight(height) {
    this._elem.style.height = height + 'px';
  }

  getWidth(width) {
    return this._elem.style.width;
  }
}

let elem1 = new Rectangle(100, 150);
elem1.setWidth(300);
elem1.setHeight(300);
console.log(elem1.getWidth());

let elem2 = new Rectangle(150, 100);