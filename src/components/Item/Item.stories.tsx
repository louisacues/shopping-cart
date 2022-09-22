import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Item } from "./Item"
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

export default {
  title: "Components/Item",
  component: Item,
} as ComponentMeta<typeof Item>

const Template: ComponentStory<typeof Item> = (args) => (
  <Item {...args} />
)

export const Timer = Template.bind({})
Timer.args = {
  text: `Timer`,
  src: timericon
}


export const Dashboard = Template.bind({})
Dashboard.args = {
  text: `Dashboard`,
  src: dashboardicon
}



export const Reports = Template.bind({})
Reports.args = {
  text: `Reports`,
  src: reporticon
}


export const Dtr = Template.bind({})
Dtr.args = {
  text: `DTR`,
  src: dtricon
}

export const notification = Template.bind({})
notification.args ={
    text: `Notification`,
    src: notificationicon
}


export const projects = Template.bind({})
projects.args ={
    text: `Projects`,
    src: projectsicon
}

export const teams = Template.bind({})
teams.args ={
    text: `Teams`,
    src: teamsicon
}


export const clients = Template.bind({})
clients.args ={
    text: `Clients`,
    src: clientsicon
}

export const tags = Template.bind({})
tags.args ={
    text: `Tags`,
    src: tagsicon
}

export const estimates  = Template.bind({})
estimates.args ={
    text: `Estimates`,
    src: estimatesicon
}

export const settings = Template.bind({})
settings.args ={
    text: `Settings`,
    src: settingsicon
}


