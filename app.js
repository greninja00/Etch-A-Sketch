
// first we create the div elements inside of the screen
function create(size)
{
    for(let row =1; row <=size ; row++)
    {
        for(let col =1 ; col <= size; col++)
        {
            document.querySelector('.screen').innerHTML += `<div>${row}, ${col}</div>`;
        }
    }
}
create(16);



// selecting the elements inside of screen 
let pixels = document.querySelector('.screen').querySelectorAll('div');
const screen = document.querySelector('.screen');
const tools = document.querySelector('.tools');
const reset = tools.querySelector('.reset');



//screen grid
screen.style.cssText ='display : grid; grid-template-columns: repeat(16, 1fr);';



// for modifying the pixels color
for(let i = 0; i < pixels.length ; i++)
{
    pixels[i].addEventListener('mousemove', function(e) {e.target.style.backgroundColor = 'blue';})
}

// reset button
reset.addEventListener('click', () => {
    for(let i = 0; i < pixels.length ; i++)
    {
        pixels[i].remove();
    }


    // asks for the size of the screen 
    let size = Number(prompt('please enter the length of the square screen', '16'));



    // creates new pixles of divs for sketching
    create(size);
    screen.style.cssText = `display : grid; grid-template-columns: repeat(${size}, 1fr);`;
    pixels = document.querySelector('.screen').querySelectorAll('div');

    
    // for modifying the pixels color
    for(let i = 0; i < pixels.length ; i++)
    {
        pixels[i].addEventListener('mousemove', function(e) {e.target.style.backgroundColor = 'blue';})
    }

})



