'use client'
import { MainHeader } from '@/components'

const ClientWritePullPage = () => {
  return (
    <MainHeader.Confirm
      title={`의사에게 전달할
특이사항을 기입해주세요.`}
      onCancel={() => {}}
      onConfirm={() => {}}
    />
  )
}

export default ClientWritePullPage
