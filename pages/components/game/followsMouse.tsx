const mouse = {
  x: 0,
  y: 0
}

export function followsMouse() {
  const { x, y } = toWorld(mousePos());

  if (x > 0 && y > 0) {
    mouse.x = x;
    mouse.y = y;
  }


  for (const player of get('player')) {
    const speed = player.speed / player.mass;

    player.move(vec2(mouse.x - player.pos.x, mouse.y - player.pos.y).scale(speed));
  }

}
