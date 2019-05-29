/**
 * =============Quy định cách đặt tên============= 
 * 
 * ===========================================================
 * tên class  : Viết theo cú pháp lạc đà, viết hoa chữ cái đầu
 *    + ClassName               :  tên class
 * 
 * ===========================================================
 * tên biến   : viết  theo cú pháp lạc dà, viết thường chữ cái đầu
 *    + variableName            : tên biến
 * 
 * ===========================================================
 * tên hàm    : viết theo cú pháp gạch chân
 *    + public_fuction(){}      :  biểu diễn hàm public
 *    + _private_function(){}   :  biểu diễn hàm private
 */


import Home from './views/Home';
import Blog from './views/Blog';
import Login from './views/Login';
// import $    from  "jquery";

class Main {
  constructor(){
    let wrapper = document.getElementById('content');
    let namePage = wrapper?wrapper.dataset.namePage:"";
    /**
     * check page 
     */
    switch (namePage) {
      case "home":
        this.home = new Home("page Home");
        break;
      case "blog":
        this.blog = new Blog("page Blog");
        break;
      case "login":
        console.log('page login');
        this.login = new Login("page Login");
        break;
      default:
        break;
    }
    window.preAlertHtml = $('.site-alert').html()
  }
}

$(document).ready(()=>{
  window.main = new Main();
}); 