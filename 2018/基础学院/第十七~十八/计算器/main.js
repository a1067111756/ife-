
function inputValue (value) {
    var input_box = document.getElementsByClassName('screen-input-box')[0];
    
    // 去除首次是0的情况
    if (input_box.value === '0') {
        input_box.value = value;
    } else {
        input_box.value = input_box.value + value;
    }
}

function computeResult () {
    var input_box = document.getElementsByClassName('screen-input-box')[0];
    input_box.value = eval(input_box.value)
}

function clearScreen () {
    document.getElementsByClassName('screen-input-box')[0].value = '0';
}

function deleteOneChar () {
    var input_box = document.getElementsByClassName('screen-input-box')[0];
    input_box.value = input_box.value.substring(0, input_box.value.length - 1)
}



// 第一步：点击数字按钮，在显示框显示对应数字
// 第二步: 点击=，计算并显示结果
// 第三步： 实现其它功能按钮