import { makeAutoObservable } from "mobx";
import { Category, Direction, FilterParamsActions, FilterParamsState, Format, Level } from "../types/filter";


export default class FilterParams implements FilterParamsState, FilterParamsActions {
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
