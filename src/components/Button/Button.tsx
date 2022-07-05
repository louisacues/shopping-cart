import React from 'react'

export interface IButton {
  children: React.ReactNode
  onClick: () => void
}

export function Button(props: IButton) {
  const { children , ...rest } = props
  return (
    <button className={`font-primary-font bg-[#F40032] px-1 py-0.5  rounded-0.4 text-white`} {...rest}>
      <span className={`text-1.8 lg:text-2.2`}>
        {children}
      </span>
    </button>
  )
}
