

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

function isValidNumber(value) {
    const trimmed = String(value).trim();


    if (trimmed === "") return false;

    const num = Number(trimmed);

 
    return Number.isFinite(num);
}

const validNumbers = [];
const invalidNumbers = [];



for (let i = 0; i < apiData.length; i++) {
    const item = apiData[i];


    const asString = String(item);
    const asBoolean = Boolean(item);
    const asNumber = Number(item);

    console.log(`Item #${i}:`, item);
    console.log(`  ➤ String  : "${asString}"`);
    console.log(`  ➤ Boolean : ${asBoolean}`);


    if (isValidNumber(item)) {
        console.log(`  ➤ Number  : ${asNumber} (valid)`);
        validNumbers.push(asNumber);
    } else {
        console.log(`  ➤ Number  : INVALID (${asNumber})`);
        invalidNumbers.push({ original: item, converted: asNumber });
    }

  
}

console.log("\n===== Summary =====");
console.log("Valid Numbers :", validNumbers);
console.log("Invalid Items :", invalidNumbers);
console.log(`Counts → Valid: ${validNumbers.length}, Invalid: ${invalidNumbers.length}`);
