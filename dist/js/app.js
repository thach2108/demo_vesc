(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"/Users/dodangthach/Desktop/login/src/js/components/CustomInput.js":[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // import $ from jQuery
var CustomInput = function () {
  function CustomInput(element) {_classCallCheck(this, CustomInput);
    this._create_js(element || '.place');
  }

  /**
     * create js for custom input
     * @param {*} element 
     */_createClass(CustomInput, [{ key: "_create_js", value: function _create_js(
    element) {
      $(element).focusout(function () {
        $(this).closest(".input-custom").removeClass("input-custom-focus");
        if ($(this).val() != "") {
          $(this).closest(".input-custom").find("p").addClass("onvalue");
        } else {
          $(this).closest(".input-custom").find("p").removeClass("onvalue");
        }
      }).focus(function () {
        $(this).closest(".input-custom").addClass("input-custom-focus");
      });

    }

    /**
       * public function show name
       * @param {description parameter} name 
       */ }, { key: "show_name", value: function show_name(
    name) {
      console.log("this is class", name);
    }

    /**
       * private function
       */ }, { key: "_demo_private_func", value: function _demo_private_func()
    {

    } }]);return CustomInput;}();exports.default =

CustomInput;

},{}],"/Users/dodangthach/Desktop/login/src/js/constants/Constants.js":[function(require,module,exports){
'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default = {
  url: 'https://dev.safesai.com/',
  messages: {
    SUCCES: 200,
    CAPTCHAISINVALID: 600,
    EMAILISREQUIRED: 601,
    EMAILINVALIDATE: 602,
    PASSWORDISREQUIRED: 603,
    INCORECT: 604,
    INACTIVE: 605 } };

},{}],"/Users/dodangthach/Desktop/login/src/js/controller/AccountController.js":[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var AccountController = function () {
  function AccountController(name) {_classCallCheck(this, AccountController);
    this.name = name || "Account Contoller";
    this.show(this.name);
  }

  /**
     * show name
     * @param {description parameter} name 
     */_createClass(AccountController, [{ key: "show", value: function show(
    name) {
      console.log("this is class", name);
    }

    /**
       * define methods or properties in here
       */ }]);return AccountController;}();exports.default =

AccountController;

},{}],"/Users/dodangthach/Desktop/login/src/js/index.js":[function(require,module,exports){
'use strict';

















var _Home = require('./views/Home');var _Home2 = _interopRequireDefault(_Home);
var _Blog = require('./views/Blog');var _Blog2 = _interopRequireDefault(_Blog);
var _Login = require('./views/Login');var _Login2 = _interopRequireDefault(_Login);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} /**
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
                                                                                                                                                                                                                                                                                                                                       */ // import $    from  "jquery";
var Main = function Main() {_classCallCheck(this, Main);var wrapper = document.getElementById('content');var namePage = wrapper ? wrapper.dataset.namePage : ""; /**
                                                                                                                                                                  * check page 
                                                                                                                                                                  */switch (namePage) {case "home":this.home = new _Home2.default("page Home");break;case "blog":this.blog = new _Blog2.default("page Blog");break;case "login":console.log('page login');
      this.login = new _Login2.default("page Login");
      break;
    default:
      break;}

  window.preAlertHtml = $('.site-alert').html();
};


$(document).ready(function () {
  window.main = new Main();
});

},{"./views/Blog":"/Users/dodangthach/Desktop/login/src/js/views/Blog.js","./views/Home":"/Users/dodangthach/Desktop/login/src/js/views/Home.js","./views/Login":"/Users/dodangthach/Desktop/login/src/js/views/Login.js"}],"/Users/dodangthach/Desktop/login/src/js/views/Blog.js":[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var Blog = function () {
  function Blog(name) {_classCallCheck(this, Blog);
    this.name = name || "Blog";
    this.show(this.name);
  }

  /**
     * show name
     * @param {description parameter} name 
     */_createClass(Blog, [{ key: "show", value: function show(
    name) {
      console.log("this is class", name);
    } }]);return Blog;}();exports.default =


Blog;

},{}],"/Users/dodangthach/Desktop/login/src/js/views/Home.js":[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _AccountController = require("../controller/AccountController");var _AccountController2 = _interopRequireDefault(_AccountController);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var

Home = function () {
  function Home(name) {_classCallCheck(this, Home);
    this.name = name || "Home";
    this.show_name(this.name);
  }

  /**
     * public function show name
     * @param {description parameter} name 
     */_createClass(Home, [{ key: "show_name", value: function show_name(
    name) {
      console.log("this is class", name);
      var acountContoller = new _AccountController2.default();
    }

    /**
       * private function
       */ }, { key: "_demo_private_func", value: function _demo_private_func()
    {

    } }]);return Home;}();exports.default =

Home;

},{"../controller/AccountController":"/Users/dodangthach/Desktop/login/src/js/controller/AccountController.js"}],"/Users/dodangthach/Desktop/login/src/js/views/Login.js":[function(require,module,exports){
'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _CustomInput = require('../components/CustomInput');var _CustomInput2 = _interopRequireDefault(_CustomInput);
var _Constants = require('../constants/Constants');var _Constants2 = _interopRequireDefault(_Constants);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var

Login = function () {
  function Login(name) {_classCallCheck(this, Login);
    this.name = name || "Login";
    this.customInput = new _CustomInput2.default();
    this._validatiom();
  }

  /**
     * validate form login
     */_createClass(Login, [{ key: '_validatiom', value: function _validatiom()
    {
      var $self = this;
      $self.loginForm = $('#login-form');

      $self.loginForm.submit(function (e) {
        e.preventDefault();
      }).validate({
        rules: {
          username: {
            required: !0,
            email: true },

          password: {
            required: !0,
            minlength: 6 } },


        messages: {
          username: {
            required: "Username is required",
            email: "Email invalidate" },

          password: {
            required: "Password is required",
            minlength: "Password Password minimum 6 characters" } },


        submitHandler: async function submitHandler(form) {
          $('.site-loading').show();
          $self.respData = await $self._handle_login(form);
          console.log('$self.respData', $self.respData);
          $self._hanle_respon($self.respData);
          $('.site-loading').hide();
        } });

    }

    /**
       * controller post api
       * @param {*} form 
       */ }, { key: '_handle_login', value: async function _handle_login(
    form) {
      var data = {
        username: form.username.value,
        password: form.password.value,
        saveLogin: form.saveLogin.checked,
        'g-recaptcha-response': window.captcha || '' };

      console.log('data', data);

      var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      var url = _Constants2.default.url + 'stripe/user/login';

      var response = await fetch(proxyUrl + url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json' },

        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      var resp = await response.json(); // parses JSON response into native Javascript objects 
      return resp;
    }


    /**
       * action after server respon
       * @param {*} resp 
       */ }, { key: '_hanle_respon', value: function _hanle_respon(
    resp) {
      var html = window.preAlertHtml;
      function _replace(html, data) {
        html = html.replace(/\[class-type\]/, data ? data.classType : '');
        html = html.replace(/\[type\]/, data ? data.type : '');
        html = html.replace(/\[message\]/, data ? data.message : '');
        return html;
      }
      switch (resp.code) {
        case _Constants2.default.messages.SUCCES:
          resp.type = 'Success';
          resp.classType = 'alert-success';
          html = _replace(html, resp);
          setTimeout(function () {
            location.reload();
          }, 1000);
          break;
        case _Constants2.default.messages.CAPTCHAISINVALID:
        case _Constants2.default.messages.EMAILISREQUIRED:
        case _Constants2.default.messages.EMAILINVALIDATE:
        case _Constants2.default.messages.PASSWORDISREQUIRED:
        case _Constants2.default.messages.INCORECT:
        case _Constants2.default.messages.INACTIVE:
          resp.type = 'Danger';
          resp.classType = 'alert-danger';
          html = _replace(html, resp);
          break;
        default:
          break;}


      $('.site-alert').html('').html(html).addClass('show');
    }

    /**
       * public function show name
       * @param {description parameter} name 
       */ }, { key: 'show_name', value: function show_name(
    name) {
      console.log("this is class", name);
    }

    /**
       * private function
       */ }, { key: '_demo_private_func', value: function _demo_private_func()
    {

    } }]);return Login;}();exports.default =

Login;

},{"../components/CustomInput":"/Users/dodangthach/Desktop/login/src/js/components/CustomInput.js","../constants/Constants":"/Users/dodangthach/Desktop/login/src/js/constants/Constants.js"}]},{},["/Users/dodangthach/Desktop/login/src/js/index.js"])

//# sourceMappingURL=app.js.map
