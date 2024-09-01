export type ClinicFormType = {
  hospitalName: string
  hospitalDate: string
  medicalPart: string[]
  medicalMemo: string
  medicalAlarm: string
}

export type ClinicCalendarType = {
  medicalId: number
  hospitalName: string
  hospitalDate: string
  medicalPart: string[]
}

export type ClinicResponse = {
  list: ClinicCalendarType[]
}
