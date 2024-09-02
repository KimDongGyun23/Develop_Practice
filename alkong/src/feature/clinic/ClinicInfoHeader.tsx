'use client'

import { MainHeader } from '@/components'

type ClinicInfoHeaderProps = {
  onDelete: VoidFunction
  onModify: VoidFunction
}

const ClinicInfoHeader = ({ onDelete, onModify }: ClinicInfoHeaderProps) => {
  return (
    <MainHeader.Modify
      title={`의사에게 전달할
특이사항을 기입해주세요.`}
      onDelete={onDelete}
      onModify={onModify}
    />
  )
}

export default ClinicInfoHeader
