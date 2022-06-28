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
    'DEV_DATA&SCIENCE' = 'DEV DATA&SCIENCE',
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
