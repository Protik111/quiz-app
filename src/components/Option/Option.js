import React from 'react';

const Option = ({options}) => {
    console.log(options.trivia_categories, 'options');
    // const data = options.trivia_categories
    // console.log(data, 'date');
    return (
        <div>
            {/* {data.map(result => <option>{result.category}</option>)} */}
        </div>
    );
};

export default Option;