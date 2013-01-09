var planetsLib = [
    [ "engName", "rusName", "mass", "angleSpeed", "" ],
    [ "Mercury", "Меркурий", "1.00794", 1, 1 ],
    [ "Venus", "Венера", "4.002602", 18, 1 ],
    [ "Earth", "Земля", "(294)", 18, 7 ],
    [ "Mars", "Марс", "(294)", 18, 7 ],
    [ "Jupiter", "Юпитер", "(294)", 18, 7 ],
    [ "Saturn", "Сатурн", "(294)", 18, 7 ],
    [ "Uranus", "Уран", "(294)", 18, 7 ],
    [ "Neptune", "Нептун", "(294)", 18, 7 ]
];


function Planet() {
    this.radius;
    this.angle_speed;
    this.mass;
    this.period;
}



function Param() {
    this._Kepler_K = 3,36 * Math.pow(10, -18); //Постоянная Кеплера (м3/с2)
}




function radialObject(x, y, texture, size, tiles) {
    this.x = x;
    this.y = y;
    this.radius;
    this.speed;
    this.t;
    this.k;//коэф уменьш меньшего радиуса
    
    var texture = THREE.ImageUtils.loadTexture(texture, null);
    var geometry = new THREE.SphereGeometry( size, tiles, tiles );
    var material = new THREE.MeshBasicMaterial({
        map: texture
    });
    
    var obj = new THREE.Mesh(geometry, material);
   
    obj.position.x = x;
    obj.position.y = y;
    return obj;
};

Point.prototype = {
    radius: function(rad) {
        this.radius = rad || 10;
    },
    speed: function(speed) {
        this.speed = speed || Math.PI/1000;
    },
    t: function(t) {
        this.t = t || 0;
    },
    k: function(k) {
        this.k = k || 0.4;
    }
    
};