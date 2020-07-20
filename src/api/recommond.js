import jsonp from 'common/js/jsonp'
import { commonParams, options, weatcherParams, HOT_SONG_TYPE, GET_RECOMMOND } from 'api/config'


/*http://ustbhuangyi.com/music/api/getDiscList
?g_tk=1928093487
&inCharset=utf-8
&outCharset=utf-8
&notice=0
&format=json
&platform=yqq
&hostUin=0
&sin=0
&ein=29
&sortId=5
&needNewCode=0
&categoryId=10000000&rnd=0.9346903213481494
*/

export function getRecommond() {
    const url = 'http://jasaonb.qicp.vip:8088/music/get'

    return jsonp(url, {}, options)
}