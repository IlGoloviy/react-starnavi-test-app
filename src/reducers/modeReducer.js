export default function reducer(state = {
  modes: {},
  mode: '',
  username: '',
  start: false,
  fetching: false,
  fetched: false,
  error: null
}, action) {
  
  switch (action.type) {
    case 'FETCH_MODE': {
      return {...state, fetching: true}
    }
    case 'FETCH_MODE_REJECTED': {
      return {
        ...state, 
        fetching: false, 
        error: action.payload
      }
    }
    case 'FETCH_MODE_FULFILLED': {
      return {
        ...state, 
        fetching: false, 
        fetched: true, 
        modes: action.payload
      }
    }
    case 'SET_MODE': {
      return {
        ...state,
        mode: action.payload
      }
    }
    case 'SET_NAME': {
      return {
        ...state,
        username: action.payload,
        start: true
      }
    }
    case 'CLEAR_START': {
      return {
        ...state,
        start: action.payload
      }
    }
    case 'PLAY_AGAIN': {
      return {
        ...state, 
        mode: '',
        username: ''
      }
    }
  }

  return state;
}