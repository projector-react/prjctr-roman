enum CommentType {
    DEFAULT= 'Default',
    Linked = 'Linked'
}

type ICommentAuthor = {
    readonly id: string
    readonly lastName: string;
    readonly firstName: string;
}

interface Comment {
    readonly type: CommentType;
    readonly author: ICommentAuthor;
    readonly body: string;
    readonly publicationDate: Date;
    readonly timeCode?: number;
}
