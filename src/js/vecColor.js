import { Color, Vec3 } from "ogl";

export class VecColor {
  constructor(color) {
    this.color = new Color(color);
    this.vec = new Vec3(this.color.r, this.color.g, this.color.b);
  }
}
