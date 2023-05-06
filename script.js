const month = document.getElementById("month")
const date = document.getElementById("date")
let inputBox = document.getElementById("input-box")
let description = document.getElementById("sun-sign-info")
const submitButton = document.getElementById("submit-button")
const resetButton = document.getElementById("reset-button")

function getSunSign() {
    inputBox.style.display = "none";
    submitButton.style.display = "none"
    resetButton.style.display = "inline-block"

    if(month.value == "march" && date.value >= 21) {
        document.getElementById("zodiac-sign-title").innerHTML = "Aries";
        document.getElementById("aries").style.display = "block";
    }
    else if (month.value == "april" && date.value <= 19) {
        document.getElementById("zodiac-sign-title").innerHTML = "Aries"
        document.getElementById("aries").style.display = "block";
    }
    else if (month.value == "april" && date.value >= 20) {
        document.getElementById("zodiac-sign-title").innerHTML = "Taurus"
        document.getElementById("taurus").style.display = "block";
    }
    else if (month.value == "may" && date.value <= 20) {
        document.getElementById("zodiac-sign-title").innerHTML = "Taurus"
        document.getElementById("taurus").style.display = "block";
    }
    else if (month.value == "may" && date.value >= 21) {
        document.getElementById("zodiac-sign-title").innerHTML = "Gemini"
        document.getElementById("gemini").style.display = "block";
    }
    else if (month.value == "june" && date.value <= 20) {
        document.getElementById("zodiac-sign-title").innerHTML = "Gemini"
        document.getElementById("gemini").style.display = "block";
    }
    else if (month.value == "june" && date.value >= 21) {
        document.getElementById("zodiac-sign-title").innerHTML = "Cancer"
        document.getElementById("cancer").style.display = "block";
    }
    else if (month.value == "july" && date.value <= 22) {
        document.getElementById("zodiac-sign-title").innerHTML = "Cancer"
        document.getElementById("cancer").style.display = "block";

    }
    else if (month.value == "july" && date.value >= 23) {
        document.getElementById("zodiac-sign-title").innerHTML = "Leo"
        document.getElementById("leo").style.display = "block";
    }
    else if (month.value == "august" && date.value <= 22) {
        document.getElementById("zodiac-sign-title").innerHTML = "Leo"
        document.getElementById("leo").style.display = "block";
    }
    else if (month.value == "august" && date.value >= 23) {
        document.getElementById("zodiac-sign-title").innerHTML = "Virgo"
        document.getElementById("virgo").style.display = "block";
    }
    else if (month.value == "september" && date.value <= 22) {
        document.getElementById("zodiac-sign-title").innerHTML = "Virgo"
        document.getElementById("virgo").style.display = "block";
    }
    else if (month.value == "september" && date.value >= 23) {
        document.getElementById("zodiac-sign-title").innerHTML = "Libra"
        document.getElementById("libra").style.display = "block";
    }
    else if (month.value == "october" && date.value <= 22) {
        document.getElementById("zodiac-sign-title").innerHTML = "Libra"
        document.getElementById("libra").style.display = "block";
    }
    else if (month.value == "october" && date.value >= 22) {
        document.getElementById("zodiac-sign-title").innerHTML = "Scorpio"
        document.getElementById("scorpio").style.display = "block";
    }
    else if (month.value == "november" && date.value <= 21) {
        document.getElementById("zodiac-sign-title").innerHTML = "Scorpio"
        document.getElementById("scorpio").style.display = "block";
    }
    else if (month.value == "november" && date.value >= 22) {
        document.getElementById("zodiac-sign-title").innerHTML = "Sagittarius"
        document.getElementById("sagittarius").style.display = "block";
    }
    else if (month.value == "december" && date.value <= 21) {
        document.getElementById("zodiac-sign-title").innerHTML = "Sagittarius"
        document.getElementById("sagittarius").style.display = "block";
    }
    else if (month.value == "december" && date.value >= 22) {
        document.getElementById("zodiac-sign-title").innerHTML = "Capricorn"
        document.getElementById("capricorn").style.display = "block";
    }
    else if (month.value == "january" && date.value <= 20) {
        document.getElementById("zodiac-sign-title").innerHTML = "Capricorn"
        document.getElementById("capricorn").style.display = "block";
    }
    else if (month.value == "january" && date.value >= 21) {
        document.getElementById("zodiac-sign-title").innerHTML = "Aquarius"
        document.getElementById("aquarius").style.display = "block";
    }
    else if (month.value == "february" && date.value <= 18) {
        document.getElementById("zodiac-sign-title").innerHTML = "Aquarius"
        document.getElementById("aquarius").style.display = "block";
    }
    else if (month.value == "february" && date.value >= 19) {
        document.getElementById("zodiac-sign-title").innerHTML = "Pisces"
        document.getElementById("pisces").style.display = "block";
    }
    else if (month.value == "march" && date.value <= 20) {
        document.getElementById("zodiac-sign-title").innerHTML = "Pisces"
        document.getElementById("pisces").style.display = "block";
    }
}

function reset(){
    window.location.reload("Refresh")
  }