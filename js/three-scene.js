/*========================================
            THREE SCENE
========================================*/

const container = document.getElementById("three-container");

const scene = new THREE.Scene();

/*========================================
            CAMERA
========================================*/

const camera = new THREE.PerspectiveCamera(
45,
container.clientWidth / container.clientHeight,
0.1,
1000
);

camera.position.z = 5;

/*========================================
            RENDERER
========================================*/

const renderer = new THREE.WebGLRenderer({

    alpha: true,
    antialias: true

});

renderer.setSize(
container.clientWidth,
container.clientHeight
);

renderer.setPixelRatio(window.devicePixelRatio);

container.appendChild(renderer.domElement);

/*========================================
            LIGHTS
========================================*/

const ambient = new THREE.AmbientLight(0xffffff,0.8);
scene.add(ambient);

const point = new THREE.PointLight(0x8B5CF6,4);
point.position.set(5,5,5);
scene.add(point);

/*========================================
            LOAD ROBOT
========================================*/

let robot;

const loader = new THREE.GLTFLoader();

loader.load(

    "assets/models/robot.glb",

    function(gltf){

        robot = gltf.scene;

        robot.scale.set(1.2,1.2,1.2);

        robot.position.set(0,-1,0);

        scene.add(robot);

        console.log("Robot Loaded");

    },

    undefined,

    function(error){

        console.error(error);

    }

);
/*========================================
            RING 1
========================================*/

const ring = new THREE.Mesh(

new THREE.TorusGeometry(1.6,0.03,16,100),

new THREE.MeshBasicMaterial({

    color:0x00F5FF

})

);

ring.rotation.x = Math.PI / 2;

scene.add(ring);

/*========================================
            RING 2
========================================*/

const ring2 = new THREE.Mesh(

new THREE.TorusGeometry(2.1,0.02,16,100),

new THREE.MeshBasicMaterial({

    color:0x8B5CF6

})

);

ring2.rotation.y = Math.PI / 3;

scene.add(ring2);

/*========================================
            STARS
========================================*/

const starsGeometry = new THREE.BufferGeometry();

const starVertices = [];

for(let i=0;i<500;i++){

    starVertices.push(

        (Math.random()-0.5)*50,
        (Math.random()-0.5)*50,
        (Math.random()-0.5)*50

    );

}

starsGeometry.setAttribute(

"position",

new THREE.Float32BufferAttribute(
starVertices,
3
)

);

const starsMaterial = new THREE.PointsMaterial({

    color:0xffffff,

    size:0.05

});

const stars = new THREE.Points(

starsGeometry,

starsMaterial

);

scene.add(stars);

/*========================================
            MOUSE
========================================*/

const mouse={

    x:0,
    y:0

};

window.addEventListener("mousemove",(e)=>{

    mouse.x=(e.clientX/window.innerWidth)*2-1;

    mouse.y=-(e.clientY/window.innerHeight)*2+1;

});

/*========================================
            ANIMATION
========================================*/

function animate(){

    requestAnimationFrame(animate);

    if(robot){

    robot.rotation.y += 0.005;

    robot.rotation.y += (mouse.x*0.6-robot.rotation.y)*0.02;

    robot.position.y = Math.sin(Date.now()*0.0015)*0.15;

}

    // Ring Animation

    ring.rotation.z += 0.004;

    ring2.rotation.x += 0.003;
    ring2.rotation.y += 0.002;

    // Stars

    stars.rotation.y += 0.0005;

    renderer.render(scene,camera);

}

animate();

/*========================================
            RESPONSIVE
========================================*/

window.addEventListener("resize",()=>{

camera.aspect=container.clientWidth/container.clientHeight;

camera.updateProjectionMatrix();

renderer.setSize(

container.clientWidth,

container.clientHeight

);

});