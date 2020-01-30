import axios from 'axios';

export function fetchMode() {
  return {
    type: 'FETCH_MODE',
    payload: 
      axios.get(`https://starnavi-frontend-test-task.herokuapp.com/game-settings`)
      .then(res => res.data)
  }
}

export function setMode(data) {
  return {
    type: 'SET_MODE',
    payload: data
  }
}

export function setName(data) {
  return {
    type: 'SET_NAME',
    payload: data
  }
}

export function startGameClear() {
  return {
    type: 'CLEAR_START',
    payload: false
  }
}