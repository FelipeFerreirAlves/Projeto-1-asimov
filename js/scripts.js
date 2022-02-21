
function openNav() {
    var x = document.getElementById("navegação");

    if(x.className === "navegação"){
        x.className += " menujs";
        document.getElementById("threeline-icon").innerHTML = "&Cross;";
    } else{
        x.className = "navegação";
        document.getElementById("threeline-icon").innerHTML = "&#9776;";
    }




}