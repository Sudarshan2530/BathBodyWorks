document.querySelector('#loginForm').addEventListener('submit', loginFunc)

let regUser = JSON.parse(localStorage.getItem('userDetails')) ||[]

function loginFunc(){
    
event.preventDefault()
    let mail = document.querySelector('#email').value;
    let pass = document.querySelector('#pass').value;
    
    for(let i=0; i<regUser.length; i++){
        if(mail == regUser[i].email &&
            pass == regUser[i].pass)
            {
                alert('Login Success');
                window.location.href = 'index.html';
                break;
            }
            else{
                alert('invalid Credentials');
                break;
            }
    }
    
}