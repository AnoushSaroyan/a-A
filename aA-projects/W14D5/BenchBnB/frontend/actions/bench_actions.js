import * as APIUtil from "../util/bench_api_util"

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';

export const fetchBenches = (filters) => dispatch => {
    return APIUtil.fetchBenches(filters).then(paylod => dispatch(receiveBenches(paylod)))
} 

export const fetchBench = (id) => dispatch => {
    return APIUtil.fetchBench(id).then(paylod => dispatch(receiveBench(paylod)))
} 
export const createBench = (bench) => dispatch => {
    return APIUtil.createBench(bench).then(paylod => dispatch(receiveBench(paylod)))
} 


export const receiveBenches = benches => ({
    type: RECEIVE_BENCHES,
    benches,
});
  
export const receiveBench = bench => ({
    type: RECEIVE_BENCH,
    bench,
});
