import React from "react";

import { Dependence, diInject } from "../../HOC";
import { TYPES } from "../../../constants";

import { VideoView } from "./VideoView";

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

const VideoInjected = diInject(VideoView, {
    videoViewModel: new Dependence(TYPES.videoViewModel)
})

export const Video = () => <VideoInjected />
