export default function reducer(state = {
    results: [],
    fetching: false,
    fetched: false,
    error: null
  }, action) {
    
    switch (action.type) {
      case 'FETCH_RESULTS': {
        return {...state, fetching: true}
      }
      case 'FETCH_RESULTS_REJECTED': {
        return {
          ...state, 
          fetching: false, 
          error: action.payload
        }
      }
      case 'FETCH_RESULTS_FULFILLED': {
        return {
          ...state, 
          fetching: false, 
          fetched: true, 
          results: action.payload
        }
      }
      case 'SEND_WINER': {
        return {...state, fetching: true}
      }
      case 'SEND_WINER_REJECTED': {
        return {
          ...state, 
          fetching: false, 
          error: action.payload
        }
      }
      case 'SEND_WINER_FULFILLED': {
        return {
          ...state, 
          fetching: false, 
          fetched: true, 
          results: action.payload
        }
      }
      
    }
  
    return state;
  }