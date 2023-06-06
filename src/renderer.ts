// Use preload.js to selectively enable features
// needed in the renderer process.
let content = '';
let days = 0;
const gameData = {
	"Sid": "11558",
	"Snm": "Regular season",
	"Scd": "regular-season",
	"Cnm": "NBA",
	"Csnm": "NBA",
	"Ccd": "nba",
	"Scu": 0,
	"Events": [
		{
			"Eid": "786300",
			"Pids": {
				"8": "786300",
				"12": "SBTE_28677336"
			},
			"Tr1": "108",
			"Tr2": "128",
			"Tr1OR": "108",
			"Tr2OR": "128",
			"Tr1Q1": "25",
			"Tr2Q1": "35",
			"Tr1Q2": "27",
			"Tr2Q2": "32",
			"Tr1Q3": "37",
			"Tr2Q3": "34",
			"Tr1Q4": "19",
			"Tr2Q4": "27",
			"T1": [
				{
					"Nm": "Charlotte Hornets",
					"ID": "1891",
					"Img": "enet/58755.png",
					"Abr": "CHA"
				}
			],
			"T2": [
				{
					"Nm": "Toronto Raptors",
					"ID": "2412",
					"Img": "enet/58539.png",
					"Abr": "TOR"
				}
			],
			"Eps": "FT",
			"Esid": 6,
			"Epr": 2,
			"Ecov": 0,
			"ErnInf": "1",
			"Ewt": 2,
			"Et": 1,
			"Esd": 20230402100000,
			"EO": 524389,
			"EOX": 524389,
			"Spid": 23,
			"Pid": 8
		},
		{
			"Eid": "786312",
			"Pids": {
				"8": "786312",
				"12": "SBTE_28677265"
			},
			"Tr1": "111",
			"Tr2": "110",
			"Tr1OR": "111",
			"Tr2OR": "110",
			"Tr1Q1": "30",
			"Tr2Q1": "17",
			"Tr1Q2": "23",
			"Tr2Q2": "25",
			"Tr1Q3": "32",
			"Tr2Q3": "26",
			"Tr1Q4": "26",
			"Tr2Q4": "42",
			"T1": [
				{
					"Nm": "Brooklyn Nets",
					"ID": "1906",
					"Img": "enet/58535.png",
					"Abr": "BRO"
				}
			],
			"T2": [
				{
					"Nm": "Utah Jazz",
					"ID": "1890",
					"Img": "enet/58545.png",
					"Abr": "UTA"
				}
			],
			"Eps": "FT",
			"Esid": 6,
			"Epr": 2,
			"Ecov": 0,
			"ErnInf": "1",
			"Ewt": 1,
			"Et": 1,
			"Esd": 20230402123000,
			"EO": 524389,
			"EOX": 524389,
			"Spid": 23,
			"Pid": 8
		},
		{
			"Eid": "786317",
			"Pids": {
				"8": "786317",
				"12": "SBTE_28677266"
			},
			"Tr1": "128",
			"Tr2": "107",
			"Tr1OR": "128",
			"Tr2OR": "107",
			"Tr1Q1": "25",
			"Tr2Q1": "36",
			"Tr1Q2": "28",
			"Tr2Q2": "32",
			"Tr1Q3": "40",
			"Tr2Q3": "16",
			"Tr1Q4": "35",
			"Tr2Q4": "23",
			"T1": [
				{
					"Nm": "Chicago Bulls",
					"ID": "119",
					"Img": "enet/58544.png",
					"Abr": "CHI"
				}
			],
			"T2": [
				{
					"Nm": "Memphis Grizzlies",
					"ID": "1886",
					"Img": "enet/58551.png",
					"Abr": "MEM"
				}
			],
			"Eps": "FT",
			"Esid": 6,
			"Epr": 2,
			"Ecov": 0,
			"ErnInf": "1",
			"Ewt": 1,
			"Et": 1,
			"Esd": 20230402123000,
			"EO": 524389,
			"EOX": 524389,
			"Spid": 23,
			"Pid": 8
		},
		{
			"Eid": "786308",
			"Pids": {
				"8": "786308",
				"12": "SBTE_28677267"
			},
			"Tr1": "105",
			"Tr2": "107",
			"Tr1OR": "105",
			"Tr2OR": "107",
			"Tr1Q1": "29",
			"Tr2Q1": "31",
			"Tr1Q2": "33",
			"Tr2Q2": "25",
			"Tr1Q3": "24",
			"Tr2Q3": "26",
			"Tr1Q4": "19",
			"Tr2Q4": "25",
			"T1": [
				{
					"Nm": "Minnesota Timberwolves",
					"ID": "157",
					"Img": "enet/58548.png",
					"Abr": "MIN"
				}
			],
			"T2": [
				{
					"Nm": "Portland Trail Blazers",
					"ID": "158",
					"Img": "enet/58552.png",
					"Abr": "POR"
				}
			],
			"Eps": "FT",
			"Esid": 6,
			"Epr": 2,
			"Ecov": 0,
			"ErnInf": "1",
			"Ewt": 2,
			"Et": 1,
			"Esd": 20230402123000,
			"EO": 524389,
			"EOX": 524389,
			"Spid": 23,
			"Pid": 8
		},
		{
			"Eid": "786330",
			"Pids": {
				"8": "786330",
				"12": "SBTE_28677268"
			},
			"Tr1": "132",
			"Tr2": "130",
			"Tr1OR": "123",
			"Tr2OR": "123",
			"Tr1OT": "9",
			"Tr2OT": "7",
			"Tr1Q1": "37",
			"Tr2Q1": "29",
			"Tr1Q2": "33",
			"Tr2Q2": "37",
			"Tr1Q3": "24",
			"Tr2Q3": "25",
			"Tr1Q4": "29",
			"Tr2Q4": "32",
			"T1": [
				{
					"Nm": "Atlanta Hawks",
					"ID": "1865",
					"Img": "enet/58543.png",
					"Abr": "ATL"
				}
			],
			"T2": [
				{
					"Nm": "Dallas Mavericks",
					"ID": "1888",
					"Img": "enet/58547.png",
					"Abr": "DAL"
				}
			],
			"Eps": "OT",
			"Esid": 36,
			"Epr": 2,
			"Ecov": 0,
			"ErnInf": "1",
			"Ewt": 1,
			"Et": 1,
			"Esd": 20230402150000,
			"EO": 524389,
			"EOX": 524389,
			"Spid": 23,
			"Pid": 8
		},
		{
			"Eid": "786327",
			"Pids": {
				"8": "786327",
				"12": "SBTE_28677270"
			},
			"Tr1": "118",
			"Tr2": "109",
			"Tr1OR": "118",
			"Tr2OR": "109",
			"Tr1Q1": "34",
			"Tr2Q1": "31",
			"Tr1Q2": "19",
			"Tr2Q2": "30",
			"Tr1Q3": "33",
			"Tr2Q3": "18",
			"Tr1Q4": "32",
			"Tr2Q4": "30",
			"T1": [
				{
					"Nm": "New York Knicks",
					"ID": "1880",
					"Img": "enet/58511.png",
					"Abr": "NEW"
				}
			],
			"T2": [
				{
					"Nm": "Washington Wizards",
					"ID": "1864",
					"Img": "enet/58536.png",
					"Abr": "WAS"
				}
			],
			"Eps": "FT",
			"Esid": 6,
			"Epr": 2,
			"Ecov": 0,
			"ErnInf": "1",
			"Ewt": 1,
			"Et": 1,
			"Esd": 20230402150000,
			"EO": 524389,
			"EOX": 524389,
			"Spid": 23,
			"Pid": 8
		},
		{
			"Eid": "786331",
			"Pids": {
				"8": "786331",
				"12": "SBTE_28677271"
			},
			"Tr1": "128",
			"Tr2": "102",
			"Tr1OR": "128",
			"Tr2OR": "102",
			"Tr1Q1": "34",
			"Tr2Q1": "29",
			"Tr1Q2": "29",
			"Tr2Q2": "15",
			"Tr1Q3": "28",
			"Tr2Q3": "24",
			"Tr1Q4": "37",
			"Tr2Q4": "34",
			"T1": [
				{
					"Nm": "Orlando Magic",
					"ID": "1909",
					"Img": "enet/58510.png",
					"Abr": "ORL"
				}
			],
			"T2": [
				{
					"Nm": "Detroit Pistons",
					"ID": "2014",
					"Img": "enet/58542.png",
					"Abr": "DET"
				}
			],
			"Eps": "FT",
			"Esid": 6,
			"Epr": 2,
			"Ecov": 0,
			"ErnInf": "1",
			"Ewt": 1,
			"Et": 1,
			"Esd": 20230402150000,
			"EO": 524389,
			"EOX": 524389,
			"Spid": 23,
			"Pid": 8
		},
		{
			"Eid": "786332",
			"Pids": {
				"8": "786332",
				"12": "SBTE_28677272"
			},
			"Tr1": "134",
			"Tr2": "142",
			"Tr1OR": "123",
			"Tr2OR": "123",
			"Tr1OT": "11",
			"Tr2OT": "19",
			"Tr1Q1": "30",
			"Tr2Q1": "32",
			"Tr1Q2": "28",
			"Tr2Q2": "31",
			"Tr1Q3": "34",
			"Tr2Q3": "33",
			"Tr1Q4": "31",
			"Tr2Q4": "27",
			"T1": [
				{
					"Nm": "Sacramento Kings",
					"ID": "141",
					"Img": "enet/58554.png",
					"Abr": "SAC"
				}
			],
			"T2": [
				{
					"Nm": "San Antonio Spurs",
					"ID": "1887",
					"Img": "enet/58546.png",
					"Abr": "SAN"
				}
			],
			"Eps": "OT",
			"Esid": 36,
			"Epr": 2,
			"Ecov": 0,
			"ErnInf": "1",
			"Ewt": 2,
			"Et": 1,
			"Esd": 20230402150000,
			"EO": 524389,
			"EOX": 524389,
			"Spid": 23,
			"Pid": 8
		},
		{
			"Eid": "786313",
			"Pids": {
				"8": "786313",
				"12": "SBTE_28677273"
			},
			"Tr1": "109",
			"Tr2": "134",
			"Tr1OR": "109",
			"Tr2OR": "134",
			"Tr1Q1": "21",
			"Tr2Q1": "35",
			"Tr1Q2": "39",
			"Tr2Q2": "35",
			"Tr1Q3": "23",
			"Tr2Q3": "31",
			"Tr1Q4": "26",
			"Tr2Q4": "33",
			"T1": [
				{
					"Nm": "Houston Rockets",
					"ID": "140",
					"Img": "enet/58549.png",
					"Abr": "HOU"
				}
			],
			"T2": [
				{
					"Nm": "LA Lakers",
					"ID": "1889",
					"Img": "enet/58553.png",
					"Abr": "LAL"
				}
			],
			"Eps": "FT",
			"Esid": 6,
			"Epr": 2,
			"Ecov": 0,
			"ErnInf": "1",
			"Ewt": 2,
			"Et": 1,
			"Esd": 20230402160000,
			"EO": 524389,
			"EOX": 524389,
			"Spid": 23,
			"Pid": 8
		},
		{
			"Eid": "786311",
			"Pids": {
				"8": "786311",
				"12": "SBTE_28677274"
			},
			"Tr1": "118",
			"Tr2": "128",
			"Tr1OR": "118",
			"Tr2OR": "128",
			"Tr1Q1": "27",
			"Tr2Q1": "27",
			"Tr1Q2": "28",
			"Tr2Q2": "42",
			"Tr1Q3": "34",
			"Tr2Q3": "29",
			"Tr1Q4": "29",
			"Tr2Q4": "30",
			"T1": [
				{
					"Nm": "Oklahoma City Thunder",
					"ID": "139",
					"Img": "enet/58556.png",
					"Abr": "OKL"
				}
			],
			"T2": [
				{
					"Nm": "Phoenix Suns",
					"ID": "1908",
					"Img": "enet/58555.png",
					"Abr": "PHO"
				}
			],
			"Eps": "FT",
			"Esid": 6,
			"Epr": 2,
			"Ecov": 0,
			"ErnInf": "1",
			"Ewt": 2,
			"Et": 1,
			"Esd": 20230402160000,
			"EO": 524389,
			"EOX": 524389,
			"Spid": 23,
			"Pid": 8
		},
		{
			"Eid": "786225",
			"Pids": {
				"8": "786225",
				"12": "SBTE_28677275"
			},
			"Tr1": "115",
			"Tr2": "105",
			"Tr1OR": "115",
			"Tr2OR": "105",
			"Tr1Q1": "28",
			"Tr2Q1": "28",
			"Tr1Q2": "31",
			"Tr2Q2": "33",
			"Tr1Q3": "27",
			"Tr2Q3": "26",
			"Tr1Q4": "29",
			"Tr2Q4": "18",
			"T1": [
				{
					"Nm": "Cleveland Cavaliers",
					"ID": "2015",
					"Img": "enet/58541.png",
					"Abr": "CLE"
				}
			],
			"T2": [
				{
					"Nm": "Indiana Pacers",
					"ID": "120",
					"Img": "enet/58540.png",
					"Abr": "IND"
				}
			],
			"Eps": "FT",
			"Esid": 6,
			"Epr": 2,
			"Ecov": 0,
			"ErnInf": "1",
			"Ewt": 1,
			"Et": 1,
			"Esd": 20230402170000,
			"EO": 524389,
			"EOX": 524389,
			"Spid": 23,
			"Pid": 8
		},
		{
			"Eid": "786224",
			"Pids": {
				"8": "786224",
				"12": "SBTE_28677276"
			},
			"Tr1": "117",
			"Tr2": "104",
			"Tr1OR": "117",
			"Tr2OR": "104",
			"Tr1Q1": "41",
			"Tr2Q1": "26",
			"Tr1Q2": "28",
			"Tr2Q2": "27",
			"Tr1Q3": "27",
			"Tr2Q3": "29",
			"Tr1Q4": "21",
			"Tr2Q4": "22",
			"T1": [
				{
					"Nm": "Milwaukee Bucks",
					"ID": "142",
					"Img": "enet/58537.png",
					"Abr": "MIL"
				}
			],
			"T2": [
				{
					"Nm": "Philadelphia 76ers",
					"ID": "1928",
					"Img": "enet/58509.png",
					"Abr": "PHI"
				}
			],
			"Eps": "FT",
			"Esid": 6,
			"Epr": 2,
			"Ecov": 0,
			"ErnInf": "1",
			"Ewt": 1,
			"Et": 1,
			"Esd": 20230402170000,
			"EO": 524389,
			"EOX": 524389,
			"Spid": 23,
			"Pid": 8
		},
		{
			"Eid": "786237",
			"Pids": {
				"8": "786237",
				"12": "SBTE_28677277"
			},
			"Tr1": "112",
			"Tr2": "110",
			"Tr1OR": "112",
			"Tr2OR": "110",
			"Tr1Q1": "26",
			"Tr2Q1": "36",
			"Tr1Q2": "32",
			"Tr2Q2": "25",
			"Tr1Q3": "31",
			"Tr2Q3": "26",
			"Tr1Q4": "23",
			"Tr2Q4": "23",
			"T1": [
				{
					"Nm": "Denver Nuggets",
					"ID": "2382",
					"Img": "enet/58550.png",
					"Abr": "DEN"
				}
			],
			"T2": [
				{
					"Nm": "Golden State Warriors",
					"ID": "182",
					"Img": "enet/58558.png",
					"Abr": "GOL"
				}
			],
			"Eps": "FT",
			"Esid": 6,
			"Epr": 2,
			"Ecov": 0,
			"ErnInf": "1",
			"Ewt": 1,
			"Et": 1,
			"Esd": 20230402173000,
			"EO": 524389,
			"EOX": 524389,
			"Spid": 23,
			"Pid": 8
		}
	]
};

const prevButton = document.querySelector('.js-previous-scores');
const nextButton = document.querySelector('.js-next-scores');
const quitButton = document.querySelector('.js-quit-action');

prevButton.addEventListener('click', () => {
	days -= 1;
	getScores();
});
nextButton.addEventListener('click', () => {
	days += 1;
	getScores();
});
quitButton.addEventListener('click', () => {
	window.close();
});


const getScores = async () => {
	const currentDate = new Date();
	currentDate.setDate(currentDate.getDate() + days);

	document.querySelector('.title').innerHTML = currentDate.toLocaleDateString('en-us', {
		weekday: 'long',
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});

	function formatDate(date) {
		const year = date.toLocaleString('default', { year: 'numeric' });
		const month = date.toLocaleString('default', { month: '2-digit' });
		const day = date.toLocaleString('default', { day: '2-digit' });

		return [year, month, day].join('');
	}

	const formattedDate = formatDate(currentDate);
	console.log(formattedDate);

	try {
		// const KEY = window.atob('OGQzYzE3ZGFmM21zaDhiYTMwZjVhMDk3ZGFhYnAxNjdhMjdqc24yY2E1MDYwZTc5ODc=');
		// const response = await fetch("https://livescore6.p.rapidapi.com/matches/v2/list-by-date?Category=basketball&Date=20230402&Timezone=-7", {
		// 	method: 'GET',
		// 	headers: {
		// 		'X-RapidAPI-Key': KEY,
		// 		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
		// 	}
		// });
		// const result = await response.json();
		console.log("Dummy game data");
		return gameData.Events.map(game => updateView(game));
	} catch (error) {
		console.error(error);
	}


};

const updateView = (game) => {
	return gameOver(game);
};

const gameOver = game => {
	content += `
  <div class="game-box">
    <div class="column">
      <img src="./assets/nba/teams/${game.T1[0].Abr}.png" alt="...">
    </div>
    <div class="column">
      <div class="primary">${game.Tr1}</div>
      <div class="description">${game.T1[0].Abr}</div>
    </div>
    <div class="column">
      <div class="description">FINAL</div>
    </div>
    <div class="column">
      <div class="primary">${game.Tr2}</div>
      <div class="description">${game.T2[0].Abr}</div>
    </div>
    <div class="column">
      <img src="./assets/nba/teams/${game.T2[0].Abr}.png" alt="...">
    </div>
  </div>
  `;
	document.querySelector('.pane').innerHTML = content;
};

document.addEventListener('DOMContentLoaded', getScores);