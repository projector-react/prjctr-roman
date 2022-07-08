import { VideoView } from "./VideoView";
import { Dependence, diInject } from "../../HOC";
import { TYPES } from "../../../constants";

interface SearchResult {
    readonly data: string[]
    readonly totalCount: number
}

interface FilterResultState {
    readonly result: SearchResult;
}

interface FilterResultActions {
    readonly setResult: (result: SearchResult) => void
}

type FilterResultService = FilterResultState & FilterResultActions

export const createVideoViewModel = (filterResult: FilterResultService) => {
    return {
        result: filterResult.result
    }
}

export const Video = diInject(VideoView, {
    videoViewModelProps: new Dependence(TYPES.videoViewModel)
})
