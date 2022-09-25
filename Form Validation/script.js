var btn = document.getElementById('login')
btn.addEventListener("click",()=>
{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmpassword").value;
    flag = 0;
    console.log(email+"hhhh")
    if(!(/^\w+([\.-]?\w+\w)*@+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){ 
        flag = 1;
        console.log("rui");
        document.getElementById('validemail').style.display = "block";
        //alert("Invalid email")
    }
    else{
        console.log("Hello");
        document.getElementById('validemail').style.display = "none";
    }
    if(!(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password))){
        flag = 2;
        document.getElementById('validpassword').style.display = "block";
        if(password.length < 8)
        document.getElementById('validpassword').innerHTML = "Password length should be at least 8 <br /> Password should have at least 1 small letter, 1 capital letter, 1 digit and 1 special character ";
        else
        document.getElementById('validpassword').innerHTML = "Password should have at least 1 small letter, 1 capital letter, 1 digit and 1 special character ";
        
        //alert("Invalid password")
    }
    else
    document.getElementById('validpassword').style.display = "none";
    console.log(confirmpassword);
    if(password != confirmPassword){
        flag = 3;
        console.log("ppi");
        document.getElementById('passwrdmatch').style.display = "block";
        //alert("Password do not match")
    }
    else
    document.getElementById('passwrdmatch').style.display = "none";
    if(flag === 0)
        window.location.href = "abc.html"
    
});

function visible(str){
    var eye = document.getElementById(str);
    var toggle = document.getElementById("togglePassword"+str)
    eye.type = eye.type === "password"?  "text": "password";
    if(eye.type === "password"){
        toggle.classList.remove('fa-eye-slash')
        toggle.classList.add('fa-eye')
    }
    else{
        toggle.classList.remove('fa-eye')
        toggle.classList.add('fa-eye-slash')
    }

}