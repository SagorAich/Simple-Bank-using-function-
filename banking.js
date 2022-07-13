function getInputValue(inputId){
    const inputField=document.getElementById(inputId);
    const inputAmountText=inputField.value;
    const amountValue=parseFloat(inputAmountText);
    //clear the deposit input field
    inputField.value='';
    return amountValue;
}

function updateTotalField(totalFieldId, amount){
    //debugger;
    const totalElement=document.getElementById(totalFieldId);
    const totalText=totalElement.innerText;
    const previousTotal=parseFloat(totalText);
    const newTotal=previousTotal+amount;
    totalElement.innerText=newTotal;
}

function getCurrentBalance(){
    const balanceTotal=document.getElementById('balance');
    const balanceAmount=balanceTotal.innerText;
    const balanceAmountValue=parseFloat(balanceAmount);
    return balanceAmountValue;
}

function updateBalance(amount,isAdd){
    const balanceTotal=document.getElementById('balance');
    /*const balanceAmount=balanceTotal.innerText;
    const balanceAmountValue=parseFloat(balanceAmount); */
    const balanceAmountValue=getCurrentBalance();
    if(isAdd==true){
        const totalBalance=balanceAmountValue+ amount;
        balanceTotal.innerText=totalBalance;
    }
    else{
        const totalBalance=balanceAmountValue - amount;
        balanceTotal.innerText=totalBalance;
    }
}

//handle deposit button event
document.getElementById('deposit-btn').addEventListener('click',function(){
    //get the amount deposited
    /* const depositInput=document.getElementById('deposit-amount');
    const depositAmount=depositInput.value;
    const depositAmountValue=parseFloat(depositAmount); */

    //update deposit total
    /* const depositTotal=document.getElementById('deposit-total');
    const previousDepositAmount=depositTotal.innerText;
    const previousDepositAmountValue=parseFloat(previousDepositAmount);
    const newDepositTotalText=previousDepositAmountValue+getAmount;
    console.log(newDepositTotalText);
    depositTotal.innerText=newDepositTotalText; */

    //update balance total
    /*const balanceAm=document.getElementById('balance');
    const balanceAmount=balanceAm.innerText;
    const balanceAmountValue=parseFloat(balanceAmount);
    console.log(balanceAmount);
    const totalBalance=balanceAmountValue+ depositAmount;
    console.log(totalBalance);
    balanceAm.innerText=totalBalance; */

    const depositAmount=getInputValue('deposit-amount');
    if(depositAmount > 0){
        updateTotalField('deposit-total',depositAmount);
        updateBalance(depositAmount,true);
    }
});

    //handle withdraw event handeler
    document.getElementById('Withdraw-btn').addEventListener('click',function(){
    /* console.log('withdraw clicked');
    const pleaseWithdrw=document.getElementById('withdraw-amount');
    const pleaseWithdrwValueText=pleaseWithdrw.value;
    const pleaseWithdrwValue=parseFloat(pleaseWithdrwValueText)
    console.log(pleaseWithdrwValue); */

    //set withdraw total
    /* const withdrawTaka=document.getElementById('withdraw-taka');
    const withdrawTakaValueText=withdrawTaka.innerText;
    const withdrawTakaValue=parseFloat(withdrawTakaValueText);
    console.log(withdrawTakaValue);
    const withdrawTotal=pleaseWithdrwValue+withdrawTakaValue;
    withdrawTaka.innerText=withdrawTotal; */

    // reduce balance 
    /* const balanceAm=document.getElementById('balance');
    const balanceAmount=balanceAm.innerText;
    const balanceAmountValue=parseFloat(balanceAmount);

    const netBalance=balanceAmountValue-pleaseWithdrwValue;
    balanceAm.innerText=netBalance; */

    //clear withdraw input
    //pleaseWithdrw.value='';

    const pleaseWithdrwValue=getInputValue('withdraw-amount');
    const currentBalance=getCurrentBalance();
    if(pleaseWithdrwValue>0 && pleaseWithdrwValue<=currentBalance){
    updateTotalField('withdraw-taka',pleaseWithdrwValue);
    updateBalance(pleaseWithdrwValue,false);
    }
    if(pleaseWithdrwValue>currentBalance){
        console.log('You cant withdraw more than in your account');
    }
    });