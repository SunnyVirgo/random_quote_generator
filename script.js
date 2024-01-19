const btn = document.querySelector('.generateBtn')
const quoteText =  document.querySelector('.quote')
const author = document.querySelector('.author')
const url = "https://api.quotable.io/quotes/random"

    function viewText() {
        setTimeout(() => {
           quoteText.classList.add('show')
        }, 1000)
    }

    async function fetchData(){
        try {
            const response = await fetch(url)
            const data = await response.json()

            quoteText.innerHTML = data[0].content
            author.innerHTML = `-${data[0].author}`

            viewText()
        } catch (error) {
            alert(error)
        }
    }

    fetchData()

