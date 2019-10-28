function execute_heart() {
    window.setTimeout(heart, Math.random() * (60000 - 10000) + 10000);
}


function heart() {
    let heart_source = '../assets/backdrops/heart.gif'
    let container_block = document.getElementById('container_block');
    container_block.style.backgroundImage = 'url(' + heart_source + ')'
    container_block.style.backgroundSize = "10%"
    container_block.style.backgroundPositionY = "10%"
}


window.onload = function(event) {
    execute_heart()
};
