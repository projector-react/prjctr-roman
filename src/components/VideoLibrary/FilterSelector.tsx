import React from "react";

export interface FilterSelectorFc {
    selectorValue: string;
    selectorList: string[][];
    onInput: (props: string) => void
}

export const FilterSelector = ({ selectorValue, selectorList, onInput }: FilterSelectorFc) => {
    return (
        <select
            value={selectorValue}
            onInput={(e) => onInput((e.target as HTMLSelectElement).value)}
        >
            {selectorList.length > 0 && selectorList.map(item => {
                const [key, value] = item
                return (
                    <option value={key} key={key}>{value}</option>
                )
            })}
        </select>
    )
}
