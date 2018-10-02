import {commonParams} from './config'
import axios from 'axios'

export function getLyric(mid) {
  const url = '/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    g_tk: 5381,
    needNewCode: 0,
    pcachetime: +new Date(),
    format: 'jsonp',
    jsonpCallback: 'MusicJsonCallback_lrc',
    callback: 'MusicJsonCallback_lrc',
    loginUni: 0
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
