
// first we create the div elements inside of the screen
for(let row =1; row <=16 ; row++)
{
    for(let col =1 ; col <= 16; col++)
    {
        document.querySelector('.screen').innerHTML += `<div>${row}, ${col}</div>`;
    }
}
// selecting the elements inside of screen 
const pixels = document.querySelector('.screen').querySelectorAll('div');
const screen = document.querySelector('.screen');
screen.style.cssText ='display : grid; grid-template-columns: auto auto auto;';

for(let i = 0; i < pixels.length ; i++)
{
    pixels[i].style.cssText ='display : grid';
}


