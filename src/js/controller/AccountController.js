class AccountController{
  constructor(name) { 
    this.name = name||"Account Contoller"; 
    this.show(this.name);
  }

  /**
   * show name
   * @param {description parameter} name 
   */
  show(name){
    console.log("this is class",name);
  } 

  /**
   * define methods or properties in here
   */
}
export default AccountController