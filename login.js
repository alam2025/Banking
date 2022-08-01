//login event handler
const loginbtn = document.getElementById('login');
loginbtn.addEventListener('click', function(event){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display='none';
    const transactionArea=document.getElementById('transaction-area');
    transactionArea.style.display='block';
});

function inputMoneyAmount(id){
    const amount= document.getElementById(id).value;
    if(amount == "" || amount ==" ")
    {
        amount=0;
    }
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

//deposit event handler
const depositbtn = document.getElementById('deposit');
depositbtn.addEventListener('click', function(){
    const depositNumber = inputMoneyAmount('depositAmount');
    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);
    document.getElementById('depositAmount').value= "";   
}
)


//withdraw event handler
const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function(){
    const withdrawAmount = inputMoneyAmount('withdrawAmount');
    updateSpanText('currentWithdraw',withdrawAmount);
    updateSpanText('currentBalance', -1 * withdrawAmount);
    document.getElementById('withdrawAmount').value= "";
    document.getElementById('currentBalance').innerText=updateBalance;
    
})

//update current
function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + depositNumber;
    document.getElementById(id).innerText=total;

}



