import CustomInput from '../components/CustomInput';
import Constants from '../constants/Constants';

class Login {
  constructor(name) {
    this.name = name || "Login";
    this.customInput = new CustomInput()
    this._validatiom()
  }

  /**
   * validate form login
   */
  _validatiom() {
    var $self = this;
    $self.loginForm = $('#login-form');

    $self.loginForm.submit(function (e) {
      e.preventDefault();
    }).validate({
      rules: {
        username: {
          required: !0,
          email: true
        },
        password: {
          required: !0,
          minlength: 6
        }
      },
      messages: {
        username: {
          required: "Username is required",
          email: "Email invalidate"
        },
        password: {
          required: "Password is required",
          minlength: "Password Password minimum 6 characters",
        }
      },
      submitHandler: async (form) => {
        $('.site-loading').show();
        $self.respData = await $self._handle_login(form);
        console.log('$self.respData', $self.respData);
        $self._hanle_respon($self.respData);
        $('.site-loading').hide();
      }
    });
  }

  /**
   * controller post api
   * @param {*} form 
   */
  async _handle_login(form) {
    let data = {
      username: form.username.value,
      password: form.password.value,
      saveLogin: form.saveLogin.checked,
      'g-recaptcha-response': window.captcha || ''
    }
    console.log('data', data);
    
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let url = Constants.url + 'stripe/user/login'

    let response = await fetch(proxyUrl + url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    const resp = await response.json(); // parses JSON response into native Javascript objects 
    return resp;
  }


  /**
   * action after server respon
   * @param {*} resp 
   */
  _hanle_respon(resp) {
    let html = window.preAlertHtml;
    function _replace(html, data) {
      html = html.replace(/\[class-type\]/, data ? data.classType : '');
      html = html.replace(/\[type\]/, data ? data.type : '');
      html = html.replace(/\[message\]/, data ? data.message : '');
      return html;
    }
    switch (resp.code) {
      case Constants.messages.SUCCES:
        resp.type = 'Success';
        resp.classType = 'alert-success';
        html = _replace(html, resp);
        setTimeout(function(){
          location.reload();
        },1000);
        break;
      case Constants.messages.CAPTCHAISINVALID:
      case Constants.messages.EMAILISREQUIRED:
      case Constants.messages.EMAILINVALIDATE:
      case Constants.messages.PASSWORDISREQUIRED:
      case Constants.messages.INCORECT:
      case Constants.messages.INACTIVE:
        resp.type = 'Danger';
        resp.classType = 'alert-danger';
        html = _replace(html, resp)
        break;
      default:
        break;
    }

    $('.site-alert').html('').html(html).addClass('show');
  }

  /**
   * public function show name
   * @param {description parameter} name 
   */
  show_name(name) {
    console.log("this is class", name);
  }

  /**
   * private function
   */
  _demo_private_func() {

  }
}
export default Login