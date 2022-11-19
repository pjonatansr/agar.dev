import kaboom, { GameObj } from 'kaboom'
import { useRef, useEffect, useState, MutableRefObject } from 'react'
import { addOutline } from './components/game/addOutline'
import { followsMouse } from './components/game/followsMouse'
import { addMass } from './components/game/mass'
import { addPlayer } from './components/game/player'

export default function Home() {
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>
  useEffect(() => {
    const { current: canvas } = canvasRef
    const [global, debug] = [true, false]

    const width = window.screen.availWidth
    const height = window.screen.availHeight
    kaboom({
      global, canvas, width, height, debug,
    })

    addOutline(0, 0, width, 10)
    addOutline(0, 0, 10, height)
    addOutline(0, height - 10, width, 10)
    addOutline(width - 10, 0, 10, height)

    gravity(0)
    addMass(10, rand(0, width), rand(0, height), "mass")
    //add player commands
    // 1. player movement follows mouse
    const player = addPlayer(50)

    onUpdate('mass', (mass: GameObj) => {
      const massArr = get('mass')
      if (massArr.length < 200) {
        addMass(10, rand(0, width), rand(0, height), "mass")
      }
    })

    onCollide("mass", "player", (m: GameObj, p: GameObj) => {
      p.mass += m.mass
      console.log(p.mass)
      destroy(m)
    })

    // onCollide("player", "player", (p1: GameObj, p2: GameObj) => {
    //   when p1 collide with p2, p2 follows p1
    //   follow(p2, p1.pos)

    // })
    function dividePlayer(player: GameObj, ps: GameObj[]): void {
      const players = Object.freeze(ps)
      console.log({ players })
      const [p, ...rest] = ps
      console.log({ p, rest })

      if (!p) {
        console.log('no more players')
        return
      }

      if (get('player').length === 8) {
        console.log('max players reached')
        return
      }

      p.mass /= 2
      addPlayer(p.mass)

      console.log("adding player")

      dividePlayer(player, rest)


    }
    player.onUpdate(() => {

      if (isKeyPressed("space")) {
        console.log('space pressed')

        const players = get('player')
        //whenever an user press space, divide the player mass by 2 and add another player with the same mass
        //it only works if the player has less than 8 players

        //check if the player has less than 8 players
        if (players.length === 8) {
          console.log('max players reached')
          return
        }



        dividePlayer(player, players)
      }
    })



    //   camPos(player.pos)
    //   camScale(vec2(0.25))
    // })
    // 2. player can shoot 1 mass with W

    onKeyPressRepeat("w", () => {
      //shoot mass from all players
      // the mass will leave the player with 100 speed
      // the mass will have the same color as the player
      // the mass will from player to mousePos
      console.log('w pressed')
      const players = get('player')
      for (const player of players) {
        const mass = addMass(10, player.pos.x, player.pos.y, "mass", color(255, 255, 255))
        mass.move(vec2(mousePos().x - player.pos.x, mousePos().y - player.pos.y))
        player.mass -= 10
      }
    })

    // 3. player can shoot 8 mass with E
    // 4. player can divide by 2 with Space


    onDraw('player', (p) => {
      // drawText({
      //   text: p.mass,
      // })
      p.use(circle(p.mass / 2))
      p.use(area({
        width: p.mass,
        height: p.mass,
      }))

      // const pLen = get('player')?.length || 1
      // if (p.mass > 800 && pLen < 8) {
      //   p.mass /= 2
      //   addPlayer(p.mass, player)
      // }
    })

    onUpdate(() => {
      followsMouse()
    })

    //divide player with space
    onKeyDown('y', () => {

    })

  }, [])




  return (
    <canvas ref={canvasRef} />
  )





}

