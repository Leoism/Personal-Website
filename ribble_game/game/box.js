class Box {
  // v v v v v v You had this in all caps....
    constructor(x = 0, y = 0, boxD = boxDimension, color = {r :0, g :0, b :0}){
        this.x = x
        this.y = y
        this.boxD = boxD
        this.color = color
      }

    show() {
      let {r, g, b} = this.color
      fill(r, g, b)
      rect(this.x, this.y, this.boxD, this.boxD)
           }
}
