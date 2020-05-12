const initialState = {
  status: null,
  data: [],
  currentArticle: {},
};

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_ALL_ARTICLES':
      return {
        ...state,
        stauts: 'loading',
      };
    case 'RECEIVE_ALL_ARTICLES':
      return {
        ...state,
        status: 'idle',
        data: action.payload,
      };
    case 'RECEIVE_ALL_ARTICLES_ERROR':
      return {
        ...state,
        status: 'error',
      };

    case 'RECEIVE_CURRENT_ARTICLE': {
      return {
        ...state,
        status: 'idle',
        currentArticle: action.payload,
      };
    }

    default:
      return state;
  }
}
