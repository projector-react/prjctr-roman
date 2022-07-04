import React from 'react';
import {
    Category,
    Direction,
    Format,
    Level
} from "../../types/filter";

import { useFilterParamsService } from "../../contexts/filterParams";
import { FilterSelector } from "./FilterSelector";

export interface FilterSelectorFc {
    item: string;
    items: string[];
    onInput: (props: string) => void
}

export const Filter = () => {
    const {
        state,
        setCategory,
        setDirection,
        setLevel,
        setFormat,
        // setQuery,
        // setPage,
        // reset
    } = useFilterParamsService()
    function getMemoMapEnum<V> (EnumType: V) {
        return React.useMemo(() => {
            return (Object.keys(EnumType) as Array<keyof typeof EnumType>).map((key) => EnumType[key])
        },[EnumType])
    }

    const categories: Category[] = getMemoMapEnum<typeof Category>(Category)
    const directions: Direction[] = getMemoMapEnum<typeof Direction>(Direction)
    const formats: Format[] = getMemoMapEnum<typeof Format>(Format)
    const levels: Level[] = getMemoMapEnum<typeof Level>(Level)

    return (
        <div>
            <FilterSelector
                item={state.category}
                items={categories}
                onInput={value => setCategory(value as Category)}
            />
            <FilterSelector
                item={state.direction}
                items={directions}
                onInput={value => setDirection(value as Direction)}
            />
            <FilterSelector
                item={state.format}
                items={formats}
                onInput={value => setFormat(value as Format)}
            />
            <FilterSelector
                item={state.level}
                items={levels}
                onInput={value => setLevel(value as Level)}
            />
        </div>
    );
};

