"use client"

import { useState } from "react"
// import { Progress } from "@/components/ui/progress"
import { ChevronDown } from "lucide-react"

// Sample data for commodities
const commodities = [
  { id: 1, name: "DATE", price: 980, quantity: 1.25, category: "AGRICULTURAL SUPPLIES" },
  { id: 2, name: "ALTITUDE", price: 1130, quantity: 2.5, category: "AGRICULTURAL SUPPLIES" },
  { id: 3, name: "LENGTH", price: 3220, quantity: 0.75, category: "AGRICULTURAL SUPPLIES" },
  { id: 4, name: "WEIGHT", price: 7540, quantity: 0.3, category: "AGRICULTURAL SUPPLIES" },
]

export default function CommoditiesPanel() {
 
  const [selectedCategory, setSelectedCategory] = useState("AGRICULTURAL SUPPLIES")
  

  return (
    <div className="h-full w-[560px] flex flex-col p-4 font-mono">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-5xl font-bold">C-79J</h1>
        <div className="text-right">
          <div className="text-s text-gray-400">YUKIKAZE</div>
        </div>
      </div>

      {/* Inventory Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="text-base text-gray-400">2024/03</div>
          <div className="bg-gray-300 hover:scale-110 text-black text-xs px-2 py-1 rounded">?</div>
        </div>

        <div className="bg-white p-3 rounded mb-4">
          <div className="flex justify-between items-center mb-2">
            <div className="font-bold text-xl">MISSION & RESULT</div>
            <ChevronDown className="w-4 h-4" />
          </div>

          <div className="text-sm mb-1">2023年度新入生機体。C-41J以来となる空中でのCanSat放出を行った。機体捜索補助用の煙玉発煙とCanSatによる中継通信をミッションとしたが、いずれも達成しなかった。</div>
          {/* <Progress value={100} className="h-2 mb-2" /> */}

    
        </div>

        
      </div>

      {/* Categories Section */}
      <div className="flex-1 overflow-auto">
        <div className="bg-white p-3 rounded-xl mb-4">
          <div className="flex justify-between items-center mb-2">
            <div className="font-bold text-black"> DETAILS</div>
            <ChevronDown className="w-4 h-4" />
          </div>

          {/* <div className="bg-white p-2 rounded mb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs">A</div>
              <div className="font-bold text-sm">AGRICULTURAL SUPPLIES</div>
              <div className="ml-auto text-amber-500 text-sm">+10%</div>
            </div>
          </div> */}

          {/* Commodities List */}
          <div className="space-y-3">
            {commodities
              .filter((c) => c.category === selectedCategory)
              .map((commodity) => (
                <div key={commodity.id} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-sm flex items-center justify-center">
                    <div className="w-4 h-1 bg-amber-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">{commodity.name}</div>
                    <div className="text-xs text-gray-400">{commodity.quantity.toFixed(2)} SCU</div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-sm font-bold">{commodity.price.toLocaleString()}</div>
                    <div className="text-xs text-gray-400">+{Math.floor(commodity.price * 0.1)} aUEC</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Additional Categories */}
        {/* <div className="bg-white p-3 rounded mb-4">
          <div className="flex justify-between items-center">
            <div className="font-bold">NO DEMAND</div>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div> */}
      </div>
    </div>
  )
}
