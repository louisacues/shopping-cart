import { Item, ItemProps } from 'components/Item/Item'
import React from 'react'
import timericon from '../../icons/icon-timer.png'
import dashboardicon from '../../icons/icon-dashboard.png'
import reporticon from '../../icons/icon-reports.png'
import dtricon from '../../icons/dtr.png'
import notificationicon from '../../icons/icon-notification.png'
import projectsicon from '../../icons/icon-projects.png'
import teamsicon from '../../icons/icon-team.png'
import clientsicon from '../../icons/icon-clients.png'
import tagsicon from '../../icons/icon-tags.png'
import estimatesicon from '../../icons/icon-estimates.png'
import settingsicon from '../../icons/Settings.png'

export interface ItemsProps {
  items: ItemProps[]
  title: string
}

export function Items(props: ItemsProps) {
  return (
    <div className="bg-[#252C31] pl-[30.6px]">
      <span className="opacity-[0.3] text-[#FFFFFF] text-[13px] leading-[16px] font-[600] not-italic items center ">{props.title}</span>
      <Item text={`Timer`} src={timericon} />
      <Item text={`Dashboard`} src={dashboardicon} />
      <Item text={`Reports`} src={reporticon} />
      <Item text={`DTR`} src={dtricon} />
      <Item text={`Notifications`} src={notificationicon} />
    </div>
  )
}

export function ItemsManage(props: ItemsProps) {
  return (
    <div className="bg-[#252C31] pl-[30.6px]">
      <span className="opacity-[0.3] text-[#FFFFFF] text-[13px] leading-[16px] font-[600] not-italic items center ">{props.title}</span>
      <Item text={`Projects`} src={projectsicon} />
      <Item text={`Teams`} src={teamsicon} />
      <Item text={`Clients`} src={clientsicon} />
      <Item text={`Tags`} src={tagsicon} />
      <Item text={`Estimates`} src={estimatesicon} />
      <Item text={`Settings`} src={settingsicon} />
    </div>
  )
}