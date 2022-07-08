import { makeObservable, observable } from "mobx";
import { Category, Direction, Format, Level } from "../types/filter";
import { injectable } from "inversify";

export interface FilterParamsProps {
    readonly category: Category,
    readonly direction: Direction,
    readonly format: Format,
    readonly level: Level,
    readonly query: string,
    readonly page: number
}

export interface FilterParamsState {
    state: FilterParamsProps
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

@injectable()
export default class FilterParams implements FilterParamsService {
    state = {
        category: Category.ALL,
        direction: Direction.ALL,
        format: Format.ALL,
        level: Level.ANY,
        query: '',
        page: 1
    }

    constructor() {
        makeObservable(this, {
            state: observable
        });
    }

    setCategory = (category: Category) => {
        this.reset();
        this.state = {
            ...this.state,
            category
        }
    };

    setDirection = (direction: Direction) => {
        this.state = {
            ...this.state,
            direction
        }
    };

    setFormat = (format: Format) => {
        this.state = {
            ...this.state,
            format
        }
    }

    setLevel = (level: Level) => {
        this.state = {
            ...this.state,
            level
        }
    }

    setQuery = (query: string) => {
        this.state = {
            ...this.state,
            query
        }
    };

    setPage = (page: number) => {
        this.state = {
            ...this.state,
            page
        }
    };

    reset = () => {
        this.state = {
            category: Category.ALL,
            direction: Direction.ALL,
            format: Format.ALL,
            level: Level.ANY,
            query: '',
            page: 1
        }
    };
}
