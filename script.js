const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function(slider){
    slider.addEventListener("input",calculateTip);
});
const billInput = document.getElementById("bill");
billInput.addEventListener("change",calculateTip);



function calculateTip(){
    let bill = parseFloat(billInput.value);
    let tipPercent = document.getElementById("tip").value;
    let noOfPeople = document.getElementById("no-of-people").value;
    
    billInput.value = bill.toFixed(2);

    let totalTip = parseFloat((BILL * (tipPercent/100)).toFixed(2));
}