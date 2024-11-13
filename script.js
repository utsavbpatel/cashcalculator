function calculate(){
    let finalResult=0;
    document.querySelectorAll(".amount-container").forEach(selectedAmount => {
        let amountValue= selectedAmount.querySelector(".amountValue").textContent;
        let amount= selectedAmount.querySelector(".amount").value;

        let result=amountValue*amount;

        selectedAmount.querySelector(".result").textContent=result.toLocaleString('en-IN') + " Rs";

        finalResult+=result;
    });

    document.getElementById('finalResult').innerHTML=finalResult.toLocaleString('en-IN') + " Rs";


}

function clearData(){
    document.querySelectorAll(".amount-container").forEach(selectedAmount => {
        selectedAmount.querySelector(".amount").value = "";  
        selectedAmount.querySelector(".result").textContent = 0; 
    });
}