module.exports = function(wordsOfTheDay){
	const splitWords = wordsOfTheDay.split('|');
	let ps = 'S';
	return (
		`	<p>
				Daily Mail Here. <br><br>
				${splitWords.shift()} <br><br>
				Love, <br><br>
				Dan
			</p>
			${splitWords.map(words => {
				ps = `P${ps}`;
				return `${ps} ${splitWords.shift()}`
			}).join('<br>')}

		`
	)
}