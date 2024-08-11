import { Container, ContainerSpaceBetween } from './Container'
import { SelectedTextWithArrow } from './Element'
import { Input, InputCheck, InputCheckAll, InputGender, InputStepper } from './Input'
import { Label, LabelWithIcon } from './Label'

export const InputField = Object.assign(Container, {
  ContainerSpaceBetween,
  Label,
  LabelWithIcon,
  Input,
  InputGender,
  InputCheck,
  InputCheckAll,
  InputStepper,
  SelectedTextWithArrow,
})
