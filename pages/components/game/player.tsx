import { width, height } from "./consts";

const addPlayer = (mass: number) => add([
  body(),
  "player",
  {
    mass,
    speed: 100,
  },
  pos(center()),
  circle(mass),
  area({
    width: mass,
    height: mass,
  }),
]);





export { addPlayer };