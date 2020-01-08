let changethis = document.getElementById('2');

changethis.innerText = document.title;

changethis.classList.add("h1")

let matches = document.querySelectorAll("p");

// forEach(matches){
//   matches.classList.add("p")
// };

matches.forEach(function(element) {
    element.classList.add("p")
})

  let colorselected = document.getElementById('input').value

function changebackground(backgroundcolor) {
  
    document.body.style.background = colorselected ;
}

function changeh1(h1) {
    document.getElementById('2').style.color = colorselected;
}

function changecolor(color) {
    let everything = document.querySelectorAll("*");
    everything.forEach(function(everycolor) {
        everycolor.style.color = colorselected;
    })

    document.getElementById('2').style.color = colorselected;
    document.body.style.background = colorselected;
}