
// var powerdiv = document.getElementsByClassName('power');
// var display = 0;
// function showJumpExercises() {
//     if (display == 1) {
//         for (var i = 0; i < powerdiv.length; i++) {
//             powerdiv[i].style.display = 'flex';
//         }
//         display = 0;
//         btn1.style.backgroundColor = 'rgb(119, 38, 38)';
//     }
//     // if (showPowerExercises() == true) {
//     //     showPowerExercises() = false;
//     // }
//     else {
//         for (var i = 0; i < powerdiv.length; i++) {
//             powerdiv[i].style.display = 'none';
//         }
//         display = 1;
//         btn1.style.backgroundColor = '#ffab38';
//         btn1.style.transition = '.5s ease';
//     };
// };

// function removePowerExercises() {
//     showPowerExercises() = false;
// }

// function removeJumpExercises() {
//     showJumpExercises() = false;
// }

// var display1 = 0;
// var jumpdiv = document.getElementsByClassName('jump');
// function showPowerExercises() {
//     if (display1 == 1) {
//         for (var i = 0; i < jumpdiv.length; i++) {
//             jumpdiv[i].style.display = 'flex';
//         }
//         display1 = 0;
//         btn2.style.backgroundColor = 'rgb(119, 38, 38)';
//     }
//     else {
//         for (var i = 0; i < jumpdiv.length; i++) {
//             jumpdiv[i].style.display = 'none';
//         }
//         display1 = 1;
//         btn2.style.backgroundColor = '#ffab38';
//         btn2.style.transition = '.5s ease';
//     };
// };




var powerdiv = document.getElementsByClassName('power');
var jumpdiv = document.getElementsByClassName('jump');

var isJumpDisplayed = false; // State for jump exercises
var isPowerDisplayed = false; // State for power exercises

function showJumpExercises() {
    if (isJumpDisplayed) {
        // If already displayed, reset everything and show both sets (power + jump)
        showAllExercises();
        isJumpDisplayed = false;  // Reset jump state
    } else {
        // Show only jump exercises and hide power exercises
        for (var i = 0; i < jumpdiv.length; i++) {
            jumpdiv[i].style.display = 'flex';
        }
        btn1.style.backgroundColor = 'var(--clr-yellow)'; // Active state for the button
        btn1.style.transition = '.3s ease';

        hidePowerExercises();  // Hide power exercises
        isJumpDisplayed = true;  // Mark jump as displayed
    }
}

function showPowerExercises() {
    if (isPowerDisplayed) {
        // If already displayed, reset everything and show both sets (power + jump)
        showAllExercises();
        isPowerDisplayed = false;  // Reset power state
    } else {
        // Show only power exercises and hide jump exercises
        for (var i = 0; i < powerdiv.length; i++) {
            powerdiv[i].style.display = 'flex';
        }
        btn2.style.backgroundColor = 'var(--clr-yellow)'; // Active state for the button
        btn2.style.transition = '.3s ease';

        hideJumpExercises();  // Hide jump exercises
        isPowerDisplayed = true;  // Mark power as displayed
    }
}

function hidePowerExercises() {
    for (var i = 0; i < powerdiv.length; i++) {
        powerdiv[i].style.display = 'none';
    }
    btn2.style.backgroundColor = 'var(--clr-buttons)';  // Reset button color
    isPowerDisplayed = false;  // Mark power as hidden
}

function hideJumpExercises() {
    for (var i = 0; i < jumpdiv.length; i++) {
        jumpdiv[i].style.display = 'none';
    }
    btn1.style.backgroundColor = 'var(--clr-buttons)';  // Reset button color
    isJumpDisplayed = false;  // Mark jump as hidden
}

function showAllExercises() {
    // Show all (both power and jump) divs
    for (var i = 0; i < jumpdiv.length; i++) {
        jumpdiv[i].style.display = 'flex';
    }
    for (var i = 0; i < powerdiv.length; i++) {
        powerdiv[i].style.display = 'flex';
    }

    // Reset both button colors to inactive state
    btn1.style.backgroundColor = 'var(--clr-buttons)';
    btn2.style.backgroundColor = 'var(--clr-buttons)';

    // Reset both states
    isJumpDisplayed = false;
    isPowerDisplayed = false;
}







function showSidebar() {
    const body = document.body;
    body.classList.toggle('no-scroll');
    var BG = document.querySelector('.menu-bar-darkBG');
    BG.classList.toggle('displayActive');
    var MenuIcon = document.querySelector('.yallah');
    MenuIcon.classList.toggle('turnNinetyDeg');
    var sidebar = document.querySelector('.menu-bar');
    sidebar.classList.toggle('active-menu-bar');
};
function hideSidebar() {
    var BG = document.querySelector('.menu-bar-darkBG');
    BG.classList.remove('displayActive');
    var sidebar = document.querySelector('.menu-bar');
    sidebar.classList.remove('active-menu-bar')
    var MenuIcon = document.querySelector('.yallah');
    MenuIcon.classList.remove('turnNinetyDeg');
}




function showPopUp() {
    const body = document.body;
    const popUp = document.querySelector('.popup');
    const popUpBG = document.querySelector('.popupBG');

    // Scroll verhindern (auf allen Geräten)
    body.classList.add('no-scroll');

    // Popup anzeigen
    popUp.style.bottom = '0%';
    popUpBG.style.display = 'block';
}

function RemovePopUp() {
    const body = document.body;
    const popUp = document.querySelector('.popup');
    const popUpBG = document.querySelector('.popupBG');

    // Scroll wieder erlauben
    body.classList.remove('no-scroll');

    // Popup ausblenden
    popUp.style.bottom = '-110%';
    popUpBG.style.display = 'none';
}
