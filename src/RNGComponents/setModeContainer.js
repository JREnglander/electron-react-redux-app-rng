import setMode from './setmodecomp';
import createContainer from './containerfunctions';

const mapDispatchToProps = dispatch => {
    return {
        handleSetMode: () => dispatch({
            type: "CHANGE-MODE"
        })
    };
};

const SetModeContainer = createContainer(mapDispatchToProps, setMode);

export default SetModeContainer;