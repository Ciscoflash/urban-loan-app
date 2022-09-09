let userLabel = document.getElementById("userLabel")
let userName = document.getElementById("userName")
let userError = document.getElementById("userError")
let AcLabel = document.getElementById("AcLabel")
let AcInput = document.getElementById("AcInput")
let AcError = document.getElementById("AcError")
let AmountLabel = document.getElementById("AmountLabel")
let AmountInput = document.getElementById("AmountInput")
let AmountError = document.getElementById("AmountError")
let Acount_type = document.getElementById("Acount_type")
let TypeError = document.getElementById("TypeError")
let credit_history = document.getElementById("credit_history")
let creditError = document.getElementById("creditError")
let last_depositLabel = document.getElementById("last_depositLabel")
let lastDeposit_Error = document.getElementById("lastDeposit_Error")
let loanCollectedLabel = document.getElementById("loanCollectedLabel")
let loanCollected_Error = document.getElementById("loanCollected_Error")
let loanPayment_label = document.getElementById("loanPayment_label")
let Repayment_Period = document.getElementById("Repayment_Period")
let repaymentError = document.getElementById("repaymentError")
let confirmBtn = document.getElementById("confirmBtn")
let successMsg = document.getElementById("successMsg")
let lastDeposit = document.getElementById("lastDeposit")
let loanCollected = document.getElementById("loanCollected")


let AccountBalance
let LoanAmount
let point =0;


// Click Event
confirmBtn.addEventListener("click", function(){
  validation()
})

// validation
function validation(){
if(userName.value == ""){
userError.innerHTML = "field required"
userError.style = "color:red"
}
else{
    userError.innerHTML = ""
}
if(AcInput.value == ""){
    AcError.innerHTML = "field required"
    AcError.style = "color:red"
}
else{
    AcError.innerHTML = ""
}
if(AmountInput.value == ""){
    AmountError.innerHTML = "field required"
    AmountError.style = "color:red"
}
else{
    AmountError.innerHTML = ""
}
if(Acount_type.value == ""){
    TypeError.innerHTML = "field required"
    TypeError.style = "color:red"
}
else{
    TypeError.innerHTML = ""
}
if(credit_history.value == ""){
    creditError.innerHTML = "field required"
    creditError.style = "color:red"
}
else{
    creditError.innerHTML = ""
}
if(lastDeposit.value == ""){
    lastDeposit_Error.innerHTML = "field required"
    lastDeposit_Error.style = "color:red;"
}
else{
    lastDeposit_Error.innerHTML = ""
}if(loanCollected.value == ""){
 loanCollected_Error.innerHTML = "field required"
 loanCollected_Error.style = "color:red;"
}
else{
    loanCollected_Error.innerHTML = ""
}
if(Repayment_Period.value == ""){
repaymentError.innerHTML = "field required"
repaymentError.style = "color:red;"
}
else{
    repaymentError.innerHTML = ""
}
AcceptValue()
}

function AcceptValue(){
    AccountBalance = AcInput.value;
    LoanAmount = AmountInput.value

    condition()
}

function condition(){
    if(AccountBalance > LoanAmount){
       point += 10
    }
    else{
        point  +=0;
    }
    if(Acount_type.value == "savings"){
        point += 5;
    }
    else{
        point +=0;
    }
    if(Acount_type.value == "current"){
        point += 10;
    }
    else{
        point +=0;
    }
    if(credit_history.value == "six"){
        point += 10;
    }
    else{
        point +=0;
    }
    if(lastDeposit.value == "one_Month"){
        point += 5;
    }
    else{
        point +=0;
    }
    if(loanCollected.value == "six_Month"){
        point += 10;
    }
    else{
        point +=0;
    }
    if(Repayment_Period.value == "four"){
        point += 10; 
    }
    else{
        point +=0;
    }
    giveLoan()
}

function giveLoan(){
    if(point > 30){
        successMsg.innerHTML = `Loan granted total point of  ${point}`
        successMsg.style = "color:green;"
    }
    else{
       successMsg.innerHTML = "Loan can only be awarded if clients score is above 30 points you have " + point + " point"
       successMsg.style = `color:red;`
    }
}
