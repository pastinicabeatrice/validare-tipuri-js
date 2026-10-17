class InvalidTypeError extends Error {
    constructor() {
        super("InvalidType");
        this.name = "InvalidTypeError";
    }
}

const rle = (str, shouldCompress = true) => {
    if (typeof str !== 'string' && !(str instanceof String)) {
        throw new InvalidTypeError();
    }
    if (typeof shouldCompress !== 'boolean') {
        throw new InvalidTypeError();
    }

    if (shouldCompress) {
        let compressedString = '';
        let repeatCount = 1;

        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i + 1]) {
                repeatCount++;
            } else {
                compressedString += str[i] + repeatCount;  
                repeatCount = 1;
            }
        }
        return compressedString;
    } else {
        let decompressedString = '';
        const pattern = /([a-zA-Z])(\d*)/g;
        let matchResult;

        while ((matchResult = pattern.exec(str)) !== null) {
            const character = matchResult[1];
            const occurrences = parseInt(matchResult[2], 10) || 1;
            decompressedString += character.repeat(occurrences);
        }
        return decompressedString;
    }
};

module.exports = rle;
