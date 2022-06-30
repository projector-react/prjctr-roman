import React from "react";
import { makeAutoObservable } from "mobx";
import { Category, Direction, Format, Level } from "../types/filter";

export interface FilterParamsState {
    readonly category: Category,
    readonly direction: Direction,
    readonly format: Format,
    readonly level: Level,
    readonly query: string,
    readonly page: number
}

export interface FilterParamsActions {
    readonly setCategory: (category: Category) => void
    readonly setDirection: (direction: Direction) => void
    readonly setFormat: (format: Format) => void
    readonly setLevel: (level: Level) => void
    readonly setQuery: (query: string) => void
    readonly setPage: (page: number) => void
    readonly reset: () => void
}

export type FilterParamsService = FilterParamsState & FilterParamsActions

export function createFilterParamsContext (filterParamsService: FilterParamsService) {
    return React.createContext(filterParamsService)
}

export default class FilterParams implements FilterParamsService {
    category: Category = Category.ALL
    direction: Direction = Direction.ALL
    format: Format = Format.ALL
    level: Level = Level.ANY
    query: string = ''
    page: number = 1

    constructor() {
        makeAutoObservable(this);
    }

    setCategory = (category: Category) => {
        this.reset();
        this.category = category
    };

    setDirection = (direction: Direction) => {
        this.direction = direction
    };

    setFormat = (format: Format) => {
        this.format = format
    }

    setLevel = (level: Level) => {
        this.level = level
    }

    setQuery = (query: string) => {
        this.query = query
    };

    setPage = (page: number) => {
        this.page = page
    };

    reset = () => {
        this.category = Category.ALL
        this.direction = Direction.ALL
        this.format = Format.ALL
        this.level = Level.ANY
        this.query = ''
        this.page = 1
    };
}
