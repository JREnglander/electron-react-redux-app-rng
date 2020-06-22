import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        count: state.num,
        min: state.min,
        max: state.max,
        int: state.integer ? 'integer' : 'float'
    }
};

function createContainer(mDtPfunc, displayComponent){
    const container = connect(mapStateToProps, mDtPfunc)(displayComponent);
    return container;
}

export default createContainer;