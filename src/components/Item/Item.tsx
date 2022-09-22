import React from 'react'

export interface ItemProps {
    text: string
    src: string
}

export function Item(props: ItemProps) {
  return (
    <div className={`bg-[#252C31]`}>
        <div className={`text-[#C4C4C4] font-[sf] py-[12px] text-[13px] leading-[16px] font-[400] flex gap-x-[17px] items-center`}>
            <img src={props.src} alt={props.text} />
            {props.text}
        </div>
    </div>
  )
}