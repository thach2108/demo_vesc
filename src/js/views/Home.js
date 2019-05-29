import AccountController from '../controller/AccountController';

class Home {
  constructor(name) { 
    this.name = name||"Home"; 
    this.show_name(this.name);
  }

  /**
   * public function show name
   * @param {description parameter} name 
   */
  show_name(name){
    console.log("this is class",name);
    let acountContoller = new AccountController();
  } 

  /**
   * private function
   */
  _demo_private_func(){

  }
}
export default Home