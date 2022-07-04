import React from "react";
import { FilterSelectorFc } from "./Filter";

export const FilterSelector = ({ item, items, onInput }: FilterSelectorFc) => {
    return (
        <select
            placeholder="direction"
            value={item}
            onInput={(e) => onInput((e.target as HTMLSelectElement).value)}
        >
            {items.length > 0 && items.map(v => <option value={v} key={v}>{v.toLowerCase()}</option>)}
        </select>
    )
}
