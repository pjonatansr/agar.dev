
const addMass = (mass: number, x: number, y: number) => add([
  "mass",
  {
    mass,
    speed: 0,
  },
  //random x and y
  pos(x, y),
  circle(mass),
  area({
    width: mass,
    height: mass,
  }),
  solid(),
]);

export { addMass };