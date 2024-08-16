import { Container, ContainerSpaceBetween } from './Container'
import { ErrorMessage, SelectedTextWithArrow, TagList } from './Element'
import { Input, InputCheck, InputCheckAll, InputGender, InputStepper, TextArea } from './Input'

export const InputField = Object.assign(Container, {
  ContainerSpaceBetween,
  Input,
  TextArea,
  InputGender,
  InputCheck,
  InputCheckAll,
  InputStepper,
  TagList,
  SelectedTextWithArrow,
  ErrorMessage,
})
