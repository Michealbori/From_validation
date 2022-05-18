var allForm = document.querySelector("form");
var fName = document.getElementById("nameInput");
var fEmail = document.getElementById("floatingEmail");
var fPassword1 = document.getElementById("inputPassword1");
var fPassword2 = document.getElementById("inputPassword2");
var fCountry = document.getElementById("inputCountry");
var fCity = document.getElementById("inputCity");
var fState = document.getElementById("inputState");
var fAddress = document.getElementById("inputAddress");
var fgridCheck = document.getElementById("gridCheck");

        //  Error aspect
var f_error = document.getElementById("f_error");
var fa_ban = document.getElementById("danger");
var fa_circle_check = document.getElementById("sucess");

var country_error = document.getElementById("country_error");
var fa_ban4 = document.getElementById("danger4");
var fa_circle_check4 = document.getElementById("sucess4");

var state_error = document.getElementById("state_error");
var fa_ban6 = document.getElementById("danger6");
var fa_circle_check6 = document.getElementById("sucess6");

var city_error = document.getElementById("city_error");
var fa_ban5 = document.getElementById("danger5");
var fa_circle_check5 = document.getElementById("sucess5");

var address_error = document.getElementById("address_error");
var fa_ban7 = document.getElementById("danger7");
var fa_circle_check7 = document.getElementById("sucess7");

var p_error = document.getElementById("p_error");
var fa_ban2 = document.getElementById("danger2");
var fa_circle_check2 = document.getElementById("sucess2");

var cp_error = document.getElementById("cp_error");
var fa_ban3 = document.getElementById("danger3");
var fa_circle_check3 = document.getElementById("sucess3");

var agree_error = document.getElementById("agree_error");
var sucess8 = document.getElementById("sucess8");

var floatingEmail = document.getElementById("floatingEmail");
var fa_ban1 = document.getElementById("danger1");
var fa_circle_check1 = document.getElementById("sucess1");

// console.log(state_error)

  // Adding  border colors

var border = document.getElementById("nameInput");
var border1 = document.getElementById("inputCountry");
var inputState = document.getElementById("inputState");
var inputCity = document.getElementById("inputCity");
var inputAddress = document.getElementById("inputAddress");
var inputPassword1 = document.getElementById("inputPassword1");
var inputPassword2 = document.getElementById("inputPassword2");
var contain_9 = document.getElementById("contain_9")
var comfirm_f = document.getElementById("comfirm_f");
var cp_error = document.getElementById("cp_error");
var e_error = document.getElementById("e_error");
var emailValidation =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var E_error = document.getElementById("E_error");
// var inputError = document.getElementById("inputError")

// executing functions
allForm.addEventListener("submit", (e) => {
   e.preventDefault();

   checkAllInput()
})

function  checkAllInput() {
    // geting input values
     let fNameValue = fName.value.trim(); 
     let fEmailValue = fEmail.value.trim(); 
     let fPassword1Value = fPassword1.value.trim(); 
     let fPassword2Value = fPassword2.value.trim(); 
     let fCountryValue = fCountry.value.trim(); 
     let  fCityValue = fCity.value.trim();  
     let  fStateValue = fState.value.trim(); 
     let  fAddressValue = fAddress.value.trim(); 
  //   let  fgridCheckValue = fgridCheck.value.trim(); 


     //Full Name Validation
    if (fNameValue === ""){
        // it should show error if the fullname is emety !
       f_error.style.display = "flex";
       fa_ban.style.display = "flex";
       fa_circle_check.style.display = "none";
       border.style.border ="2px solid red";
    } else if ( fNameValue.length > 0) {
        // it should show suscess !
        fa_ban.style.display = "none";
        f_error.style.display = "none";
        border.style.border ="2px solid seagreen";
        fa_circle_check.style.display = "flex";
        
    }

    /* Country Validation*/ 

  if (fCountryValue === ""){
        // it should show error if the fCountryValue is emety !
        country_error.style.display = " flex";
        fa_ban4.style.display = " flex";
        border1.style.border ="2px solid red";
        fa_circle_check4.style.display ="none";
    } else if ( fCountryValue.length > 0) {
        // it should show suscess !
        country_error.style.display = "none";
        fa_ban4.style.display = "none";
        fa_circle_check4.style.display ="flex";
        border1.style.border ="2px solid seagreen";
        
    }

//     /* State Validation */
    if (fStateValue === ""){
        // it should show error if the fStateValue is emety !
        state_error.style.display = " flex";
        fa_ban6.style.display = " flex";
        fa_circle_check6.style.display = " none";
        inputState.style.border ="2px solid red";
    } else if ( fStateValue.length > 0) {
        // it should show suscess !
        state_error.style.display = " none";
        fa_circle_check6.style.display = " flex";
        inputState.style.border ="2px solid seagreen";
        fa_ban6.style.display = " none";
    }

         /* City Validation */
         if (fCityValue === ""){
            // it should show error if the fStateValue is emety !
            city_error.style.display = " flex";
            fa_ban5.style.display = " flex";
            fa_circle_check5.style.display = " none";
           inputCity.style.border ="2px solid red";
        } else if (fCityValue.length > 0) {
            // it should show suscess !
            city_error.style.display = " none";
            fa_circle_check5.style.display = " flex";
           inputCity.style.border ="2px solid seagreen";
            fa_ban5.style.display = " none";
        }

             /* Address Validation */
             if (fAddressValue === ""){
                // it should show error if the fStateValue is emety !
                address_error.style.display = " flex";
                fa_ban7.style.display = " flex";
                fa_circle_check7.style.display = " none";
              inputAddress.style.border ="2px solid red";
            } else if (fAddressValue.length > 0) {
                // it should show suscess !
                address_error.style.display = " none";
                fa_circle_check7.style.display = " flex";
              inputAddress.style.border ="2px solid seagreen";
                fa_ban7.style.display = " none";
            }
    
             /* Password Validation */
             if (fPassword1Value === ""){
                // it should show error if the fStateValue is emety !
                p_error.style.display = " flex";
                fa_ban2.style.display = " flex";
                fa_circle_check2.style.display = " none";
              inputPassword1.style.border ="2px solid red";
            } else if (fPassword1Value.length < 9 ) {
                // Check if it letters are greater than 8 !
                contain_9.style.display = "flex";
                p_error.style.display = " none";
                fa_ban2.style.display = " flex";
                inputPassword1.style.border ="2px solid red";
            } else {
                 // it should show suscess !
                 contain_9.style.display = "none";
                  p_error.style.display = " none";
                fa_circle_check2.style.display = " none";
              inputPassword1.style.border ="2px solid seagreen";
                fa_ban2.style.display = " none";
            }
    
            // Comfirm password Validation

            if ( fPassword1Value !== fPassword2Value ) {
                comfirm_f.style.display = "flex";
                cp_error.style.display = "none";
                fa_ban3.style.display = " flex";
                fa_circle_check3.style.display = " none";
                inputPassword2.style.border ="2px solid red";
             } else if ( fPassword2Value === "" ) {
                comfirm_f.style.display = "none";
                cp_error.style.display = "flex";
                fa_ban3.style.display = " flex";
                fa_circle_check3.style.display = " none";
                inputPassword2.style.border ="2px solid red";
             }
              else {
                comfirm_f.style.display = "none";
                fa_ban3.style.display = " none";
                fa_circle_check3.style.display = " flex";
                inputPassword2.style.border ="2px solid seagreen";

            }
        //     All Info is correct

        //   if ( fgridCheckValue === "" ) {
        //     agree_error.style.display = " flex";
        //     sucess8.style.display = " none";
        //   } else {
        //       console.log("me")
        //   }

        //  email Validation 

        if ( fEmailValue === "") {
            e_error.style.display = " flex";
            E_error.style.display = " none";
            fa_ban1.style.display = " flex";
            fa_circle_check1.style.display = " none";
            floatingEmail.style.border ="2px solid red";
         }
         else {
            e_error.style.display = "none";
            fa_ban1.style.display = "none";
            fa_circle_check1.style.display = "flex";
            floatingEmail.style.border ="2px solid seagreen";
        }
           

}

// && fPassword1Value === 12