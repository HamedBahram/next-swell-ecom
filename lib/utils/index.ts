import { FormatCurrencyInput } from '@/lib/types'

export const formatCurrency = ({
  amount,
  local = 'en-US',
  currency = 'USD',
  decimalPlaces = 2
}: FormatCurrencyInput) => {
  if (!amount) return

  const formatter = new Intl.NumberFormat(local, {
    style: 'currency',
    currency,
    maximumFractionDigits: decimalPlaces
  })

  return isNaN(amount) ? '--' : formatter.format(amount)
}

export const capitalize = (text: string) => {
  const lower = text.toLowerCase()
  const first = lower.charAt(0).toUpperCase()
  return first + lower.slice(1)
}

export const getDeliveryFrequencyDisplay = (plan: {
  billingSchedule: { intervalCount: number; interval: string }
}) => {
  if (plan.billingSchedule.intervalCount === 1) {
    return plan.billingSchedule.interval === 'weekly' ? 'week' : 'month'
  } else {
    return `${plan.billingSchedule.intervalCount} ${
      plan.billingSchedule.interval === 'weekly' ? 'weeks' : 'months'
    }`
  }
}

export const getPlanFrequency = (plan: {
  billingSchedule: { intervalCount: number; interval: string }
}) => {
  const { interval, intervalCount } = plan.billingSchedule
  let freq

  switch (interval) {
    case 'daily':
      freq = intervalCount === 1 ? `day` : `${intervalCount} days`
      break
    case 'weekly':
      freq = intervalCount === 1 ? `week` : `${intervalCount} weeks`
      break
    case 'monthly':
      freq = intervalCount === 1 ? `month` : `${intervalCount} months`
      break
    case 'yearly':
      freq = intervalCount === 1 ? `year` : `${intervalCount} years`
    default:
      break
  }

  return freq
}
