import { Container, ContainerSpaceBetween } from './Container'
import { ErrorMessage, SelectedTextWithArrow, TagList } from './Element'
import { Input, InputCheck, InputGender, TextArea } from './Input'

export const InputField = Object.assign(Container, {
  ContainerSpaceBetween,
  Input,
  TextArea,
  InputGender,
  InputCheck,
  TagList,
  SelectedTextWithArrow,
  ErrorMessage,
})
