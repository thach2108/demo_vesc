class Blog{
  constructor(name) { 
    this.name = name||"Blog"; 
    this.show(this.name);
  }
  
  /**
   * show name
   * @param {description parameter} name 
   */
  show(name){
    console.log("this is class",name);
  } 
}

export default Blog;