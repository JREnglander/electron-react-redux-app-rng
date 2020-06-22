import RNG from './rngdisplaycomp.js';
import createContainer from './containerfunctions.js';

const mapDispatchToProps = dispatch => {
    return {
        handleRandClick: () => dispatch({
            type: "GENERATE-RAND"
        })
    };
};

const RNGContainer = createContainer(mapDispatchToProps, RNG);

export default RNGContainer;