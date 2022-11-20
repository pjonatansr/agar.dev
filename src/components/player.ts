import { GameObj } from "kaboom";

const addPlayer = (mass: number, player?: GameObj) => {
  let playerPos = player?.pos ?? center()

  const playerArr = [
    body(),
    "player",
    {
      mass: mass / 2,
      speed: mass,
      currentMass: mass,
      dividing: false
    },
    circle(mass),
    area({
      width: mass,
      height: mass,
    }),
    z(1),
    pos(playerPos),
    // @ts-ignore
    origin('center'),
  ];

  return add(playerArr);
}

export { addPlayer };