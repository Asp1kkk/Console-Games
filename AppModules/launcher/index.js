const dictionary = require("../dictionary");
const games = require("../games");

const rl = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
	prompt: "",
});

const gamesArray = [
	{ id: "1", game: games.knightDragonAndPrincessGame },
	{ id: "2", game: games.poleChudesGame },
	{ id: "3", game: games.makeWordGame },
	{ id: "4", game: games.blackJackGame },
	{ id: "5", game: games.trueOrFalseGame },
	{ id: "6", game: games.dropCoin },
];

const countResult = (gameResult) => {
	if (gameResult === "draw") {
		console.log(dictionary.global.draw);
	} else {
		console.log(
			gameResult ? dictionary.global.win : dictionary.global.lose
		);
	}
};

const startGame = async (gameId) => {
	const selectedGame = gamesArray.find((game) => game.id == gameId);
	if (selectedGame) {
		const result = await selectedGame.game();
		countResult(result);
		afterGame(gameId);
	} else {
		console.log(dictionary.global.wrongInput);
		stopLauncher();
	}
};

const startLauncher = () => {
	rl.question(dictionary.global.chooseGame, (answer) => {
		if (answer === "7") {
			stopLauncher();
		} else {
			startGame(answer);
		}
	});
};

const stopLauncher = () => {
	console.log(dictionary.global.goodbye);
	rl.close();
};

const afterGame = (gameToRepeatId) => {
	rl.question(dictionary.global.playAgain, (answer) => {
		if (answer === "1") {
			startGame(gameToRepeatId);
		}
		if (answer === "2") {
			startLauncher();
		}
		if (answer === "3") {
			stopLauncher();
		}
	});
};

module.exports = { run: startLauncher };
