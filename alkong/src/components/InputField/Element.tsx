import Image from 'next/image'

import arrowImg from '@/assets/image/Arrow-right__green.svg'

interface ITextWithArrow {
  isFull?: boolean
  children: React.ReactNode
}

export const TextWithArrow = ({ isFull = false, children }: ITextWithArrow) => {
  const flexStyle = isFull ? 'flexBetweenAlign' : 'flexAlign gap-1'
  return (
    <div className={`${flexStyle}`}>
      <p className="body-M text-[#959595]">{children}</p>
      <Image src={arrowImg} width={28} height={28} className="cursor-pointer" alt="arrow" />
    </div>
  )
}
