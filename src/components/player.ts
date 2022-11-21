import { GameObj } from "kaboom";

const addPlayer = (mass: number, player?: GameObj) => {
  let playerPos = player?.pos ?? center()

  const playerArr = [
    body({
      weight: mass,
    }),
    "player",
    {
      mass: mass,
      speed: mass,
      weight: mass,
    },
    circle(mass),
    area({
      width: mass,
      height: mass,
      shape: 'circle',
    }),
    z(1),
    pos(playerPos),
    // @ts-ignore
    origin('center'),
  ];

  return add(playerArr);
}

export { addPlayer };