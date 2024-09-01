'use client'

import dayjs from 'dayjs'

import { Icon, Tag } from '@/components'
import type { ClinicCalendarType } from '@/types'

import 'dayjs/locale/ko'

dayjs.locale('ko')

const ClinicItem = ({
  hospitalName,
  hospitalDate,
  medicalPart,
}: Omit<ClinicCalendarType, 'medicalId'>) => {
  const time = dayjs(hospitalDate).format('HH:mm')
  const date = dayjs(hospitalDate).format('M월 DD일(dd) A HH:mm')
  return (
    <section className="rounded-xl bg-mint-0 p-4">
      <div className="flex-between">
        <div className="flex-col">
          <p className="subtitle-B">
            {time} {hospitalName}
          </p>
          <p className="headline-M text-gray-6">{date}</p>
        </div>
        <Icon name="check-no" size={36} />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {medicalPart.map((part) => (
          <Tag key={part}>{part}</Tag>
        ))}
      </div>
    </section>
  )
}

export default ClinicItem
