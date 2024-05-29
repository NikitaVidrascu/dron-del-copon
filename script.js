/*
    Esta parte es necesaria para la review
    Lo que hace es calcular el Height de cada reseña y ajusta el cuadrado al tamaño de la reseña mas grande 
    para poder verla entera y ademeas, detecta los scroll y ajusta el indicador
*/
const allReview = Array.from(document.querySelectorAll('.review'));
const reviewWrapper = document.querySelector('.review-wrapper');
const indicador = document.querySelector('.review-indicador')


const arrHeight = allReview.map (item=>{
    return item.offsetHeight;
})

const largeHeight = Math.max(...arrHeight);

reviewWrapper.style.maxHeight = largeHeight + 'px';

allReview.forEach((item, idx)=>{
    item.style.height = largeHeight + 'px';
    item.id = 'review-' + idx; 

    const a = document.createElement('a');
    a.href = '#' + item.id;
    indicador.appendChild(a);

})

const allLinkIndicador = document.querySelectorAll('.review-indicador a')

allLinkIndicador[0].classList.add('active');

reviewWrapper.addEventListener('scroll',function () {
    let linkActive;
    allReview.forEach(item =>{
        if (this.scrollTop >= (item.offsetTop - (item.offsetHeight / 2) - 28) &&  this.scrollTop <= (item.offsetTop + (item.offsetHeight / 2) - 28)){
            linkActive = item.id
        }
    })

    allLinkIndicador.forEach(item=>{
        if (item.getAttribute('href') === ('#' + linkActive)) {
            item.classList.add('active');
        }else{
            item.classList.remove('active')
        }
    })
})