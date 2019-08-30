import BenchIndexItem from "./bench_index_item";
import React from 'react';

class BenchIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchBenches();
    }

    render() {
        const benches = this.props.benches;

        if (!benches.length) {
            return <div className="Loading"> Loading...</div>
        }

        const listItems = benches.map(bench => <BenchIndexItem key={bench.id} bench={bench} />);
        return(
            <div>
                <h2>Benches:</h2>
                <ul>
                    {listItems} 
                </ul>
            </div>
        )
    }
}

export default BenchIndex;