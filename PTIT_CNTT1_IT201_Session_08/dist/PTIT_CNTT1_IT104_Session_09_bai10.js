function hasAllUniqueChars(s) {
    const seen = new Set();
    for (const ch of s.toLowerCase()) {
        if (seen.has(ch))
            return false;
        seen.add(ch);
    }
    return true;
}
export function findLongestUniqueWord(sentence) {
    const words = sentence.match(/\p{L}+/gu) ?? sentence.trim().split(/\s+/);
    let best;
    for (const w of words) {
        if (hasAllUniqueChars(w)) {
            if (!best || w.length > best.length)
                best = w;
        }
    }
    return best;
}
console.log(findLongestUniqueWord("hello world apple banana orange pumpkin cucumber"));
