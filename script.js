function calculateIMC() {
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");

  const weight = weightInput.value;
  const height = heightInput.value;

  if (weight === "" || height === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Insira valores válidos para peso e altura!");
    return;
  }

  const heightInMeters = height / 100;
  let imc = weight / (heightInMeters * heightInMeters);
  let classification = "";

  if (imc < 18.5) {
    classification = "Magreza";
  } else if (imc < 25) {
    classification = "Normal";
  } else if (imc < 30) {
    classification = "Sobrepeso";
  } else {
    classification = "Obesidade";
  }

  let imcResult = document.getElementById("result");
  imcResult.innerHTML = `IMC = ${imc.toFixed(
    2
  )} - Sua classificação é:  ${classification}`;
}
