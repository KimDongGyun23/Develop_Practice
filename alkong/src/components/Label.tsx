import Image from 'next/image'

import ImgAddGray from '@/assets/image/Add-gray.svg'
import ImgAddWhite from '@/assets/image/Add-white.svg'
import ImgMinus from '@/assets/image/Minus.svg'

interface ILabel {
  children: React.ReactNode
}

interface ILabelPlus {
  primary?: boolean
  children: React.ReactNode
}

const Label = ({ children }: ILabel) => {
  return (
    <div className="inline-flex rounded-full bg-mint-3 px-[14px] pb-[6px] pt-1">
      <p className="body-M">{children}</p>
    </div>
  )
}

export const LabelPlus = ({ primary = false, children }: ILabelPlus) => {
  const primaryStyle = primary ? 'bg-mint-6 text-white' : 'bg-gray-3 text-gray-7'

  return (
    <div
      className={`inline-flex cursor-pointer items-center gap-1 rounded-full pb-[6px] pl-[10px] pr-3 pt-1 ${primaryStyle}`}
    >
      <Image src={primary ? ImgAddWhite : ImgAddGray} width={16} height={16} alt="btn-plus" />
      <p className="body-M">{children}</p>
    </div>
  )
}

export const LabelMinus = ({ children }: ILabel) => {
  return (
    <div className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-mint-6 pb-[6px] pl-[10px] pr-3 pt-1 text-white">
      <Image src={ImgMinus} width={16} height={16} alt="btn-minus" />
      <p className="body-M">{children}</p>
    </div>
  )
}

Label.Plus = LabelPlus
Label.Minus = LabelMinus

export default Label
