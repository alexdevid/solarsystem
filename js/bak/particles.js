function testParticles() {
    this.obj;
};

testParticles.prototype.render = function  (){
        console.log(this);
        requestAnimationFrame(this.render); 
        this.get().rotation.y += 0.01;
}
testParticles.prototype.get = function() {
    var particleCount = 15000,
    particles = new THREE.Geometry();
    var pMaterial = new THREE.ParticleBasicMaterial({
        color: 0xFFFFFF,
        size: 3,
        map: THREE.ImageUtils.loadTexture(
            "i/Flare.png"
            ),
        blending: THREE.AdditiveBlending,
        transparent: true
    });

    // now create the individual particles
    for(var p = 0; p < particleCount; p++) {

        // create a particle with random
        // position values, -250 -> 250
        var pX = Math.random() * 500 - 250,
        pY = Math.random() * 500 - 250,
        pZ = Math.random() * 500 - 250,
        particle = new THREE.Vector3(pX, pY, pZ);

        // add it to the geometry
        particles.vertices.push(particle);
    }

    // create the particle system
    var particleSystem =
    new THREE.ParticleSystem(
        particles,
        pMaterial);

    // add it to the scene
    // create the particle variables
    /*

*/
    
    // also update the particle system to
    // sort the particles which enables
    // the behaviour we want
    particleSystem.sortParticles = true;
    this.obj = particleSystem;
    return particleSystem;
}