import { fetchBenches } from "./bench_actions";
export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

export const updateBounds = (filter, value) => (dispatch) => {
    dispatch(applyFilter(filter, value));
    return fetchBenches(filter);
}

export const applyFilter = (filter, value) => ({
    type: UPDATE_BOUNDS,
    filter,
    value
})