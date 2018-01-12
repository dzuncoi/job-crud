export const ADD_ITEM = 'job/ADD_ITEM'
export const REMOVE_ITEM = 'job/REMOVE_ITEM'
export const UPDATE_ITEM = 'job/UPDATE_ITEM'
export const FILTER_ITEM = 'job/FILTER_ITEM'
export const SELECT_ITEM = 'job/SELECT_ITEM'

export const addNewJob = (newJob, history) => (dispatch) => {
  dispatch({
    type: ADD_ITEM,
    payload: newJob,
  })
  history.push('/')
}

export const removeJob = job => ({
  type: REMOVE_ITEM,
  payload: job.id,
})

export const updateJob = (updatedJob, history) => (dispatch) => {
  dispatch({
    type: UPDATE_ITEM,
    payload: updatedJob,
  })
  history.push('/')
} 

export const filterJob = filterText => ({
  type: FILTER_ITEM,
  payload: filterText,
})

export const selectJob = jobId => ({
  type: SELECT_ITEM,
  payload: jobId,
})
