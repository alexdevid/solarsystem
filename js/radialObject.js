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