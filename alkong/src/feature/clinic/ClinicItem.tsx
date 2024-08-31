'use client'

import { Icon, Tag } from '@/components'

const ClinicItem = () => {
  return (
    <section className="rounded-xl bg-mint-0 p-4">
      <div className="flex-between">
        <div className="flex-col">
          <p className="subtitle-B">1</p>
          <p className="headline-M text-gray-6">2</p>
        </div>
        <Icon name="check-no" size={36} />
      </div>

      <div className="mt-8">
        <Tag>{3}</Tag>
      </div>
    </section>
  )
}

export default ClinicItem
