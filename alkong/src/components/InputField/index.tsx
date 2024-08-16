import { Container, ContainerBetween } from './Container'
import { ErrorMessage, SelectedTextWithArrow } from './Element'
import { Input, InputCheck, InputGender, TextArea } from './Input'

export const InputField = Object.assign(Container, {
  ContainerBetween,
  Input,
  TextArea,
  InputGender,
  InputCheck,
  SelectedTextWithArrow,
  ErrorMessage,
})
