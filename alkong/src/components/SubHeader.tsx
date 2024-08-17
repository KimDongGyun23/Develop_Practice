'use client'

import Image from 'next/image'

import type { ChildrenProps } from '@/types/common'

import arrowImg from '/public/image/arrow-left__gray.svg'

interface ISubHeader {
  edit?: boolean
}

const LeftSide = ({ edit = false }: ISubHeader) => {
  if (edit) return <p className="body-B ml-6 text-gray-6">취소</p>
  else return <Image src={arrowImg} width={36} height={36} className="ml-4" alt="back-button" />
}

const SubHeader = ({ edit = false, children }: ChildrenProps & ISubHeader) => {
  return (
    <div className="flex-between-align relative h-9">
      <LeftSide edit={edit} />
      <span className="subtitle-B absolute inset-x-0 text-center">{children}</span>
      {edit && <p className="body-B mr-6 text-mint-9">완료</p>}
    </div>
  )
}

export default SubHeader
