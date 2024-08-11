import Image from 'next/image'

import arrowImg from '/public/image/arrow-right__green.svg'

interface ITextWithArrow {
  isFull?: boolean
  children: React.ReactNode
  handleClick: () => void
}

export const TextWithArrow = ({ isFull = false, children, handleClick }: ITextWithArrow) => {
  const flexStyle = isFull ? 'flexBetweenAlign' : 'flexAlign gap-1'
  return (
    <div className={`${flexStyle}`}>
      <p className="body-M text-[#959595]">{children}</p>
      <Image
        src={arrowImg}
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={handleClick}
        alt="arrow"
      />
    </div>
  )
}
