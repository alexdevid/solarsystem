



/**
 * Базовый класс сферы
 * Vector3 cords - координаты
 * float radius - радиус
 */
function Sphere(cords, radius, id) {
    id = id || 0;
    this.cords = cords;
    this.radius = radius;
}

function extend(Child, Parent) {
    var F = function() { }
    F.prototype = Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
    Child.superclass = Parent.prototype
}
