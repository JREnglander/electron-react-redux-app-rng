import RandNumComp from './randomnumcomp'
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        count: state.num,
        min: state.min,
        max: state.max,
        int: state.integer ? 'integer' : 'float'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleRandClick: () => dispatch({
            type: "GENERATE-RAND"
        }),
        handleSetMin: (input) => dispatch({
            type: "CHANGE-MINIMUM",
            payload: input
        }),
        handleSetMax: (input) => dispatch({
            type: "CHANGE-MAXIMUM",
            payload: input
        })
    };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(RandNumComp);

export default Container;