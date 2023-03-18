let bulb = document.getElementById('bulb')
let btn = document.getElementById('btn')

btn.addEventListener('click',togglebtn)
function togglebtn(){
    if(btn.textContent.includes('on')){
        bulb.src="./images/bulbon.jpg"
        btn.innerHTML="turn off light"
    }else{
        bulb.src="./images/bulboff.jpg"
        btn.innerHTML="turn on light"
    }
}