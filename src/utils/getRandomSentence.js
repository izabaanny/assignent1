const sentences = [
	"hi",
	"hi 2",
	"umeze gute. neza ntakibayo.",
	" ndabakumbuye cyane.",
	"Subwo urahagera ryari ma.",
	"uzekunyibutsa mbikoherereze.",
	"thank am still waiting.",
	//"Imibu na bene wanyu apana yayindi ya kacyiru chou.",
	//"He enjoys practicing his ballet in the bathroom.",
	//"Can we go to Nyabugogo .",
	//"Wapiiii igifu kirananyishe.",
	//"Quincailler se yande.",
	//"Ndaza kuyoherez fatu ambikire.",
	//"can i bring you something to eat babe.",
	 
];

const getRandomSentence = () => {
	const randomIndex = Math.floor(Math.random() * sentences.length);
	const sentence = sentences[randomIndex];
	return sentence;
};

export default getRandomSentence;
