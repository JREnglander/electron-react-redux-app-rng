import RandNumComp from './randomnumcomp'
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        count: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleRandClick: () => dispatch({
            type: "GENERATE-RAND"
        })
    }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(RandNumComp);

export default Container;