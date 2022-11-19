import { GameObj } from "kaboom";

const addPlayer = (mass: number, player?: GameObj) => {
  const playerArr = [
    body(),
    "player",
    {
      mass,
      speed: mass,
      currentMass: mass,
      dividing: false
    },
    pos(center()),
    circle(mass),
    area({
      width: mass,
      height: mass,
    }),
    z(1),

    // @ts-ignore
    origin('center')
  ];

  return add(playerArr);
}

export { addPlayer };