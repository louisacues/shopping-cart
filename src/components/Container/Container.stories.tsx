import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Container } from "./Container"

export default {
  title: "Components",
  component: Container,
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
)

export const ContainerDefault = Template.bind({})
ContainerDefault.args = {
  children: <div className={`text-white`}>DIV</div>
}
