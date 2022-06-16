type RouteMeta = Record<string, string | number | boolean>

type RouteQuery = Record<string, string>
type RouteParams = Record<string, string>

interface RouteState {
    path: string
    fullPath: string
    query?: RouteQuery
    params?: RouteQuery
    name: string
    meta: RouteMeta
}

type RoutePayload = Required<Pick<RouteState, 'path'>> & Pick<RouteState, 'query' | 'params'>

interface RouteService {
    push: (route: RoutePayload) => void
}