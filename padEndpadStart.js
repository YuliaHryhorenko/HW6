function pad(string, symbol, length, padStart) {
    // Перевірка щоб зрозуміти, треба додавати символи на початку чи в кінці стрінги
    if (padStart) {
        // якщо тру, додаємо символи на початку
        for (let i = 0; i < length; i++) {
            if (string.length < length) { // перевіряю, чи потрібно додавати символ
                string = symbol + string;
            }
        }
    } else {
        // якщо фолс, додаємо символи до кінця рядка
        for (let i = 0; i < length; i++) {
            if (string.length < length) { // перевіряю, чи потрібно додавати символ
                string = string + symbol;
            }
        }
    }
    return string;
}

console.log(pad('test', '+', 8, true)); 
console.log(pad('test', '+', 6, false));
