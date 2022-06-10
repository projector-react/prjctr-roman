enum Subscription {
    FREE = 'FREE',
    PAYED = 'PAYED'
}

enum Category {
    ALL = 'ALL',
    POPULAR = 'POPULAR',
    RESTREAM = 'RESTREAM',
    WITHOUT_PAYMENT = 'WITHOUT_PAYMENT',
    FAVORITE = 'FAVORITE',
    HISTORY = 'HISTORY'
}

enum Direction {
    ALL = 'ALL',
    INTERFACE_DESIGN = 'INTERFACE_DESIGN',
    GRAPHICS = 'GRAPHICS',
    DEV_DATASCIENCE = 'DEV_DATASCIENCE',
    MARKETING = 'MARKETING',
    MANAGEMENT = 'MANAGEMENT',
    HUMANUTARIUM = 'HUMANUTARIUM',
    ADVERTISING = 'ADVERTISING'
}

enum Format {
    ALL = 'ALL',
    VIDEO_LESSON = 'VIDEO_LESSON',
    CONFERENCE = 'CONFERENCE',
    TUTORIAL = 'TUTORIAL',
    INTERVIEW = 'INTERVIEW'
}

enum Level {
    ANY = 'ANY',
    BEGINNER = 'BEGINNER',
    SPECIALIST = 'SPECIALIST',
}

interface SearchResult {
    readonly data: []
    readonly totalCount: number
}

interface FilterParamsState {
    readonly category: Category;
    readonly direction: Direction;
    readonly format: Format;
    readonly level: Level;
    readonly query: string;
    readonly page: number;
}

interface FilterParamsService {
    readonly setCategory: (category: Category) => void
    readonly setDirection: (direction: Direction) => void
    readonly setFormat: (format: Format) => void
    readonly setLevel: (level: Level) => void
    readonly setQuery: (query: string) => void
    readonly setPage: (page: number) => void
    readonly reset: () => void
}

interface FilterResultState {
    readonly result: SearchResult;
}

interface FilterResultService {
    readonly setResult: (result: SearchResult) => SearchResult
}

interface FilterService {
    readonly filter: () => Promise<void>
}



