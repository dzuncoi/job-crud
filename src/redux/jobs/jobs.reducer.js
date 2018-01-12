import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
  FILTER_ITEM,
} from './jobs.action'

const initialState = {
  jobLists: [{
    id: '0',
    title: 'Job title',
    description: 'Lorem Ipsum',
    category: 'Computer Science',
  }],
  loading: false,
  error: null,
}

const isJobMatchedText = (job, text) => (
  job.title.toLowerCase().includes(text.toLowerCase()) ||
  job.description.toLowerCase().includes(text.toLowerCase()) ||
  job.category.toLowerCase().includes(text.toLowerCase())
)

export default function jobReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        jobLists: [action.payload, ...state.jobLists],
      }
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        jobLists: state.jobLists.filter(job => job.id !== action.payload)
      }
    }
    case UPDATE_ITEM: {
      const newJob = action.payload
      return {
        ...state,
        jobLists: state.jobLists.map(job => {
          if(job.id !== newJob.id) return { ...job }
          return { ...job, ...newJob }
        })
      }
    }
    case FILTER_ITEM: {
      return {
        ...state,
        jobLists: state.jobLists.map(job => isJobMatchedText(job, action.payload))
      }
    }
    default:
      return initialState
  }
}
