function Particles(count, size, volume) {
    var particles = new THREE.Geometry();
    var pMaterial = new THREE.ParticleBasicMaterial({
        color: 0xFFFFFF,
        size: size,
        map: THREE.ImageUtils.loadTexture(
            "i/Flare.png"
            ),
        blending: THREE.AdditiveBlending,
        transparent: true
    //alphaTest: 0.3
    });
    for(var p = 0; p < count; p++) {

        // create a particle with random
        // position values, -250 -> 250
        var 
        pX = Math.random() * volume.x *2 - volume.x,
        pY = Math.random() * volume.y *2 - volume.y,
        pZ = Math.random() * volume.z *2 - volume.z,
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

                particleSystem.rotation.y += 0.01;
                particleSystem.rotation.x += 0.01;
        */
    
    // also update the particle system to
    // sort the particles which enables
    // the behaviour we want
    particleSystem.sortParticles = true;
    _scene.add(particleSystem);
    return particleSystem;
}