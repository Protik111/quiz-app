import React from 'react';
import categoryData from '..//../datas/Categories.json';
import CategoryStyle from '../CategoryStyle/CategoryStyle';
import './Category.scss';

const Category = () => {
    const colors = ['#FF8042', '#FFBB28', '#3090C7', '#0000A0', '#FF8042', '#0000A0', '#3090C7',  '#FFBB28', '#FF8042'];
    return (
        <div className="container category">
            
            <div className="text-center">
                <h1 className="mt-4">Test Your Knowledge</h1>
                <div className="d-flex justify-content-center">
                    <hr className="w-75" style={{color: 'red'}}/>
                </div>
            </div>

            <div className="row p-4">
                {
                    categoryData.map((category,i) => <CategoryStyle key={category.id} category={category} colors={colors[i]}></CategoryStyle>)
                }
            </div>
        </div>
    );
};

export default Category;