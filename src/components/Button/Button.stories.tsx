import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Button } from "./Button"

export default {
  title: "Components",
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

export const ButtonDefault = Template.bind({})
ButtonDefault.args = {
  children: `louisa`,
  onClick: () => alert('hello')
}
