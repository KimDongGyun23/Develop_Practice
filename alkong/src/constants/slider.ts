export const HOURS = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'))
export const MINUTES = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'))
export const TIME_PERIOD = ['AM', 'PM']

export const INTEGER_WEIGHT = Array.from({ length: 99 }, (_, i) => String(i + 1).padStart(2, '0'))
export const DECIMAL_WEIGHT = Array.from({ length: 10 }, (_, i) => String(i))
