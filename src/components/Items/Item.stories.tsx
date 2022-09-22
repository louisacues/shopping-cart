import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Items } from "./Items"
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
  title: "Components/Items",
  component: Items,
} as ComponentMeta<typeof Items>

const OverviewItemsTemplate: ComponentStory<typeof Items> = (args) => (
  <Items {...args} />
)

export const OverviewItems = OverviewItemsTemplate.bind({});
OverviewItems.args = {
  items: [],
  title: 'OVERVIEW'
}


