class Animal {
	name;
	skeletonType;
	/////ABSTRACTION

	constructor(name) {
		if (this.constructor === Animal) {
			throw new Error('this Class cannot be instantiated');
		}

		this.name = name;
	}

	move() {
		return 'I can move';
	}

	eat() {
		return 'I can eat';
	}
}

//INHERTIANCE.EXENDS CONNOTES INHERITANCE

class Invertebrae extends Animal {
	skeletonType = 'Exoskeleton';

	constructor(name) {
		super(name);
	}

	//ENCAPSULATION

	#molt() {
		if (Object.getPrototypeOf(this === Invertebrae)) {
			return 'I am going to shed my skin';
		}
	}

	_molt() {
		return this.#molt();
	}

	withBackbone() {
		if (this.constructor === Invertebrae) {
			return false;
		} else {
			return true;
		}
	}
}

class Vertebrae extends Animal {
	skeletonType = 'Endoskeleton';

	constructor(name) {
		super(name);
		if (this.constructor === Vertebrae) {
			throw new Error("You can't instantiate this class");
		}
	}

	reproduce() {
		return 'I give birth to my children alive, laying eggs is for bitches';
	}
}

class ColdBlooded extends Vertebrae {
	constructor(name) {
		super(name);
	}
}

class WarmBlooded extends Vertebrae {
	constructor(name) {
		super(name);
	}

	//polymorphism
	reproduce() {
		return 'I give birth to my children alive, I am warm and I like to eat eggs not lay them ';
	}
}

class Anthropoda extends Invertebrae {
	constructor(name) {
		super(name);
	}
	skeletonType = 'Exoskeleton';

	reproduce() {
		return 'I lay eggs and my eggs are fertilized externally';
	}
	breathe() {
		return 'I have to breathe through with my lungs';
	}

	hasScales() {
		return false;
	}
}

class Fish extends ColdBlooded {
	constructor(name) {
		super(name);
	}

	reproduce() {
		return 'I produce eggs';
	}
	breathe() {
		return 'I have to breathe through with my gills';
	}

	hasScales() {
		return true;
	}

	methodOfLocomotion() {
		return 'I move in the water with my fins';
	}

	thermoRegulationType() {
		return Object.getPrototypeOf(this);
	}
}

class Reptiles extends ColdBlooded {
	constructor(name) {
		super(name);
	}

	reproduce() {
		return 'produce shelled eggs, I fertilize internally';
	}
	breathe() {
		return 'I can breathe through my skin';
	}

	hasScales() {
		return true;
	}

	thermoRegulationType() {
		return Object.getPrototypeOf(this);
	}
}

class Aves extends WarmBlooded {
	constructor(name) {
		super(name);
	}
	skeletonType = 'Endoskeleton';

	reproduce() {
		return 'I lay hard shelled eggs';
	}

	breathe() {
		return 'I can breathe through my lungs';
	}

	hasScales() {
		return false;
	}

	modeOfLocomotion() {
		return 'I have wings so I can fly';
	}

	growthType = 'grow legs when they mature';

	thermoRegulationType() {
		return Object.getPrototypeOf(this);
	}
}

class Mammals extends WarmBlooded {
	constructor(name) {
		super(name);
	}

	skeletonType = 'Endoskeleton';

	reproduce() {
		return 'I give birth to my young ones alive';
	}

	breathe() {
		return 'I can breathe through my nose';
	}

	hasScales() {
		return false;
	}

	thermoRegulationType() {
		return Object.getPrototypeOf(this);
	}
}

class Amphibians extends ColdBlooded {
	constructor(name) {
		super(name);
	}

	reproduce() {
		return 'I lay eggs and fertilize eggs externally';
	}

	breathe() {
		return 'I can breathe through my skin';
	}

	hasScales() {
		return true;
	}

	growthType = 'grow legs when they mature';

	thermoRegulationType() {
		return Object.getPrototypeOf(this);
	}
}

//APP TESTS

//ABSTRACTION
console.log(
	"Let's try to instantiate the abstract class Animal, it can't be instantiated, so it will throw an error"
);
//let animal = new Animal("animal")
//console.log(animal)//this will throw an error

//INHERITANCE
console.log("Let's try to test out inheritance");
console.log(
	"The Animal class has general property 'move' which can be inherited by its subclasses"
);
let insect = new Invertebrae('titus');
console.log(`I am an insect object and ${insect.move()}`);

//ENCAPSULATION
console.log("Now let's try to test out encapsulation");
console.log(
	"The invertebrae class has an encapsulated method called 'molt' that can only be called by Invertebrae Class objects and its subclasses object"
);
let butterfly = new Anthropoda('walt');
console.log(
	'Here the butterfly object is an instance of the Anthropoda Class which is in turn a subclass of the superclass Invertebrae'
);
console.log(`I am a butterfly and ${butterfly._molt()}`);

//POLYMORPHISM
console.log("We declared a variable 'skeletonType' in the base class 'Animal'");
console.log(
	"Now this 'skeletonType' has different values in the different subclasses inheriting from the base class 'Animal'"
);
let kangaroo = new Mammals('john');
console.log(
	`I am a kangaroo and my skeleton type is: ${kangaroo.skeletonType}`
);
let cockroach = new Anthropoda('crustacea');
console.log(
	`I am a cockroach and my skeleton type is: ${cockroach.skeletonType}`
);
