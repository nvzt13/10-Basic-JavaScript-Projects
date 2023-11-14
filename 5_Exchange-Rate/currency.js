class Currency {
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_MWwWVwvm63uUWBTKK7EkqKhpuexjtfjrAFy7MAfi&base_currency="
    }
      async  exchance(amount,firstCurrency,secondCurrency){
        const response = await fetch(`${this.url}${firstCurrency}`)
        const result = await response.json()
        const exvahangeResult = amount * result.data[secondCurrency]
        return exvahangeResult
    }
}