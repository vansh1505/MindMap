import React from 'react'

export default function Back({children}) {
  return (
   <>
    <div className="bg-gray-900 p-4 rounded-3xl overflow-auto shadow-md hide-scrollbar">
    <pre className="text-white font-mono text-sm">{children}</pre>
    </div>
  </>
  )
}
