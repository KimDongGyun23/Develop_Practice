'use client'
import { useRouter } from 'next/navigation'

import { useUserStore } from '@/store/userStore'

import Icon from '../icons'
import { Profile } from '../profile/Profile'

type HeaderProps = {
  title: string
  onClose: VoidFunction
  onCancel: VoidFunction
  onConfirm: VoidFunction
  onSet: VoidFunction
  onDelete: VoidFunction
  onModify: VoidFunction
}

const Setting = ({ title, onSet }: Pick<HeaderProps, 'title' | 'onSet'>) => {
  const { user } = useUserStore()

  return (
    <header className="flex-column-between h-[182px] bg-mint-3 px-[20px] pb-[24px] pt-[20px]">
      <div className="flex-align w-full justify-end">
        <Profile name={user.username} size="sm" bgColor="#C5FDEC" onClickProfile={onSet} />
      </div>
      <h1 className="title-B whitespace-pre text-black">{title}</h1>
    </header>
  )
}

const Confirm = ({
  title,
  onCancel,
  onConfirm,
}: Pick<HeaderProps, 'title' | 'onCancel' | 'onConfirm'>) => {
  return (
    <header className="flex-column-between h-[182px] bg-mint-3 px-[20px] pb-[24px] pt-[20px]">
      <div className="flex-between-align w-full">
        <button className="body-B text-mint-7" onClick={onCancel}>
          취소
        </button>
        <button className="body-B text-mint-9" onClick={onConfirm}>
          완료
        </button>
      </div>
      <h1 className="title-B whitespace-pre text-black">{title}</h1>
    </header>
  )
}

const Modify = ({
  title,
  onDelete,
  onModify,
}: Pick<HeaderProps, 'title' | 'onDelete' | 'onModify'>) => {
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }

  return (
    <header className="flex-column-between h-[182px] bg-mint-3 px-[20px] pb-[24px] pt-[20px]">
      <div className="flex-between-align w-full">
        <button className="body-B text-mint-7" onClick={handleBack}>
          <Icon name="arrow-left" />
        </button>
        <div className="flex-align gap-[16px]">
          <button type="button" onClick={onDelete} className="body-B text-mint-7">
            삭제
          </button>
          <button type="button" onClick={onModify} className="body-B text-mint-9">
            수정
          </button>
        </div>
      </div>
      <h1 className="title-B whitespace-pre text-black">{title}</h1>
    </header>
  )
}

const MainHeader = { Setting, Confirm, Modify }

export default MainHeader
