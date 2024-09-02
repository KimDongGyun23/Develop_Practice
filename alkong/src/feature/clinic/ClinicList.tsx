import { useCurrentDate } from '@/store/calendarStore'
import type { ClinicResponse } from '@/types'

import ClinicItem from './ClinicItem'

type ClinicListProps = ClinicResponse

const ClinicList = ({ list }: ClinicListProps) => {
  const date = useCurrentDate()

  return (
    <div className="flex-column gap-3">
      {list
        .filter((item) => item.hospitalDate.startsWith(date))
        .map((item) => (
          <ClinicItem
            key={item.medicalId}
            medicalId={item.medicalId}
            hospitalName={item.hospitalName}
            hospitalDate={item.hospitalDate}
            medicalPart={item.medicalPart}
          />
        ))}
    </div>
  )
}

export default ClinicList
