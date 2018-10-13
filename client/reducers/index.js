import { combineReducers } from 'redux';
import { reduxTokenAuthReducer } from 'redux-token-auth';
import ReceiveMessage from './receive-message';

const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  messages: ReceiveMessage,
});

export default rootReducer;