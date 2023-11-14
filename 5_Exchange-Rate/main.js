const amountInput = document.getElementById("amount")
const firstOption = document.getElementById("firstCurrencyOption")
const secondOption = document.getElementById("secondCurrencyOption")
const resultInput = document.getElementById("result")


const currency = new Currency()
runEventListener()

function runEventListener(){
    amountInput.addEventListener("input",exchance)
}

function exchance(){
        const amount = Number(amountInput.value.trim())
        const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent
        const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent

        currency.exchance(amount,firstOptionValue,secondOptionValue)
        .then((result) => {
            resultInput.value = result.toFixed("2")
        })
      
}