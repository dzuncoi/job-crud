export const ADD_ITEM = 'job/ADD_ITEM'
export const REMOVE_ITEM = 'job/REMOVE_ITEM'
export const UPDATE_ITEM = 'job/UPDATE_ITEM'
export const FILTER_ITEM = 'job/FILTER_ITEM'
export const SELECT_ITEM = 'job/SELECT_ITEM'

export const addNewJob = newJob => ({
  type: ADD_ITEM,
  payload: newJob,
})

export const removeJob = job => ({
  type: REMOVE_ITEM,
  payload: job.id,
})

export const updateJob = updatedJob => ({
  type: UPDATE_ITEM,
  payload: updatedJob,
})

export const filterJob = filterText => ({
  type: FILTER_ITEM,
  payload: filterText,
})

export const selectJob = jobId => ({
  type: SELECT_ITEM,
  payload: jobId,
})
