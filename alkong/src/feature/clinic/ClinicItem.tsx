'use client'

import { Icon, Tag } from '@/components'
import type { ClinicCalendarType } from '@/types'

const ClinicItem = ({
  hospitalName,
  hospitalDate,
  medicalPart,
}: Omit<ClinicCalendarType, 'medicalId'>) => {
  return (
    <section className="rounded-xl bg-mint-0 p-4">
      <div className="flex-between">
        <div className="flex-col">
          <p className="subtitle-B">
            {hospitalDate} {hospitalName}
          </p>
          <p className="headline-M text-gray-6">{hospitalDate}</p>
        </div>
        <Icon name="check-no" size={36} />
      </div>

      <div className="mt-8">
        {medicalPart.map((part) => (
          <Tag key={part}>{part}</Tag>
        ))}
      </div>
    </section>
  )
}

export default ClinicItem
