const btn = document.querySelector('.generateBtn')
    function viewText() {
        setTimeout(() => {
            document.querySelector('.quote').classList.add('show')
        }, 1000)
    }
  
    viewText()

    btn.addEventListener("click",()=>{
        document.querySelector('.quote').classList.remove('show')
        viewText()
    })

