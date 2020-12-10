// modal 

let op = false;
var check = 0;
var box1speaker = "Bruce Alturas";
var box2speaker = "Anike Nicole Dorgu";
var box3speaker = "Joshua de Guzman";
var box4speaker = "Francis Bautista";
var restboxspeakerimg = "https://icon-library.com/images/generic-user-icon/generic-user-icon-10.jpg";
var restboxspeaker = "Blank";

function modal(check) {

	if (!op) {
		document.querySelector('.modal-cont').classList.add('open'); 
		document.querySelector('.modal-cover').classList.add('open');
		op = true;
		
		switch(check) {
			case 1:
				 document.getElementById("modalimg").src =  document.getElementById("box1img").src;
				 document.getElementById("blueshare").href = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpodcasts.google.com%2Fu%2F1%2Ffeed%2FaHR0cHM6Ly9hbmNob3IuZm0vcy8zYmM1YTMyNC9wb2RjYXN0L3Jzcw%2Fepisode%2FM2JjYjQ1MGMtN2RhMC00YjRkLWE4ODUtMzYzMzBlMzU0YzNl;src=sdkpreparse";
				 document.getElementById("modalh").innerHTML = document.getElementById("box1h").innerHTML;
				 document.getElementById("modalt").innerHTML = document.getElementById("box1t").innerHTML;
				 document.getElementById("modalplayernum").innerHTML = "S01E01";
				 document.getElementById("modalplayerhead").innerHTML = document.getElementById("box1h").innerHTML.substring(10,43);
				 document.getElementById("modalplayerauth").innerHTML = box1speaker;
				 document.getElementById("speaker-img").src = "./assets/images/Bruce Alturas.png";
				 document.getElementById("modalspeaker").innerHTML = box1speaker;
				 document.getElementById("modfb").href = "https://www.facebook.com/brucevinceal";
				 document.getElementById("modtwt").style.display = "none";
				 document.getElementById("modig").href = "https://www.instagram.com/brucevinceal/";
				 document.getElementById("modlinkedin").href = "https://www.linkedin.com/in/brucevinceal/";
				break;
			case 2:
				document.getElementById("modalimg").src =  document.getElementById("box2img").src;
				document.getElementById("blueshare").href ="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpodcasts.google.com%2Fu%2F1%2Ffeed%2FaHR0cHM6Ly9hbmNob3IuZm0vcy8zYmM1YTMyNC9wb2RjYXN0L3Jzcw%2Fepisode%2FZDM0ZDZhODMtZmIyZi00Yjc5LWIwMmYtMWYzMzgzMDFhNzgz;src=sdkpreparse";
				document.getElementById("modalh").innerHTML = document.getElementById("box2h").innerHTML;
				document.getElementById("modalt").innerHTML = document.getElementById("box2t").innerHTML;
				document.getElementById("modalplayernum").innerHTML = "S01E02";
				document.getElementById("modalplayerhead").innerHTML = document.getElementById("box2h").innerHTML.substring(10,43);
				document.getElementById("modalplayerauth").innerHTML = box2speaker;
				document.getElementById("speaker-img").src = "./assets/images/AnikeDorgu.jpg";
				document.getElementById("modalspeaker").innerHTML = box2speaker;
				document.getElementById("modfb").href = "https://www.facebook.com/nixdorgu";
				document.getElementById("modtwt").style.display =  "initial"; // when not set to initial case 1 hides every other case's twitter
				document.getElementById("modtwt").href = "https://twitter.com/nixdorgu";
				document.getElementById("modig").href = "https://www.instagram.com/nixdorgu/";
				document.getElementById("modlinkedin").href = "https://www.linkedin.com/in/anike-nicole-dorgu/";
				break;
			case 3:
				document.getElementById("modalimg").src =  document.getElementById("box3img").src;
				document.getElementById("blueshare").href = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpodcasts.google.com%2Fu%2F1%2Ffeed%2FaHR0cHM6Ly9hbmNob3IuZm0vcy8zYmM1YTMyNC9wb2RjYXN0L3Jzcw%2Fepisode%2FYmZjMzk5ZjQtNmJjNi00YjIyLThkNWMtMjRhMDYzMmUwNmVi;src=sdkpreparse";
				document.getElementById("modalh").innerHTML = document.getElementById("box3h").innerHTML;
				document.getElementById("modalt").innerHTML = document.getElementById("box3t").innerHTML;
				document.getElementById("modalplayernum").innerHTML = "S01E03";
				document.getElementById("modalplayerhead").innerHTML = document.getElementById("box3h").innerHTML.substring(10,42);
				document.getElementById("modalplayerauth").innerHTML = box3speaker;
				document.getElementById("speaker-img").src = "./assets/images/JoshuadeGuzman.jpg";
				document.getElementById("modalspeaker").innerHTML = box3speaker;
				document.getElementById("modfb").href = "https://www.facebook.com/deguzmanjoshuam";
				document.getElementById("modtwt").style.display =  "initial"; // when not set to initial case 1 hides every other case's twitter
				document.getElementById("modtwt").href = "https://twitter.com/joshuamdeguzman";
				document.getElementById("modig").href = "https://www.instagram.com/joshuamdeguzman/";
				document.getElementById("modlinkedin").href = "https://www.linkedin.com/in/joshuadeguzman/";
				break;
			case 4:
				document.getElementById("modalimg").src =  document.getElementById("box4img").src;
				document.getElementById("blueshare").href = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpodcasts.google.com%2Fu%2F1%2Ffeed%2FaHR0cHM6Ly9hbmNob3IuZm0vcy8zYmM1YTMyNC9wb2RjYXN0L3Jzcw";
				document.getElementById("modalh").innerHTML = document.getElementById("box4h").innerHTML;
				document.getElementById("modalt").innerHTML = document.getElementById("box4t").innerHTML;
				document.getElementById("modalplayernum").innerHTML = "S01E04";
				document.getElementById("modalplayerhead").innerHTML = document.getElementById("box4h").innerHTML.substring(10,36);
				document.getElementById("modalplayerauth").innerHTML = box4speaker;
				document.getElementById("speaker-img").src = "./assets/images/BautistaFrancis.jpg";
				document.getElementById("modalspeaker").innerHTML = box4speaker;
				document.getElementById("modfb").href = "https://www.facebook.com/francismichaelbautista";
				document.getElementById("modtwt").style.display =  "initial"; // when not set to initial case 1 hides every other case's twitter
				document.getElementById("modtwt").href = "https://twitter.com/the_francisb";
				document.getElementById("modig").href = "https://www.instagram.com/the_francisb/";
				document.getElementById("modlinkedin").href = "https://www.linkedin.com/in/francis-michael-bautista-7a08334a/";
				break;
			case 5:
				document.getElementById("modalimg").src =  document.getElementById("box5img").src;
				document.getElementById("blueshare").href = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpodcasts.google.com%2Fu%2F1%2Ffeed%2FaHR0cHM6Ly9hbmNob3IuZm0vcy8zYmM1YTMyNC9wb2RjYXN0L3Jzcw";
				document.getElementById("modalh").innerHTML = document.getElementById("box5h").innerHTML;
				document.getElementById("modalt").innerHTML = document.getElementById("box5t").innerHTML;
				document.getElementById("modalplayernum").innerHTML = "S01E05";
				document.getElementById("modalplayerhead").innerHTML = document.getElementById("box5h").innerHTML.substring(10,43);
				document.getElementById("modalplayerauth").innerHTML = restboxspeaker;
				document.getElementById("speaker-img").src = restboxspeakerimg;
				document.getElementById("modalspeaker").innerHTML = restboxspeaker;
				document.getElementById("modfb").href = "https://www.facebook.com/shadroi";
				document.getElementById("modtwt").style.display =  "initial"; // when not set to initial case 1 hides every other case's twitter
				document.getElementById("modtwt").href = "https://twitter.com/ShadRoi";
				document.getElementById("modig").href = "https://www.instagram.com/shad.roi/";
				document.getElementById("modlinkedin").href = "https://www.linkedin.com/in/shadroi/";
				break;
		}
	} else {
		document.querySelector('.modal-cont').classList.remove('open'); 
		document.querySelector('.modal-cover').classList.remove('open'); 
		op = false;
	}

}

function fbHover() {
	let svg = document.querySelector('#fb svg')
	let circle = document.querySelector('#fb circle')
	let path = document.querySelector('#fb path')

	svg.style.fill = "#4285F4";
	circle.style.stroke = "#fff";
	path.style.stroke = "#fff";
}

function fbLeave() {
	let svg = document.querySelector('#fb svg')
	let circle = document.querySelector('#fb circle')
	let path = document.querySelector('#fb path')

	svg.style.fill = "none";
	circle.style.stroke = "#333333";
	path.style.stroke = "#333333";
}


function twHover() {
	let svg = document.querySelector('#tw svg')
	let circle = document.querySelector('#tw circle')
	let path = document.querySelector('#tw path')

	svg.style.fill = "#4285F4";
	circle.style.stroke = "#fff";
	path.style.stroke = "#fff";
}

function twLeave() {
	let svg = document.querySelector('#tw svg')
	let circle = document.querySelector('#tw circle')
	let path = document.querySelector('#tw path')

	svg.style.fill = "none";
	circle.style.stroke = "#333333";
	path.style.stroke = "#333333";
}

function igHover() {
	let svg = document.querySelector('#ig svg')
	let circle = document.querySelector('#ig circle')
	let paths = document.querySelectorAll('#ig path')

	svg.style.fill = "#4285F4";
	circle.style.stroke = "#fff";
	paths.forEach((path) => {path.style.stroke = "#fff";})
}

function igLeave() {
	let svg = document.querySelector('#ig svg')
	let circle = document.querySelector('#ig circle')
	let paths = document.querySelectorAll('#ig path')

	svg.style.fill = "none";
	circle.style.stroke = "#333333";
	paths.forEach((path) => {path.style.stroke = "#333333";})
}

function liHover() {
	let svg = document.querySelector('#li svg')
	let circle = document.querySelector('#li circle')
	let paths = document.querySelectorAll('#li path')

	svg.style.fill = "#4285F4";
	circle.style.stroke = "#fff";
	paths.forEach((path) => {path.style.stroke = "#fff";})
}

function liLeave() {
	let svg = document.querySelector('#li svg')
	let circle = document.querySelector('#li circle')
	let paths = document.querySelectorAll('#li path')

	svg.style.fill = "none";
	circle.style.stroke = "#333333";
	paths.forEach((path) => {path.style.stroke = "#333333";})
}

function modfbHover() {
	let svg = document.querySelector('#modfb svg')
	let circle = document.querySelector('#modfb circle')
	let path = document.querySelector('#modfb path')

	svg.style.fill = "#4285F4";
	circle.style.stroke = "#fff";
	path.style.stroke = "#fff";
}

function modfbLeave() {
	let svg = document.querySelector('#modfb svg')
	let circle = document.querySelector('#modfb circle')
	let path = document.querySelector('#modfb path')

	svg.style.fill = "none";
	circle.style.stroke = "#333333";
	path.style.stroke = "#333333";
}


function modtwHover() {
	let svg = document.querySelector('#modtwt svg')
	let circle = document.querySelector('#modtwt circle')
	let path = document.querySelector('#modtwt path')

	svg.style.fill = "#4285F4";
	circle.style.stroke = "#fff";
	path.style.stroke = "#fff";
}

function modtwLeave() {
	let svg = document.querySelector('#modtwt svg')
	let circle = document.querySelector('#modtwt circle')
	let path = document.querySelector('#modtwt path')

	svg.style.fill = "none";
	circle.style.stroke = "#333333";
	path.style.stroke = "#333333";
}

function modigHover() {
	let svg = document.querySelector('#modig svg')
	let circle = document.querySelector('#modig circle')
	let paths = document.querySelectorAll('#modig path')

	svg.style.fill = "#4285F4";
	circle.style.stroke = "#fff";
	paths.forEach((path) => {path.style.stroke = "#fff";})
}

function modigLeave() {
	let svg = document.querySelector('#modig svg')
	let circle = document.querySelector('#modig circle')
	let paths = document.querySelectorAll('#modig path')

	svg.style.fill = "none";
	circle.style.stroke = "#333333";
	paths.forEach((path) => {path.style.stroke = "#333333";})
}

function modliHover() {
	let svg = document.querySelector('#modlinkedin svg')
	let circle = document.querySelector('#modlinkedin circle')
	let paths = document.querySelectorAll('#modlinkedin path')

	svg.style.fill = "#4285F4";
	circle.style.stroke = "#fff";
	paths.forEach((path) => {path.style.stroke = "#fff";})
}

function modliLeave() {
	let svg = document.querySelector('#modlinkedin svg')
	let circle = document.querySelector('#modlinkedin circle')
	let paths = document.querySelectorAll('#modlinkedin path')

	svg.style.fill = "none";
	circle.style.stroke = "#333333";
	paths.forEach((path) => {path.style.stroke = "#333333";})
}