export const isEmail = value => {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(value).toLowerCase())
}

export const isCellphone = value => {
  value = value.replace('(', '')
  value = value.replace(')', '')
  value = value.replace('-', '')
  value = value.replace(' ', '').trim()
  if (
    value === '00000000000' ||
    value === '11111111111' ||
    value === '22222222222' ||
    value === '33333333333' ||
    value === '44444444444' ||
    value === '55555555555' ||
    value === '66666666666' ||
    value === '77777777777' ||
    value === '88888888888' ||
    value === '99999999999'
  ) return false
  if (['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10'].indexOf(value.substring(0, 2)) !== -1) return false
  if (value.length !== 11) return false
  if (['9'].indexOf(value.substring(2, 3)) === -1) return false
  return true
}
