import axios from 'axios';

export function fetchResults() {
  return {
    type: 'FETCH_RESULTS',
    payload: 
      axios.get(`https://starnavi-frontend-test-task.herokuapp.com/winners`)
      .then(res => res.data)
  }
}

export function sendWiner(data) {
  return {
    type: 'SEND_WINER',
    payload: 
      axios.post('https://starnavi-frontend-test-task.herokuapp.com/winners', data)
      .then(response => response.data)
      .catch(error => console.log(error))
  }
} 

export function playAgain() {
  return {
    type: 'PLAY_AGAIN'
  }
}