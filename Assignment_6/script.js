const form= document.getElementById('myForm')
form.addEventListener("submit",function(event){
    event.preventDefault();
    
    const name=document.getElementById('name').value.trim();
    const email=document.getElementById('email').value.trim();
    const age=document.getElementById('age').value;
    const gender=document.querySelector('input[name=gender]:checked');
    // const course=document.getElementById('course').value;
    // // const mode=document.querySelector('input[name=mode]:checked');
    // const password=document.getElementById('password').value;
    // const confirm_password=document.getElementById('confirm_password').value;
    // const terms=document.getElementById('terms').value;

    //name
    if(name === ""){
        alert("Name is required");
        return;
    }
    // //email
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        alert("Enter valid email");
        return;
    }
    // //age
    if(age=="" || age<18 || age>60){
        alert("Enter valid age between 18-60");
        return
    }
    //gender
    if(!gender){
        alert("Select gender");
        return;
    }


form.reset();
});