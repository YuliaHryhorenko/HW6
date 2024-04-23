function checkProbabilityTheory(count) {
  let randomNumbers = [];
  let evenCount = 0;
  let oddCount = 0;

  // Генеруємо випадкові числа та додаємо їх до масиву
  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * 900) + 100;
    randomNumbers.push(randomNumber);
    if (randomNumber % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  console.log(`Кількість згенерованих чисел: ${count}`);
  console.log(`Кількість парних чисел: ${evenCount}`);
  console.log(`Кількість непарних чисел: ${oddCount}`);

  // визначаємо відсоток паних до непарних чисел
  if (oddCount === 0) {
    console.log(
      `Відсоток парних до непарних: непарне число не було згенеровано`
    );
  } else {
    let evenToOdd = (evenCount / oddCount) * 100;
    console.log(`Відсоток парних до непарних: ${evenToOdd}%`);
  }

  return randomNumbers;
}

let numbers = checkProbabilityTheory(4);
console.log(numbers);
