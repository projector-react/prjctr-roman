interface ILector {
    readonly name: string;
    readonly keyword: string;
    readonly position: string;
    readonly company: string;
}

interface IVideo {
    readonly id: string;
    readonly category: Category;
    readonly source: string;
    readonly releaseDate: Date;
    readonly name: string;
    readonly viewAccess: Subscription;
    readonly lectors: Lector[];
    readonly previewImage: string;
    readonly categoryList: Category[];
    readonly description: string;
    readonly comments: Comment[]
}

