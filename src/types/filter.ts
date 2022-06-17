export enum Subscription {
    FREE = 'FREE',
    PAYED = 'PAYED'
}

export enum Category {
    ALL = 'ALL',
    POPULAR = 'POPULAR',
    RESTREAM = 'RESTREAM',
    WITHOUT_PAYMENT = 'WITHOUT PAYMENT',
    FAVORITE = 'FAVORITE',
    HISTORY = 'HISTORY'
}

export enum Direction {
    ALL = 'ALL',
    INTERFACE_DESIGN = 'INTERFACE DESIGN',
    GRAPHICS = 'GRAPHICS',
    DEV_DATASCIENCE = 'DEV DATA & SCIENCE',
    MARKETING = 'MARKETING',
    MANAGEMENT = 'MANAGEMENT',
    HUMANUTARIUM = 'HUMANUTARIUM',
    ADVERTISING = 'ADVERTISING'
}

export enum Format {
    ALL = 'ALL',
    VIDEO_LESSON = 'VIDEO LESSON',
    CONFERENCE = 'CONFERENCE',
    TUTORIAL = 'TUTORIAL',
    INTERVIEW = 'INTERVIEW'
}

export enum Level {
    ANY = 'ANY',
    BEGINNER = 'BEGINNER',
    SPECIALIST = 'SPECIALIST',
}

export interface SearchResult {
    readonly data: string[]
    readonly totalCount: number
}

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

export interface FilterResultState {
    readonly result: SearchResult;
}

export interface FilterResultActions {
    readonly setResult: (result: SearchResult) => void
}

export interface FilterService {
    filterParamsState: FilterParamsState
    filterResultActions: FilterResultActions

    readonly filter: () => Promise<void>
}



