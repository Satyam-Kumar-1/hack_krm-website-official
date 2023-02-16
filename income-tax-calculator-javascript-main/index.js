

const form1 = document.querySelector('#tax-form1');
const form2 = document.querySelector('#tax-form2');

function calculatorIncomeTax1(income){
    let tax= 0;
    if(income <= 300000){
        tax = 0;
    }else if(income > 300000 && income <= 600000){
        tax = (income - 300000) *0.05;
    }else if(income > 600000 && income <= 900000){
        tax = (300000) * 0.05 + (income - 600000) * 0.10
    }else if(income > 900000 && income <= 1200000){
        tax = (300000) * 0.05 + (300000) * 0.10 + (income - 900000) * 0.15
    }else if(income > 1200000 && income <= 1500000){
        tax = (300000) * 0.05 + (300000) * 0.10 + ( 300000) * 0.15 + (income - 1200000) * 0.20
    }else{
        tax = (300000 * 0.05) + (300000 * 0.10) +  (300000 * 0.15) + (300000 * 0.20) + (income - 1500000) * 0.30
    }
    return tax;
}
function calculatorIncomeTax2(income){
    let tax= 0;
    if(income <= 250000){
        tax = 0;
    }else if(income > 250000 && income <= 500000){
        tax = (income - 250000) *0.05;
    }else if(income > 500000 && income <= 1000000){
        tax = (250000) * 0.05 + (income - 500000) * 0.20
    }
       
    else{
        tax = (250000 * 0.05) + (500000 * 0.20) + (income - 1000000) * 0.30
    }
    return tax;
}

form1.addEventListener('submit', (event)=>{
    event.preventDefault();

    const income1 = Number(form1.income1.value);
    const tax1= calculatorIncomeTax1(income1);

    alert(`The income tax of an income of ${income1} is: ${tax1}`);
})
form2.addEventListener('submit', (event)=>{
    event.preventDefault();

    const income2 = Number(form2.income2.value);
    const tax2 = calculatorIncomeTax2(income2);

    alert(`The income tax of an income of ${income2} is: ${tax2}`);
})