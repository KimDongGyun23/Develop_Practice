import { Container, ContainerSpaceBetween } from './Container'
import { TextWithArrow } from './Element'
import { Input, InputCheck, InputCheckAll, InputGender } from './Input'
import { Label, LabelWithIcon } from './Label'

export const InputField = Object.assign(Container, {
  ContainerSpaceBetween,
  Label,
  LabelWithIcon,
  Input,
  InputGender,
  InputCheck,
  InputCheckAll,
  TextWithArrow,
})
