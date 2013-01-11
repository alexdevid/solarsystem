var _planets = new Array();
var __planets = new Array();
function Planet(name, x, y, z, radius, segments, rings, txt, angleSpeed, parent, starDistanse, speed ) {
    /**
     * характеристики планеты
     */
    if ( parent != null ) {
        this.parent = parent;
        this.centerX = parent.position.x;
        this.centerY = parent.position.y;
        this.centerZ = parent.position.Z;
    } else {
        this.centerX = 0;
        this.centerY = 0;
        this.centerZ = 0;
    }
    this.starDistance = starDistanse || 10;  //средняя удаленность от звезды
    this.speed = speed;         //скорость орбитального движения
    this.mass;          //масса 
    this.radius = radius;        //радиус
    this.angleSpeed = Math.PI/angleSpeed || Math.PI/29.8;
    this.zero = 0;
    
    /**
     характеристики объекта
     */
    this.texture = THREE.ImageUtils.loadTexture(txt, null);
    this.geometry = new THREE.SphereGeometry( radius, segments, rings );
    this.material = new THREE.MeshBasicMaterial({
        map: this.texture
    });

    this.obj = new THREE.Mesh(this.geometry, this.material);
    this.obj.name = name || "";
    this.obj.position.x = x || 0;
    this.obj.position.y = y || 0;
    this.obj.position.z = z || 0;
    
    _scene.add(this.obj);
    var orb;
    this.animate = function(){
        this.obj.rotation.x += 0.01; 
        this.obj.rotation.y += 0.01;
        
        if ( parent != null ) {
            this.centerX = parent.position.x;
            this.centerY = parent.position.y;
        } else {
            this.centerX = 0;
            this.centerY = 0;
        }
        
        this.obj.position.x = ( this.starDistance*Math.cos(this.zero) + this.centerX );
        this.obj.position.y = ( this.starDistance*Math.sin(this.zero) + this.centerY );
        this.zero += this.speed;
        
        //orb = new Particles(1, 1, new THREE.Vector3(1, 1, 1));
        //orb.position.x = this.obj.position.x;
        //orb.position.y = this.obj.position.y;
        
        
    };
    this.drawOrbit = function() {
        var material = new THREE.LineBasicMaterial( {
            color: 0xffffff, 
            opacity: 0.1
        } );

        var geometry = new THREE.Geometry();
        var zero = 0;
        for(var i = 0; i < 6283; i++ ) {
            geometry.vertices.push(new THREE.Vector3(this.starDistance*Math.cos(zero), this.starDistance*Math.sin(zero), 0));
            zero += this.speed;
        }   
        var line = new THREE.Line(geometry, material);
        _scene.add(line);

    }
    _planets.push(this);
    __planets.push(this.obj);
};
extend(Planet, Sphere);

Celestial = {
    Planets: new Array,
    planetInfo: function(planetid, infotype, option) {
        switch(infotype) {
            case 'type':
                return Celestial.Planets[planetid].orbit_calc_method ;
                break;
            case 'color':
                return Celestial.Planets[planetid].color ;
                break;
            case 'texture':
                var textureLevel = option ? option : Celestial.texture_level;
                //TODO:		  var texture = Celestial.Planets[planetid].texture ? Celestial.Planets[planetid].texture : 'default.jpg';
                return 'textures/'+textureLevel+'/'+Celestial.Planets[planetid].planetName+'_surface.jpg';
                break;
            case 'posrot':
                return Celestial.planetLocation(planetid, option);
                break;
            case 'position':
                return {x:(planetid * (Celestial.pixelSizeXZ / Celestial.Planets.length)),y:0, z:0}; //TODO, use PlanetLocation
                break;
            case 'rotation':
                return {x:Math.random() * 200 - 100, y:Math.random() * 200 - 100, z:Math.random() * 200 - 100};
                break;
            case 'name':
                return Celestial.Planets[planetid].planetName;
                break;
            case 'pixelwidth':
                return Celestial.planetSizing(planetid);
                break;
            default:
                console.warn("Planet Info requested for Planet #"+planetid+", unknown type "+infotype);
        }	
    },
}

celestialAddPlanets();

function celestialAddPlanets() {
    //Add each planet from json into the planet list
    var parent_planet_name = planet_init_list[0].planetName;
    for ( var i = 0, l = planet_init_list.length; i < l; i ++ ) {
        if ((planet_init_list[i].satelliteOf == parent_planet_name) || (planet_init_list[i].planetName == parent_planet_name)) {
            planet_init_list[i].position = {
                x:0,
                y:0,
                z:0
            };
            planet_init_list[i].rotation = {
                x:0,
                y:0,
                z:0
            };
            Celestial.Planets.push( planet_init_list[i] );
        }
    }
    
}

for ( var i = 0, l = Celestial.planetsCount(); i < l; i ++ ) {
    
    
    
}
function create_planet(planetid) {

    var pcolor = Celestial.planetInfo(planetid,'color');
    var material = [
        [ new THREE.MeshBasicMaterial( {
                map: ImageUtils.loadTexture( Celestial.planetInfo(planetid,'texture','high'))
            } ) ],
        [ new THREE.MeshBasicMaterial( {
                map: ImageUtils.loadTexture( Celestial.planetInfo(planetid,'texture','med'))
            } ) ],
        [ new THREE.MeshBasicMaterial( {
                map: ImageUtils.loadTexture( Celestial.planetInfo(planetid,'texture','low'))
            } ) ],
        [ new THREE.MeshBasicMaterial( {
                map: ImageUtils.loadTexture( Celestial.planetInfo(planetid,'texture','low'))
            } ) ],
        [ new THREE.MeshLambertMaterial( {
                color: pcolor
            } ) ],
        [ new THREE.MeshLambertMaterial( {
                color: pcolor
            } ) ],
        [ new THREE.MeshLambertMaterial( {
                color: pcolor
            } ) ],
        [ new THREE.MeshLambertMaterial( {
                color: pcolor
            } ) ],
    ];
    //							new THREE.MeshLambertMaterial( { color: 0xffffff } ),
    //							new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.5, wireframe: true } )

    var planet_width = Celestial.planetInfo(planetid,'pixelwidth');
    var geometry = [
        [ new Sphere( planet_width, 12, 8 ), parseInt(3*planet_width) ],
        [ new Sphere( planet_width, 10, 5 ), parseInt(7*planet_width) ],
        [ new Sphere( planet_width, 8, 4 ), parseInt(12*planet_width) ],
        [ new Sphere( planet_width, 5, 4 ), parseInt(30*planet_width) ],
        [ new Sphere( planet_width, 4, 3 ), parseInt(70*planet_width) ],
        [ new Sphere( planet_width, 3, 3 ), parseInt(100*planet_width) ],
        [ new Sphere( planet_width, 2, 2 ), parseInt(150*planet_width) ],
        [ new Sphere( planet_width, 1, 1 ), parseInt(200*planet_width) ]
    ];
    var i, j, mesh, lod;

    lod = new THREE.LOD();

    for ( i = 0; i < geometry.length; i++ ) {

        mesh = new THREE.Mesh( geometry[ i ][ 0 ], material[i] );
        mesh.name = Celestial.planetInfo(planetid,'name');
        mesh.planetid = planetid;
        mesh.isClickable = true;
        mesh.overdraw = true;
        lod.add( mesh, geometry[ i ][ 1 ] );

    }

    var orbitpos = Celestial.planetInfo(planetid,'posrot');
    lod.position = new THREE.Vector3(
    orbitpos.position.x,
    orbitpos.position.y,
    orbitpos.position.z);
    lod.rotation = orbitpos.rotation;
				
    return lod;
}
function celestialOrbits(planetid) {
    var P = Celestial.Planets[planetid];
    var DEGS = 180/Math.PI;      // convert radians to degrees
    var RADS = Math.PI/180;      // convert degrees to radians
    var EPS  = 1.0e-12;          // machine error constant
    var cy = time/36525;         // centuries since J2000
				
    var ap = P.a_semimajor_axis + (P.a_per_cy*cy);
    var ep = P.e_eccentricity + (P.e_per_cy*cy);
    var ip = (P.i_inclination + (P.i_per_cy*cy/3600))*RADS;
    var op = (P.O_ecliptic_long + (P.O_per_cy*cy/3600))*RADS;
    var wp = (P.w_perihelion + (P.w_per_cy*cy/3600))*RADS;
    var lp = Celestial.mod2pi((P.L_mean_longitude + (P.L_per_cy*cy/3600))*RADS);
    
    // position of planet in its orbit
    var mp = Celestial.mod2pi(lp - wp);
    var vp = Celestial.true_anomaly(mp, ep);  //TODO: if ep >1, then error
    var rp = ap*(1 - ep*ep) / (1 + ep*Math.cos(vp));
				
    // heliocentric rectangular coordinates of planet
    var dx = rp*(Math.cos(op)*Math.cos(vp + wp - op) - Math.sin(op)*Math.sin(vp + wp - op)*Math.cos(ip));
    var dz = rp*(Math.sin(op)*Math.cos(vp + wp - op) + Math.cos(op)*Math.sin(vp + wp - op)*Math.cos(ip));
    var dy = rp*(Math.sin(vp + wp - op)*Math.sin(ip));

    var distscaler = (scale_up == 1) ? Celestial.systemScaler() : {
        xz: 1, 
        y:1
    };  //Scale the distances if asked to
    pos = {
        x: distscaler.xz*dx, 
        y: distscaler.y*dy, 
        z: distscaler.xz*dz
    };
    
    // Find the remainder when the current epoch time is modded by the rotational period of the planetid
    var daylength_in_centuries = 0.0000273785 * P.rotation_sidereal_in_days;
    var dayrem = Celestial.fmod(time, daylength_in_centuries);
    var daypercent = dayrem / daylength_in_centuries;
			
    //echo("Day is" SPC %daypercent SPC "% of" SPC %daylength_in_centuries SPC "lengthed days");
    var xr = P.obliquity;
    var zr = 0;
    var yr = daypercent * 360;

    //Rotate the planetid on the correct planetary axis
    //rot = RotateVectorOnZX(%zr, %xr);
    rot = {
        x:0, 
        y:P.rotation.y += .004 || 0.004, 
        z:0
    };
    return {
        position: pos, 
        rotation: rot
    };
    //TODO: Fix Rotation
}



