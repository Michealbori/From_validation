var fForm = document.getElementById("form");
var fEmail = document.getElementById("floatingEmail");
var fPassword =document.getElementById("inputPassword1");
var fLogin = document.getElementById("btn");


/*Icon Aspect  Email*/
var danger1 = document.getElementById("danger1");
var sucess1 = document.getElementById("sucess1");

/*Icon Aspect  PassWord*/
var danger2 = document.getElementById("danger2");
var sucess2 = document.getElementById("sucess2");

/*Error Message  Aspect*/
var e_error = document.getElementById("e_error");
var p_error = document.getElementById("p_error");
var fp_error = document.getElementById("fp_error");

/*Error Border  Aspect*/


fForm.addEventListener("submit", (e) => {
e.preventDefault();
    magicAspect()
})

function magicAspect() {
   let fEmailValue = fEmail.value.trim();
   let fPasswordValue = fPassword.value.trim();


   /* Password Validation */
    if ( fPasswordValue === "" ) {
        danger2.style.display = " flex";
        sucess2.style.display = " none";
        p_error.style.display = " flex";
        fPassword.style.border = " 2px solid red";
        
    } else if ( fPasswordValue.length < 8 ) {
        danger2.style.display = " flex";
        sucess2.style.display = " none";
        fp_error.style.display = " flex";
        p_error.style.display = " none";
        fPassword.style.border = " 2px solid red";
        
    }  else {
        sucess2.style.display = " flex";
        danger2.style.display = " none";
        p_error.style.display = " none";
        fp_error.style.display = " none";
        fPassword.style.border = " 2px solid seagreen";
    }
  
      /*password Validation End */

      /*Email Validation Start */
      if ( fEmailValue === "") {
        danger1.style.display = "flex";
        sucess1.style.display = " none";
        e_error.style.display = " flex";
        fEmail.style.border = " 2px solid red";
      } else {
        danger1.style.display = "none";
        sucess1.style.display = " flex";
        e_error.style.display = " none";
        fEmail.style.border = " 2px solid seagreen";
      }


}







   