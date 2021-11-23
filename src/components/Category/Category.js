import React from 'react';
import categoryData from '..//../datas/Categories.json';
import CategoryStyle from '../CategoryStyle/CategoryStyle';

const Category = () => {
    const colors = ['#FF8042', '#FFBB28', '#3090C7', '#0000A0', '#FF8042', '#0000A0', '#3090C7',  '#FFBB28', '#FF8042'];
    return (
        <div className="container">
            <div className="row p-4">
                {
                    categoryData.map((category,i) => <CategoryStyle key={category.id} category={category} colors={colors[i]}></CategoryStyle>)
                }
            </div>
        </div>
    );
};

export default Category;