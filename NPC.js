class NPC {
	constructor(role, isAdvanced) {
		this.nameSurname = "";
		this.role = roles[role];
		this.name = this.role.name;
		this.isAdvanced = isAdvanced;
		this.stats = {
			int: 0,
			ref: 0,
			tech: 0,
			cool: 0,
			attr: 0,
			luck: 0,
			ma: 0,
			body: 0,
			emp: 0
		}
		this.stats["run"] = this.stats["ma"] * 3;
		this.stats["leap"] = floor(this.stats["Run"] / 4);
		this.stats["lift"] = this.stats["body"] * 10;
		this.careerSkills = this.role.careerSkills;
		this.generateStats();
		this.distributeCareerSkills();
		if (this.isAdvanced) {
			this.pickupSkills = {};
			this.distributePickupSkills();
		}
		this.cyberware = {};
		this.gear = {};
		this.equipCyberware();
		this.equipGear();
	}

	generateStats() {
		Object.entries(this.stats).forEach(
			([key, value]) => {
				let statRoll = rollDice(2, 6);
				while (statRoll >= 11) {
					statRoll = rollDice(2, 6);
				}
				this.stats[key] = statRoll;
			}
		);
	}

	distributeCareerSkills() {
		let totalPoints = 40;
		let careerSkills = Object.keys(this.careerSkills);
		Object.entries(this.careerSkills).forEach(
			([key, value]) => {
				if (key == "Other") {
					let keys = Object.keys(this.careerSkills.Other);
					for (let i = 0; i < 3; i++) {
						let randomSkillIndex = floor(random(0, keys.length));
						this.careerSkills[keys[randomSkillIndex]] = 0;
					}
					delete this.careerSkills.Other;
				}
			}
		);
		Object.entries(this.careerSkills).forEach(
			([key, value]) => {
				if (key != "undefined" && totalPoints > 0) {
					let statRoll = floor(random(1, min(totalPoints + 1, 11)));
					this.careerSkills[key] = statRoll;
					totalPoints -= statRoll;
				}
			}
		);
		if (this.careerSkills[careerSkills[careerSkills.length - 1]] <= 10 - totalPoints) {
			this.careerSkills[careerSkills[careerSkills.length - 1]] += totalPoints;
		} else {
			this.careerSkills[careerSkills[careerSkills.length - 2]] += totalPoints;
		}
	}

	distributePickupSkills() {

		Object.entries(pickupSkills).forEach(
			([key, value]) => {
				for (let m of multipleChoicePickupSkills) {
					if (key == m) {
						let keys = Object.keys(pickupSkills[m]);
						let randomSkillIndex = floor(random(0, keys.length));
						pickupSkills[keys[randomSkillIndex]] = 0;
						delete pickupSkills[m];
					}
				}
			}
		);
		for (let i = 0; i < 5; i++) {
			let pickupSkillsKeys = Object.keys(pickupSkills);
			let randomSkillIndex = floor(random(0, pickupSkillsKeys.length));
			for (let c of Object.keys(this.careerSkills)) {
				if (pickupSkillsKeys[randomSkillIndex] != c) {
					this.pickupSkills[pickupSkillsKeys[randomSkillIndex]] = 0;
				}
			}
			delete pickupSkills[pickupSkillsKeys[randomSkillIndex]]
		}
		let totalPoints = rollDice(2, 10);
		Object.entries(this.pickupSkills).forEach(
			([key, value]) => {
				if (key != "undefined" && totalPoints > 0) {
					let statRoll = floor(random(1, min(totalPoints + 1, 5)));
					this.pickupSkills[key] = statRoll;
					totalPoints -= statRoll;
				}
			}
		);
		if (this.pickupSkills[Object.keys(this.pickupSkills)[Object.keys(this.pickupSkills).length - 1]] <= 10 - totalPoints) {
			this.pickupSkills[Object.keys(this.pickupSkills)[Object.keys(this.pickupSkills).length - 1]] += totalPoints;
		} else {
			this.pickupSkills[Object.keys(this.pickupSkills)[Object.keys(this.pickupSkills).length - 2]] += totalPoints;
		}
	}

	equipCyberware() {
		let rollCount;
		switch (this.name) {
			case "Solo":
				rollCount = 6;
				break;
			default:
				rollCount = 3;
				break;
		}
		Object.entries(cyberware).forEach(
			([key, value]) => {
				for (let m of multipleChoiceCyberware) {
					if (key == m) {
						let keys = Object.keys(cyberware[m]);
						let randomSkillIndex = rollDice(1, 6);
						cyberware[keys[randomSkillIndex]] = 0;
						delete cyberware[m];
					}
				}
			}
		);
		for (let i = 0; i < rollCount; i++) {
			let keys = Object.keys(cyberware);
			let roll = rollDice(1, keys.length);
			this.cyberware[keys[roll - 1]] = 0;
			delete cyberware[keys[roll - 1]];
		}
	}

	equipGear() {
		let roll = rollDice(1, 10);
		switch (this.name) {
			case "Nomad":
				roll += 2;
				break;
			case "Cop":
				roll += 2;
				break;
			case "Solo":
				roll += 3;
				break;
			default:
				break;
		}
		if (roll >= 10) roll = 10;
		this.gear[Object.keys(gear)[roll - 1]] = gear[Object.keys(gear)[roll - 1]];
	}
}