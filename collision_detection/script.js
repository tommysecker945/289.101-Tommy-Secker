/*eslint-env browser*/
/*eslint no-console:0*/
/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)

*/

var puck = document.getElementById('puck');
var puck_x = 210;
var puck_y = 210;
var speed = 50;


puck.style.left = puck_x + 'px';
puck.style.top = puck_y + 'px';

function logCoordinates() {
    console.log('x=' + puck_x + 'y=' + puck_y); 
}


function checkCollision() {
 
    if (puck_x > 250 && puck_x < 350 && puck_y > 150 && puck_y < 250) {
        console.log('collision!');
        document.getElementById('gap').style.backgroundColor = 'red';
    }
    else {
        document.getElementById('gap').style.backgroundColor = 'white';
    
}
    
    
document.getElementById('left').addEventListener('click', function(){
    puck_x -= speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    checkCollision();
});
document.getElementById('right').addEventListener('click', function(){
    puck_x += speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
     checkCollision();
});

document.getElementById('up').addEventListener('click', function(){
    puck_y -= speed;
    puck.style.top = puck_y + 'px';
    logCoordinates();
     checkCollision();
});
document.getElementById('down').addEventListener('click', function(){
    puck_y += speed;
    puck.style.top = puck_y + 'px';
    logCoordinates();
     checkCollision();
});