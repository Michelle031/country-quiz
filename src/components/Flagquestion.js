import React from 'react'

function Flagquestion({flag}) {
  return (
    <div className="flex flex-col mb-3">
        <img src={flag} alt="" className="h-[50px] w-[80px] mt-2 border-2 border-[#6066D0B2]" />
        <h2 className="text-lg max-w-xs font-bold text-[#2F527B] my-2">Which country does this flag belong to?</h2>
    </div>
  )
}

export default Flagquestion