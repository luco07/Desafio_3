// Array original
const originalArray = [1, 2, 3, 4, 5];

// Agregar información adicional al array utilizando el spread operator
const modifiedArray = [...originalArray.map((element) => element * 2)];

// Mostrar el array original y el array modificado
console.log("Array original:", originalArray);
console.log("Array modificado:", modifiedArray);