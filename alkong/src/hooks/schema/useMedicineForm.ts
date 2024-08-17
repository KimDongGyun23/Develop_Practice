import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  medicine_name: z.string().min(1, '약품명은 필수 값입니다.'),
  medicine_week: z.array(z.number()),
  medicine_times: z.number(),
  medicine_taken_time: z.array(z.string()),
  medicine_start: z.string(),
  medicine_end: z.string(),
  medicine_dosage: z.number(),
  medicine_memo: z.string(),
  medicine_alarm: z.number(),
})

export const useMedicineForm = () => {
  const formMethod = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(schema),
    defaultValues: {
      medicine_week: [0, 1, 2, 3, 4, 5, 6],
      medicine_times: 0,
      medicine_taken_time: ['09:00'],
      medicine_start: '2024-00-00',
      medicine_end: '2024-00-00',
      medicine_dosage: 0,
      medicine_memo: '',
      medicine_alarm: 0,
    },
  })

  return formMethod
}
