const { $, driver, browser } = require("@wdio/globals");
require("dotenv").config();
const { assert, expect } = require("chai");
const platform = require("../../../Utils/mobile");
const mobiledata=require("../../../data/lettyshop.json");
class AccountPage {
  locators = {
    android: {
        accountIcon :"//android.widget.FrameLayout[@content-desc=\"Account\"]/android.view.ViewGroup/android.widget.TextView",
        settingsOption :"//android.widget.TextView[@text='Settings']",
        editProfileTitle :"//android.widget.TextView[@resource-id='com.letyshops:id/toolbar_title_edit_profile']",
        userIdField :"//android.widget.EditText[@resource-id='com.letyshops:id/edit_profile_edit_text']",
        userMailIdField :"(//android.widget.TextView[@resource-id='com.letyshops:id/edit_profile_edit_text'][2]",
        genderDropdown :"//android.widget.RelativeLayout[@resource-id='com.letyshops:id/edit_profile_chose_sex']//android.widget.ImageView",
        genderFemale :"//android.widget.TextView[@resource-id='com.letyshops:id/popup_title_2']",
        closeEditProfileIcon :"//android.widget.ImageButton[@content-desc='Navigate up']",
        exitOption :"//android.widget.TextView[@text='EXIT']",
        clsReferalDialog :"//android.widget.ImageView[@content-desc='close']",
        logOutOption :"//android.widget.TextView[@text='Logout']",
        okOption :"//android.widget.TextView[@resource-id='com.letyshops:id/md_buttonDefaultPositive']",
    },
  };

  get clickAccountIcon() {
    return $(this.locators[platform()].accountIcon);
  }
  get clickClsReferalDialog() {
    return $(this.locators[platform()].clsReferalDialog);
  }
  get clickSettings() {
    return $(this.locators[platform()].settingsOption);
  }
  get getTitleEditProfile() {
    return $(this.locators[platform()].editProfileTitle);
  }
  
  get getUserId() {
    return $(this.locators[platform()].userIdField);
  } 
  get getUserMailId() {
    return $(this.locators[platform()].userMailIdField);
  }
  get getUserMailId() {
    return $(this.locators[platform()].genderDropdown);
  }
  get gender() {
    return $(this.locators[platform()].genderFemale);
  }
  get closeEditingProfile() {
    return $(this.locators[platform()].closeEditProfileIcon);
  }
  get option() {
    return $(this.locators[platform()].exitOption);
  }
  get logout() {
    return $(this.locators[platform()].logOutOption);
  }
  get confirmation() {
    return $(this.locators[platform()].okOption);
  }
  
 
}
module.exports = new AccountPage();
