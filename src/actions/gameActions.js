export function setDot(data) {
  return {
    type: 'SET_DOT',
    payload: data
  }
}

export function scoreUser() {
  return {
    type: 'SET_SCORE_USER',
    payload: 1
  }
}

export function scoreComputer() {
  return {
    type: 'SET_SCORE_COMPUTER',
    payload: 1
  }
}

export function setWon(data) {
  return {
    type: 'SET_WON',
    payload: data
  }
}

export function dateTransform(date) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const hour = `${date.getHours()}`.length == 1 ? `0${date.getHours()}` : date.getHours();
  const minute = `${date.getMinutes()}`.length == 1 ? `0${date.getMinutes()}` : date.getMinutes();
  const d = `${date.getDate()}`.length == 1 ? `0${date.getDate()}` : date.getDate();
  const m = months[date.getMonth()];
  const y = date.getFullYear();
  return `${hour}:${minute}; ${d} ${m} ${y}`
}