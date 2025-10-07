function addNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let sum = n1 + n2;

  document.getElementById("result").textContent = "Result: " + sum;
}
function subNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let sum = n1 - n2;

  document.getElementById("result").textContent = "Result: " + sum;
}
function multNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let sum = n1 * n2;

  document.getElementById("result").textContent = "Result: " + sum;
}
function divNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let sum = n1 / n2;

  document.getElementById("result").textContent = "Result: " + sum;
}

document.getElementById("addBtn").addEventListener("click", addNumbers);
document.getElementById("subBtn").addEventListener("click", subNumbers);
document.getElementById("multBtn").addEventListener("click", multNumbers);
document.getElementById("divBtn").addEventListener("click", divNumbers);