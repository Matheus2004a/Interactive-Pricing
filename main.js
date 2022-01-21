const priceByMonth = document.querySelector(".price-by-month")
const quantifyPageViews = document.querySelector(".title-info-card")
const inputChoosePrice = document.querySelector("#bar-progress")
const togglePrice = document.querySelector(".button-toggle")

inputChoosePrice.addEventListener("input", validityPrice)

let price = 0

function validityPrice() {
    if (inputChoosePrice.value == 1) {
        price = 8
        quantifyPageViews.innerHTML = "10k PAGEVIEWS"
        priceByMonth.innerHTML = "$8.00"
    }
    else if (inputChoosePrice.value == 2) {
        price = 12
        quantifyPageViews.innerHTML = "50k PAGEVIEWS"
        priceByMonth.innerHTML = "$12.00"
    }
    else if (inputChoosePrice.value == 3) {
        price = 16
        quantifyPageViews.innerHTML = "100k PAGEVIEWS"
        priceByMonth.innerHTML = "$16.00"
    }
    else if (inputChoosePrice.value == 4) {
        price = 24
        quantifyPageViews.innerHTML = "500k PAGEVIEWS"
        priceByMonth.innerHTML = "$24.00"
    }
    else {
        price = 36
        quantifyPageViews.innerHTML = "1M PAGEVIEWS"
        priceByMonth.innerHTML = "$36.00"
    }
}

togglePrice.addEventListener("click", calculateDiscount)

function calculateDiscount() {
    validityPrice()
    if (togglePrice.checked) {
        let valueDiscount = price * 25 / 100
        price = price - valueDiscount
        priceByMonth.innerHTML = `$${price.toFixed(2)}`
    }
}