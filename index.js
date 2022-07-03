window.onload = (render);
function render() {
    let str = localStorage.getItem("savetext");
    let texta = document.querySelector("#text-area");
    texta.value = JSON.parse(str);
}
const handleChange = (e) => {
    // console.log(e);
    if(e.target.checked) {
        autosave(true);
    } else {
        autosave(false);
    }
}


function autosave(flag) {
    if(flag) {
        var inter = setInterval(save,1000);
    } else {
        clearInterval(inter);
    }
}
function save() {
    
    let texta = document.querySelector("#text-area");
    localStorage.setItem("savetext",JSON.stringify(texta.value));
}
