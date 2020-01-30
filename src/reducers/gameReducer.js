export default function reducer(state = {
    dot: '',
    scoreUser: 0,
    scoreComputer: 0,
    won: '',
    error: null
  }, action) {
    
    switch (action.type) {
      case 'SET_DOT': {
        return {
          ...state,
          dot: action.payload
        }
      }
      case 'SET_SCORE_USER': {
        return {
          ...state,
          scoreUser: state.scoreUser + action.payload,
          scoreComputer: state.scoreComputer - action.payload
        }
      }
      case 'SET_SCORE_COMPUTER': {
        return {
          ...state,
          scoreComputer: state.scoreComputer + action.payload
        }
      }
      case 'SET_WON': {
        return {
          ...state,
          won: action.payload
        }
      }
      case 'PLAY_AGAIN': {
        return {
          ...state, 
          dot: '',
          scoreUser: 0,
          scoreComputer: 0,
          won: ''
        }
      }
      
    }
  
    return state;
  }