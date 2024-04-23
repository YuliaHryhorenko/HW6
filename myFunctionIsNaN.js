function myFunctionIsNaN(x) {
  let value = +x; // Перетворюємо аргумент у число

  // Перевіряємо, чи значення є NaN
  if (value !== value) {
    console.log(`It is NAN`);
    return;
  } // Перевіряємо, чи аргумент не є числом
  else if (typeof value !== "number") {
    console.log(`It is NAN`);
    return;
  } // Якщо аргумент є числом або null
  else {
    console.log(`It is NOT NAN because it is a valid number or null.`);
  }
}

myFunctionIsNaN(NaN);
myFunctionIsNaN("test555");
myFunctionIsNaN("test");
myFunctionIsNaN(undefined);

myFunctionIsNaN(null);
myFunctionIsNaN(555);
myFunctionIsNaN("555");
