const appEL = document.querySelector(".app");
const app_card_ELS = document.querySelector(".app__cards");
let score = 0;

const GotoHome = () => {
	location.reload();
};

//----------------------------Coin Toss Game-----------------------------//
// find Coin Toss card
const coin_tossEL = document.querySelector(".card--coin-toss");
// creat HTML of Coin Toss Game by JS
function creatCoinTossGame() {
	appEL.innerHTML = `    
    <section class="games">
        <section class="games__title">
            Coin Toss Game:
        </section>

        <section class="games__description">
            In this game, you have to guess whether the coin is heads or tails, and if you guess correctly, you will get one point, and if you guess wrong, you will lose one point...
            You have to specify the number of your guesses and at the end it will be ranked based on the percentage of correct answers...
            <br>
            Tip: The minimum number of guesses is 5 and the maximum number of guesses is 20        </section>
            
        <section class="games__setting">
            <span >How many do you want to guess???(between 5 and 20)</span>
            <input class="ipt-1" type="number" min="5" max="20" placeholder="Enter your guess number">
            <br>

            <span>Which one do you prefer???</span>
            <input type="radio" name="rdbCoinToss" id="text" checked>
            <span>Text</span>
            <input type="radio" name="rdbCoinToss" id="icon">
            <span>Icon</span>
        </section>

        <section class="games__aria coin__game">
            <section class="games__aria-img-section">
                <img class="games__aria-img" src="img/coin.png" alt="coin">
            </section>

            <section class="cointoss__buttons">
                <button class="heads btn-1" type="button" name="heads">Heads</button>
                <button class="Tails btn-1" type="button" name="tails">Tials</button>
            </section>

            <section class="game__results">
                <button class="game-btn" type="button">Start Game</button>
                <section>
                    <i class="coin-result-icon fas"></i><span class="coin-result-massage"></span>
                </section>
                <h3 class="coin-result-score hide"></h3>
            </section>

            
            <section class="game__remach hide">
                <button class="game-btn rematch_btn" type="button">Rematch</button>
                <button class="game-btn home_btn" type="button">Home</button>
            </section>


        </section>
    </section>
    `;
	// Set any variable you need
	// these vars for starting game
	const start_game = document.querySelector(".game-btn");
	const User_guess_Number = document.querySelector(".ipt-1");
	// these three var for checking ICON or TEXT for btns
	const coinIconChecked = document.querySelector("#icon");
	const coinHaeds = document.querySelector(".heads");
	const coinTials = document.querySelector(".Tails");
	// Get two btn
	const coinsBTN = document.querySelectorAll(".btn-1");
	// for Seting result
	const coin_result_icon = document.querySelector(".coin-result-icon");
	const coin_result_massage = document.querySelector(".coin-result-massage");
	const coin_result_score = document.querySelector(".coin-result-score");
	score = 0;
	let coin_guess_counter = 0;
	// for rematch btns
	const game_rematch_section = document.querySelector(".game__remach");
	const game_rematch_btn = document.querySelector(".rematch_btn");
	const game_home_btn = document.querySelector(".home_btn");

	function starting_condition() {
		if (coinIconChecked.checked) {
			coinHaeds.innerHTML = `<img src="img/line.png" name="heads">`;
			coinTials.innerHTML = `<img src="img/lion.png" name="tails">`;
		}
		if (User_guess_Number.value === "") {
			alert("please Enter Your guess number");
		} else if (User_guess_Number.value < 5) {
			User_guess_Number.value = "";
			alert("please Enter Correct guess number");
		} else {
			start_game.classList.add("hide");
			coin_result_score.classList.remove("hide");
			return true;
		}
	}
	start_game.addEventListener("click", starting_condition);

	function Ending_condition() {
		coin_guess_counter++;
		if (User_guess_Number.value < coin_guess_counter) {
			coin_result_icon.classList.add("hide");
			coin_result_massage.innerHTML = "The Game is Over";
			coin_result_massage.style.color = "gray";
			game_rematch_section.classList.remove("hide");
			return true;
		}
	}

	// This Function creat computer guess
	let ComputerChose = () => {
		let computerGuess;
		let computer = Math.floor(Math.random() * 10) % 2;
		if (computer == 0) {
			computerGuess = "heads";
		} else {
			computerGuess = "tails";
		}
		return computerGuess;
	};

	// this function manage Game
	function coinTossGame(event) {
		if (starting_condition() === true && !Ending_condition() === true) {
			let playerGuess = event.target.name;

			if (playerGuess === ComputerChose()) {
				coin_result_icon.classList.add("fa-check-circle");
				coin_result_icon.classList.remove("fa-minus-circle");
				coin_result_massage.innerHTML = "Correct";
				coin_result_massage.style.color = "#38A59C";
				coin_result_score.innerHTML = "Your Score is: " + ++score;
			} else {
				coin_result_icon.classList.add("fa-minus-circle");
				coin_result_icon.classList.remove("fa-check-circle");
				coin_result_massage.innerHTML = "Wrong";
				coin_result_massage.style.color = "#D74857";
				coin_result_score.innerHTML = "Your Score is: " + --score;
			}
		}
	}
	// this code creat 2 Evenlistener for 2 btn
	for (let index = 0; index < coinsBTN.length; index++) {
		coinsBTN[index].addEventListener("click", coinTossGame);
	}

	const rematchGame = () => {
		creatCoinTossGame();
	};
	game_rematch_btn.addEventListener("click", rematchGame);

	game_home_btn.addEventListener("click", GotoHome);
}

coin_tossEL.addEventListener("click", creatCoinTossGame);

//-----------------------------Magic 8 Ball------------------------------//
// find Magic 8 Ball card
const magic_ballEL = document.querySelector(".card--magic-ball");
// creat HTML of Magic 8 Ball Game by JS
function creatMagicBallGame() {
	appEL.innerHTML = `    
    <secton class="games">
        <section class="games__title">
            Magic 8 Ball Game:
        </section>

        <section class="games__description">
            Welcome to the game.
            Here you can ask questions to the computer and we will answer you in our own way!!!😂<br>
            There are no special rules in this game and you are free.😁
        </section>

        <section class="games__aria MagicBall__game">
            <section class="games__aria-img-section">
                <img class="games__aria-img" src="img/ball.webp" alt="Magic_Ball">
                <span class="magic_ball_text hide"></span>
            </section>
            

            <section class="MaginBall__input">
                <input type="text" class="textInput magicBallinput"" placeholder="Type your Question here...">
            </section>

            <section>
                <button class="game-btn start_game" type="button">Shake 8 ball</button>
            </section>

            <section class="game__remach hide">
                <button class="game-btn rematch_btn" type="button">Rematch</button>
                <button class="game-btn home_btn" type="button">Home</button>
            </section>

        </section>
    </secton>`;
	// Set any variable you need
	// these vars for starting game
	const MagicBallinp = document.querySelector(".textInput");
	const start_game = document.querySelector(".start_game");
	// These Var for control the Game
	const Changeimg = document.querySelector(".games__aria-img");
	const MagicBallText = document.querySelector(".magic_ball_text");
	// for rematch btns
	const game_rematch_section = document.querySelector(".game__remach");
	const game_rematch_btn = document.querySelector(".rematch_btn");
	const game_home_btn = document.querySelector(".home_btn");

	const magic_ball_starting_condition = () => {
		if (MagicBallinp.value == "") {
			alert("Please Say your question☺");
			return false;
		} else {
			return true;
		}
	};

	const MagicBallGame = () => {
		if (magic_ball_starting_condition() === true) {
			const answerArrey = [
				"It will work",
				"Maybe maybe not",
				"Probably Not",
				"I Don't now",
				"It is Good",
				"I'm OK",
				"You right",
				"Yes",
				"it is decidedly so",
				"Outlook not so good",
			];

			let res = Math.floor(Math.random() * answerArrey.length);
			let computerAnswer = answerArrey[res];
			Changeimg.src = "img/ball-back.webp";
			MagicBallText.classList.remove("hide");
			MagicBallText.innerHTML = computerAnswer;
			start_game.classList.add("hide");
			game_rematch_section.classList.remove("hide");
		}
	};

	start_game.addEventListener("click", MagicBallGame);

	const rematchGame = () => {
		creatMagicBallGame();
	};
	game_rematch_btn.addEventListener("click", rematchGame);

	game_home_btn.addEventListener("click", GotoHome);
}

magic_ballEL.addEventListener("click", creatMagicBallGame);

//-----------------------------Number Guessing------------------------------//

const Number_GuessingEL = document.querySelector(".card--number-guessing");
// creat HTML of Number Guessing Game by JS
const creatNumberGuessingGame = () => {
	appEL.innerHTML = `    
    <secton class="games">
        <section class="games__title">
            Number Guessing Game:
        </section>

        <section class="games__description">
            Wow, a wonderful game
            In this game, you must first choose the level of the game by choosing 2 numbers. The first number determines how many numbers you want to guess and you have to choose between 1 and 10, and the second number specifies your guess range and you have to choose between 10 and 100.<br>
            Note: If the number you guessed is smaller than the original number, the background color will be blue, and if the number you guessed is greater than the original number, the background color will be red. If you guess correctly, it will turn green.
        </section>

        
        <section class="games__setting">
            <span >How many numbers do you want to guess???(between 1 and 10)</span>
            <input class="ipt-1" type="number" min="1" max="10" placeholder="Enter your guess number">
            <br>

            <span>What is the range of numbers???(between 10 and 100)</span>
            <input class="ipt-1" type="number" min="10" max="100" placeholder="Enter your guess number">
        </section>

        <section class="games__aria NumberGuees__game">

            <section class="games__aria-img-section games__aria-img-sectio--larger">
                <img class="games__aria-img games__aria-img--larger" src="img/number.jpg" alt="number">
            </section>

            <section class="game_area_cards hide"></section>

            <section class="game__results">
                <button class="game-btn start_game" type="button">Start Game</button>
                <button class="game-btn check_combo hide" type="button">Check Combo</button><br>
                <span class="number-result-massage hide"></span><br>
                <span class="number-result-win hide"></span>
            </section>

            <section class="game__remach hide">
                <button class="game-btn rematch_btn" type="button">Rematch</button>
                <button class="game-btn home_btn" type="button">Home</button>
            </section>

        </section>
    </secton>`;
	// Set any variable you need
	// these vars for starting game
	const numberGueesingInps = document.querySelectorAll(".ipt-1");
	const start_gameBTN = document.querySelector(".start_game");
	const number_games__aria_img_section = document.querySelector(
		".games__aria-img-sectio--larger"
	);
	// These Var for control the Game
	const CheckCombo = document.querySelector(".check_combo");
	const number_result_massage = document.querySelector(
		".number-result-massage"
	);
	const number_result_win = document.querySelector(".number-result-win");
	const game_area_cards = document.querySelector(".game_area_cards");
	score = 0;
	let winCondintion = 0;
	let GameOver = false;
	// for rematch btns
	const game_rematch_section = document.querySelector(".game__remach");
	const game_rematch_btn = document.querySelector(".rematch_btn");
	const game_home_btn = document.querySelector(".home_btn");

	const number_gueesing_starting_condition = () => {
		const NumberOfItem = numberGueesingInps[0].value;
		const RangeOfItem = numberGueesingInps[1].value;
		if (NumberOfItem === "" || RangeOfItem === "") {
			alert("Please Fill all inputs");
			return false;
		}
		if (!(10 >= NumberOfItem >= 1)) {
			alert("Please Check first input!!!");
			NumberOfItem = "";
			return false;
		}
		if (RangeOfItem < 10 || RangeOfItem > 100) {
			alert("Please Check second input!!!");
			RangeOfItem = "";
			return false;
		} else {
			return true;
		}
	};

	// this Function creat number El
	function maker() {
		for (let i = 0; i < numberGueesingInps[0].value; i++) {
			let el = document.createElement("input");
			el.setAttribute("type", "number");
			el.max = numberGueesingInps[1].value;
			el.min = 0;
			el.classList.add("Number_item");
			el.correct = Math.floor(
				Math.random() * numberGueesingInps[1].value
			);
			el.value = 0;
			el.order = 1;

			game_area_cards.appendChild(el);
			console.log(el.correct);
		}
	}

	const NumberGuessingGame = () => {
		if (number_gueesing_starting_condition() === true) {
			start_gameBTN.classList.add("hide");
			number_games__aria_img_section.classList.add("hide");
			CheckCombo.classList.remove("hide");
			game_area_cards.classList.remove("hide");

			maker();
			const number_items = document.querySelectorAll(".Number_item");
			// this function for check every time Combo btn clicked
			function check_combo() {
				if (GameOver === false) {
					// this loop for checking every El and Set color
					for (let i = 0; i < number_items.length; i++) {
						if (number_items[i].correct == number_items[i].value) {
							number_items[i].style.background = "green";
							number_items[i].style.color = "white";
							number_items[i].setAttribute("disabled", "true");
							winCondintion++;
						} else {
							let color =
								number_items[i].correct > number_items[i].value
									? "blue"
									: "red";

							number_items[i].style.background = color;
							number_items[i].style.color = "black";
						}
					}
					score++;
				}
				// When User Win this condition will run
				if (winCondintion === number_items.length) {
					GameOver = true;
					number_result_win.classList.remove("hide");
					number_result_win.innerHTML = `you WIN : Game is Over`;
					CheckCombo.classList.add("hide");
					game_rematch_section.classList.remove("hide");
				}
				// this code write because when loop is running we need to reset value of winCondintion
				winCondintion = 0;

				number_result_massage.classList.remove("hide");
				number_result_massage.innerHTML = `your Guesses is: ${score}`;
			}

			CheckCombo.addEventListener("click", check_combo);
		}
	};

	start_gameBTN.addEventListener("click", NumberGuessingGame);

	const rematchGame = () => {
		creatNumberGuessingGame();
	};
	game_rematch_btn.addEventListener("click", rematchGame);

	game_home_btn.addEventListener("click", GotoHome);
};

Number_GuessingEL.addEventListener("click", creatNumberGuessingGame);

//-----------------------------Word Guessing------------------------------//
const Word_GuessingEL = document.querySelector(".card--word-guessing");
// Creat Game
const creatWordGuessingGame = () => {
	appEL.innerHTML = `    
    <secton class="games">
        <section class="games__title">
            Word Guessing Game:
        </section>

        <section class="games__description">
            In this game, you will see some jumbled letters and you have to arrange them to become a person's name, and if you need help, you can get help from the hint.<br>
            You can also specify how many words you want to guess (between 3 and 7).
            <br>
            Hint: The first letter of the name is the letter that is capitalized.

        </section>

        
        <section class="games__setting">
            <span>How many letters do you want to guess???</span>
            <input class="ipt-1" type="number" min="3" max="7" placeholder="Enter your letters number">
        </section>

        <section class="games__aria NumberGuees__game">

            <section class="games__aria-img-section games__aria-img-sectio--larger">
                <img class="games__aria-img games__aria-img--larger" src="img/words.jpg" alt="number">
            </section>

            <section class="game_area_show_words hide">
                <span class="show-word"></span>
                <input type="text" class="textInput" placeholder="Type your Guess here...">
            </section>

            <section class="game__results">
                <button class="game-btn start_game" type="button">Start Game</button>
                <button class="game-btn check_name hide" type="button">Check Name</button>
                <span class="result-massage hide"></span>
                <span class="result-win hide"></span>
            </section>

            <section class="game__remach hide">
                <button class="game-btn rematch_btn" type="button">Rematch</button>
                <button class="game-btn home_btn" type="button">Home</button>
            </section>

        </section>
    </secton>`;
	//Set varriable for Game setting
	const WordsGueesingInps = document.querySelector(".ipt-1");
	const start_gameBTN = document.querySelector(".start_game");
	const games__aria_img_section = document.querySelector(
		".games__aria-img-section"
	);
	// Set varriables for control Game
	const CheckName = document.querySelector(".check_name");
	const show_word = document.querySelector(".show-word");
	const UserGuess = document.querySelector(".textInput");
	const game_area_show_words = document.querySelector(
		".game_area_show_words"
	);
	// Set varriables for showing massege
	const result_massage = document.querySelector(".result-massage");
	const result_win = document.querySelector(".result-win");
	let nameArrey;
	score = 0;
	// for rematch btns
	const game_rematch_section = document.querySelector(".game__remach");
	const game_rematch_btn = document.querySelector(".rematch_btn");
	const game_home_btn = document.querySelector(".home_btn");

	const words_gueesing_starting_condition = () => {
		if (WordsGueesingInps.value === "") {
			alert("Please complete the input");
		} else if (WordsGueesingInps.value < 3) {
			alert("Your Input is Wrong");
			WordsGueesingInps.value = "";
		} else {
			return true;
		}
	};
	// this func creat a carrect word and return that
	function creatTrueWord() {
		const letters = Number(WordsGueesingInps.value);
		switch (letters) {
			case 3:
				nameArrey = ["Ali", "Sam"];
				break;
			case 4:
				nameArrey = [
					"Amir",
					"Asal",
					"Amin",
					"Reza",
					"Amin",
					"Sara",
					"Mina",
					"John",
					"Alex",
					"Nima",
					"Iman",
					"Sina",
					"Aida",
				];
				break;
			case 5:
				nameArrey = [
					"Samin",
					"Armin",
					"Aysan",
					"Baran",
					"Sahar",
					"Hasan",
					"Arash",
					"Avina",
					"Akbar",
				];
				break;
			case 6:
				nameArrey = [
					"Saghar",
					"Masuod",
					"Asghar",
					"Armita",
					"Fariba",
					"Maryam",
				];
				break;
			case 7:
				nameArrey = [
					"Afsaneh",
					"Alireza",
					"Mozhgan",
					"Farideh",
					"Fatemeh",
					"Hamideh",
				];
				break;
		}
		const ComputerChoseWord = Math.floor(Math.random() * nameArrey.length);
		const ComputerName = nameArrey[ComputerChoseWord];
		return ComputerName;
	}
	// create a jumplr of word and return that
	function Making_jumble_of_words(arr) {
		for (let i = arr.length - 1; i > 0; i--) {
			let temp = arr[i];
			let j = Math.floor(Math.random() * (i + 1));
			arr[i] = arr[j];
			arr[j] = temp;
		}
		return arr;
	}

	const WordGuessingGame = () => {
		if (words_gueesing_starting_condition() === true) {
			start_gameBTN.classList.add("hide");
			games__aria_img_section.classList.add("hide");

			True_Name = creatTrueWord();
			worng_Name = Making_jumble_of_words(True_Name.split("")).join("");

			game_area_show_words.classList.remove("hide");
			show_word.innerHTML = worng_Name;
			CheckName.classList.remove("hide");
			// this func for cheching name and Ending Game
			const Check_Name = () => {
				score++;
				result_massage.classList.remove("hide");
				if (UserGuess.value === True_Name) {
					CheckName.classList.add("hide");
					result_win.classList.remove("hide");
					result_massage.innerHTML = `
                    Correct👏🏻👏🏻<br>
                    your Guesses is: ${score}<br>`;
					result_win.innerHTML = "You WIN : Game is Over";
					game_rematch_section.classList.remove("hide");
				} else {
					UserGuess.value = "";
					result_massage.innerHTML = `
                    <br>Wrong😯<br>
                    your Guesses is: ${score}<br>`;
				}
			};

			CheckName.addEventListener("click", Check_Name);
		}
	};

	const rematchGame = () => {
		creatWordGuessingGame();
	};
	game_rematch_btn.addEventListener("click", rematchGame);

	game_home_btn.addEventListener("click", GotoHome);

	start_gameBTN.addEventListener("click", WordGuessingGame);
};

Word_GuessingEL.addEventListener("click", creatWordGuessingGame);

//-----------------------------Cuontdown Timer------------------------------//
const Cuontdown_TimerEL = document.querySelector(".card--countdown-timer");

const creatCuontdownTimerGame = () => {
	appEL.innerHTML = `    
    <secton class="games">
        <section class="games__title">
            Countdown Timer Game:
        </section>

        <section class="games__description">
            Basically, this is not a game, but a practical tool.<br>
            You can specify a date to tell you how many days, hours and seconds are left.
        </section>

        <section class="games__aria">

            <section class="games__aria-img-section">
                <img class="games__aria-img" src="img/clock.png" alt="number">
            </section>

            <section class="game__results timer__game__results">
                <input type="date" id="clock_inp">
                <section>
                    <span class="result-timer"><span class="result-timer-days">0</span>Days</span>
                    <span class="result-timer"><span class="result-timer-hours">0</span>Hours</span>
                    <span class="result-timer"><span class="result-timer-minutes">0</span>Minutes</span>
                    <span class="result-timer"><span class="result-timer-seconds">0</span>Seconds</span>
                </section>
            </section>

            <section class="game__remach">
                <button class="game-btn rematch_btn" type="button">Reset</button>
                <button class="game-btn home_btn" type="button">Home</button>
            </section>

        </section>
    </secton>`;
	// set var for clock and saving time
	const Clock = document.querySelector("#clock_inp");
	let saveValue = localStorage.getItem("countdown") || false;
	// for controling
	let timeInterval;
	let timeStop = true;
	// for remathing
	const game_rematch_btn = document.querySelector(".rematch_btn");
	const game_home_btn = document.querySelector(".home_btn");
	// func for starting
	const startClock = (temp) => {
		function updateCounter() {
			let tl = timeLeft(temp);
			if (tl.total <= 0) {
				timeStop = false;
			}

			for (let pro in tl) {
				let el = document.querySelector(".result-timer-" + pro);
				if (el) {
					el.innerHTML = tl[pro];
				}
			}
		}
		updateCounter();

		if (timeStop) {
			timeInterval = setInterval(updateCounter, 1000);
		} else {
			clearInterval(timeInterval);
		}
	};

	const timeLeft = (temp) => {
		let currentDate = new Date();
		let t = Date.parse(temp) - Date.parse(currentDate);

		let seconds = Math.floor((t / 1000) % 60);
		let minutes = Math.floor((t / 1000 / 60) % 60);
		let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		let days = Math.floor(t / (1000 * 60 * 60 * 24));

		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	};

	if (saveValue) {
		startClock(saveValue);
		let inputValue = new Date(saveValue);
		Clock.valueAsDate = inputValue;
	}

	Clock.addEventListener("change", function (e) {
		e.preventDefault();
		clearInterval(timeInterval);
		const temp = new Date(Clock.value);
		localStorage.setItem("countdown", temp);
		startClock(temp);
		timeStop = true;
	});

	const rematchGame = () => {
		saveValue = localStorage.removeItem("countdown");
		GotoHome();
	};
	game_rematch_btn.addEventListener("click", rematchGame);

	game_home_btn.addEventListener("click", GotoHome);
};

Cuontdown_TimerEL.addEventListener("click", creatCuontdownTimerGame);

//-----------------------------Jump Game------------------------------//
const JumpEL = document.querySelector(".card--Jump");

const creatJumpGame = () => {
	appEL.innerHTML = `    
    <secton class="games">
        <section class="games__title">
            Dino Jump Game:
        </section>

        <section class="games__description">
            Have you ever played the Google Chrome dinosaur game? This game is a simulation of that game and we hope you enjoy it.<br>
            Use spacebar or <kbd>↑</kbd> to jump and <kbd>↓</kbd> to crouch
        </section>

        <section class="games__aria">

            <section class="jump-games__aria">
                <img src="img/sun.png" alt="sun" class="jump-games__aria__sun"> 
                <img src="img/dino.png" alt="dino" class="jump-games__aria__dino">
                <img src="img/cactus - 1.png" alt="cactus" class="jump-games__aria__cactus cactus_1">

                <section class="game__results dino_score">
                Your Score is : 0
                </section>

                <section class="dinoMassage">
                    Press the "Enter" key to start the game...
                </section>
            </section>



            <section class="game__remach hide">
                <button class="game-btn rematch_btn" type="button">Reset</button>
                <button class="game-btn home_btn" type="button">Home</button>
            </section>

        </section>
    </secton>`;

	const dino = document.querySelector(".jump-games__aria__dino");
	const gameArea = document.querySelector(".jump-games__aria");
	let isGameEnding = false;
	let dino_score;
	let speed = 1;

	const dinoMassage = document.querySelector(".dinoMassage");

	const dinoScore = document.querySelector(".game__results");
	// for rematch btns
	const game_rematch_section = document.querySelector(".game__remach");
	const game_rematch_btn = document.querySelector(".rematch_btn");
	const game_home_btn = document.querySelector(".home_btn");

	document.addEventListener("keydown", function (e) {
		if (e.code === "Enter") {
			JumpGame();
		}
	});

	function jumpDino() {
		if (!dino.classList.contains("jump")) {
			dino.classList.add("jump");
			setTimeout(() => {
				dino.classList.remove("jump");
			}, 700);
		}
	}

	document.addEventListener("keydown", (e) => {
		e.preventDefault();
		if (e.code == "Space" || e.code == "ArrowUp") {
			jumpDino();
		}
	});

	const EndDinoGame = (cactus) => {
		cactus.style.animationPlayState = "paused";
		dino.style.animationPlayState = "paused";
		isGameEnding = true;
		game_rematch_section.classList.remove("hide");

		const AllEL = document.querySelectorAll(".jump-games__aria__cactus");

		for (let index = 0; index < AllEL.length; index++) {
			AllEL[index].classList.add("freeze");
		}
	};

	const JumpGame = () => {
		score = 0;
		dinoMassage.classList.add("hide");

		const generatorCactus = () => {
			let numberOfCactus = Math.ceil(Math.random() * 3);
			let time_interval = Math.round((Math.random() + speed) * 1000);

			const SetCactus = new Promise((resolve) => {
				setTimeout(() => {
					if (!isGameEnding) {
						let el = document.createElement("img");
						el.setAttribute(
							"src",
							`img/cactus - ${numberOfCactus}.png`
						);
						el.classList.add("jump-games__aria__cactus");
						el.classList.add(`cactus_${numberOfCactus}`);
						el.classList.add("cactusMove");
						gameArea.appendChild(el);

						resolve(el);

						if (dino_score > 500) {
							el.style.animationDuration = "2.2s";
							speed = 0.8;
						}

						if (dino_score > 1000) {
							el.style.animationDuration = "2s";
							speed = 0.7;
						}

						if (dino_score > 2000) {
							el.style.animationDuration = "1.8s";
							speed = 0.6;
						}

						if (dino_score > 4000) {
							el.style.animationDuration = "1.6s";
							speed = 0.55;
						}

						if (dino_score > 10000) {
							el.style.animationDuration = "1.5s";
							speed = 0.5;
						}

						if (dino_score > 50000) {
							el.style.animationDuration = "1.4s";
							speed = 0.45;
						}

						const check_Ending_dino_game = setInterval(() => {
							let dino_bottom = parseInt(
								window
									.getComputedStyle(dino)
									.getPropertyValue("bottom")
							);

							let cactus_left = parseInt(
								window
									.getComputedStyle(el)
									.getPropertyValue("left")
							);

							if (!isGameEnding) {
								dino_score = Math.round(++score / 10);
							}
							dinoScore.innerHTML = `Your Score is : ${dino_score}`;

							if (cactus_left <= -130) {
								gameArea.removeChild(el);
							}

							if (
								el.classList.contains("cactus_1") &&
								cactus_left < 70 &&
								cactus_left > -20 &&
								dino_bottom < 80
							) {
								EndDinoGame(el);
							} else if (
								el.classList.contains("cactus_2") &&
								cactus_left < 70 &&
								cactus_left > -80 &&
								dino_bottom < 80
							) {
								EndDinoGame(el);
								clearInterval(check_Ending_dino_game);
							} else if (
								el.classList.contains("cactus_3") &&
								cactus_left < 70 &&
								cactus_left > -140 &&
								dino_bottom < 80
							) {
								EndDinoGame(el);
							}
						}, 1);
					}
				}, time_interval);
			});

			SetCactus.then((el) => {
				generatorCactus();
			});
		};

		generatorCactus();
	};

	const rematchGame = () => {
		creatJumpGame();
	};
	game_rematch_btn.addEventListener("click", rematchGame);

	game_home_btn.addEventListener("click", GotoHome);
};

JumpEL.addEventListener("click", creatJumpGame);
//-----------------------------Car Crash------------------------------//
const CarCrashEL = document.querySelector(".card--car");

const creatCarCrashGame = () => {
	appEL.innerHTML = `    
    <secton class="games">
        <section class="games__title">
            Car Crash Game:
        </section>

        <section class="games__description">
            Welcome to a very interesting game.<br>
            In the Car Crash game you first choose your car and then enter the road and try to avoid an accident. So be careful!<br>
            You will go right with the <kbd>→</kbd> key and left with the  <kbd>←</kbd> button
        </section>

        <section class="games__setting car-crash--setting">
            <span>Please Chose your car???</span>

            <select name="ChossingCar" id="ChossingCar" class="select_box">
                <optgroup label="Cars">
                    <option value="car_1">car 1</option>
                    <option value="car_2">car 2</option>
                    <option value="car_3">car 3</option>
                    <option value="car_4">car 4</option>
                    <option value="car_5">car 5</option>
                    <option value="car_6">car 6</option>
                    <option value="car_7">car 7</option>
                    <option value="car_8">car 8</option>
                    <option value="car_9">car 9</option>
                    <option value="car_10">car 10</option>
                    <option value="car_11">car 11</option>
                    <option value="car_12">car 12</option>
                    <option value="car_13">car 13</option>
                    <option value="car_14">car 14</option>
                    <option value="car_15">car 15</option>
                    <option value="car_16">car 16</option>
                </optgroup>
                <optgroup label="Trucks">
                    <option value="truck_1">Truck 1</option>
                    <option value="truck_2">Truck 2</option>
                </optgroup>
                <optgroup label="Spicial Cars">
                    <option value="bus">Bus</option>
                    <option value="motor">Motor</option>
                    <option value="police">Police</option>
                    <option value="ambulance">Ambulance</option>
                </optgroup>
            </select>
                <img src="img/Cars/car_1.png" alt="Chosing car" class="Chosing_carimg">
        </section>

        <section class="games__aria">

            <section class="car-games__aria">
            <section class="car_score">Your Score is: 0</section>
                <img src="" alt="player_Car" class="player_car hide">
            </section>

            <section>
                <button class="game-btn start_game" type="button">Start Game</button>
            </section>


            <section class="game__remach hide">
                <button class="game-btn rematch_btn" type="button">Reset</button>
                <button class="game-btn home_btn" type="button">Home</button>
            </section>

        </section>
    </secton>`;

	const ChossingCar = document.querySelector("#ChossingCar");
	const Chosing_carimg = document.querySelector(".Chosing_carimg");
	const car_games_area = document.querySelector(".car-games__aria");
	const player_car = document.querySelector(".player_car");
	let choseCar;
	let counterOfCar = 1;
	let creatCar;
	let rightRoadSpeed = 4;
	let leftRoadSpeed = 3;

	const StartGameBTN = document.querySelector(".start_game");
	const car_score = document.querySelector(".car_score");

	// for rematch btns
	const game_rematch_section = document.querySelector(".game__remach");
	const game_rematch_btn = document.querySelector(".rematch_btn");
	const game_home_btn = document.querySelector(".home_btn");

	let player = { speed: 5 };
	let enemy = {};
	let keys = {
		ArrowUp: false,
		ArrowDown: false,
		ArrowRight: false,
		ArrowLeft: false,
	};
	let carsList = [
		"car_1",
		"car_2",
		"car_3",
		"car_4",
		"car_5",
		"car_6",
		"car_7",
		"car_8",
		"car_9",
		"car_10",
		"car_11",
		"car_12",
		"car_13",
		"car_14",
		"car_15",
		"car_16",
	];
	let truckList = ["truck_1", "truck_2"];
	let spicialCarList = ["bus", "motor", "police", "ambulance"];

	function changeImg() {
		let CarsCode = ChossingCar.options[ChossingCar.selectedIndex].value;
		Chosing_carimg.src = `img/Cars/${CarsCode}.png`;

		for (j = 0; j < carsList.length; j++) {
			if (carsList[j] === CarsCode) {
				player.speed = 10;
				player_car.style.width = "40px";
			}
		}

		if (CarsCode === "truck_1" || CarsCode === "bus") {
			player.speed = 5;
			player_car.style.width = "55px";
		} else if (CarsCode === "truck_2") {
			player.speed = 7.5;
			player_car.style.width = "55px";
		} else if (CarsCode === "motor") {
			player.speed = 20;
			player_car.style.width = "30px";
		} else if (CarsCode === "police" || CarsCode === "ambulance") {
			player.speed = 15;
			player_car.style.width = "40px";
		}

		return `img/Cars/${CarsCode}.png`;
	}
	ChossingCar.addEventListener("change", changeImg);

	const startGame = () => {
		score = 0;
		window.requestAnimationFrame(CarCrashGame);
		player.start = true;
		player_car.src = changeImg();
		player_car.classList.remove("hide");
		player.x = player_car.offsetLeft;
		player.y = player_car.offsetTop;
		StartGameBTN.classList.add("hide");
		car_games_area.classList.add("move-sc");
		creatCar = setInterval(() => {
			creatEnemyCar();
			counterOfCar++;
		}, 1000);
	};
	StartGameBTN.addEventListener("click", startGame);

	const endGame = (enemies) => {
		player.start = false;
		clearInterval(creatCar);
		car_games_area.classList.add("stopAnimation");
		for (let i = 0; i < enemies.length; i++) {
			enemies[i].classList.add("stopAnimation");
		}

		game_rematch_section.classList.remove("hide");
	};

	const creatEnemyCar = () => {
		let typeOfCar = Math.floor(Math.random() * 6);
		let El = document.createElement("img");
		El.classList.add("enemy_car");
		enemy.x = Math.ceil(Math.random() * 270) + 40;
		El.style.top = "-300px";
		El.style.left = enemy.x + "px";
		if (enemy.x < 170) {
			El.classList.add("rotate");
			El.style.animationDuration = leftRoadSpeed + "s";
		} else {
			El.style.animationDuration = rightRoadSpeed + "s";
		}

		if (0 <= typeOfCar && typeOfCar <= 2) {
			choseCar = Math.floor(Math.random() * 16);
			El.src = `img/Cars/${carsList[choseCar]}.png`;
			El.style.width = "40px";
		} else if (typeOfCar === 5) {
			choseCar = Math.floor(Math.random() * 2);
			El.src = `img/Cars/${truckList[choseCar]}.png`;
			El.style.width = "55px";
		} else {
			choseCar = Math.floor(Math.random() * 4);
			El.src = `img/Cars/${spicialCarList[choseCar]}.png`;
			if (spicialCarList[choseCar] === "motor") {
				El.style.width = "30px";
			} else if (spicialCarList[choseCar] === "bus") {
				El.style.width = "55px";
			} else {
				El.style.width = "40px";
			}
		}

		car_games_area.appendChild(El);
	};

	function isCollide(a, b) {
		let aRect = a.getBoundingClientRect();
		let bRect = b.getBoundingClientRect();

		return !(
			aRect.bottom <= bRect.top ||
			aRect.top >= bRect.bottom ||
			aRect.right <= bRect.left ||
			aRect.left >= bRect.right
		);
	}

	function moveEnemy(car) {
		let enemies = document.querySelectorAll(".enemy_car");
		enemies.forEach(function (item) {
			if (isCollide(car, item)) {
				endGame(enemies);
			}
		});
		return enemies;
	}

	function CarCrashGame() {
		if (player.start) {
			const road = car_games_area.getBoundingClientRect();

			moveEnemy(player_car);

			if (keys.ArrowUp && parseInt(player_car.style.top) > 0) {
				player.y -= player.speed;
			}

			if (
				keys.ArrowDown &&
				parseInt(player_car.style.top) < road.height - 150
			) {
				player.y += player.speed;
			}

			if (keys.ArrowRight && parseInt(player_car.style.left) < 310) {
				player.x += player.speed;
			}

			if (keys.ArrowLeft && 40 < parseInt(player_car.style.left)) {
				player.x -= player.speed;
			}

			player_car.style.left = player.x + "px";
			player_car.style.top = player.y + "px";

			window.requestAnimationFrame(CarCrashGame);
			car_score.innerHTML = `Your Score is: ${++score}`;

			if (score > 2000) {
				rightRoadSpeed = 3;
				leftRoadSpeed = 2.5;
			}
			if (score > 4000) {
				rightRoadSpeed = 2.5;
				leftRoadSpeed = 2;
				car_games_area.style.animationDuration = "1.75s";
			}
			if (score > 6000) {
				rightRoadSpeed = 2;
				leftRoadSpeed = 1.5;
				car_games_area.style.animationDuration = "1.5s";
			}
			if (score > 8000) {
				rightRoadSpeed = 1.5;
				leftRoadSpeed = 1;
			}
		}
	}

	const pressOn = (e) => {
		e.preventDefault();
		keys[e.key] = true;
	};

	const pressOff = (e) => {
		e.preventDefault();
		keys[e.key] = false;
	};

	document.addEventListener("keydown", pressOn);
	document.addEventListener("keyup", pressOff);

	const rematchGame = () => {
		creatCarCrashGame();
	};
	game_rematch_btn.addEventListener("click", rematchGame);

	game_home_btn.addEventListener("click", GotoHome);
};

CarCrashEL.addEventListener("click", creatCarCrashGame);

//-----------------------------Brick Breaker------------------------------//
const BrikeBreakerEL = document.querySelector(".card--brike-breaker");

const BrikeBreakerGame = () => {
	appEL.innerHTML = `    
    <secton class="games">
        <section class="games__title">
            Brike Breaker Game:
        </section>

        <section class="games__description">
            You must have seen many similar games.<br>
            Just break the bricks and enjoy the game.<br>
            You will go right with the <kbd>→</kbd> key and left with the  <kbd>←</kbd> button
        </section>

        <section class="games__setting">
            <span>Select the number of bricks(between 10 and 50) </span>
            <input type="number" id="number-of-brikes" class="ipt-1" placeholder="Enter the number of brikes">
            <br>
            <section class="chossing-ball-sec">
                <span>Please Chose your Ball???</span>
                <select name="ChossingBall" id="ChossingBall" class="select_box">
                    <optgroup label="Balls">
                        <option value="american-football_ball">American Football Ball</option>
                        <option value="ball">Inflatable Ball</option>
                        <option value="basket-ball">Basket Ball</option>
                        <option value="beach-ball">Beach Ball</option>
                        <option value="rugby_ball">Rugby Ball</option>
                        <option value="soccer_ball">Soccer Ball</option>
                        <option value="tennis-ball">Tennis Ball</option>
                        <option value="volleyball_ball">Volleyball Ball</option>
                        <option value="water-polo_ball">Water polo Ball</option>
                </select>
                <img src="img/Balls/american-football_ball.png" alt="Chosing ball" class="Chosing_ballimg">
            </section>
        </section>

        <section class="games__aria">

            <section class="games__aria-img-section games__aria-img-sectio--larger">
                <img class="games__aria-img games__aria-img--larger" src="img/brike.jpg" alt="number">
            </section>

            <section class="game_area_show hide">
                <img src="" alt="ball" class="ball">
                <div class="paddle"></div>
            </section>

            <section class="game__results">
                <button class="game-btn start_game" type="button">Start Game</button>
                <span class="number-result-massage hide"></span><br>
                <span class="number-result-win hide"></span>
            </section>

            <section class="game__remach hide">
                <button class="game-btn rematch_btn" type="button">Reset</button>
                <button class="game-btn home_btn" type="button">Home</button>
            </section>

        </section>

    </secton>`;

	const brike_number = document.querySelector("#number-of-brikes");
	const ChossingBall = document.getElementById("ChossingBall");
	const Chosing_ballimg = document.querySelector(".Chosing_ballimg");
	const games_aria_img_sectio = document.querySelector(
		".games__aria-img-sectio--larger"
	);

	const start_gameBTN = document.querySelector(".start_game");
	const number_result_massage = document.querySelector(
		".number-result-massage"
	);
	const number_result_win = document.querySelector(".number-result-win");

	const game_area_show = document.querySelector(".game_area_show");
	const Paddle = document.querySelector(".paddle");
	const Ball = document.querySelector(".ball");
	let BallSpeed = [3, 3];
	let IsGameEnding = false;
	let time_passed = 0;
	score = 0;

	// for rematch btns
	const game_rematch_section = document.querySelector(".game__remach");
	const game_rematch_btn = document.querySelector(".rematch_btn");
	const game_home_btn = document.querySelector(".home_btn");

	function changeImg() {
		let BallCode = ChossingBall.options[ChossingBall.selectedIndex].value;
		Chosing_ballimg.src = `img/Balls/${BallCode}.png`;
		return `img/Balls/${BallCode}.png`;
	}

	ChossingBall.addEventListener("change", changeImg);

	function starting_condition() {
		if (brike_number.value === "") {
			alert("Fill number of brikes");
		} else if (brike_number.value < 10 || brike_number.value > 50) {
			alert("plaese chose number between 10 and 50");
			brike_number.value = "";
		} else {
			return true;
		}
	}

	function EndGame() {
		IsGameEnding = true;
		game_rematch_section.classList.remove("hide");
		number_result_win.classList.remove("hide");
		Ball.style.animationPlayState = "paused";
	}

	function moveBall() {
		const conDim = game_area_show.getBoundingClientRect();
		let posBall = {
			x: Ball.offsetLeft,
			y: Ball.offsetTop,
		};

		if (posBall.y > conDim.height - 40 || posBall.y < 0) {
			if (posBall.y > conDim.height - 40) {
				EndGame();
				number_result_win.innerHTML =
					"Game is over <br> You lose <span>🥺😖</span>";
			} else {
				BallSpeed[0] *= -1;
			}
		}

		if (posBall.x > conDim.width - 40 || posBall.x < 0) {
			BallSpeed[1] *= -1;
		}

		if (isCallied(Ball, Paddle) === true) {
			let temp =
				(posBall.x - Paddle.offsetLeft - Paddle.offsetWidth / 2) / 10;
			BallSpeed[1] = temp;

			if (time_passed >= 500) {
				BallSpeed[1] = temp * 2;
			}
			if (time_passed >= 1000) {
				BallSpeed[1] = temp * 3;
			}
			if (time_passed >= 1500) {
				BallSpeed[1] = temp * 4;
			}
			if (time_passed >= 2000) {
				BallSpeed[1] = temp * 5;
			}

			if (BallSpeed[0] > 0) {
				BallSpeed[0] *= -1;
			}
		}

		let brikes = document.querySelectorAll(".brick");
		for (let tbk of brikes) {
			if (isCallied(tbk, Ball)) {
				if (BallSpeed[0] < 0) {
					BallSpeed[0] *= -1;
				}
				tbk.parentNode.removeChild(tbk);
				score++;
			}
		}

		posBall.y += BallSpeed[0];
		posBall.x += BallSpeed[1];

		Ball.style.top = posBall.y + "px";
		Ball.style.left = posBall.x + "px";
	}

	function isCallied(a, b) {
		let aRect = a.getBoundingClientRect();
		let bRect = b.getBoundingClientRect();

		let temp1 = aRect.right < bRect.left || aRect.left > bRect.right;
		let temp2 = aRect.bottom < bRect.top || aRect.top > bRect.bottom;

		return !(temp1 || temp2);
	}

	function update() {
		if (IsGameEnding === false) {
			let pCurrent = Paddle.offsetLeft;
			moveBall();
			if (Paddle.left && pCurrent >= 5) {
				pCurrent -= 10;
			}
			if (Paddle.right && pCurrent <= 925) {
				pCurrent += 10;
			}
			Paddle.style.left = pCurrent + "px";
			window.requestAnimationFrame(update);
			time_passed++;
			number_result_massage.innerHTML = "Your Score is: " + score;

			if (score == brike_number.value) {
				EndGame();
				number_result_win.innerHTML = "Game is over <br> You Win👏🏻👏🏻";
			}
		}
	}

	function rColor() {
		var letters = "0123456789ABCDEF";
		var color = "#";
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	function creatBrike(pos) {
		const brike = document.createElement("div");
		brike.setAttribute("class", "brick");
		brike.style.backgroundColor = rColor();
		brike.style.left = pos.x + "px";
		brike.style.top = pos.y + "px";
		game_area_show.appendChild(brike);
	}

	function setupBrike(num) {
		const conDim = game_area_show.getBoundingClientRect();
		let row = {
			x: (conDim.width % 100) / 2,
			y: 25,
		};

		let skip = false;

		for (let i = 0; i < num; i++) {
			if (row.x > conDim.width - 100) {
				row.y += 50;
				if (row.y > conDim.height / 2) {
					skip = true;
				}
				row.x = (conDim.width % 100) / 2;
			}

			if (!skip) {
				creatBrike(row);
				row.x += 100;
			}
		}
	}

	const creatBrikeBreakerGame = () => {
		if (starting_condition() === true && IsGameEnding === false) {
			games_aria_img_sectio.classList.add("hide");
			start_gameBTN.classList.add("hide");
			game_area_show.classList.remove("hide");
			number_result_massage.classList.remove("hide");
			Ball.src = changeImg();

			setupBrike(brike_number.value);

			window.requestAnimationFrame(update);
		}
	};

	document.addEventListener("keydown", (e) => {
		if (e.code == "ArrowLeft") Paddle.left = true;
		if (e.code == "ArrowRight") Paddle.right = true;
	});

	document.addEventListener("keyup", (e) => {
		if (e.code == "ArrowLeft") Paddle.left = false;
		if (e.code == "ArrowRight") Paddle.right = false;
	});

	start_gameBTN.addEventListener("click", creatBrikeBreakerGame);

	const rematchGame = () => {
		BrikeBreakerGame();
	};
	game_rematch_btn.addEventListener("click", rematchGame);

	game_home_btn.addEventListener("click", GotoHome);
};

BrikeBreakerEL.addEventListener("click", BrikeBreakerGame);

//-----------------------------Canvas Snake------------------------------//
const CanvesSnakeEL = document.querySelector(".card--canvas-snake");

const CanvesSnakeGame = () => {
	appEL.innerHTML = `    
    <secton class="games">
        <section class="games__title">
            Canvas Snake Game:
        </section>

        <section class="games__description">
            You must have seen many similar games.<br>
            Please eat food and grow up and enjoy the game.<br>
            You will go right with the <kbd>→</kbd> key and left with the  <kbd>←</kbd> button and you will go up with the <kbd>↑</kbd> key and down with the  <kbd>↓</kbd> button.
        </section>

        <section class="games__setting align-center d-flex">
            <span>Please Enter a color for your snake: </span>
            <input type="color" id="chosing-color_of_snake">
        </section>

        <section class="games__aria ">
            <section class="games__aria-img-section">
                <img class="games__aria-img games__aria-img--larger" src="img/app_card_img12.jpg" alt="snake">
            </section>

            <section class="game_area_show game_area_snake_show hide">
                <canvas id='game' width='500' height='500'>
        			Sorry, you need a browser that supports the HTML canvas element.
      			</canvas>
            </section>

            <section class="game__results">
                <button class="game-btn start_game" type="button">Start Game</button>
                <span class="number-result-massage hide"></span><br>
                <span class="number-result-win hide"></span>
            </section>

            <section class="game__remach hide">
                <button class="game-btn rematch_btn" type="button">Reset</button>
                <button class="game-btn home_btn" type="button">Home</button>
            </section>

        </section>

    </secton>`;

	const chosing_color = document.querySelector("#chosing-color_of_snake");

	const game_area = document.querySelector(".game_area_show");
	const start_gameBTN = document.querySelector(".start_game");
	const games__aria_img_section = document.querySelector(
		".games__aria-img-section"
	);
	const massage = document.querySelector(".number-result-massage");
	const game__remach = document.querySelector(".game__remach");
	const game_rematch_btn = document.querySelector(".rematch_btn");
	const game_home_btn = document.querySelector(".home_btn");

	tick_period = 66; // مدت زمان هر فریم بازی (به میلی‌ثانیه)
	board_dimension = 80; // ابعاد صفحه بازی (50x50)
	max_mushrooms = 3; // حداکثر تعداد قارچ‌ها در صفحه
	mushroom_score = 25; // امتیاز هر قارچ
	mushroom_frequency = 20; // فرکانس ایجاد قارچ‌ها
	min_mushroom_life = 50; // حداقل عمر قارچ
	mushroom_growth_delta = 0.1; // سرعت رشد قارچ
	initial_snake_length = 5; // طول اولیه مار
	snake_grows_after_ticks = 10; // تعداد فریم‌های لازم برای رشد مار
	segments_added_per_mushroom = 5; // تعداد قطعات اضافه شده به مار پس از خوردن قارچ

	const readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			init();
			clearInterval(readyStateCheckInterval);
		}
	}, 10);

	function init() {
		// scoreboard = new Scoreboard(); // ایجاد شیء Scoreboard
		// scoreboard.render(); // نمایش امتیازات
		registerEventHandler(start_gameBTN, "click", function () {
			start();
		}); // ثبت رویداد کلیک برای شروع بازی
	}

	function start() {
		stop();
		game_area.classList.remove("hide");
		games__aria_img_section.classList.add("hide"); // پنهان کردن صفحه شروع
		start_gameBTN.classList.add("hide");
		playField = new PlayField(board_dimension, board_dimension); // ایجاد صفحه بازی
		snake = new Snake(initial_snake_length); // ایجاد مار
		keyboardController = new KeyboardController(); // ایجاد کنترلر کیبورد
		retroCanvas = new RetroCanvas(
			document.getElementById("game"),
			playField.width,
			playField.height
		); // ایجاد صفحه رسم
		ticks = 0; // reset ticks
		score = -1; // reset score
		updateScore(0); // نمایش امتیاز اولیه
		gameOver = false; // reset game over flag
		ticker = setInterval(function () {
			tick();
		}, tick_period); // شروع حلقه بازی
	}

	function stop() {
		if (typeof ticker != "undefined") {
			clearInterval(ticker); // پاک کردن بازه زمانی اجرای تیک‌ها
		}
	}

	function tick() {
		ticks++; // افزایش شمارنده تیک‌ها
		if (snake.alive) {
			updateScore(score); // بروزرسانی امتیاز
			snake.move(); // حرکت مار
		}
		playField.update(); // بروزرسانی صفحه بازی (قارچ‌ها و غیره)
		playField.draw(); // رسم صفحه بازی
		snake.draw(); // رسم مار
		if (!gameOver && !snake.alive) {
			gameOver = true; // تنظیم وضعیت پایان بازی
			//	scoreboard.addScore(Math.floor(score)); // اضافه کردن امتیاز به تابلوی امتیازات
			//	scoreboard.render(); // نمایش تابلوی امتیازات
			massage.innerHTML = `The Game is Over <br> Your score is ${score}`;
			massage.classList.remove("hide");
			game__remach.classList.remove("hide");
		}
	}

	function updateScore(newScore) {
		var oldScore = score; // ذخیره امتیاز قبلی
		score = newScore; // بروزرسانی امتیاز با مقدار جدید
		if (Math.floor(oldScore) != Math.floor(score)) {
			// بررسی اگر قسمت صحیح امتیاز تغییر کرده است
		}
	}

	// توابع کمکی برای کار با آرایه‌ها
	function each(array, action) {
		// اجرای یک تابع بر روی هر عنصر آرایه
		for (var i = 0; i < array.length; i++) {
			action(array[i]); // اجرای تابع action بر روی عنصر iام
		}
	}

	function map(array, action) {
		// ایجاد یک آرایه جدید با اعمال یک تابع بر روی هر عنصر آرایه اصلی
		var result = [];
		each(array, function (n) {
			result.push(action(n)); // اضافه کردن نتیجه اجرای تابع action بر روی عنصر n به آرایه result
		});
		return result; // بازگرداندن آرایه نتیجه
	}

	function findIndex(array, test) {
		// پیدا کردن اندیس اولین عنصری که تست داده شده را پاس می‌کند
		for (var i = 0; i < array.length; i++) {
			var t = test(array[i]); // اجرای تابع تست بر روی عنصر iام
			if (t) {
				return i; // بازگرداندن اندیس اگر تست پاس شد
			}
		}
		return -1; // بازگرداندن -1 اگر هیچ عنصری تست را پاس نکرد
	}

	function find(array, test) {
		// پیدا کردن اولین عنصری که تست داده شده را پاس می‌کند
		for (var i = 0; i < array.length; i++) {
			var t = test(array[i]); // اجرای تابع تست بر روی عنصر iام
			if (t) {
				return array[i]; // بازگرداندن عنصر اگر تست پاس شد
			}
		}
	}

	function arrayHas(array, test) {
		// بررسی وجود عنصری در آرایه که تست داده شده را پاس می‌کند
		return find(array, test) != undefined; // بازگرداندن true اگر عنصری پیدا شد، false در غیر این صورت
	}

	function randomNumber(options) {
		// تولید یک عدد تصادفی صحیح بین 0 و options (شامل 0، غیر شامل options)
		return Math.floor(Math.random() * options);
	}

	function randomColour() {
		// تولید یک رنگ تصادفی در فرمت هگزادسیمال
		return (
			"#" +
			randomNumber(16).toString(16) + // تولید یک رقم هگزادسیمال
			randomNumber(16).toString(16) + // تولید یک رقم هگزادسیمال
			randomNumber(16).toString(16) // تولید یک رقم هگزادسیمال
		);
	}

	function registerEventHandler(node, event, handler) {
		// ثبت یک رویداد برای یک عنصر HTML
		if (typeof node.addEventListener == "function") {
			node.addEventListener(event, handler, false); // استفاده از addEventListener اگر پشتیبانی می‌شود
		} else {
			node.attachEvent("on" + event, handler); // استفاده از attachEvent اگر addEventListener پشتیبانی نمی‌شود (برای IE)
		}
	}

	// ---------- نقطه ----------
	function Point(x, y) {
		// تعریف کلاس Point برای نمایش یک نقطه در صفحه
		this.x = x;
		this.y = y;
	}

	Point.prototype.set = function (x, y) {
		// تنظیم مختصات نقطه
		this.x = x;
		this.y = y;
	};

	Point.prototype.add = function (otherPoint) {
		// ایجاد یک نقطه جدید با جمع مختصات دو نقطه
		return new Point(this.x + otherPoint.x, this.y + otherPoint.y);
	};

	Point.prototype.addTo = function (otherPoint) {
		// اضافه کردن مختصات یک نقطه به مختصات نقطه فعلی
		this.set(this.x + otherPoint.x, this.y + otherPoint.y);
	};

	Point.prototype.isEqualTo = function (otherPoint) {
		// بررسی برابر بودن دو نقطه
		return this.x == otherPoint.x && this.y == otherPoint.y;
	};

	// ---------- قارچ ----------
	function Mushroom(point) {
		// تعریف کلاس Mushroom برای نمایش قارچ در صفحه
		this.location = point; // موقعیت قارچ
		this.life = min_mushroom_life + randomNumber(min_mushroom_life); // عمر تصادفی قارچ
		this.scale = mushroom_growth_delta; // مقیاس اولیه قارچ
		this.scaling = mushroom_growth_delta; // نرخ تغییر مقیاس قارچ
	}

	Mushroom.prototype.update = function () {
		// بروزرسانی وضعیت قارچ
		if (this.scaling != 0) {
			this.scale += this.scaling; // تغییر مقیاس قارچ
			if (this.scaling > 0 && this.scale >= 1) {
				this.scale = 1; // تنظیم مقیاس به 1 اگر در حال رشد است و به حداکثر رسیده
				this.scaling = 0; // توقف رشد
			} else if (
				this.scaling < 0 &&
				this.scale < 2 * mushroom_growth_delta
			) {
				this.scale = 0; // تنظیم مقیاس به 0 اگر در حال کوچک شدن است و به حداقل رسیده
				this.scaling = 0; // توقف کوچک شدن
			}
		} else {
			this.life--; // کاهش عمر قارچ
			if (this.life == 1) {
				this.scaling = -mushroom_growth_delta; // شروع کوچک شدن قارچ اگر عمر آن به 1 رسید
			}
		}
	};

	Mushroom.prototype.alive = function () {
		// بررسی زنده بودن قارچ
		return this.life > 0;
	};

	Mushroom.prototype.draw = function () {
		// رسم قارچ در صفحه
		retroCanvas.drawPixel(
			this.location.x,
			this.location.y,
			this.scale,
			"green"
		);
	};

	// ---------- صفحه بازی ----------
	function PlayField(width, height) {
		// تعریف کلاس PlayField برای مدیریت صفحه بازی
		this.width = width; // عرض صفحه
		this.height = height; // ارتفاع صفحه
		this.mushrooms = []; // آرایه قارچ‌ها
		this.starBursts = []; // آرایه انفجارهای ستاره‌ای
	}

	PlayField.prototype.update = function () {
		var i = 0;
		while (i < this.mushrooms.length) {
			this.mushrooms[i].update();
			if (!this.mushrooms[i].alive()) {
				this.removeMushroom(this.mushrooms[i]);
			} else {
				i++;
			}
		}
		if (
			this.mushrooms.length < max_mushrooms &&
			randomNumber(mushroom_frequency) == 3
		) {
			this.spawnMushroom();
		}
		var i = 0;
		while (i < this.starBursts.length) {
			this.starBursts[i].update();
			if (this.starBursts[i].done()) {
				this.starBursts.splice(i, 1);
			} else {
				i++;
			}
		}
	};

	PlayField.prototype.spawnMushroom = function () {
		var location = new Point(0, 0);
		while (true) {
			location.set(
				randomNumber(playField.width),
				randomNumber(playField.height)
			);
			if (
				this.mushroomAt(location) == undefined &&
				!snake.hasSegmentAt(location)
			) {
				var mushroom = new Mushroom(location);
				this.mushrooms.push(mushroom);
				break;
			}
		}
	};

	PlayField.prototype.removeMushroom = function (mushroom) {
		var index = findIndex(this.mushrooms, function (mush) {
			return mush == mushroom;
		});
		if (index >= 0) {
			this.mushrooms.splice(index, 1);
		}
	};

	PlayField.prototype.munchMushroom = function (point) {
		var mushroom = this.mushroomAt(point);
		if (mushroom != undefined) {
			this.starBursts.push(new StarBurst(mushroom.location));
			this.removeMushroom(mushroom);
			updateScore(++score);
			return true;
		} else {
			return false;
		}
	};

	PlayField.prototype.mushroomAt = function (point) {
		return find(this.mushrooms, function (mush) {
			return mush.alive() && mush.location.isEqualTo(point);
		});
	};

	PlayField.prototype.draw = function () {
		retroCanvas.clear();
		each(this.mushrooms, function (mushroom) {
			mushroom.draw();
		});
		each(this.starBursts, function (starBurst) {
			starBurst.draw();
		});
	};

	// ---------- Snake ----------

	function Snake(length) {
		var snake = this;
		snake.segments = [];
		snake.alive = true;
		snake.direction = new Point(1, 0);
		snake.lastDirection = snake.direction;
		x = Math.round(playField.width / 2);
		y = Math.round(playField.height / 2);
		for (var i = 0; i < length; i++) {
			snake.segments.push(new Point(x, y));
		}
	}

	Snake.prototype.head = function () {
		return this.segments[0];
	};

	Snake.prototype.tail = function () {
		return this.segments[this.segments.length - 1];
	};

	Snake.prototype.hasSegmentAt = function (location) {
		return arrayHas(this.segments, function (segment) {
			return segment.isEqualTo(location);
		});
	};

	Snake.prototype.draw = function () {
		retroCanvas.beginPath(
			snake.head().x,
			snake.head().y,
			chosing_color.value
		);
		each(this.segments, function (segment) {
			retroCanvas.lineTo(segment.x, segment.y);
		});
		retroCanvas.endPath();
		retroCanvas.drawPixel(snake.head().x, snake.head().y, 1, "#000");
		retroCanvas.drawPixel(
			snake.tail().x,
			snake.tail().y,
			1,
			chosing_color.value
		);
	};

	Snake.prototype.move = function () {
		var snake = this;
		if (snake.willMeetItsDoom()) {
			snake.alive = false;
		} else {
			if (snake.willMunchAMushroom()) {
				snake.grow(segments_added_per_mushroom);
			}
			for (var i = snake.segments.length - 1; i > 0; i--) {
				snake.segments[i].set(
					snake.segments[i - 1].x,
					snake.segments[i - 1].y
				);
			}
			snake.head().addTo(snake.direction);
			snake.lastDirection = snake.direction;
		}
	};

	Snake.prototype.willMeetItsDoom = function () {
		var snake = this;
		var newHead = snake.head().add(snake.direction);
		if (
			newHead.x < 0 ||
			newHead.x >= playField.width ||
			newHead.y < 0 ||
			newHead.y >= playField.height
		) {
			return true;
		}
		if (snake.hasSegmentAt(newHead)) {
			return true;
		}
		return false;
	};

	Snake.prototype.willMunchAMushroom = function () {
		var newHead = snake.head().add(snake.direction);
		return playField.munchMushroom(newHead);
	};

	Snake.prototype.grow = function (length) {
		for (var i = 0; i < length; i++) {
			this.segments.push(new Point(snake.tail().x, snake.tail().y));
		}
	};

	Snake.prototype.changeDirection = function (direction) {
		if (direction != undefined) {
			var d = this.lastDirection.add(direction);
			if (d.x != 0 || d.y != 0) {
				// don't allow player to move back in the direction they are going
				this.direction = direction;
			}
		}
	};

	// ---------- Keyboard controller ----------

	keyMap = new Object({
		37: new Point(-1, 0),
		39: new Point(1, 0),
		38: new Point(0, -1),
		40: new Point(0, 1),
	});

	function KeyboardController() {
		var keyboardController = this;
		keyboardController.keysDown = [];
		document.onkeydown = function (event) {
			event.preventDefault();
			keyboardController.keyDown(event);
		};
		document.onkeyup = function (event) {
			keyboardController.keyUp(event);
		};
	}

	KeyboardController.prototype.keyDown = function (event) {
		var key = (event || window.event).keyCode;
		if (this.keysDown.findIndex((k) => k === key) === -1) {
			// استفاده از تابع
			this.keysDown.push(key);
			snake.changeDirection(keyMap[key]);
		}
	};

	KeyboardController.prototype.keyUp = function (event) {
		var key = (event || window.event).keyCode;
		var index = this.keysDown.findIndex((k) => k === key); // استفاده از تابع
		if (index >= 0) {
			this.keysDown.splice(index, 1);
		}
	};

	function StarBurst(location) {
		this.location = location;
		this.spread = 0;
		this.delta = 1;
	}

	StarBurst.prototype.update = function () {
		this.spread += this.delta;
		this.delta *= 1.5;
	};

	StarBurst.prototype.draw = function () {
		var colour = randomColour();
		var d = Math.sqrt((this.spread * this.spread) / 2);
		retroCanvas.drawPixel(
			this.location.x + this.spread,
			this.location.y,
			1,
			colour
		);
		retroCanvas.drawPixel(
			this.location.x + d,
			this.location.y + d,
			1,
			colour
		);
		retroCanvas.drawPixel(
			this.location.x,
			this.location.y + this.spread,
			1,
			colour
		);
		retroCanvas.drawPixel(
			this.location.x - d,
			this.location.y + d,
			1,
			colour
		);
		retroCanvas.drawPixel(
			this.location.x - this.spread,
			this.location.y,
			1,
			colour
		);
		retroCanvas.drawPixel(
			this.location.x - d,
			this.location.y - d,
			1,
			colour
		);
		retroCanvas.drawPixel(
			this.location.x,
			this.location.y - this.spread,
			1,
			colour
		);
		retroCanvas.drawPixel(
			this.location.x + d,
			this.location.y - d,
			1,
			colour
		);
	};

	StarBurst.prototype.done = function () {
		return (
			this.location.x - this.spread < 0 &&
			this.location.x + this.spread >= playField.width &&
			this.location.y - this.spread < 0 &&
			this.location.y + this.spread >= playField.height
		);
	};

	function RetroCanvas(canvas, width, height) {
		this.canvas = canvas;
		this.context = this.canvas.getContext("2d");
		this.xScale = this.canvas.width / width;
		this.yScale = this.canvas.height / height;
	}

	RetroCanvas.prototype.clear = function () {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	};

	RetroCanvas.prototype.drawPixel = function (x, y, scale, colour) {
		if (scale > 0) {
			this.context.fillStyle = colour;
			this.context.fillRect(
				(x + (1 - scale) / 2) * this.xScale + 1,
				(y + (1 - scale) / 2) * this.yScale + 1,
				6,
				6
			);
		}
	};

	RetroCanvas.prototype.beginPath = function (x, y, colour) {
		this.context.fillStyle = "none";
		this.context.strokeStyle = colour;
		this.context.lineWidth = (this.xScale + this.yScale) / 2;
		this.context.height = 2;
		this.context.beginPath(
			(x + 0.5) * this.xScale,
			(y + 0.5) * this.yScale
		);
	};

	RetroCanvas.prototype.lineTo = function (x, y) {
		this.context.lineTo((x + 0.65) * this.xScale, (y + 0.65) * this.yScale);
	};

	RetroCanvas.prototype.endPath = function () {
		this.context.stroke();
	};

	const rematchGame = () => {
		CanvesSnakeGame();
	};
	game_rematch_btn.addEventListener("click", rematchGame);

	game_home_btn.addEventListener("click", GotoHome);
};

CanvesSnakeEL.addEventListener("click", CanvesSnakeGame);

//-----------------------------Mine Sweeper------------------------------//1
const MineSweeperEL = document.querySelector(".card--mine-sweeper");

const MineSweeperGame = () => {
	appEL.innerHTML = `    
    <secton class="games">
        <section class="games__title">
            Mine Sweeper Game:
        </section>

        <section class="games__description">
            You must have seen many similar games.<br>
            Please eat food and grow up and enjoy the game.<br>
            You will go right with the <kbd>→</kbd> key and left with the  <kbd>←</kbd> button and you will go up with the <kbd>↑</kbd> key and down with the  <kbd>↓</kbd> button.
        </section>

        <section class="games__setting d-flex align-center">
            <span>Please Enter a number of Mine: </span>
            <input type="number" id="number_of_mine" class="ipt-1" placeholder="Enter the number of mine">
        </section>

        <section class="games__aria ">
            <section class="games__aria-img-section">
                <img class="games__aria-img games__aria-img--larger" src="img/app_card_img13.jpg" alt="snake">
            </section>

            <section class="game_area_show game_area_show-mine hide">
				<h2 class="board-title"></h2>
				<div class="board">
				</div>
				<button class="btn-flag">🚩</button>
            </section>

            <section class="game__results">
                <button class="game-btn start_game" type="button">Start Game</button>
                <span class="number-result-massage hide"></span><br>
                <span class="number-result-win hide"></span>
            </section>

            <section class="game__remach hide">
                <button class="game-btn rematch_btn" type="button">Reset</button>
                <button class="game-btn home_btn" type="button">Home</button>
            </section>

        </section>

    </secton>`;

	const game_area = document.querySelector(".game_area_show");
	const start_gameBTN = document.querySelector(".start_game");
	const games__aria_img_section = document.querySelector(
		".games__aria-img-section"
	);
	const number_of_mine = document.querySelector("#number_of_mine");
	const board_title = document.querySelector(".board-title");
	const massage = document.querySelector(".number-result-massage");
	const game__remach = document.querySelector(".game__remach");
	const game_rematch_btn = document.querySelector(".rematch_btn");
	const game_home_btn = document.querySelector(".home_btn");

	// variables
	let board = [];
	let rows = 13;
	let col = 33;
	let minesCount = number_of_mine;
	let minesLocation = [];
	let tilesClicked = 0;
	let flagEnabled = false;
	let gameOver = false;

	function starting_condition() {
		if (number_of_mine.value === "") {
			alert("Fill number of mine");
		} else if (number_of_mine.value < 0 || number_of_mine.value > 200) {
			alert("plaese chose number between 0 and 200");
			brike_number.value = "";
		} else {
			return true;
		}
	}

	function startGame() {
		board_title.innerHTML = `Number of mines is ${minesCount.value}`;
		document.querySelector(".btn-flag").addEventListener("click", setFlag);
		setMines();

		// populate our board
		for (let r = 0; r < rows; r++) {
			let row = [];
			for (let c = 0; c < col; c++) {
				let tile = document.createElement("div");
				tile.id = r.toString() + "-" + c.toString();
				tile.addEventListener("click", tileClick);

				document.querySelector(".board").append(tile);
				row.push(tile);
			}
			board.push(row);
		}
	}

	const setMines = () => {
		let minesLeft = minesCount.value;
		console.log(minesLeft);
		while (minesLeft > 0) {
			let r = Math.floor(Math.random() * rows);
			let c = Math.floor(Math.random() * col);
			let id = r.toString() + "-" + c.toString();

			if (!minesLocation.includes(id)) {
				minesLocation.push(id);
				minesLeft--;
			}
		}
	};

	function setFlag() {
		if (flagEnabled) {
			flagEnabled = false;
			document.querySelector(".btn-flag").style.backgroundColor =
				"#00DBDE";
		} else {
			flagEnabled = true;
			document.querySelector(".btn-flag").style.backgroundColor = "white";
		}
	}

	function tileClick() {
		if (gameOver || this.classList.contains("tile-clicked")) {
			return;
		}
		let tile = this;
		if (flagEnabled) {
			if (tile.innerHTML == "") {
				tile.innerHTML = "🚩";
			} else if (tile.innerHTML == "🚩") {
				tile.innerHTML = "";
			}
			return;
		}

		if (minesLocation.includes(tile.id)) {
			gameOver = true;
			revealMines();
			game__remach.classList.remove("hide");
			massage.classList.remove("hide");
			massage.innerHTML = `You Lose 😢`;
			return;
		}

		let cords = tile.id.split("-");
		let r = parseInt(cords[0]);
		let c = parseInt(cords[1]);
		checkMine(r, c);
	}

	const checkMine = (r, c) => {
		if (r < 0 || r >= rows || c < 0 || c >= col) {
			return;
		}
		if (board[r][c].classList.contains("tile-clicked")) {
			return;
		}

		board[r][c].classList.add("tile-clicked");
		tilesClicked++;

		let minesFound = 0;

		// top 3
		minesFound += checkTile(r - 1, c - 1); // top left
		minesFound += checkTile(r - 1, c); // top
		minesFound += checkTile(r - 1, c + 1); // top right
		minesFound += checkTile(r, c + 1); //  right
		minesFound += checkTile(r, c - 1); //  left
		minesFound += checkTile(r + 1, c - 1); // bottom left
		minesFound += checkTile(r + 1, c); // bottom left
		minesFound += checkTile(r + 1, c + 1); // bottom right

		if (minesFound > 0) {
			board[r][c].innerHTML = minesFound;
			board[r][c].classList.add("x" + minesFound.toString());
		} else {
			checkMine(r - 1, c - 1); // top left
			checkMine(r - 1, c); // top
			checkMine(r - 1, c + 1); // top right
			checkMine(r, c + 1); //  right
			checkMine(r, c - 1); //  left
			checkMine(r + 1, c - 1); // bottom left
			checkMine(r + 1, c); // bottom left
			checkMine(r + 1, c + 1); // bottom right
		}

		if (tilesClicked == rows * col - minesCount.value) {
			game__remach.classList.remove("hide");
			massage.classList.remove("hide");
			massage.innerHTML = `You Win🎉🎉`;
			gameOver = true;
		}
	};

	const checkTile = (r, c) => {
		if (r < 0 || r >= rows || c < 0 || c >= col) {
			return 0;
		}
		if (minesLocation.includes(r.toString() + "-" + c.toString())) {
			return 1;
		}

		return 0;
	};

	const revealMines = () => {
		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < col; c++) {
				let tile = board[r][c];
				if (minesLocation.includes(tile.id)) {
					tile.innerHTML = "💣";
					tile.style.backgroundColor = "red";
				}
			}
		}
	};

	const creatBrikeBreakerGame = () => {
		if (starting_condition() === true) {
			games__aria_img_section.classList.add("hide");
			start_gameBTN.classList.add("hide");
			game_area.classList.remove("hide");
			startGame();
			// number_result_massage.classList.remove("hide");;
		}
	};

	start_gameBTN.addEventListener("click", creatBrikeBreakerGame);

	const rematchGame = () => {
		MineSweeperGame();
	};
	game_rematch_btn.addEventListener("click", rematchGame);

	game_home_btn.addEventListener("click", GotoHome);
};

MineSweeperEL.addEventListener("click", MineSweeperGame);

//-----------------------------Memory------------------------------//1

const MemoryEL = document.querySelector(".card--memory");

const MemoryGame = () => {
	appEL.innerHTML = `    
    <secton class="games">
        <section class="games__title">
            Memory Game:
        </section>

        <section class="games__description">
            You must have seen many similar games.<br>
            Please eat food and grow up and enjoy the game.<br>
            You will go right with the <kbd>→</kbd> key and left with the  <kbd>←</kbd> button and you will go up with the <kbd>↑</kbd> key and down with the  <kbd>↓</kbd> button.
        </section>

        <section class="games__setting d-flex align-center">
            <span>Please Enter a number of Mine(Enter Even number): </span>
            <input type="number" id="number_of_card" class="ipt-1" placeholder="Enter the number of card">
        </section>

        <section class="games__aria ">
            <section class="games__aria-img-section">
                <img class="games__aria-img games__aria-img--larger" src="img/app_card_img14.jpg" alt="memory">
            </section>

            <section class="game_area_show game_area_show-card hide">
            </section>

            <section class="game__results">
                <button class="game-btn start_game" type="button">Start Game</button>
                <span class="result-massage hide"></span><br>
                <span class="result-win hide"></span>
            </section>

            <section class="game__remach hide">
                <button class="game-btn rematch_btn" type="button">Reset</button>
                <button class="game-btn home_btn" type="button">Home</button>
            </section>

        </section>

    </secton>`;

	const game_area = document.querySelector(".game_area_show");
	const start_gameBTN = document.querySelector(".start_game");
	const games__aria_img_section = document.querySelector(
		".games__aria-img-section"
	);
	const number_of_card = document.querySelector("#number_of_card");
	const massage = document.querySelector(".result-massage");
	const game__remach = document.querySelector(".game__remach");
	const game_rematch_btn = document.querySelector(".rematch_btn");
	const game_home_btn = document.querySelector(".home_btn");

	// variables
	let icons = [
		"fas fa-chart-pie",
		"fab fa-affiliatetheme",
		"fab fa-amazon",
		"fas fa-american-sign-language-interpreting",
		"far fa-angry",
		"fas fa-archway",
		"fas fa-atlas",
		"fab fa-bandcamp",
		"fas fa-ban",
		"fab fa-bitcoin",
		"fas fa-bomb",
		"fas fa-bus",
		"far fa-calendar-check",
		"fas fa-cart-plus",
		"fas fa-cat",
		"fab fa-centos",
	];
	let randomNum;
	let charArrey;
	let equalCard = [];
	let cardsBack = 0;
	let chanseToWin = 3;
	let gameOver = false;

	function starting_condition() {
		if (number_of_card.value == "") {
			alert("Fill number of mine");
		} else if (number_of_card.value < 0 || number_of_card.value > 32) {
			alert("plaese chose number between 0 and 32");
			number_of_card.value = "";
		} else if (number_of_card.value % 2 == 1) {
			alert("plaese chose Even number");
		} else {
			return true;
		}
	}

	const endinging_condition = (status) => {
		massage.classList.remove("hide");
		if (status === 1) {
			massage.innerHTML = `You Win and Your Score is ${score} 👌🎉`;
		} else {
			massage.innerHTML = `You Lose and Your Score is ${score} <br>Try again`;
			gameOver = true;
		}
		game__remach.classList.remove("hide");
	};

	const createCards = () => {
		for (let i = 0; i < number_of_card.value; i++) {
			let card = document.createElement("div");
			card.classList.add("memory-card");
			let cardIcons = document.createElement("i");
			let randomOrder = Math.floor(Math.random() * number_of_card.value);
			card.style.order = randomOrder;

			// Ranndom Icons
			if (i % 2 == 0) {
				do {
					randomNum = Math.floor(Math.random() * 16);
				} while (icons[randomNum] == "");
				charArrey = icons[randomNum].split(" ");
			}

			cardIcons.classList.add(charArrey[0], charArrey[1]);
			icons[randomNum] = "";
			card.appendChild(cardIcons);
			card.addEventListener("click", checkCards);
			game_area.appendChild(card);
		}
	};

	function checkCards() {
		if (gameOver) {
			return;
		}

		let card = this;

		if (card.classList.contains("rotate_animation")) {
			card.classList.add("rotate_back_animation");
			card.classList.remove("rotate_animation");
			cardsBack++;
			equalCard.push(card);
		}
		console.log(score);
		if (cardsBack == 2) {
			if (
				equalCard[0].children[0].classList[1] ==
				equalCard[1].children[0].classList[1]
			) {
				equalCard = [];
				cardsBack = 0;
				if (++score == number_of_card.value / 2) {
					endinging_condition(1);
				}
			} else {
				equalCard.forEach((e) => {
					setTimeout(function () {
						e.classList.remove("rotate_back_animation");
						e.classList.add("rotate_animation");
					}, 1000);
				});
				equalCard = [];
				cardsBack = 0;
				if (--chanseToWin == 0) {
					endinging_condition(0);
				}
			}
		}
	}

	const rotateCards = () => {
		const all_cards = document.querySelectorAll(".memory-card");
		for (let i = 0; i < all_cards.length; i++) {
			all_cards[i].classList.add("rotate_animation");
		}
	};

	const creatMemoryGame = () => {
		if (starting_condition()) {
			games__aria_img_section.classList.add("hide");
			start_gameBTN.classList.add("hide");
			game_area.classList.remove("hide");
			score = 0;
			createCards();
			setTimeout(rotateCards, 3000);
		}
	};

	start_gameBTN.addEventListener("click", creatMemoryGame);

	const rematchGame = () => {
		MemoryGame();
	};
	game_rematch_btn.addEventListener("click", rematchGame);

	game_home_btn.addEventListener("click", GotoHome);
};

MemoryEL.addEventListener("click", MemoryGame);

//-----------------------------Ping pong------------------------------//1

const PingPongEL = document.querySelector(".card--pingpong");

const PingPongGame = () => {
	appEL.innerHTML = `    
    <secton class="games">
        <section class="games__title">
            Ping Pong Game:
        </section>

        <section class="games__description">
            You must have seen many similar games.<br>
            Please eat food and grow up and enjoy the game.<br>
            You will go up with the <kbd>↑</kbd> key and down with the  <kbd>↓</kbd> button.
        </section>

        <section class="games__setting d-flex align-center">
            <section class="chossing-ball-sec">
                <span>Please Choose your Ball???</span>
                <select name="ChossingBall" id="ChossingBall" class="select_box">
                    <optgroup label="Balls">
                        <option value="american-football_ball">American Football Ball</option>
                        <option value="ball">Inflatable Ball</option>
                        <option value="basket-ball">Basket Ball</option>
                        <option value="beach-ball">Beach Ball</option>
                        <option value="rugby_ball">Rugby Ball</option>
                        <option value="soccer_ball">Soccer Ball</option>
                        <option value="tennis-ball">Tennis Ball</option>
                        <option value="volleyball_ball">Volleyball Ball</option>
                        <option value="water-polo_ball">Water polo Ball</option>
                </select>
                <img src="img/Balls/american-football_ball.png" alt="Chosing ball" class="Chosing_ballimg">
            </section>
        </section>

        <section class="games__aria ">
            <section class="games__aria-img-section">
                <img class="games__aria-img games__aria-img--larger" src="img/app_card_img15.jpg" alt="PingPong">
            </section>

            <section class="game_area_show game_area_show-card hide">
				<div class="gameplay" id="gameplayPage">
                            <div class="hud">
                                <span class="countdown">
                                    <span id="countdownText"></span>
                                </span>
                                <span class="scoreText">
                                    <span id="scoreText">0</span>
                                </span>
                                <span class="scoreAIText">
                                    <span id="scoreAIText">0</span>
                                </span>
                            </div>
						<div class="user_pedal"></div>
                    	<div class="ball-sec"><img class="pingBall" src="img/Balls/american-football_ball.png" alt=""ball></div>
						<div class="AI_pedal"></div>
                    </div>
            </section>

            <section class="game__results">
                <button class="game-btn start_game" type="button">Start Game</button>
                <span class="result-massage hide"></span><br>
                <span class="result-win hide"></span>
            </section>

            <section class="game__remach hide">
                <button class="game-btn rematch_btn" type="button">Reset</button>
                <button class="game-btn home_btn" type="button">Home</button>
            </section>

        </section>

    </secton>`;

	const game_area = document.querySelector(".game_area_show");
	const start_gameBTN = document.querySelector(".start_game");
	const games__aria_img_section = document.querySelector(
		".games__aria-img-section"
	);
	const massage = document.querySelector(".result-massage");
	const game__remach = document.querySelector(".game__remach");
	const game_rematch_btn = document.querySelector(".rematch_btn");
	const game_home_btn = document.querySelector(".home_btn");

	const ChoosingBall = document.getElementById("ChossingBall");
	const Choosing_ballimg = document.querySelector(".Chosing_ballimg");
	const pingBall = document.querySelector(".pingBall");

	// variables
	// انتخاب عناصر HTML
	const gameplayPage = document.querySelector(".gameplay");
	const countdownText = document.getElementById("countdownText");
	const scoreText = document.getElementById("scoreText");
	const scoreAIText = document.getElementById("scoreAIText");
	const userPedal = document.querySelector(".user_pedal");
	const aiPedal = document.querySelector(".AI_pedal");

	// متغیرهای بازی
	let scoreP = 0;
	let scoreAI = 0;
	let msgIndex = 0;
	const msgCountdown = ["", "3", "2", "1", "GO!", ""];
	let ballX = 0; // موقعیت افقی توپ (مرکز صفحه)
	let ballY = 0; // موقعیت عمودی توپ (مرکز صفحه)
	let ballSpeedX = 5;
	let ballSpeedY = 3;
	let userPedalY = gameplayPage.offsetHeight / 2 - userPedal.offsetHeight / 2; // موقعیت عمودی پدال بازیکن (مرکز عمودی)
	let aiPedalY = gameplayPage.offsetHeight / 2 - aiPedal.offsetHeight / 2; // موقعیت عمودی پدال کامپیوتر (مرکز عمودی)
	let aiSpeed = 5;

	// تابع شمارش معکوس
	function initiateCountdown() {
		countdownText.innerText = msgCountdown[msgIndex];
		msgIndex++;
		if (msgIndex < msgCountdown.length) {
			let x = setTimeout(initiateCountdown, 1000);
		} else {
			updateGame();
		}
	}

	// تابع به‌روزرسانی بازی
	function updateGame() {
		// حرکت توپ
		ballX += ballSpeedX;
		ballY += ballSpeedY;

		// برخورد توپ با دیوارها
		if (ballY < -330 || ballY > 330) {
			ballSpeedY = -ballSpeedY;
		}
		if (ballX < -510 || ballX > 510) {
			ballSpeedX = -ballSpeedX;
		}

		// برخورد توپ با پدال بازیکن
		console.log(ballY + pingBall.offsetHeight);
		console.log(userPedalY);
		if (
			ballX < -500 &&
			ballY + pingBall.offsetHeight + 10 > userPedalY &&
			ballY < userPedalY + userPedal.offsetHeight
		) {
			ballSpeedX = -ballSpeedX;
		}

		// برخورد توپ با پدال کامپیوتر
		if (
			ballX > 500 &&
			ballY + pingBall.offsetHeight > aiPedalY &&
			ballY < aiPedalY + aiPedal.offsetHeight
		) {
			ballSpeedX = -ballSpeedX;
		}

		// حرکت پدال کامپیوتر (هوش مصنوعی ساده)
		if (ballY < aiPedalY + aiPedal.offsetHeight / 2) {
			if (aiPedalY > -290) {
				aiPedalY -= aiSpeed;
			}
		} else {
			if (aiPedalY < 290) {
				aiPedalY += aiSpeed;
			}
		}

		// به‌روزرسانی امتیازات
		if (ballX < -510) {
			scoreAI++;
			scoreAIText.innerText = scoreAI;
			resetBall();
			initiateCountdown();
		} else if (ballX > 510) {
			scoreP++;
			scoreText.innerText = scoreP;
			resetBall();
			initiateCountdown();
		}

		// به‌روزرسانی موقعیت‌ها با CSS
		pingBall.style.transform = `translate(${ballX}px, ${ballY}px)`;
		userPedal.style.transform = `translateY(${userPedalY}px)`;
		aiPedal.style.transform = `translateY(${aiPedalY}px)`;

		requestAnimationFrame(updateGame);
	}

	// تابع بازنشانی توپ
	function resetBall() {
		ballX = 0;
		ballY = 0;
		msgIndex = 0;
		ballSpeedX = 5;
		ballSpeedY = 3;
		clearTimeout()
	}

	// کنترل پدال بازیکن با کلیدهای جهت‌نما
	document.addEventListener("keydown", (e) => {
		e.preventDefault();
		if (userPedalY < -290) {
			if (e.key === "ArrowDown") {
				userPedalY += 20;
			}
		} else if (userPedalY > 290) {
			if (e.key === "ArrowUp") {
				userPedalY -= 20;
			}
		} else if (
			userPedalY >
			gameplayPage.offsetHeight - userPedal.offsetHeight
		) {
			userPedalY = gameplayPage.offsetHeight - userPedal.offsetHeight;
		} else {
			if (e.key === "ArrowUp") {
				userPedalY -= 10;
			} else if (e.key === "ArrowDown") {
				userPedalY += 10;
			}
		}
		// جلوگیری از خروج پدال از صفحه بازی
	});

	function changeImg() {
		let BallCode = ChoosingBall.options[ChossingBall.selectedIndex].value;
		Choosing_ballimg.src = `img/Balls/${BallCode}.png`;
		return `img/Balls/${BallCode}.png`;
	}
	ChoosingBall.addEventListener("change", changeImg);

	const creatPingPongGame = () => {
		games__aria_img_section.classList.add("hide");
		start_gameBTN.classList.add("hide");
		game_area.classList.remove("hide");
		score = 0;

		pingBall.src = changeImg();
		// شروع شمارش معکوس
		initiateCountdown();
	};
	start_gameBTN.addEventListener("click", creatPingPongGame);

	const rematchGame = () => {
		PingPongGame();
	};
	game_rematch_btn.addEventListener("click", rematchGame);

	game_home_btn.addEventListener("click", GotoHome);
};

//PingPongEL.addEventListener("click", PingPongGame);
