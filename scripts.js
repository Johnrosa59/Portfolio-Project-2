
const buttonOne = document.getElementById('button-1')
const siteImg = document.getElementById('sites-img')
const link1 = document.getElementById('link1')
const buttonTwo = document.getElementById('button-2')
const buttonThree = document.getElementById('button-3')
const buttonFour = document.getElementById('button-4')
const buttonFive = document.getElementById('button-5')
const buttonSix = document.getElementById('button-6')
const buttonSeven = document.getElementById('button-7')


const changeImgLink1 = () => {
    siteImg.src = './img/2-site-2.png'
    link1.href = 'https://johnrosa59.github.io/Projeto-page-green/'
}


const changeImgLink2 = () => {
    siteImg.src = './img/1-site-1.png'
    link1.href = 'https://johnrosa59.github.io/Projeto-Shopping-Mobile/'
}

const changeImgLink3 = () => {
    siteImg.src = './img/3-site-3.png'
    link1.href = 'https://johnrosa59.github.io/We-Care-Project/'
}

const changeImgLink4 = () => {
    siteImg.src = './img/4-site-4.png'
    link1.href = 'https://johnrosa59.github.io/Login-Menu-Project/'
}

const changeImgLink5 = () => {
    siteImg.src = './img/5-site-5.png'
    link1.href = 'https://johnrosa59.github.io/Project-Perfil/'
}

const changeImgLink6 = () => {
    siteImg.src = './img/6-site-6.png'
    link1.href = 'https://johnrosa59.github.io/UI-KIT-Layout/'
}

const changeImgLink7 = () => {
    siteImg.src = './img/7-site-7.png'
    link1.href = 'https://johnrosa59.github.io/Convert-money-I-do/'
}

buttonOne.addEventListener('click', changeImgLink1)

buttonTwo.addEventListener('click', changeImgLink2)

buttonThree.addEventListener('click', changeImgLink3)

buttonFour.addEventListener('click', changeImgLink4)

buttonFive.addEventListener('click', changeImgLink5)

buttonSix.addEventListener('click', changeImgLink6)

buttonSeven.addEventListener('click', changeImgLink7)