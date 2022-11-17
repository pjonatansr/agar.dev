import { Vec2 } from 'kaboom';
import { GenericGameObject } from './types';

export function followsMouse(mouse: number[], X: number, Y: number, player: GenericGameObject) {
  const { x, y } = toWorld(mousePos());
  if (x > 0 && y > 0) {
    mouse[X] = x;
    mouse[Y] = y;
  }

  //the player speed is inversely proportional to the player mass
  const speed = player.speed / player.mass;

  //the player moves towards the mouse
  player.move(vec2(mouse[X] - player.pos.x, mouse[Y] - player.pos.y).scale(speed));


}
