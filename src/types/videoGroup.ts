enum VideoGroupType {
    FEATURED = 'FEATURED',
    DEFAULT = 'DEFAULT'
}

interface VideoGroup {
    readonly type: VideoGroupType;
    readonly category?: Category;
    readonly date?: Date;
    readonly name: string;
    readonly linkToProfile: string;
    readonly id: string;
}

type ListVideoGroup = VideoGroup[]
