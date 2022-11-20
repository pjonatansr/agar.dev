import { AreaComp, BodyComp, CircleComp, GameObj, PosComp } from 'kaboom';

export type GenericGameObject = GameObj<BodyComp | PosComp | CircleComp | AreaComp | {
  mass: number;
  speed: number;
}>;
