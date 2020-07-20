import fgjsonp from 'jsonp'

export default function jsonp(url, data, option) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + Params(data)

    return new Promise((resolve, reject) => {
        fgjsonp(url, option, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

function Params(data) {
    let url = ''
    for (var k in data) {
        let value = data[k] !== undefined ? data[k] : '';
        url += ('&' + k + '=' + encodeURIComponent(value))
    }
    return url ? url.substring(1) : ''
}