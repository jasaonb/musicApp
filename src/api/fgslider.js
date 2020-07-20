let index = 1
let maxIndex = 0
let startX = 0
let moveX = 0
let isTouch = false
let width = 0


export function fgInit(e, endFn) {
    let defaults = {
        slider: undefined,
        loop: true,
        duration: 500,
        loopDuration: 2000,
        touchendDuration: 5000
    }
    Object.assign(defaults, e)
    if (defaults.slider === undefined) {
        throw "fgInit() => params of slider is null";
    }

    // 找到slider中的子孩子，为子孩子添加无缝滚动的前后两个图片的副本
    maxIndex = defaults.slider.children.length + 1
    let firstNode = defaults.slider.firstElementChild.cloneNode(true)
    let lastNode = defaults.slider.lastElementChild.cloneNode(true)
    defaults.slider.insertBefore(lastNode, defaults.slider.firstElementChild)
    defaults.slider.appendChild(firstNode)
    defaults.slider.style.transition = 'none'
    getWidth(defaults.slider)

    window.addEventListener('resize', () => {
        getWidth(defaults.slider)
    })

    defaults.slider.time = setTimeout(() => {
        proTime(defaults)
        proSetTime(defaults)
    }, defaults.loopDuration)

    defaults.slider.addEventListener('transitionend', () => {
            justify(defaults.slider)
            endFn(index - 1)
        })
        // 为slider添加交互事件
    defaults.slider.addEventListener('touchstart', (e) => {
        //轮播间隔需要停止
        if (defaults.slider.time) {
            clearTimeout(defaults.slider.time)
            defaults.slider.time = null
        }

        justify(defaults.slider)
        moveX = 0
        startX = e.targetTouches[0].pageX
        isTouch = true
    })

    defaults.slider.addEventListener('touchmove', (e) => {
        if (isTouch) {
            defaults.slider.style.transition = 'none'
            moveX = startX - e.targetTouches[0].pageX
        }
        defaults.slider.style.left = -width * index - moveX + 'px'
    })

    defaults.slider.addEventListener('touchend', () => {
        if (Math.abs(moveX) > 50) {
            defaults.slider.style.transition = makeTransition(defaults.duration)
            if (moveX > 0) {
                index++
            } else if (moveX < 0) {
                index--
            }
        }
        defaults.slider.style.left = -width * index + 'px'
        if (defaults.slider.time === null) {
            defaults.slider.time = true
            proSetTime(defaults, true)
        }
    })
}

function makeTransition(duration) {
    return 'all ' + duration / 1000 + 's'
}

function justify(slider) {
    slider.style.transition = 'none'
    if (index <= 0) {
        index = maxIndex - 1
        slider.style.left = -index * width + 'px'
    } else if (index >= maxIndex) {
        index = 1
        slider.style.left = -index * width + 'px'
    }
}

function proTime(defaults) {
    if (defaults.slider.style.transition.indexOf('none') !== -1) {
        defaults.slider.style.transition = makeTransition(defaults.duration)
            // console.log(defaults.slider.style.transition)
    }
    index++
    defaults.slider.style.left = -width * index + 'px'
}

function proSetTime(defaults, time) {
    let timeDuration = defaults.loopDuration
    if (time) {
        timeDuration = defaults.touchendDuration
    }
    if (defaults.slider.time) {
        defaults.slider.time = setTimeout(() => {
            proTime(defaults)
            proSetTime(defaults)
        }, timeDuration)
    }
}

function getWidth(slider) {
    if (slider.parentNode) {
        width = slider.parentNode.clientWidth
        slider.style.left = -width * index + 'px'
    }
}