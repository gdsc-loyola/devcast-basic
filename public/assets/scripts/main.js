// modal 

let op = false;
var check = 0;
const ep1cover = document.getElementById('box1img');
const ep2cover = document.getElementById('box2img');
const ep3cover = document.getElementById('box3img');
const ep4cover = document.getElementById('box4img');
const ep5cover = document.getElementById('box5img');
const ep1Title = document.getElementById('box1h');
const ep2Title = document.getElementById('box2h');
const ep3Title = document.getElementById('box3h');
const ep4Title = document.getElementById('box4h');
const ep5Title = document.getElementById('box5h');
const ep1Desc = document.getElementById('box1t');
const ep2Desc = document.getElementById('box2t');
const ep3Desc = document.getElementById('box3t');
const ep4Desc = document.getElementById('box4t');
const ep5Desc = document.getElementById('box5t');
const episode1 = document.getElementById("episode1");
const episode2 = document.getElementById("episode2");
const episode3 = document.getElementById("episode3");
const episode4 = document.getElementById("episode4");
const episode5 = document.getElementById("episode5");
const episodeList = [episode1, episode2, episode3, episode4, episode5 ]
const epAudioSrc = [];
const epCovers = [];
const epTitles = [];
const epDescriptions = [];
const speakerNames = [];
const speakerImgs = [];
const speakerFBLinks = [];
const speakerTwtLinks = [];
const speakerIGLinks = [];
const speakerLknLinks = [];
const epSeasonEpisode = [];
const epShareButtons = [];

async function getData() {
	await axios.get('https://devcast-cms.herokuapp.com/sites?_sort=published_at').then((response) => {
		response.data.forEach(element => {
			epAudioSrc.push(element.recording[0].url);
			epCovers.push(element.cover[0].url);
			epTitles.push(element.title);
			epDescriptions.push(element.description);
			speakerNames.push(element.speaker);
			speakerImgs.push(element.picture[0].url);
			speakerFBLinks.push(element.facebookLink);
			speakerTwtLinks.push(element.twitterLink);
			speakerIGLinks.push(element.instagramLink);
			speakerLknLinks.push(element.linkedinLink);
			if (element.currentSeason <= 9 && element.currentEpisode <= 9) {
				epSeasonEpisode.push(`S0${element.currentSeason}E0${element.currentEpisode}`);
			} else if (element.currentSeason <= 9 && element.currentEpisode >= 10) {
				epSeasonEpisode.push(`S0${element.currentSeason}E${element.currentEpisode}`);
			} else if (element.currentSeason >= 10 && element.currentEpisode <= 9) {
				epSeasonEpisode.push(`S${element.currentSeason}E0${element.currentEpisode}`)
			} else {
				epSeasonEpisode.push(`S${element.currentSeason}E${element.currentEpisode}`)
			}
			epShareButtons.push(element.shareButton);
		});
	});
	ep1cover.src = epCovers[0];
	ep2cover.src = epCovers[1];
	ep3cover.src = epCovers[2];
	ep4cover.src = epCovers[3];
	ep5cover.src = epCovers[4];
	ep1Title.innerHTML = epTitles[0];
	ep2Title.innerHTML = epTitles[1];
	ep3Title.innerHTML = epTitles[2];
	ep4Title.innerHTML = epTitles[3];
	ep5Title.innerHTML = epTitles[4];
	ep1Desc.innerHTML = epDescriptions[0];
	ep2Desc.innerHTML = epDescriptions[1];
	ep3Desc.innerHTML = epDescriptions[2];
	ep4Desc.innerHTML = epDescriptions[3];
	ep5Desc.innerHTML = epDescriptions[4];
	episodeList.forEach(ep => {
		ep.src = epAudioSrc[episodeList.indexOf(ep)];
	})
}
getData();

function modal(check) {

	if (!op) {
		document.querySelector('.modal-cont').classList.add('open'); 
		document.querySelector('.modal-cover').classList.add('open');
		op = true;

		document.getElementById("modalimg").src =  epCovers[check-1];
		document.getElementById("blueshare").href = `https://www.facebook.com/sharer/sharer.php?u=${epShareButtons[check-1]}`;
		document.getElementById("modalh").innerHTML = epTitles[check-1];
		document.getElementById("modalt").innerHTML = epDescriptions[check-1];
		document.getElementById("modalplayernum").innerHTML = epSeasonEpisode[check-1];
		if (epTitles[check-1].length > 42) {
			document.getElementById("modalplayerhead").innerHTML = epTitles[check-1].substring(10,42) + "...";
		} else {
			document.getElementById("modalplayerhead").innerHTML = epTitles[check-1].substring(10,);
		}
		document.getElementById("modalplayerauth").innerHTML = speakerNames[check-1];
		document.getElementById("speaker-img").src = speakerImgs[check-1];
		document.getElementById("modalspeaker").innerHTML = speakerNames[check-1];
		if (speakerFBLinks[check-1] === "" || speakerFBLinks[check-1] === "#") {
			document.getElementById("modfb").style.display = "none";
		} else {
			document.getElementById("modfb").style.display = "initial";
			document.getElementById("modfb").href = speakerFBLinks[check-1];
		}
		if (speakerTwtLinks[check-1] === "" || speakerTwtLinks[check-1] === "#") {
			document.getElementById("modtwt").style.display = "none";
		} else {
			document.getElementById("modtwt").style.display = "initial";
			document.getElementById("modtwt").href = speakerTwtLinks[check-1];
		}
		if (speakerIGLinks[check-1] === "" || speakerIGLinks[check-1] === "#") {
			document.getElementById("modig").style.display = "none";
		} else {
			document.getElementById("modig").style.display = "initial";
			document.getElementById("modig").href = speakerTwtLinks[check-1];
		}
		if (speakerLknLinks[check-1] === "" || speakerLknLinks[check-1] === "#") {
			document.getElementById("modlinkedin").style.display = "none";
		} else {
			document.getElementById("modlinkedin").style.display = "initial";
			document.getElementById("modlinkedin").href = speakerLknLinks[check-1];
		}

		
		// switch(check) {
		// 	case 1:
		// 		// document.getElementById("blueshare").href = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpodcasts.google.com%2Fu%2F1%2Ffeed%2FaHR0cHM6Ly9hbmNob3IuZm0vcy8zYmM1YTMyNC9wb2RjYXN0L3Jzcw%2Fepisode%2FM2JjYjQ1MGMtN2RhMC00YjRkLWE4ODUtMzYzMzBlMzU0YzNl;src=sdkpreparse";
		// 		// document.getElementById("modalh").innerHTML = document.getElementById("box1h").innerHTML;
		// 		// document.getElementById("modalt").innerHTML = document.getElementById("box1t").innerHTML;
		// 		// document.getElementById("modalplayernum").innerHTML = epSeasonEpisode[check-1];
		// 		// document.getElementById("modalplayerhead").innerHTML = document.getElementById("box1h").innerHTML.substring(10,43);
		// 		// document.getElementById("modalplayerauth").innerHTML = speakerNames[check-1];
		// 		// document.getElementById("speaker-img").src = speakerImgs[check-1];
		// 		// document.getElementById("modalspeaker").innerHTML = speakerNames[check-1];
		// 		if (speakerFBLinks[check-1] === "" || speakerFBLinks[check-1] === "#") {
		// 			document.getElementById("modfb").style.display = "none";
		// 		} else {
		// 			document.getElementById("modfb").style.display = "initial";
		// 			document.getElementById("modfb").href = speakerFBLinks[check-1];
		// 		}
		// 		if (speakerTwtLinks[check-1] === "" || speakerTwtLinks[check-1] === "#") {
		// 			document.getElementById("modtwt").style.display = "none";
		// 		} else {
		// 			document.getElementById("modtwt").style.display = "initial";
		// 			document.getElementById("modtwt").href = speakerTwtLinks[check-1];
		// 		}
		// 		if (speakerIGLinks[check-1] === "" || speakerIGLinks[check-1] === "#") {
		// 			document.getElementById("modig").style.display = "none";
		// 		} else {
		// 			document.getElementById("modig").style.display = "initial";
		// 			document.getElementById("modig").href = speakerTwtLinks[check-1];
		// 		}
		// 		if (speakerLknLinks[check-1] === "" || speakerLknLinks[check-1] === "#") {
		// 			document.getElementById("modlinkedin").style.display = "none";
		// 		} else {
		// 			document.getElementById("modlinkedin").style.display = "initial";
		// 			document.getElementById("modlinkedin").href = speakerLknLinks[check-1];
		// 		}
		// 		break;
		// 	case 2:
		// 		document.getElementById("modalimg").src =  document.getElementById("box2img").src;
		// 		document.getElementById("blueshare").href ="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpodcasts.google.com%2Fu%2F1%2Ffeed%2FaHR0cHM6Ly9hbmNob3IuZm0vcy8zYmM1YTMyNC9wb2RjYXN0L3Jzcw%2Fepisode%2FZDM0ZDZhODMtZmIyZi00Yjc5LWIwMmYtMWYzMzgzMDFhNzgz;src=sdkpreparse";
		// 		document.getElementById("modalh").innerHTML = document.getElementById("box2h").innerHTML;
		// 		document.getElementById("modalt").innerHTML = document.getElementById("box2t").innerHTML;
		// 		document.getElementById("modalplayernum").innerHTML = "S01E02";
		// 		document.getElementById("modalplayerhead").innerHTML = document.getElementById("box2h").innerHTML.substring(10,43);
		// 		document.getElementById("modalplayerauth").innerHTML = box2speaker;
		// 		document.getElementById("speaker-img").src = "./assets/images/AnikeDorgu.jpg";
		// 		document.getElementById("modalspeaker").innerHTML = box2speaker;
		// 		if (speakerFBLinks[check-1] === "" || speakerFBLinks[check-1] === "#") {
		// 			document.getElementById("modfb").style.display = "none";
		// 		} else {
		// 			document.getElementById("modfb").style.display = "initial";
		// 			document.getElementById("modfb").href = speakerFBLinks[check-1];
		// 		}
		// 		if (speakerTwtLinks[check-1] === "" || speakerTwtLinks[check-1] === "#") {
		// 			document.getElementById("modtwt").style.display = "none";
		// 		} else {
		// 			document.getElementById("modtwt").style.display = "initial";
		// 			document.getElementById("modtwt").href = speakerTwtLinks[check-1];
		// 		}
		// 		if (speakerIGLinks[check-1] === "" || speakerIGLinks[check-1] === "#") {
		// 			document.getElementById("modig").style.display = "none";
		// 		} else {
		// 			document.getElementById("modig").style.display = "initial";
		// 			document.getElementById("modig").href = speakerTwtLinks[check-1];
		// 		}
		// 		if (speakerLknLinks[check-1] === "" || speakerLknLinks[check-1] === "#") {
		// 			document.getElementById("modlinkedin").style.display = "none";
		// 		} else {
		// 			document.getElementById("modlinkedin").style.display = "initial";
		// 			document.getElementById("modlinkedin").href = speakerLknLinks[check-1];
		// 		}
		// 		break;
		// 	case 3:
		// 		document.getElementById("modalimg").src =  document.getElementById("box3img").src;
		// 		document.getElementById("blueshare").href = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpodcasts.google.com%2Fu%2F1%2Ffeed%2FaHR0cHM6Ly9hbmNob3IuZm0vcy8zYmM1YTMyNC9wb2RjYXN0L3Jzcw%2Fepisode%2FYmZjMzk5ZjQtNmJjNi00YjIyLThkNWMtMjRhMDYzMmUwNmVi;src=sdkpreparse";
		// 		document.getElementById("modalh").innerHTML = document.getElementById("box3h").innerHTML;
		// 		document.getElementById("modalt").innerHTML = document.getElementById("box3t").innerHTML;
		// 		document.getElementById("modalplayernum").innerHTML = "S01E03";
		// 		document.getElementById("modalplayerhead").innerHTML = document.getElementById("box3h").innerHTML.substring(10,42);
		// 		document.getElementById("modalplayerauth").innerHTML = box3speaker;
		// 		document.getElementById("speaker-img").src = "./assets/images/JoshuadeGuzman.jpg";
		// 		document.getElementById("modalspeaker").innerHTML = box3speaker;
		// 		document.getElementById("modfb").href = "https://www.facebook.com/deguzmanjoshuam";
		// 		document.getElementById("modtwt").style.display =  "initial"; // when not set to initial case 1 hides every other case's twitter
		// 		document.getElementById("modtwt").href = "https://twitter.com/joshuamdeguzman";
		// 		document.getElementById("modig").href = "https://www.instagram.com/joshuamdeguzman/";
		// 		document.getElementById("modlinkedin").href = "https://www.linkedin.com/in/joshuadeguzman/";
		// 		break;
		// 	case 4:
		// 		document.getElementById("modalimg").src =  document.getElementById("box4img").src;
		// 		document.getElementById("blueshare").href = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpodcasts.google.com%2Fu%2F1%2Ffeed%2FaHR0cHM6Ly9hbmNob3IuZm0vcy8zYmM1YTMyNC9wb2RjYXN0L3Jzcw";
		// 		document.getElementById("modalh").innerHTML = document.getElementById("box4h").innerHTML;
		// 		document.getElementById("modalt").innerHTML = document.getElementById("box4t").innerHTML;
		// 		document.getElementById("modalplayernum").innerHTML = "S01E04";
		// 		document.getElementById("modalplayerhead").innerHTML = document.getElementById("box4h").innerHTML.substring(10,36);
		// 		document.getElementById("modalplayerauth").innerHTML = box4speaker;
		// 		document.getElementById("speaker-img").src = "./assets/images/BautistaFrancis.jpg";
		// 		document.getElementById("modalspeaker").innerHTML = box4speaker;
		// 		if (speakerFBLinks[check-1] === "" || speakerFBLinks[check-1] === "#") {
		// 			document.getElementById("modfb").style.display = "none";
		// 		} else {
		// 			document.getElementById("modfb").style.display = "initial";
		// 			document.getElementById("modfb").href = speakerFBLinks[check-1];
		// 		}
		// 		if (speakerTwtLinks[check-1] === "" || speakerTwtLinks[check-1] === "#") {
		// 			document.getElementById("modtwt").style.display = "none";
		// 		} else {
		// 			document.getElementById("modtwt").style.display = "initial";
		// 			document.getElementById("modtwt").href = speakerTwtLinks[check-1];
		// 		}
		// 		if (speakerIGLinks[check-1] === "" || speakerIGLinks[check-1] === "#") {
		// 			document.getElementById("modig").style.display = "none";
		// 		} else {
		// 			document.getElementById("modig").style.display = "initial";
		// 			document.getElementById("modig").href = speakerTwtLinks[check-1];
		// 		}
		// 		if (speakerLknLinks[check-1] === "" || speakerLknLinks[check-1] === "#") {
		// 			document.getElementById("modlinkedin").style.display = "none";
		// 		} else {
		// 			document.getElementById("modlinkedin").style.display = "initial";
		// 			document.getElementById("modlinkedin").href = speakerLknLinks[check-1];
		// 		}
		// 		break;
		// 	case 5:
		// 		document.getElementById("modalimg").src =  document.getElementById("box5img").src;
		// 		document.getElementById("blueshare").href = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpodcasts.google.com%2Fu%2F1%2Ffeed%2FaHR0cHM6Ly9hbmNob3IuZm0vcy8zYmM1YTMyNC9wb2RjYXN0L3Jzcw";
		// 		document.getElementById("modalh").innerHTML = document.getElementById("box5h").innerHTML;
		// 		document.getElementById("modalt").innerHTML = document.getElementById("box5t").innerHTML;
		// 		document.getElementById("modalplayernum").innerHTML = "S01E05";
		// 		document.getElementById("modalplayerhead").innerHTML = document.getElementById("box5h").innerHTML.substring(10,43);
		// 		document.getElementById("modalplayerauth").innerHTML = restboxspeaker;
		// 		document.getElementById("speaker-img").src = restboxspeakerimg;
		// 		document.getElementById("modalspeaker").innerHTML = restboxspeaker;
		// 		if (speakerFBLinks[check-1] === "" || speakerFBLinks[check-1] === "#" || speakerFBLinks[check-1] === null) {
		// 			document.getElementById("modfb").style.display = "none";
		// 		} else {
		// 			document.getElementById("modfb").style.display = "initial";
		// 			document.getElementById("modfb").href = speakerFBLinks[check-1];
		// 		}
		// 		if (speakerTwtLinks[check-1] === "" || speakerTwtLinks[check-1] === "#" || speakerTwtLinks[check-1] === null) {
		// 			document.getElementById("modtwt").style.display = "none";
		// 		} else {
		// 			document.getElementById("modtwt").style.display = "initial";
		// 			document.getElementById("modtwt").href = speakerTwtLinks[check-1];
		// 		}
		// 		if (speakerIGLinks[check-1] === "" || speakerIGLinks[check-1] === "#" || speakerIGLinks[check-1] === null) {
		// 			document.getElementById("modig").style.display = "none";
		// 		} else {
		// 			document.getElementById("modig").style.display = "initial";
		// 			document.getElementById("modig").href = speakerTwtLinks[check-1];
		// 		}
		// 		if (speakerLknLinks[check-1] === "" || speakerLknLinks[check-1] === "#" || speakerLknLinks[check-1] === null) {
		// 			document.getElementById("modlinkedin").style.display = "none";
		// 		} else {
		// 			document.getElementById("modlinkedin").style.display = "initial";
		// 			document.getElementById("modlinkedin").href = speakerLknLinks[check-1];
		// 		}
		// 		break;
		// }
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