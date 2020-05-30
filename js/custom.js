/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("wrapper").style.marginLeft = "250px";
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome  
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("wrapper").style.marginLeft = "0";
    document.documentElement.style.overflow = 'auto';  // firefox, chrome
    document.getElementById('search-2').style.display = 'none';
}


var overlay = document.getElementById('overlay');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == overlay) {
        this.closeNav();
    }
}

//------------Login-----------------
function isEmail(inputEmail) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(inputEmail);
}
function validatePassword(inputPassword) {
    return inputPassword.length > 4;
}
$(document).ready(function () {
    $('#email').change(function (e) {
        var email = $(this).val().trim();
        // alert(`email = ${JSON.stringify(email)} `);
        if (!isEmail(email)) {
            $('#emailError').html("Email không đúng định dạng");
        }
        else {
            $('#emailError').html("");
        }
    });
    $('#password').change(function (e) {
        var password = $(this).val();
        if (!validatePassword(password)) {
            $('#passwordError').html("Mật khẩu phải ít nhất 5 kí tự");
        }
        else {
            $('#passwordError').html("");
        }
    });
});

function openLoginModal() {
    document.getElementById('modal-login').style.display = "block";
}

function closeModalLogin() {
    document.getElementById('modal-login').style.display = "none";
}



//------------- Signup----------------------
function openSignupModal() {
    document.getElementById('modal-login').style.display = "none";
    document.getElementById('modal-signup').style.display = 'block';

}

function closeModalSignup() {
    document.getElementById('modal-signup').style.display = 'none';
    document.getElementById('modal-login').style.display = "block";
}

//------------Forgot password----------------
function openFogotPasswordModal() {
    document.getElementById('modal-login').style.display = "none";
    document.getElementById('modal-forgotPassword').style.display = 'block';
}
function closeFogotPasswordModal() {
    document.getElementById('modal-forgotPassword').style.display = 'none';
    document.getElementById('modal-login').style.display = "block";
}


//--------------
var loginContent = document.getElementById('login-content');
var signupContent = document.getElementById('signup-content');
var forgotPasswordContent = document.getElementById('forgotPassword-content');
var sidebar = document.getElementById('mySidebar');
var overlay = document.getElementById('overlay');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == loginContent) {
        document.getElementById('modal-login').style.display = "none";
    }
    if (event.target == signupContent) {
        document.getElementById('modal-signup').style.display = "none";
    }
    if (event.target == forgotPasswordContent) {
        document.getElementById('modal-forgotPassword').style.display = "none";
    }
    if (event.target == overlay) {
        this.closeNav();
    }
}

//--------------------- Tab control -  Trang chi tiet san pham ------------------------

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" selected", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " selected";
}

//------------------ Scroll to Top button ------------------------- 

$(document).ready(function () {
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back_to_top').fadeIn();
        } else {
            $('#back_to_top').fadeOut();
        }
    });
    //Click event to scroll to top
    $('#back_to_top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

});


//--------------------------Scroll spy----------------------------

var offset = 150;
$('.list-group a').click(function (event) {
    if (this.hash !== "") {

        event.preventDefault();
        var hash = this.hash;
        // var hash = $(this).attr('href')  ;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - offset
        }, 800, function () {

            window.location.hash = offset;
        });
    }
});



//-------


//---------------- Show dropdown-cart-----------------
$(document).ready(function(){
    $('#dropdownCart').on('click',function(){
        $('.dropdown-cart').fadeIn();
    });
    window.onclick = function (event) {
        if (event.target != $('.dropdown-cart')) {
            $('.dropdown-cart').css('display','none');
        }
    };
});
