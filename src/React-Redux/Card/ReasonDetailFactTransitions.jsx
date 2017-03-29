import React, {PropTypes} from 'react';

const RDFTs = ({rdfts}) => {
    return (
        <div key={rdfts._id}>rdfts.video</div>
    );
};

RDFTs.propTypes = {
    rdfts: PropTypes.array.isRequired
};

export default RDFTs;