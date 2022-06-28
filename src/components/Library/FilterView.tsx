import React from 'react';
import { Category, Direction, Format, Level } from "../../types/filter";
import { FilterParamsService } from "../../contexts/filterParams";

export const FilterView = ({
       category,
       direction,
       level,
       format,
       query,
       page,
       setCategory,
       setDirection,
       setQuery,
       setFormat,
       setLevel,
       setPage,
       reset
   }: FilterParamsService) => {

    const categories: [string, Category][] = React.useMemo(() => Object.entries(Category), [Category])
    const directions: [string, Direction][] = React.useMemo(() => Object.entries(Direction), [Direction])
    const formats: [string, Format][] = React.useMemo(() => Object.entries(Format), [Format])
    const levels: [string, Level][] = React.useMemo(() => Object.entries(Level), [Level])

    return (
        <div>
            <select
                placeholder="category"
                value={category}
                onInput={(e) => setCategory((e.target as HTMLSelectElement).value as Category)}
            >
                {categories.length > 0 && categories.map(v => <option value={v[0]} key={v[0]}>{v[1].toLowerCase()}</option>)}
            </select>
            <select
                placeholder="direction"
                value={direction}
                onInput={(e) => setDirection((e.target as HTMLSelectElement).value as Direction)}
            >
                {directions.length > 0 && directions.map(v => <option value={v[0]} key={v[0]}>{v[1].toLowerCase()}</option>)}
            </select>
            <select
                placeholder="format"
                value={format}
                onInput={(e) => setFormat((e.target as HTMLSelectElement).value as Format)}
            >
                {formats.length > 0 && formats.map(v => <option value={v[0]} key={v[0]}>{v[1].toLowerCase()}</option>)}
            </select>
            <select
                placeholder="level"
                value={level}
                onInput={(e) => setLevel((e.target as HTMLSelectElement).value as Level)}
            >
                {levels.length > 0 && levels.map(v => <option value={v[0]} key={v[0]}>{v[1].toLowerCase()}</option>)}
            </select>
            <input
                placeholder="query"
                value={query}
                onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
            />
            <button onClick={() => setPage(page + 1)}>
                Page: {page}
            </button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

