import React from "react";
import { Category } from "../../types/filter";
import { FilterSelectorFc } from "./Filter";

export const CategorySelector = ({ item: category, items: categories, onInput: setCategory }: FilterSelectorFc<Category>) => {
    return (
        <select
            placeholder="category"
            value={category}
            onInput={(e) => setCategory((e.target as HTMLSelectElement).value as Category)}
        >
            {categories.length > 0 && categories.map(v => <option value={v[0]} key={v[0]}>{v[1].toLowerCase()}</option>)}
        </select>
    )
}