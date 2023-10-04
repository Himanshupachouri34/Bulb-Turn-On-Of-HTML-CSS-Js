let btn = document.getElementById('toggleBtn')
let bulb = document.getElementById('bulb')
btn.addEventListener('click', toggleBulb)

function toggleBulb(event){
    if(btn.textContent.includes('on')){
        bulb.src = 'onbulb.avif'
        btn.textContent = 'Turn Off'
        document.getElementById("toggleBtn").style.backgroundColor = "yellow";
    }
    else{
        bulb.src = 'offbulb.jpeg'
        btn.textContent = 'Turn on'
        document.getElementById("toggleBtn").style.backgroundColor = "lightgreen";
    }
    
}