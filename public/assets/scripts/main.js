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
				break;
			case 2:
				document.getElementById("modalimg").src =  document.getElementById("box2img").src;
				document.getElementById("modalh").innerHTML = document.getElementById("box2h").innerHTML;
				document.getElementById("modalt").innerHTML = document.getElementById("box2t").innerHTML;
				document.getElementById("modalplayernum").innerHTML = "S01E02";
				document.getElementById("modalplayerhead").innerHTML = document.getElementById("box2h").innerHTML.substring(10,43);
				document.getElementById("modalplayerauth").innerHTML = box2speaker;
				document.getElementById("speaker-img").src = document.getElementById("box2img").src;
				document.getElementById("modalspeaker").innerHTML = box2speaker;
				break;
			case 3:
				document.getElementById("modalimg").src =  document.getElementById("box3img").src;
				document.getElementById("modalh").innerHTML = document.getElementById("box3h").innerHTML;
				document.getElementById("modalt").innerHTML = document.getElementById("box3t").innerHTML;
				document.getElementById("modalplayernum").innerHTML = "S01E03";
				document.getElementById("modalplayerhead").innerHTML = document.getElementById("box3h").innerHTML.substring(10,43);
				document.getElementById("modalplayerauth").innerHTML = box3speaker;
				document.getElementById("speaker-img").src = document.getElementById("box3img").src;
				document.getElementById("modalspeaker").innerHTML = box3speaker;
				break;
			case 4:
				document.getElementById("modalimg").src =  document.getElementById("box4img").src;
				document.getElementById("modalh").innerHTML = document.getElementById("box4h").innerHTML;
				document.getElementById("modalt").innerHTML = document.getElementById("box4t").innerHTML;
				document.getElementById("modalplayernum").innerHTML = "S01E04";
				document.getElementById("modalplayerhead").innerHTML = document.getElementById("box4h").innerHTML.substring(10,43);
				document.getElementById("modalplayerauth").innerHTML = box4speaker;
				document.getElementById("speaker-img").src = document.getElementById("box4img").src;
				document.getElementById("modalspeaker").innerHTML = box4speaker;
				break;
		}
	} else {
		document.querySelector('.modal-cont').classList.remove('open'); 
		document.querySelector('.modal-cover').classList.remove('open'); 
		op = false;
	}

}

