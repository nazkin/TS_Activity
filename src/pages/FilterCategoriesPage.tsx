import React, { useEffect, useState } from "react";
import './filterCategory.css';

import axios from "axios";

import { listCategories } from "../api/endpoints";

import Template from "../components/Template";
import LoadingSpinner from "../components/subcomponents/LoadingSpinner";
import CategorySpecificList from '../components/CategorySpecificList';

type categoriesApiOutput = {
    strCategory: string;
}

export interface IFilterCategoryProps {

};


const FilterCategory: React.FC<IFilterCategoryProps> = (props) => {
    // so first we will loop throght categories and then search all the possible drinks
    // each column will be a card dynamic
    const [isLoading, setIsLoading] = useState(false);
    const [categoryData, setCategoryData] = useState<Array<categoriesApiOutput> | undefined>();

useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
        try {
            const { data } = await axios({
                method:"GET",
                url: listCategories,
                headers: {
                    "x-rapidapi-key": process.env.REACT_APP_API,
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                    "useQueryString": true
                },
                params:{
                    "c": "list"
                }
             });
            setIsLoading(false);
            console.log(data);
            setCategoryData(data.drinks);
        } catch (error) {
            setIsLoading(false);
            console.log(error)
        }

         
    }
    fetchData();;
}, []);

    let categorySpecificListUI;
    if(categoryData && categoryData !== undefined) {
        categorySpecificListUI = categoryData.map(category => {
            return(
                <CategorySpecificList category={category.strCategory} />
            )
        })
    }


    return (
        <Template>
            {
                isLoading
                ? 
                <LoadingSpinner type="Puff" color="#541BD6" width={500} height={500} /> 
                :
                <div>
                    {categorySpecificListUI}
                </div> 
            }
        </Template>

    );
}

export default FilterCategory;