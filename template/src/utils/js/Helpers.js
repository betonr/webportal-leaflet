import _ from 'lodash'

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const removeAccents = val => {
    if (!val) return
    const accents = 'ÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž'
    const accentsOut = 'AAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz'
    val = val.split('')
    val.forEach((letter, index) => {
        const i = accents.indexOf(letter)
        if (i !== -1) {
            val[index] = accentsOut[i]
        }
    })
    return val.join('')
}

export const removeNullsFromObj = obj => {
    Object.keys(obj).forEach(k => {
        if (obj[k] === null) {
            delete obj[k]
        } else if (typeof (obj[k]) === 'object') {
            removeNullsFromObj(obj[k])
        }
    })
}

export const isFloat = (n) => {
    return Number(n) === n && n % 1 !== 0;
}

export const formatDate = date => {
    if (!date) return null
    const [year, month, day] = date.split('-')
    return `${day}/${month}/${year}`
}

export const formatDateByObjectDate = date => {
    date = new Date(date)
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
}

export const parseDate = date => {
    if (!date) return null
    const [day, month, year] = date.split('/')
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
}
