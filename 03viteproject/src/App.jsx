import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  // Array of colors with optional text color override
  const colors = [
    { bg: 'red', text: 'white' },
    { bg: 'blue', text: 'white' },
    { bg: 'white', text: 'black' },  
    { bg: 'yellow', text: 'white' },
    { bg: 'pink', text: 'white' },
    { bg: 'green', text: 'white' },
    { bg: 'purple', text: 'white' }
  ]

  return (
    <div
      className="w-screen h-screen flex items-center justify-center transition-colors duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-2">
        <div className="flex gap-3 shadow-lg bg-white px-4 py-3 rounded-xl">
          {colors.map(({ bg, text }) => (
            <button
              key={bg}
              onClick={() => setColor(bg)}
              className={`outline-none px-4 py-1 rounded-full shadow-lg`}
              style={{ backgroundColor: bg, color: text }}
            >
              {bg.charAt(0).toUpperCase() + bg.slice(1)}
              {/* //first letter uppercase + other as it is:holded by bg.slice */}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
