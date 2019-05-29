// import $ from jQuery
class CustomInput {
  constructor(element) {
    this._create_js(element||'.place')
  }

  /**
   * create js for custom input
   * @param {*} element 
   */
  _create_js(element){
    $(element).focusout(function(){
      $(this).closest(".input-custom").removeClass("input-custom-focus");
      if($(this).val() != ""){
        $(this).closest(".input-custom").find("p").addClass("onvalue");
      }else{
        $(this).closest(".input-custom").find("p").removeClass("onvalue");
      }
    }).focus(function(){
      $(this).closest(".input-custom").addClass("input-custom-focus");
    });
    
  }

  /**
   * public function show name
   * @param {description parameter} name 
   */
  show_name(name){
    console.log("this is class",name);
  } 

  /**
   * private function
   */
  _demo_private_func(){

  }
}
export default CustomInput