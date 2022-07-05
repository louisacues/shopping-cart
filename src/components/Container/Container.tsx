import React from 'react'
import { IWrapper } from 'utils/types'



export function Container({children}: IWrapper) {
  return (
    <div className={`bg-artboard mx-auto w-full max-w-[144em] h-screen`}>
      {children}
    </div>
  )
}
