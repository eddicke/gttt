//PalmFronds
//Creation of a material with an alpha texture


var createPalmfrond = function(scene) {
    var paths = [];
    for (var t = 1; t < 10; t++) {
        var path = [];
        for (var k = -20; k <= 20; k++) {
            var x = k * 5
            var y = (k * k) / 10
            var z = t * 6
            path.push(new BABYLON.Vector3(x, y, z));
        }
        paths.push(path);
    }

    var materialSphere15 = new BABYLON.StandardMaterial("texture5", scene);
materialSphere15.diffuseTexture = new BABYLON.Texture("https://rawcdn.githack.com/eddicke/chat-example/master/assets/textures/d120e4f72fbbc4bde4bac1b768f29af6.png", scene);
materialSphere15.diffuseTexture.hasAlpha = true; //Has an alpha
materialSphere15.backFaceCulling = false
    
    var ribbon = BABYLON.Mesh.CreateRibbon("rib", paths, false, false, 0, scene);
    ribbon.rotation.x = 28
    var rad = 80.1
    lv = []
    var rot = [
        new BABYLON.Vector3(28, 12.5, -0.3),
        new BABYLON.Vector3(28, 11.5, -0.3),
        new BABYLON.Vector3(28, 17, -0.3),
        new BABYLON.Vector3(28, 3.5, -0.3),
        new BABYLON.Vector3(28, 2.5, -0.3),
        new BABYLON.Vector3(28, 1.5, -0.3)

    ]
    for (var i = 0; i < 6; i++) {
        var leaves = ribbon.clone()
        leaves.position.x = Math.cos(i) * rad
        leaves.position.z = Math.sin(i) * rad
        leaves.rotation = rot[i]
        lv.push(leaves)
        leaves.material = materialSphere15;
    }
    ribbon.setEnabled(false)

    var palmfrond = new BABYLON.Mesh.MergeMeshes(lv)
    palmfrond.scaling.set(1 / 2, 2.8 / 2, 1 / 2)
    palmfrond.material = materialSphere15
    palmfrond.position.y = 80
    var v = []
for (var k = 0; k < 1000; k++) {
    var lf = palmfrond.clone()
    lf.position.x = Math.random() * 1400 * (k / 4)
    lf.position.z = Math.random() * 1400 * (k / 4)
    v.push(lf)
}

var tp = new BABYLON.Mesh.MergeMeshes(v)
return tp;
}




