let abc;
let nameSurname;
let slider;


function preload() {
	let url1 = 'https://uinames.com/api/?region=United States';
	loadJSON(url1, gotName);
}

function setup() {
	createCanvas(600, 800);
	abc = new NPC(random(Object.keys(roles)), random([true, false]));
	abc.nameSurname = nameSurname;
	console.log(abc);
	slider = createSlider(1, 2, 1, 1);
	slider.position(width - 150, height - 35);
}

function draw() {
	background(255);

	renderNPCCard(slider.value());
}

function renderNPCCard(page) {
	let counter = 0;
	switch (page) {
		case 1:
			noFill();
			stroke(0);
			strokeWeight(2);
			rect(5, 5, width - 5, height - 5);
			noStroke();
			textAlign(LEFT, CENTER);
			textSize(20);
			fill(255, 0, 0);
			text("Name: " + abc.nameSurname, 0.5 * width / 10, height / 20);
			text("Role: " + abc.name, 6 * width / 10, height / 20);
			fill(0);
			text("Stats", 0.5 * width / 10, 2 * height / 20);
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 4; j++) {
					text(Object.keys(abc.stats)[counter] + ":" + abc.stats[Object.keys(abc.stats)[counter]], (0.5 * width / 10) + j * width / 8, 2.75 * height / 20 + i * height / 20);
					counter++;
				}
			}
			text("Career Skills", 0.5 * width / 10, 2.75 * height / 20 + 3.5 * height / 20);
			counter = 0;
			for (let i = 0; i < 5; i++) {
				for (let j = 0; j < 2; j++) {
					text(Object.keys(abc.careerSkills)[counter] + ":" + abc.careerSkills[Object.keys(abc.careerSkills)[counter]], (0.5 * width / 10) + j * width / 2.25, 7.25 * height / 20 + i * height / 20);
					counter++;
				}
			}
			if (abc.isAdvanced) {
				text("Pickup Skills", 0.5 * width / 10, 7.5 * height / 20 + 5 * height / 20);
				counter = 0;
				for (let i = 0; i < 5; i++) {
					for (let j = 0; j < 1; j++) {
						text(Object.keys(abc.pickupSkills)[counter] + ":" + abc.pickupSkills[Object.keys(abc.pickupSkills)[counter]], (0.5 * width / 10) + j * width / 2.25, 8.5 * height / 20 + 5 * height / 20 + i * height / 20);
						counter++;
					}
				}
			}
			break;
		case 2:
			noFill();
			stroke(0);
			strokeWeight(2);
			rect(5, 5, width - 5, height - 5);
			noStroke();
			textAlign(LEFT, CENTER);
			textSize(20);
			fill(255, 0, 0);
			text("Name: " + abc.nameSurname, 0.5 * width / 10, height / 20);
			text("Role: " + abc.name, 6 * width / 10, height / 20);
			fill(0);
			text("Cybernetics", 0.5 * width / 10, 2 * height / 20);
			counter = 0;
			for (let i = 0; i < 4; i++) {
				for (let j = 0; j < 1; j++) {
					if (Object.keys(abc.cyberware)[counter] != "undefined") {
						text(Object.keys(abc.cyberware)[counter], (0.5 * width / 10) + j * width / 8, 3 * height / 20 + i * height / 20);
					}
					counter++;
				}
			}
			text("Gear:", 0.5 * width / 10, 3.5 * height / 20 + 3.5 * height / 20);
			text(Object.keys(abc.gear)[0] + " and " + abc.gear[Object.keys(abc.gear)[0]], 0.5 * width / 10, 4.5 * height / 20 + 3.5 * height / 20);
			break;
	}
}

function rollDice(numOfDice, DX) {
	let total = 0;
	for (let i = 0; i < numOfDice; i++) {
		const roll = floor(random(1, DX + 1));
		total += roll;
	}
	return total;
}

function gotName(result) {
	nameSurname = `${result.name} ${result.surname}(${result.gender[0]})`;
}