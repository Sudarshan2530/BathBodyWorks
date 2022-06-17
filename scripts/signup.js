document.getElementById('signupForm').addEventListener('submit', signup)

let signupData = JSON.parse(localStorage.getItem("userDetails")) ||[]
console.log(signupData)

function signup(){
    event.preventDefault();
    console.log("worked");

    let signupObj = {

        name:document.getElementById('crName').value,
        lastName:document.getElementById('crEmail').value,
        email:document.getElementById('crEmail').value,
        confirmEmail:document.getElementById('crCEmail').value,
        zipCode:document.getElementById('crZip').value,
        phone:document.getElementById('crPhone').value,
        pass:document.getElementById('crPass').value,
    }

    signupData.push(signupObj);

    console.log(signupData);

    localStorage.setItem('userDetails', JSON.stringify(signupData));

    alert("Account Registered Successfully")
    window.location.href="login.html"
}