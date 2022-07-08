import React from 'react';
import { observer } from "mobx-react";
import {
    Category,
    Direction,
    Format,
    Level
} from "../../types/filter";
import { useDiContainer } from "../../di-container-context";
import { useUIList } from "../../contexts/lists";

import { FilterSelector } from "./FilterSelector";

export const Filter = observer(() => {
    const { filterParams } = useDiContainer();
    const { categories, directions, formats, levels } = useUIList()
    const {
        state,
        setCategory,
        setDirection,
        setFormat,
        setLevel,
        // setQuery,
        // setPage,
        // reset
    } = filterParams

    return (
        <div>
            <FilterSelector
                selectorValue={state.category}
                selectorList={categories}
                onInput={value => setCategory(value as Category)}
            />
            <FilterSelector
                selectorValue={state.direction}
                selectorList={directions}
                onInput={value => setDirection(value as Direction)}
            />
            <FilterSelector
                selectorValue={state.format}
                selectorList={formats}
                onInput={value => setFormat(value as Format)}
            />
            <FilterSelector
                selectorValue={state.level}
                selectorList={levels}
                onInput={value => setLevel(value as Level)}
            />
        </div>
    );
});

