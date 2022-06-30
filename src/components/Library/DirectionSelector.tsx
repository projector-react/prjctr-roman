import React from "react";
import { FilterSelectorFc } from "./Filter";
import { Direction } from "../../types/filter";

export const DirectionSelector = ({ item: direction, items: directions, onInput: setDirection }: FilterSelectorFc<Direction>) => {
    return (
        <select
            placeholder="direction"
            value={direction}
            onInput={(e) => setDirection((e.target as HTMLSelectElement).value as Direction)}
        >
            {directions.length > 0 && directions.map(v => <option value={v[0]} key={v[0]}>{v[1].toLowerCase()}</option>)}
        </select>
    )
}