'use client'

import CommoditiesPanel from "./ContentPanel"
import RotateApp from "./RotationControl"

export default function Page() {
  return (
    <div className="h-screen w-screen flex">

      {/* 左半分：ここにUIを置く */}
      <div className="w-[650px] h-full flex items-center justify-center bg-gray-100 gap-8">
        {/* ここに任意のUIを追加 */}
        <CommoditiesPanel />
        
      </div>
    

      {/* 右半分： 3D MODEL */}
      <div className="h-full flex flex-1 items-center justify-center bg-gray-100">
        <RotateApp />
      </div>

    </div>
  )
}
