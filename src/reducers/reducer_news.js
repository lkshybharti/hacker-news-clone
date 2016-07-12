import { NEWS_LOADED } from '../actions/types'

export default function(state = {}, action) {
    
    switch(action.type) {
        case NEWS_LOADED:
            return action.payload.data.hits
    }
    return state
}