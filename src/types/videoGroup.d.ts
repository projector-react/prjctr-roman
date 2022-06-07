type VideoGroupType = 'featured' | 'default'

interface VideoGroup {
    readonly type: VideoGroupType;
    readonly category?: Category;
    readonly date?: string;
    readonly name: string;
    readonly linkToProfile: string;
    readonly id: string;
}

type ListVideoGroup = VideoGroup[]
