'use client'

import { Label, Tag } from '@/components'

const ClinicList = () => {
  return (
    <div className="flex-between mt-7">
      <Label icon="clinic-label">병원 내원 일정</Label>
      <Tag.Plus primary handleClick={() => {}}>
        추가
      </Tag.Plus>
    </div>
  )
}

export default ClinicList
