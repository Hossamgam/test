
function openNav() {
    document.getElementById("navBar").style.width= "220px";
    document.getElementById("navBar").style.transition = "all  .5s";

    document.getElementById("boddy").style.marginLeft= "220px";
    document.getElementById("boddy").style.transition = "all  .5s";

    document.getElementById("openNav").style.marginLeft = "220px";

}


function closeNav() {
    document.getElementById("navBar").style.width= "0";
    document.getElementById("navBar").style.transition = "all  0.5s";

    document.getElementById("boddy").style.marginLeft= "0";
    document.getElementById("boddy").style.transition = "all  0.5s";

    document.getElementById("openNav").style.marginLeft = "0";

}









function formValidate() {
    var firstName = document.getElementById("firstName").value;
    var surName = document.getElementById("surName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var text ="";
    var error = document.getElementById("error");

    if (firstName.length < 3) {
        text = "Please inter at least three letters";
        error.innerHTML=text;
        return false
    }

    else if (surName.length < 5) {
        text = "Please inter at least five letters";
        error.innerHTML= text;
        return false
    }

    else if (email.indexOf("@") ==-1) {
        text = "please inter currect email";
        error.innerHTML= text;
        return false

    }

    else if (phone.length != 11 ) {
        text = "please inter currect number";
        error.innerHTML= text;
        return false
    }

    else {
        alert("done");
        return true
    }
}










function showTime() {

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    hours = (hours < 10) ? "0" + hours : hours;

    hours = (hours > 12) ? hours - "12" : hours;
    


    var time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("showTime").innerHTML = time;

    setTimeout (showTime, 1000)



} showTime()


















