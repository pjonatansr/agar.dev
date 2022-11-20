import { Color, ColorComp } from "kaboom";

const addMass = (mass: number, x: number, y: number, tag: string, colorParent?: ColorComp) => {

  const m: any[] = [
    tag,
    {
      mass,
      speed: 0,
    },
    z(0),
    pos(x, y),
    circle(mass),
    area({
      width: mass,
      height: mass,
    }),
  ]
  if (colorParent) {
    m.push(colorParent)
  } else { //random color, no black
    m.push(color(rand(100, 255), rand(100, 255), rand(100, 255)))
  }

  return add(m);
}


export { addMass };