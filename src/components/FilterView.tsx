import React from "react";

type FilterViewProps = Pick<SearchState, 'filterParams'> & Omit<SearchService, 'setLevel' | 'setFormat' | 'filter' | 'setResult'>

export const FilterView = ({
       filterParams,
       setCategory,
       setDirection,
       setQuery,
       setPage,
       reset
   }: FilterViewProps) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <input
                placeholder="category"
                value={filterParams.category}
                onInput={(e) => setCategory((e.target as HTMLInputElement).value as Category)}
            />
            <input
                placeholder="direction"
                value={filterParams.direction}
                onInput={(e) => setDirection((e.target as HTMLInputElement).value as Direction)}
            />
            <input
                placeholder="query"
                value={filterParams.query}
                onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
            />
            <button onClick={() => setPage(filterParams.page + 1)}>
                Page: {filterParams.page}
            </button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};
