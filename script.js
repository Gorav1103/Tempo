var button = document.querySelector('button');

var overlay1 = document.querySelector('#overlay1');

var overlay2 = document.querySelector('#overlay2');

// button.addEventListener('click', function(){
//     overlay1.style.transform = 'translateY(-100%)';
//     overlay2.style.transform = 'translateY(100%)';
// })

var counter = 60;
var time3 = document.querySelector('#overlay2 #time3 h3');

var time2 = document.querySelector('#overlay2 #time2 h3');


button.addEventListener('click', function(){
    overlay1.style.transform = 'translateY(-100%)';
    overlay2.style.transform = 'translateY(100%)';
    setInterval(function(){
        if(counter > 0){
            time3.textContent = --counter;
        }
    }, 1000)
})


