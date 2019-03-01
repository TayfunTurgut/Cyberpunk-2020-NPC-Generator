class Rocker {
	constructor() {
		this.name = "Rocker";
		this.careerSkills = {
			"Charismatic Leadership": 0,
			"Awareness/Notice": 0,
			"Perform": 0,
			"Wardrobe & Style": 0,
			"Composition": 0,
			"Brawling": 0,
			"Play Instrument": 0,
			"Streetwise": 0,
			"Persuasion": 0,
			"Seduction": 0
		}
	}
}

class Solo {
	constructor() {
		this.name = "Solo";
		this.careerSkills = {
			"Combat Sense": 0,
			"Awareness/Notice": 0,
			"Handgun": 0,
			"Brawling or Martial Arts": 0,
			"Melee": 0,
			"Weapons Tech": 0,
			"Rifle": 0,
			"Athletics": 0,
			"Submachinegun": 0,
			"Stealth": 0
		}
	}
}

class Cop {
	constructor() {
		this.name = "Cop";
		this.careerSkills = {
			"Authority": 0,
			"Awareness/Notice": 0,
			"Handgun": 0,
			"Human Perception": 0,
			"Athletics": 0,
			"Education": 0,
			"Brawling": 0,
			"Melee": 0,
			"Interrogation": 0,
			"Streetwise": 0
		}
	}
}

class Corporate {
	constructor() {
		this.name = "Corporate";
		this.careerSkills = {
			"Resources": 0,
			"Awareness/Notice": 0,
			"Human Perception": 0,
			"Education": 0,
			"Library Search": 0,
			"Social": 0,
			"Persuasion": 0,
			"Stock Market": 0,
			"Wardrobe/Style": 0,
			"Personal Grooming": 0
		}
	}
}

class Media {
	constructor() {
		this.name = "Media";
		this.careerSkills = {
			"Credibility": 0,
			"Awareness/Notice": 0,
			"Composition": 0,
			"Education": 0,
			"Persuasion": 0,
			"Human Perception": 0,
			"Social": 0,
			"Streetwise": 0,
			"Photo & Film": 0,
			"Interview": 0
		}
	}
}

class Fixer {
	constructor() {
		this.name = "Fixer";
		this.careerSkills = {
			"Streetdeal": 0,
			"Awareness/Notice": 0,
			"Forgery": 0,
			"Handgun": 0,
			"Brawling": 0,
			"Melee": 0,
			"Pick Lock": 0,
			"Pick Pocket": 0,
			"Intimidate": 0,
			"Persuasion": 0
		}
	}
}

class Techie {
	constructor() {
		this.name = "Techie";
		this.careerSkills = {
			"Jury Rig": 0,
			"Awareness/Notice": 0,
			"Basic Tech": 0,
			"CyberTech": 0,
			"Teaching": 0,
			"Education": 0,
			"Electronics": 0,
			"Other": {
				"Gyro": 0,
				"Aero": 0,
				"Weapons": 0,
				"Electronic Security": 0
			}
		}
	}
}

class Netrunner {
	constructor() {
		this.name = "Netrunner";
		this.careerSkills = {
			"Interface": 0,
			"Awareness/Notice": 0,
			"Basic Tech": 0,
			"Education": 0,
			"System Knowledge": 0,
			"CyberTech": 0,
			"Cyberdeck Design": 0,
			"Composition": 0,
			"Electronics": 0,
			"Programming": 0
		}
	}
}

class Medtechie {
	constructor() {
		this.name = "Medtechie";
		this.careerSkills = {
			"Medical Tech": 0,
			"Awareness/Notice": 0,
			"Basic Tech": 0,
			"Diagnose": 0,
			"Education": 0,
			"Cryotank Operation": 0,
			"Library Search": 0,
			"Pharmaceuticals": 0,
			"Zoology": 0,
			"Human Perception": 0
		}
	}
}

class Nomad {
	constructor() {
		this.name = "Nomad";
		this.careerSkills = {
			"Family": 0,
			"Awareness/Notice": 0,
			"Endurance": 0,
			"Melee": 0,
			"Rifle": 0,
			"Drive": 0,
			"Basic Tech": 0,
			"Wilderness Survival": 0,
			"Brawling": 0,
			"Athletics": 0
		}
	}
}

let roles = {
	"Rocker": new Rocker(),
	"Solo": new Solo(),
	"Cop": new Cop(),
	"Corporate": new Corporate(),
	"Media": new Media(),
	"Fixer": new Fixer(),
	"Techie": new Techie(),
	"Netrunner": new Netrunner(),
	"Medtechie": new Medtechie(),
	"Nomad": new Nomad()
}

let pickupSkills = {
	"Personal Grooming": 0,
	"Wardrobe & Style": 0,
	"Endurance": 0,
	"Strength Feat": 0,
	"Swimming": 0,
	"Interrogation": 0,
	"Intimidate": 0,
	"Oratory": 0,
	"Resist Torture/Drugs": 0,
	"Streeetwise": 0,
	"Human Perception": 0,
	"Interview": 0,
	"Leadership": 0,
	"Seduction": 0,
	"Social": 0,
	"Persuasion & Fast Talk": 0,
	"Perform": 0,
	"Accounting": 0,
	"Anthropology": 0,
	"Awareness/Notice": 0,
	"Biology": 0,
	"Botany": 0,
	"Chemistry": 0,
	"Composition": 0,
	"Diagnose Illness": 0,
	"Education & General Knowledge": 0,
	"Expert": 0,
	"Gamble": 0,
	"Geology": 0,
	"Hide/Evade": 0,
	"History": 0,
	"Know Language": {
		"African": 0,
		"Baltic": 0,
		"Celtic": 0,
		"Farsi": 0,
		"Germanic": 0,
		"Greek": 0,
		"Japanese": 0,
		"Korean": 0,
		"Pacific Island Group": 0,
		"Romantic": 0,
		"Semetic": 0,
		"Sino-Tibetan and South-East Asian": 0,
		"Slavic": 0
	},
	"Library Search": 0,
	"Mathematics": 0,
	"Physics": 0,
	"Programming": 0,
	"Shadow/Track": 0,
	"Stock Market": 0,
	"System Knowledge": 0,
	"Teaching": 0,
	"Wilderness Survival": 0,
	"Zoology": 0,
	"Archery": 0,
	"Athletics": 0,
	"Brawling": 0,
	"Dance": 0,
	"Dodge & Escape": 0,
	"Driving": 0,
	"Fencing": 0,
	"Handgun": 0,
	"Heavy Weapons": 0,
	"Martial Art": {
		"Aikido": 0,
		"Animal Kung Fu": 0,
		"Boxing": 0,
		"Capoeria": 0,
		"Choi-Li Fut": 0,
		"Judo": 0,
		"Karate": 0,
		"Tae Kwon Do": 0,
		"Thai Kick Boxing": 0,
		"Wrestling": 0
	},
	"Melee": 0,
	"Motorcycle": 0,
	"Operate Heavy Machinery": 0,
	"Pilot": {
		"Gyro": 0,
		"Fixed Wing": 0,
		"Dirigible": 0,
		"Vectored Thrust Vehicle": 0
	},
	"Rifle": 0,
	"Stealth": 0,
	"Submachinegun": 0,
	"Aero Tech": 0,
	"AV Tech": 0,
	"Basic Tech": 0,
	"Cryotank Operation": 0,
	"Cyberdeck Design": 0,
	"CyberTech": 0,
	"Demolitions": 0,
	"Disguise": 0,
	"Electronics": 0,
	"Electronic Security": 0,
	"First Aid": 0,
	"Forgery": 0,
	"Gyro Tech": 0,
	"Paint or Draw": 0,
	"Photo & Film": 0,
	"Pharmaceuticals": 0,
	"Pick Lock": 0,
	"Pick Pocket": 0,
	"Play Instrument": 0,
	"Weaponsmith": 0
}

let multipleChoicePickupSkills = ["Know Language", "Martial Art", "Pilot"];

let cyberware = {
	"Cyberoptics": {
		"Infrared": 0,
		"Lowlight": 0,
		"Camera": 0,
		"Dartgun": 0,
		"Antidazzle": 0,
		"Targeting Scope": 0
	},
	"Cyberarm with gun": {
		"Medium pistol": 0,
		"Light pistol": 0,
		"Medium pistol": 0,
		"Light submachinegun": 0,
		"Very heavy pistol": 0,
		"Heavy pistol": 0
	},
	"Cyberaudio": {
		"Wearman": 0,
		"Radio Splice": 0,
		"Phone link": 0,
		"Amplified hearing": 0,
		"Sound editing": 0,
		"Digital recording link": 0
	},
	"Big Knucks": 0,
	"Rippers": 0,
	"Vampires": 0,
	"Slice n'dice": 0,
	"Reflex boost (Kerenzikov)": 0,
	"Reflex boost (Sandevistan)": 0
}

let multipleChoiceCyberware = ["Cyberoptics", "Cyberarm with gun", "Cyberaudio"];

let gear = {
	"Heavy Leather": "Knife",
	"Armor Vest": "Light Pistol",
	"Light Armor Jacket 1": "Medium Pistol",
	"Light Armor Jacket 2": "Heavy Pistol",
	"Medium Armor Jacket 1": "Heavy Pistol",
	"Medium Armor Jacket 2": "Light SMG",
	"Medium Armor Jacket 3": "Light Assault Rifle",
	"Heavy Armor Jacket 1": "Medium Assault Rifle",
	"Heavy Armor Jacket 2": "Heavy Assault Rifle",
	"MetalGear": "Heavy Assault Rifle"
}