const global = {
	hello: "\nПривет! Время начать игру!\n",
	chooseGame:
		'\nВыбери игру, в которую хочешь сыграть:\n\n"1" — «Рыцарь, дракон или принцесса»,\n"2" — «Поле чудес»\n"3" — «У кого слово длиннее»,\n"4" — «Блэк Джек»\n"5" — «Правда или ложь»\n"6" — «Бросим монетку»\n"7" — Закончить игру\n',
	playAgain: `Варианты продолжения:\n\n"1" — Сыграть снова в эту игру\n"2" — Выбрать другую игру\n"3" — Закончить игру\n`,
	goodbye: "\nСпасибо за игру! До свидания!",
	win: "\nУра! Полная победа! Что делаем дальше?\n",
	lose: "\nВ этой игре поражение, но не отчаивайся. Что делаем дальше?\n",
	draw: "\nВ этой игре ничья. Что делаем дальше?\n",
	wrongInput: "\nНеправильный ввод.",
};

const blackjack = {
	welcome:
		"\nЙо-хо-хо и бутылка рома! Предлагаем сразиться с Собакой наудачу в самого пиратского Блэк Джека!\nПравила просты: набери 21 очко или как можно ближе к этому числу, главное — не больше. Очки каждой карты равны её номиналу, кроме валета, дамы и короля, которые равны 10, и туза, который равен 11.\nДа пребудет с тобой удача!\n",
	suits: ["Пики", "Трефы", "Червы", "Бубны"],
	values: [
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"Валет",
		"Дама",
		"Король",
		"Туз",
	],
	yourHand: "Твои карты:",
	yourPoints: "Твои очки:",
	dogHand: "Карты Собаки:",
	dogPoints: "Очки Собаки:",
	oneMoreHidden: "и еще одна скрытая",
	takeCard: 'Взять карту?\n"1" — Да,\n"2" — Нет\n',
	dogShows: "Собака показывает свою скрытую карту:",
	dogGets: "Собака получила",
	overflow: "Перебор. Увы, проигрыш.",
	win: "Победа над Собакой!",
	lose: "Собака победила.",
	draw: "Ничья.",
};

const coin = {
	welcome:
		"\nЦэ-эс-эсочка придумала самую простую игру на свете: просто подбрось монетку. Выбери «Орёл» или «Решка» и посмотри, на твоей ли стороне удача!\n",
	question: 'Выбери «Орёл» или «Решка»\n"1" — «Орёл»,\n"2" — «Решка»\n',
	win: "Повезло!",
	lose: "Увы! Это",
};

const words = {
	welcome:
		"\nСобака сегодня полна энтузиазма и предлагает новую игру: у кого слово длиннее.\nТвоя задача — вспомнить и собрать максимально длинное слово из тех букв, что появились в консоли (а мы в словаре проверим на честность!). В это время Собака соберёт своё. У кого получится длиннее, тот и победил.\nУдачи!\n",
	variants: [
		{
			letters: "бнтрпсбооспооьонстокоб",
			word: "обороноспособность",
		},
		{
			letters: "пегзуоерркпасйыцл",
			word: "перегрузка",
		},
		{
			letters: "итимоаипзозмефрйяцю",
			word: "оптимизация",
		},
	],
	dictionaryApiKey:
		"dict.1.1.20240213T152155Z.9e6cbc673a22ddfc.c6c72b58361fdb952acdfef2343081ed9cd0dfd4",
	dictionaryError: "Произошла ошибка при выполнении запроса к словарю:",
	inputYourWord: "\nВведи своё слово:\n",
	letters: "Вот буквы, из которых нужно составить слово любой длины:\n",
	yourWord: "Твоё слово:",
	dogWord: "Слово Собаки:",
	isInDictionary: "Твоё слово есть в словаре русского языка. Всё хорошо.",
	isNotInDictionary: "В словаре русского языка нет твоего слова.",
	couldBeFormed: "— это слово можно составить из предложенных букв.",
	couldNotBeFormed: "Ошибка: из предоставленных букв нельзя составить слово",
	win: "Твоё слово длиннее слова от Собаки, победа!",
	lose: "Слово от Собаки длиннее твоего слова, проигрыш.",
	draw: "Слова одинаковой длины, ничья.",
	someError: "Произошла ошибка.",
};

const poleChudes = {
	welcome:
		"\nАски приготовил для тебя игру «Поле чудес», в которой тебе предстоит угадать слово по буквам.\nЖелаем удачи!\n",
	variants: [
		{
			question:
				"\nНазвание самого высокого горного хребта в мире, расположенного в Гималаях, — ■в■■■■■\n",
			answer: "Эверест",
		},
		{
			question:
				"\nКакой металл используется для создания зеркал? — ■■р■■■■\n",
			answer: "серебро",
		},
		{
			question:
				"\nКакое свойство CSS используется для задания цвета текста элемента? — ■о■■■\n",
			answer: "color",
		},
	],
	win: "Правильно!",
	lose: "Увы, неправильно. Ответ:",
};

const knightDragonAndPrincess = {
	welcome:
		"\nИ снова игра от Аски: «Рыцарь, дракон или принцесса»! На чьей ты сегодня стороне? Выбирай скорее одну из трёх ролей, но учти, что игра похожа на «камень, ножницы, бумага».\nПравила просты: рыцарь побеждает дракона, дракон похищает принцессу, принцесса очаровывает рыцаря.\n",
	roles: ["Рыцарь", "Дракон", "Принцесса"],
	wrongInput: "Неправильный ввод.",
	yorChoice: "Твой выбор:",
	computerChoice: "Выбор Аски:",
	draw: "Ничья!",
	knightAndDragon: "Победа! Рыцарь победил дракона!",
	dragonAndPrincess: "Победа! Дракон похитил принцессу!",
	princessAndKnight: "Победа! Принцесса очаровала рыцаря!",
	dragonAndKnight: "Поражение! Дракон побежден рыцарем!",
	princessAndDragon: "Поражение! Принцесса похищена драконом!",
	knightAndPrincess: "Поражение! Рыцарь очарован принцессой!",
	question:
		'Выбери Рыцаря, Дракона или Принцессу.\n"1" — "Рыцарь",\n"2" — "Дракон"\n"3" — "Принцесса"\n',
};

const trueOrFalse = {
	welcome:
		"\nЦэ-эс-эсочка передаёт привет и предлагает тебе игру… «Правда или ложь»! Она задаст три вопроса, на которые нужно ответить одним словом: правда это или ложь. Для победы необходимо два или три правильных ответа.\nУдачи в правдивых играх!\n",
	facts: [
		{
			fact: "\nКрокодилы могут дышать под водой при помощи небольших отверстий на верхней части своих голов.\n",
			isTrue: true,
			response:
				"Это правда. Крокодилы действительно могут задерживать дыхание и находиться под водой, а когда они всплывают, они могут дышать через небольшие отверстия на верхней части своих морд.",
		},
		{
			fact: "\nВ некоторых частях Австралии кенгуру участвуют в гонках, их зовут «кенгуринг».\n",
			isTrue: false,
			response:
				"Это ложь. Хотя кенгуру могут быть быстрыми, их не используют для гонок.",
		},
		{
			fact: "\nВ Исландии существует традиция, согласно которой в день рождения человека он должен одарить других подарками.\n",
			isTrue: false,
			response:
				"Это ложь. В Исландии нет такой традиции. Однако есть традиция «скатерти на волшебном столе», когда именинник угощает других на свой день рождения.",
		},
		{
			fact: "\nЕдинороги были официальным символом Шотландии до конца XV века.\n",
			isTrue: false,
			response:
				"Это ложь. Единороги никогда не были официальным символом Шотландии.",
		},
		{
			fact: "\nЛимоны содержат больше сахара, чем клубника.\n",
			isTrue: true,
			response:
				"Это правда. Лимоны содержат больше сахара, чем клубника.",
		},
	],
	question: '\nПравда или ложь?\n"1" — Правда,\n"2" — Ложь\n',
	correct: "Правильно! ",
	incorrect: "Неправильно! ",
	numberOfCorrect: `Правильных ответов: `,
};

module.exports = {
	global,
	blackjack,
	coin,
	words,
	poleChudes,
	knightDragonAndPrincess,
	trueOrFalse,
};
