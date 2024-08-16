import Image from 'next/image'

import ImgAddGray from '/public/image/add__gray.svg'
import ImgAddWhite from '/public/image/add__white.svg'
import ImgMinus from '/public/image/minus__white.svg'

interface ITag {
  children: React.ReactNode
}

interface ITagPlus {
  primary?: boolean
  handleClick: () => void
  children: React.ReactNode
}

interface ITagMinus {
  handleClick: () => void
  children: React.ReactNode
}

export const Tag = ({ children }: ITag) => {
  return (
    <div className="inline-flex rounded-full bg-mint-3 px-[14px] pb-[6px] pt-1">
      <p className="body-M">{children}</p>
    </div>
  )
}

export const TagPlus = ({ primary = false, handleClick, children }: ITagPlus) => {
  const primaryStyle = primary ? 'bg-mint-6 text-white' : 'bg-gray-3 text-gray-7'

  return (
    <button
      type="button"
      className={`inline-flex cursor-pointer items-center gap-1 rounded-full pb-[6px] pl-[10px] pr-3 pt-1 ${primaryStyle}`}
      onClick={handleClick}
    >
      <Image src={primary ? ImgAddWhite : ImgAddGray} width={16} height={16} alt="btn-plus" />
      <p className="body-M">{children}</p>
    </button>
  )
}

export const TagMinus = ({ handleClick, children }: ITagMinus) => {
  return (
    <button
      type="button"
      className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-mint-6 pb-[6px] pl-[10px] pr-3 pt-1 text-white"
      onClick={handleClick}
    >
      <Image src={ImgMinus} width={16} height={16} alt="btn-minus" />
      <p className="body-M">{children}</p>
    </button>
  )
}

Tag.Plus = TagPlus
Tag.Minus = TagMinus

export default Tag
