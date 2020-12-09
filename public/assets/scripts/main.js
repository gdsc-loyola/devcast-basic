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
				 document.getElementById("modalh").innerHTML = document.getElementById("box1h").innerHTML;
				 document.getElementById("modalt").innerHTML = document.getElementById("box1t").innerHTML;
				 document.getElementById("modalplayernum").innerHTML = "S01E01";
				 document.getElementById("modalplayerhead").innerHTML = document.getElementById("box1h").innerHTML.substring(10,43);
				 document.getElementById("modalplayerauth").innerHTML = box1speaker;
				 document.getElementById("speaker-img").src = document.getElementById("box1img").src;
				 document.getElementById("modalspeaker").innerHTML = box1speaker;
				 document.getElementById("modfb").href = "https://www.facebook.com/brucevinceal";
				 document.getElementById("modtwt").style.display = "none";
				 document.getElementById("modig").href = "https://www.instagram.com/brucevinceal/";
				 document.getElementById("modlinkedin").href = "https://www.linkedin.com/in/brucevinceal/";
				break;
			case 2:
				document.getElementById("modalimg").src =  document.getElementById("box2img").src;
				document.getElementById("modalh").innerHTML = document.getElementById("box2h").innerHTML;
				document.getElementById("modalt").innerHTML = document.getElementById("box2t").innerHTML;
				document.getElementById("modalplayernum").innerHTML = "S01E02";
				document.getElementById("modalplayerhead").innerHTML = document.getElementById("box2h").innerHTML.substring(10,43);
				document.getElementById("modalplayerauth").innerHTML = restboxspeaker;
				document.getElementById("speaker-img").src = restboxspeakerimg;
				document.getElementById("modalspeaker").innerHTML = restboxspeaker;
				document.getElementById("modfb").href = "https://www.facebook.com/nixdorgu";
				document.getElementById("modtwt").style.display =  "initial"; // when not set to initial case 1 hides every other case's twitter
				document.getElementById("modtwt").href = "https://twitter.com/nixdorgu";
				document.getElementById("modig").href = "https://www.instagram.com/nixdorgu/";
				document.getElementById("modlinkedin").href = "https://www.linkedin.com/in/anike-nicole-dorgu/";
				break;
			case 3:
				document.getElementById("modalimg").src =  document.getElementById("box3img").src;
				document.getElementById("modalh").innerHTML = document.getElementById("box3h").innerHTML;
				document.getElementById("modalt").innerHTML = document.getElementById("box3t").innerHTML;
				document.getElementById("modalplayernum").innerHTML = "S01E03";
				document.getElementById("modalplayerhead").innerHTML = document.getElementById("box3h").innerHTML.substring(10,43);
				document.getElementById("modalplayerauth").innerHTML = restboxspeaker;
				document.getElementById("speaker-img").src = restboxspeakerimg;
				document.getElementById("modalspeaker").innerHTML = restboxspeaker;
				document.getElementById("modfb").href = "https://www.facebook.com/deguzmanjoshuam";
				document.getElementById("modtwt").style.display =  "initial"; // when not set to initial case 1 hides every other case's twitter
				document.getElementById("modtwt").href = "https://twitter.com/joshuamdeguzman";
				document.getElementById("modig").href = "https://www.instagram.com/joshuamdeguzman/";
				document.getElementById("modlinkedin").href = "https://www.linkedin.com/in/joshuadeguzman/";
				break;
			case 4:
				document.getElementById("modalimg").src =  document.getElementById("box4img").src;
				document.getElementById("modalh").innerHTML = document.getElementById("box4h").innerHTML;
				document.getElementById("modalt").innerHTML = document.getElementById("box4t").innerHTML;
				document.getElementById("modalplayernum").innerHTML = "S01E04";
				document.getElementById("modalplayerhead").innerHTML = document.getElementById("box4h").innerHTML.substring(10,43);
				document.getElementById("modalplayerauth").innerHTML = restboxspeaker;
				document.getElementById("speaker-img").src = restboxspeakerimg;
				document.getElementById("modalspeaker").innerHTML = restboxspeaker;
				document.getElementById("modfb").href = "https://www.facebook.com/francismichaelbautista";
				document.getElementById("modtwt").style.display =  "initial"; // when not set to initial case 1 hides every other case's twitter
				document.getElementById("modtwt").href = "https://twitter.com/the_francisb";
				document.getElementById("modig").href = "https://www.instagram.com/the_francisb/";
				document.getElementById("modlinkedin").href = "https://www.linkedin.com/in/francis-michael-bautista-7a08334a/";
				break;
			case 5:
				document.getElementById("modalimg").src =  document.getElementById("box5img").src;
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

