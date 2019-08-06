import axios from 'axios'

const JsonHeaders = {'Content-Type': 'application/json'}
const time = process.env.VUE_APP_CURRENTMODE === 'production' ? 3000 : 5000
const service = axios.create({
    // 需要非JSON格式交互数据时，设置以下格式
    // headers: { 'Content-type': 'application/x-www-form-urlencoded' },
    headers: JsonHeaders,
    timeout: time,
    // transformRequest: [function (data, headers) {
    //   // Do whatever you want to transform the data
    //   // return qs.stringify(data)
    // }]
})

service.interceptors.response.use((res: any ) => {
    if (res.data.code === 500 && res.data.message === '服务内部异常') {
        /* if (confirm("检测到您可能未登录，是否跳转到登录页面？") == true) {
                    // 跳转到登录页面
                    router.push({
                        path: "/login"
                    })
                } else {

                } */
    } else if (res.data.code === 401) {
        // 跳转到登录页面
        alert('当前用户未登录')
    }
    return res.data
}, (err: any) => {
    return Promise.reject(err)
})

/*  */
const apiService = {
    infoCount: {}, // home 首页相关接口
    activity: {}, //
}

const prod = process.env.VUE_APP_CURRENTMODE === 'production'

const serviceURL = prod ? '/master' : '/master'

/* 首页相关接口 */
apiService.infoCount = {
    // 模型列表接口
    modelsList: (param: any) => {
        const url = serviceURL + '/Comparison/model/public'
        return service.post(url, param)
    },
    getPlayWords: (param: any) => {
        const url = serviceURL + '/Comparison/mart/public/points/info';
        return service.get(url, param);
    }
}


apiService.activity = {
    //

}


export default apiService
