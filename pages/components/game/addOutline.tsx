export const addOutline = (x: number, y: number, w: number, h: number) => {
  add([
    rect(w, h),
    pos(x, y),
    color(0, 0, 0),
    outline(1),
    area(),
    solid(),
    z(2),
  ]);

};
