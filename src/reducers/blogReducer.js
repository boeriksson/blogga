import { BLOG_CONFIG_LOADED, BLOG_STATUS_CHANGED } from '../actions/blogActions';

export default function blogReducer(state = {
  config: {},
  status: 'disconnected'
}, { type, config, status }) {
  switch (type) {
    case BLOG_CONFIG_LOADED:
      return { ...state, config };
    case BLOG_STATUS_CHANGED:
      return { ...state, status };
    default:
      return state;
  }
}
