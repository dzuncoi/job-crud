import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
  FILTER_ITEM,
  SELECT_ITEM,
} from './jobs.action'

const initialState = {
  jobLists: [{
    id: Date.now(),
    title: 'Job title',
    description: 'Lorem Ipsum',
    category: 'Computer Science',
    isShow: true,
  }],
  loading: false,
  error: null,
  currentJob: null,
}

const isJobMatchedText = (job, text) => (
  job.title.toLowerCase().includes(text.toLowerCase()) ||
  job.description.toLowerCase().includes(text.toLowerCase()) ||
  job.category.toLowerCase().includes(text.toLowerCase())
)

export default function jobReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const newJob = {
        ...action.payload,
        isShow: true,
      }
      return {
        ...state,
        jobLists: [newJob, ...state.jobLists],
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
        jobLists: state.jobLists.map(job => ({
          ...job,
          isShow: isJobMatchedText(job, action.payload)
        }))
      }
    }
    case SELECT_ITEM: {
      return {
        ...state,
        currentJob: state.jobLists.filter(job => job.id.toString() === action.payload.toString())[0],
      }
    }
    default:
      return initialState
  }
}
