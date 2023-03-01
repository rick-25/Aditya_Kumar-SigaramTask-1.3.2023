import { useState } from 'react'

function Box({ totalClickCount, incrementCount}) {
  const [curCount, setCurCount] = useState(null);
  return (
    <div 
      className={`bg-blue-700 ${(curCount && curCount >= totalClickCount-1) && 'bg-red-600'} text-white w-32 border h-7 border-black px-2`}
      onClick={(e) => {
        if(curCount === null) {
          setCurCount(totalClickCount + 1);
          incrementCount();
        }
      }}
    >
      {curCount && `Box #${curCount}`}
    </div>
  )
}

function MatrixGamePage() {
  const [clickCount, setClickCount] = useState(0);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className='flex flex-row flex-wrap border-2 w-[516px]'>
        {[...Array(16)].map((e) => {
          return (
            <Box 
              key={e}
              totalClickCount={clickCount} 
              incrementCount={() => setClickCount(clickCount + 1)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MatrixGamePage
