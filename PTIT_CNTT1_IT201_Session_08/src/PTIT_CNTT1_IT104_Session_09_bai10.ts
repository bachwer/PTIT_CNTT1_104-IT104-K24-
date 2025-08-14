function hasAllUniqueChars(s: string): boolean {
    const seen = new Set<string>();
    for (const ch of s.toLowerCase()) {
        if (seen.has(ch)) return false;
        seen.add(ch);
    }
    return true;
}


export function findLongestUniqueWord(sentence: string): string | undefined {

    const words =
        sentence.match(/\p{L}+/gu) ?? sentence.trim().split(/\s+/);

    let best: string | undefined;
    for (const w of words) {
        if (hasAllUniqueChars(w)) {
            if (!best || w.length > best.length) best = w;
        }
    }
    return best;
}


console.log(
    findLongestUniqueWord("hello world apple banana orange pumpkin cucumber")
);