const btn = document.querySelector('button');
const content = document.querySelector('.content');
const btn2 = document.querySelector('.button');
const slect = document.querySelector('.time-select');


if (document.body.classList.contains("page-movie-selection")){

    const button = document.querySelector('.add-to-cart');
    const overlay = document.querySelector('.overlay');

    button.addEventListener('click',function(){

        overlay.classList.remove('hide');

    })
    


}


btn.addEventListener('click',function(){
  content.classList.toggle('open');
  btn.classList.add('hidden')
  btn2.classList.remove('button')
})

btn2.addEventListener('click',function(){
  content.classList.remove('open');
  btn.classList.remove('hidden')
  btn2.classList.add('button')
})

function changeColor(id)
{
  document.getElementById(id).style.color = "#F25757"; 
}

