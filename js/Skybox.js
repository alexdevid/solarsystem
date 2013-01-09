/*skybox*/
function addSkybox(scene) {
    var texture_placeholder;
    texture_placeholder = document.createElement( 'canvas' );
    texture_placeholder.width = 128;
    texture_placeholder.height = 128;
    var context = texture_placeholder.getContext( '2d' );
    context.fillStyle = 'rgb( 200, 200, 200 )';
    context.fillRect( 0, 0, texture_placeholder.width, texture_placeholder.height );

    var skyMaterials = [

        loadTexture( 'i/nebula/px.jpg', texture_placeholder ), // right
        loadTexture( 'i/nebula/nx.jpg', texture_placeholder ), // left
        loadTexture( 'i/nebula/py.jpg', texture_placeholder ), // top
        loadTexture( 'i/nebula/ny.jpg', texture_placeholder ), // bottom
        loadTexture( 'i/nebula/pz.jpg', texture_placeholder ), // back
        loadTexture( 'i/nebula/nz.jpg', texture_placeholder )  // front

    ];

    var skyMesh = new THREE.Mesh( new THREE.CubeGeometry( 300, 300, 300, 7, 7, 7 ), new THREE.MeshFaceMaterial( skyMaterials ) );
    skyMesh.scale.x = - 1;
    scene.add( skyMesh );
}


function loadTexture( path, texture_placeholder ) {

    var texture = new THREE.Texture( texture_placeholder );
    var material = new THREE.MeshBasicMaterial( {
        map: texture, 
        overdraw: true
    } );

    var image = new Image();
    image.onload = function () {

        texture.needsUpdate = true;
        material.map.image = this;

        render();

    };
    image.src = path;

    return material;

}