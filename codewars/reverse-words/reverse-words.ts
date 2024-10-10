export const reverseWords = (str: string): string => str.split(" ").map(word => word.split("").reverse().join('')).join(' ');
