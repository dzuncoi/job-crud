import { combineReducers } from 'redux'
import jobs from './jobs/jobs.reducer'

const rootReducer = combineReducers({
  jobs,
})

export default rootReducer

