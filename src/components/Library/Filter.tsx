import React from 'react';
import {
    Category,
    Direction,
    // Format,
    // Level
} from "../../types/filter";
import { useFilterParamsService } from "../../contexts/filterParams";
import { CategorySelector } from "./CategorySelector";
import { DirectionSelector } from "./DirectionSelector";

export interface FilterSelectorFc<V> {
    item: V;
    items: [string, V][];
    onInput: (props: V) => void
}

export const Filter = () => {
    const {
        category,
        direction,
        // level,
        // format,
        // query,
        // page,
        setCategory,
        setDirection,
        // setQuery,
        // setFormat,
        // setLevel,
        // setPage,
        // reset
    } = useFilterParamsService()

    const categories: [string, Category][] = React.useMemo(() => Object.entries(Category), [Category])
    const directions: [string, Direction][] = React.useMemo(() => Object.entries(Direction), [Direction])
    // const formats: [string, Format][] = React.useMemo(() => Object.entries(Format), [Format])
    // const levels: [string, Level][] = React.useMemo(() => Object.entries(Level), [Level])

    return (
        <div>
            <CategorySelector
                item={category}
                items={categories}
                onInput={setCategory}
            />
            <DirectionSelector
                item={direction}
                items={directions}
                onInput={setDirection}
            />
        </div>
    );
};

