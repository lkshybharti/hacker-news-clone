import axios from 'axios'
import { FETCH_NEWS_SAGA } from './types.js'

const url = 'https://hn.algolia.com/api/v1/search?tags=front_page'

export const fetchNews = () => {
    return axios.get(url)
}


export function fetchNewsSaga() {
  return {
    type: FETCH_NEWS_SAGA
  }
}