import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFCF7F2);
const camera = new THREE.PerspectiveCamera(50, (window.innerWidth / 3) / window.innerHeight, 0.1, 1000);
const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material = new THREE.MeshStandardMaterial({ color: 0xfff273 });
const cube = new THREE.Mesh(geometry, material);
let renderer;

const ambientLight = new THREE.AmbientLight(0xd9a159);

const pointLight = new THREE.PointLight(0xd9a159);
pointLight.position.set(3, 3, 3);

scene.add(pointLight, ambientLight);
scene.add(cube);

camera.position.z = 5;
cube.rotation.y = 5;

// Avatar

const animate = () => {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.004;
	// cube.rotation.y += 0.005;
	renderer.render(scene, camera);
};

const resize = () => {
	renderer.setSize(window.innerWidth / 3, window.innerHeight - 200);
	camera.aspect = (window.innerWidth / 3) / (window.innerHeight - 200);
	camera.updateProjectionMatrix();
};

export const createScene = (el) => {
	renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
	resize();
	animate();
};

window.addEventListener("resize", resize);
