const dealString = (str: string, len: number) => {
    if (str) {
        return str.length > len ? str.substring(0, len) + '...' : str
    } else {
        return ''
    }
}


const showMessage = function (msg: string = '', type: string = 'success', repeat: boolean = true, opts: any = { timeOut: 6000 }) {
    const container = $('.msg-container')
    const $msgTpl = $('#msg-tpl').clone()
    $msgTpl.removeAttr('id')
    $msgTpl.addClass(type)
    const text = util.dealString(msg, 30)
    $msgTpl.find('.msg-content').html(text)
    const msgCount = container.children().length
    const top = 10 + msgCount * 75 + 'px'
    const count = container.children('.msg-tips').length
    if (!repeat && count > 0) { // 当提示消息不允许重复时，不再添加信息，允许重复时才能添加
        return
    }
    container.append($msgTpl)
    $('.msg-tips .msg-close').off().on('click', function (e) {
        $(e.target).parent().remove()
    })
    $msgTpl.show().animate({ bottom: top, opacity: '1' }).delay(opts.timeOut).fadeOut(0, function () {
        $msgTpl.remove()
    })
}

const util = {
    cookies: {},
    userInfo: {},
    showMessage: showMessage,
    showConfirm: {},
    dealString: dealString
}


export default util
