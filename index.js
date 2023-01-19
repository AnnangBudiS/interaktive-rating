const submit = document.querySelector('.btn-submit')
const back = document.querySelector('.back')
const rating = document.getElementById('rates')
const rates= document.querySelectorAll('.number')


submit.addEventListener('click', () => {
    document.querySelector('.preview').style.display = 'flex'
    document.querySelector('.main-content').style.display = 'none'
})

back.addEventListener('click', () => {
    document.querySelector('.main-content').style.display = 'block'
    document.querySelector('.preview').style.display = 'none'
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    })
})