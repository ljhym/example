function ajax(options) {
    // 创建 ajax 对象
    var xhr = new XMLHttpRequest()
    var dataStr = ''
    var dataArr = []
    for (var key in options.data) {
        dataArr.push(key + '=' + options.data[key])
    }
    dataStr = dataArr.join('&')
        // 设置请求的方法地址
    if (options.methods == 'get' || options.methods == 'GET') {
        options.url += ('?' + dataStr)
    }
    xhr.open(options.methods, options.url)
        // 设置请求头
    for (var k in options.headers) {
        xhr.setRequestHeader(k, options.headers[k])
    }
    var oMyForm = new FormData();
    for (var key in options.data) {
        oMyForm.append(key, options.data[key]);
    }
    xhr.send(oMyForm)
    xhr.onreadystatechange = function() {
        if (xhr.status === 200 && xhr.readyState == 4) {
            let res = xhr.response
            try {
                res = JSON.parse(res)
                options.success(res)
            } catch (error) {
                options.success(xhr.responsees)
            }
        }
    }
}