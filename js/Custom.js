/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery.noConflict();
var toggleNewProfile = function () {
    jQuery('#new_profile_div').toggle();
}

var styledCheckboxRadioInit = function () {
    jQuery(".styled").uniform({
        radioClass: 'choice'
    });
}

function divToggle(divId){
    jQuery(divId).hide();
    jQuery(divId+'_element').show();
}