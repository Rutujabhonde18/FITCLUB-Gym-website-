// Hamberger menue button
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// BMI calculation
function calcBMI() {
  let weight = parseFloat(document.getElementById("bmiWeight").value);
  let height = parseFloat(document.getElementById("bmiHeight").value);

  let bmiVal = document.getElementById("bmiVal");
  let bmiCat = document.getElementById("bmiCat");

  if (!weight || !height || weight <= 0 || height <= 0) {
    bmiVal.textContent = "0.0";
    bmiCat.textContent = "Please enter valid weight and height";
    return;
  }

  // Convert cm to meters
  height = height / 100;

  // BMI Formula
  let bmi = weight / (height * height);
  bmi = bmi.toFixed(1);

  bmiVal.textContent = bmi;

  // BMI Category
  if (bmi < 18.5) {
    bmiCat.innerText = "Underweight";
  } else if (bmi < 25) {
    bmiCat.innerText = "Normal Weight";
  } else if (bmi < 30) {
    bmiCat.innerText = "Overweight";
  } else {
    bmiCat.innerText = "Obese";
  }
}
