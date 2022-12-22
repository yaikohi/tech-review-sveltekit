export function shuffleArray(array: any[]) {
	const copy = array.map((i) => i);

	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
    
    return copy;
}
