var bulb = document.getElementById('bulbImg')
var body = document.getElementsByTagName('body')[0]
function switchOn() {
    bulb.src = "on.png"
    bulb.style.filter = "drop-shadow(0 0 40px orange)";
    body.style.backgroundColor = 'white'

}
function switchOff() {
    bulb.src = "off.png"
    bulb.style.filter = "none";
    body.style.backgroundColor = "#2d2d2b";
}