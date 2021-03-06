import {BenchConstants} from '../actions/bench_actions.js';
import {merge} from 'lodash';

const BenchesReducer = (state={}, action) => {
  switch (action.type) {
    case BenchConstants.RECEIVE_BENCHES:
      return action.benches;
    case BenchConstants.RECEIVE_BENCH:
      return merge({}, state, {[action.bench.id]: action.bench});
    default:
      return state;
  }
};

export default BenchesReducer;
