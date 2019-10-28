var ricardo_count = 0;


function taunt_ricardo() {
    ricardo_count = ricardo_count + 1;
    if (ricardo_count > Math.random() * (45 - 5) + 5) {
        release_ricardo();
    }
}


function release_ricardo() {
    let ricardo_left = document.getElementById('ricardo_left');
    let ricardo_right = document.getElementById('ricardo_right');
    ricardo_left.style.display = "block";
    ricardo_right.style.display = "block";
}