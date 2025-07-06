export function romanToInt(s: string): number {

    let number = 0;
    const romanNumerals: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for (let i = 0; i < s.length; i++) {
        const current = romanNumerals[s[i]];
        const next = romanNumerals[s[i + 1]];

        if (next && current < next) {
            number -= current; // Subtract if the current numeral is less than the next
        } else {
            number += current; // Otherwise, add it
        }
    }

    return number;
};
