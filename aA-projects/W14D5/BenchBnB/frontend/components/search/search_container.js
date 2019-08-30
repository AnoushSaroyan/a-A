import Search from "./search";
import { fetchBenches } from "../../actions/bench_actions";
import { connect } from "react-redux";
import { updateBounds } from "../../actions/filter_actions";

const mapStateToProps = (state) => {
    return {
        benches: Object.values(state.entities.benches)
    }
}


const mapDispatchToProps = dispatch => {
    return { 
        updateBounds: () => dispatch(updateBounds()), // pass args here 
        fetchBenches: () => dispatch(fetchBenches())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Search);