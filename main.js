const priceByMonth = document.querySelector(".price-by-month")
const quantifyPageViews = document.querySelector(".title-info-card")
const monthOrYear = document.querySelector(".month-or-year")
const inputChoosePrice = document.querySelector("#input-progress")
const togglePrice = document.querySelector(".button-toggle")
const progressBar = document.querySelector("#progress-bar")

inputChoosePrice.addEventListener("input", validityPrice)

const listPrices = [8, 12, 16, 24, 36]
const listQuantifyPageViews = ["10K", "50K", "100K", "500k", "1M"]

function validityPrice() {
    const valueActual = inputChoosePrice.value

    if (valueActual != "") {
        priceByMonth.innerHTML = `$${listPrices[valueActual].toFixed(2)}`
        quantifyPageViews.innerHTML = `${listQuantifyPageViews[valueActual]} PAGEVIEWS`
    }

    let percent = (valueActual / 4) * 100;
    inputChoosePrice.style.background = `linear-gradient(to right, var(--strong-cyan-slider-background) ${percent}%, var(--light-grayish-blue-empty-slider-bar) ${percent}%)`

    if (togglePrice.checked === false) {
        calculatePriceMonth()
    } else {
        calculatePriceYear()
    }
}

togglePrice.addEventListener("change", calculateDiscount)

function calculateDiscount() {
    validityPrice()
    if (togglePrice.checked === true) {
        calculatePriceYear()
    } else {
        calculatePriceMonth()
    }
}

function calculatePriceYear() {
    let price = listPrices[inputChoosePrice.value]
    let valueYear = price * 12
    let valueDiscount = valueYear * 0.25
    price = valueYear - valueDiscount
    priceByMonth.innerHTML = `$${price.toFixed(2)}`
    monthOrYear.innerHTML = "/ year"
}

function calculatePriceMonth() {
    let price = listPrices[inputChoosePrice.value]
    priceByMonth.innerHTML = `$${price.toFixed(2)}`
    monthOrYear.innerHTML = "/ month"
}