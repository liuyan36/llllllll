import {request} from './request'

// // const BASE_URL = 'http://localhost:4000'
// const BASE_URL = '/api'

// export const reqShopMock = () => ajax('/mock')
export function getHomeMultidate() {
    return request ({
        url: "/ranking/gender"
    })
}
