enum Subscription {
    FREE = 'Free',
    PAYED = 'Payed'
}

enum Category {
    ALL = 'All',
    POPULAR = 'Popular',
    RESTREAM = 'Restream',
    WITHOUT_PAYMENT = 'Without Payment',
    FAVORITE = 'Favorite',
    HISTORY = 'Hisotry'
}

enum Direction {
    ALL = 'All',
    INTERFACE_DESIGN = 'Interface Design',
    GRAPHICS = 'Graphics',
    DEV_DATASCIENCE = 'Dev&DataScience',
    MARKETING = 'Marketing',
    MANAGEMENT = 'Management',
    HUMANUTARIUM = 'Humanitarium',
    ADVERTISING = 'Advertising'
}

enum Format {
    ALL = 'All',
    VIDEO_LESSON = 'Video Lesson',
    CONFERENCE = 'Conference',
    TUTORIAL = 'Tutorial',
    INTERVIEW = 'Interview'
}

enum Level {
    ANY = 'Any',
    BEGINNER = 'Beginner',
    SPECIALIST = 'Specialist',
}

interface SearchResult {
    readonly data: []
    readonly totalCount: number
}

interface FilterParamsService {
    readonly category: Category;
    readonly direction: Direction;
    readonly format: Format;
    readonly level: Level;
    readonly query: string;
    readonly page: number;

    readonly setCategory: (category: Category) => void
    readonly setDirection: (direction: Direction) => void
    readonly setFormat: (format: Format) => void
    readonly setLevel: (level: Level) => void
    readonly setQuery: (query: string) => void
    readonly setPage: (page: number) => void
    readonly reset: () => void
}

interface FilterResultService {
    readonly result: SearchResult;
    readonly setResult: (page: number) => void
}

interface FilterService {
    readonly filterParamsService: FilterParamsService;
    readonly filterResultService: FilterResultService;

    readonly filter: () => void
}



