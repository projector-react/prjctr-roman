type CommentType = 'default' | 'linked'

interface Comment {
    readonly type: CommentType;
    readonly author: string;
    readonly body: string;
    readonly date: string;
    readonly timeCode?: number;
}
