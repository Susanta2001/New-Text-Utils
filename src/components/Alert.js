import React from 'react'
import PropTypes from 'prop-types';

function Alert(props) {
    return (
        <>
             {props.alertMessage && (
                <div className="alert alert-success" role="alert">
                    {props.alertMessage}
                </div>
            )}
        </>
    )
}

Alert.propTypes = {alertMessage: PropTypes.string};

export default Alert
