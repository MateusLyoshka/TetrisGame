"use client"

import { useRef } from "react";
import Colors from '../components/colors/colors'
import Shapes from '@/components/shapes/shapes'

const GeneratePieces = () => {
  let random = Math.floor(Math.random()*7);
  const colorArray = Colors()
  const shapesArray = Shapes()
}

export default function Home() {
  const rols = 20;
  const cols = 10;

  const canvas = useRef<HTMLCanvasElement>(null);
  const context = canvas.current?.getContext("2d");
  context?.scale(20, 20);

  GeneratePieces();

  return (
    <main className="flex justify-center bg-gray-200 h-screen w-screen">
        <div className=" flex flex-col justify-center items-center">
          <h2 className="">Score: 0</h2>
          <canvas
            className="w-[300px] h-[600px] shadow-lg border-black bg-white"
            id="tetris"
          ></canvas>
        </div>
      </main>
  );
}
