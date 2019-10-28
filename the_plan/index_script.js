function execute_win() {
    window.setInterval(win, Math.random() * (5000 - 1000) + 1000);
}


function win() {
    let container_block = document.getElementById('container_block');
    let new_text_block = document.createElement('h2');
    let new_text_node = document.createTextNode('win');
    window.setTimeout(200)
    new_text_block.appendChild(new_text_node);
    new_text_block.style.position = 'absolute';
    new_text_block.style.top = Math.random() * (window.innerHeight - 0) + 0;
    new_text_block.style.left = Math.random() * (window.innerWidth - 0) + 0;
    new_text_block.style.fontSize = 'calc(50px + 1.25vw)';
    new_text_block.style.color = 'rgba(0, 0, 0, 0.8)';
    new_text_block.style.fontFamily = 'Staatliches';
    new_text_block.id = 'win'
    container_block.appendChild(new_text_block);
}


window.onload = function(event) {
    this.execute_win()
};
