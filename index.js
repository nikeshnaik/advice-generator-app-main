function getAdvice() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        cache: "no-store"
    };

    fetch("https://api.adviceslip.com/advice", requestOptions)
        .then(getResponse)
        .then(updateAdvice)
        .catch(error => console.log('error', error))
}

function updateAdvice(result) {
    document.getElementById("advice_no").textContent = `Advice #${result.slip.id}`
    document.getElementById("advice_text").textContent = `"${result.slip.advice}"`

}


function getResponse(response) {
    return response.json()
}

document.getElementById("random_btn").addEventListener("click", () => {
    getAdvice()
})


window.onload = getAdvice()