import kaboom from 'kaboom'
import { useRef, useEffect, useState, MutableRefObject } from 'react'
import { addOutline } from './components/game/addOutline'
import { followsMouse } from './components/game/followsMouse'
import { addMass } from './components/game/mass'
import { addPlayer } from './components/game/player'

export default function Home() {
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>
  useEffect(() => {
    const { current: canvas } = canvasRef
    const [global, debug] = [true, true]

    const width = window.innerWidth
    const height = window.innerHeight
    kaboom({
      global, canvas, width, height, debug,
    })

    addOutline(0, 0, width, 10)
    addOutline(0, 0, 10, height)
    addOutline(0, height - 10, width, 10)
    addOutline(width - 10, 0, 10, height)

    gravity(0)
    const player = addPlayer(250)

    const mouse = [0, 0]
    const X = 0;
    const Y = 1;

    //add player commands
    // 1. player movement follows mouse
    onUpdate(() => {
      followsMouse(mouse, X, Y, player)
    })

    // 2. player can shoot 1 mass with W
    // 3. player can shoot 8 mass with E
    // 4. player can divide by 2 with Space

  }, [])


  return (
    <canvas ref={canvasRef} />
  )





}

