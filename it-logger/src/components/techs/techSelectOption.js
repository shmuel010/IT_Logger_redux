
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

const techSelectOptions = ({ getTechs, tech: { techs, loading } }) => {

        useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, [getTechs]);
    console.log(techs)

    return (
        !loading &&
        techs !== null ?
        techs.map(t => (
            <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
                {t.firstName} {t.lastName}
            </option>
        )):<option>123</option>


    )
};


const mapStateToProps = state => ({
    tech: state.tech
});

export default connect(
    mapStateToProps,
    { getTechs }
)(techSelectOptions);

