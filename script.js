
let one = document.getElementById("one")
let img = document.querySelector("#screen img")

function pick_channel(channel){
    if(channel === 1){return img.setAttribute("src","https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg")}
    if(channel === 2){return img.setAttribute("src","https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg")}
    if(channel === 3){return img.setAttribute("src","https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg")}
    if(channel === 4){return img.setAttribute("src","https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg")}
    if(channel === 5){return img.setAttribute("src","https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg")}
    if(channel === 6){return img.setAttribute("src","https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg")}
    if(channel === 7){return img.setAttribute("src","https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg")}
    if(channel === 8){return img.setAttribute("src","https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg")}
    if(channel === 9){return img.setAttribute("src","https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg")}
}
