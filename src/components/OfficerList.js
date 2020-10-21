import React from 'react';
import PropTypes from 'prop-types';
import officerList, {officerCategoryList, officerCategoryString} from 'util/OfficerListUtil.js'

const OfficerList = ({startingYear}) => {
    if (!officerCategoryList.has(startingYear)) {
        return (
            <section className="container" id="people">
                Error while locating officer data: Office Category List is not defined for {startingYear}-{startingYear + 1}
            </section>
        );
    }
    const officerCategory = officerCategoryList.get(startingYear);
    const categoryList = officerCategory.map(category => <OfficerCategory startingYear={startingYear} category={category} />);
    return (
        <section className="container" id="people">
            <h2>Leadership</h2>
            {categoryList}
        </section>
    );
};

OfficerList.propTypes = {
    startingYear: PropTypes.number.isRequired,
};

const OfficerCategory = ({startingYear, category}) => {
    if (!officerCategoryString.has(category)) {
        return (
            <h4>Error while locating officer data: Office Category String for this category is empty</h4>
        );
    }
    const officers = officerList(startingYear, category);
    const officerCardList = officers.map(officer => <Officer officerInfo={officer} />);
    return (
        <div key={category}>
            <h4>{officerCategoryString.get(category)}</h4>
            <div className="row">
                {officerCardList}
            </div>
        </div>
    );
};

OfficerCategory.propTypes = {
    startingYear: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
};

const Officer = ({officerInfo}) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 officer" key={officerInfo.id}>
            <img src={process.env.PUBLIC_URL + "/" + officerInfo.img} className="rounded-circle officer-image" />
            <h4>{officerInfo.name}</h4>
            <h6>{officerInfo.position}</h6>
            <h6>{officerInfo.job}{officerInfo.job != null && officerInfo.affiliation != null && ","} {officerInfo.affiliation}</h6>
        </div>
    )
};

OfficerCategory.propTypes = {
    officerInfo: PropTypes.shape(
        {
            id: PropTypes.number.isRequired, 
            img: PropTypes.string.isRequired, 
            name: PropTypes.string.isRequired, 
            position: PropTypes.string.isRequired, 
            job: PropTypes.string.isRequired,
            affiliation: PropTypes.string.isRequired,
        }).isRequired,
};

export default OfficerList;