const sliders = document.querySelectorAll(".slider");
console.log(sliders);
sliders.forEach(function (slider) {
  slider.addEventListener("input", calculateTip);
});
const billInput = document.getElementById("billValue");
billInput.addEventListener("change", calculateTip);

function calculateTip() {
  const bill = parseFloat(billInput.value);
  const tipPercent = document.getElementById("tipSlider").value;

  const noOfPeople = document.getElementById("peopleSlider").value;
  billInput.value = bill.toFixed(2);
  const totalTip = parseFloat((bill * (tipPercent / 100)).toFixed(2));
  const totalAmt = parseFloat((bill + totalTip).toFixed(2));

  const tipPerPerson = (totalTip / noOfPeople).toFixed(2);
  const totalPerPerson = (totalAmt / noOfPeople).toFixed(2);

  document.querySelector(".tipAmt").innerHTML = `$ ${totalTip}`;
  document.querySelector(".totalAmt").innerHTML = `$ ${totalAmt}`;
  document.querySelector(".tipPercentVal").innerHTML = `${tipPercent} %`;
  document.querySelector(".people").innerHTML = `${noOfPeople}`;

  if (
    parseFloat(billInput.value) <= 1 ||
    Number(tipPercent) === 0 ||
    Number(noOfPeople) === 0
  ) {
    document.querySelector(".tipPerson").innerHTML = `$ 0.00`;
    document.querySelector(".totalPerson").innerHTML = `$ 0.00`;
  } else {
    document.querySelector(".tipPerson").innerHTML = `$ ${tipPerPerson}`;
    document.querySelector(".totalPerson").innerHTML = `$ ${totalPerPerson}`;
  }
}
