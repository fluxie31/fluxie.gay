var splashes = [
	"born and raised in 2003!",
	"sexy!",
	"holy fucking bingle! :3",
	"pronouns are a necessary component of english!",
	"trans rights + blm + acab !",
	"welcome to my little corner of the internet!",
	"awawawawawawawawawawa",
	"i am a soft plushie :)",
	"javascript sucks!",
	"welcome to the jungle!",
	"c# is the language of all time!",
	"the blue cow of all time :)",
	"google fonts",
	"[insert splash message here]",
	"web1 supremacy!",
	"hugging you, welcome to the pillow zone!",
	"home of a girl indefinitely stuck between 1994 and 2014.",
	"mcdonald's sucks!",
	"fuck capitalism!",
	"what should I put here :D"
];

var splashInst = 0;

function randomSplash() {
	if (splashInst == 0) {
		splashes = shuffle(splashes);
		splashInst = splashes.length;
	}
	document.getElementById("splash").innerText = getRandomSplash();
}

function getRandomSplash() {
	return splashes[splashes.length - splashInst--];

}

function shuffleButtons(id) {
	// Get the parent marquee element
	const marquee = document.getElementById(id);

	// Get an array of child elements
	const children = Array.from(marquee.children);

	// Shuffle the array randomly
	children.sort(() => Math.random() - 0.5);

	// Remove all child nodes from the parent element
	while (marquee.firstChild) {
		marquee.removeChild(marquee.firstChild);
	}

	// Add the shuffled child nodes back to the parent element
	children.forEach(child => {
		marquee.appendChild(child);
	});

}

// thank you kind stranger on stack overflow for this shuffle function.
// NOTE that this only makes the clicking of the splash message less repetitive.
function shuffle(array) {
	let currentIndex = array.length, randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {

		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
	}

	return array;
}