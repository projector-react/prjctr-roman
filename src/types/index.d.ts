enum Category {
    'Popular' = 'Popular',
    'Restream' = 'Restream',
    'WithoutPayment' = 'WithoutPayment'
}

enum Direction {
    'All' = 'All',
    'InterfaceDesign' = 'InterfaceDesign',
    'Graphics' = 'Graphics',
    'Dev&DataScience' = 'Dev&DataScience',
    'Marketing' = 'Marketing',
    'Management' = 'Management',
    'Humanitarium' = 'Humanitarium',
    'Advertising' = 'Advertising'
}

enum Format {
    'All' = 'All',
    'VideoLesson' = 'VideoLesson',
    'Conference' = 'Conference',
    'Tutorial' = 'Tutorial',
    'Interview' = 'Interview'
}

enum Level {
    'Any' = 'Any',
    'Beginner' = 'Beginner',
    'Specialist' = 'Specialist',
}

type SearchResult = {
    data: []
    total_count: number
}

type FilterParamsService = {
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

type FilterResultService = {
    readonly result: SearchResult;
    readonly setResult: (page: number) => void
}

type FilterService = {
    readonly filterParamsService: FilterParamsService;
    readonly filterResultService: FilterResultService;

    readonly filter: () => void
}



