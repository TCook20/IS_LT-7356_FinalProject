/*
* Main Javascript
*
* @author Travis Cook (cooktw@missouri.edu)
*
*/

$(document).ready(function(){
    // Requirement 4c jQuery Event
    $('.button').hover(function() {
        // Requirement 4e jQuery Animation
        $('.button').animate({ fontSize: "150%"});
    }, function() {
        $('.button').animate({ fontSize: "100%"});
    });
});