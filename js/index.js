/**
 * Created by 65218 on 2017/12/21.
 */
window.addEventListener('load', function() {
    searchFade();
    //countDown();
    //slide();
});
function searchFade() {
    //�����򽥱��JS����ŵ������������д
    // 1. ���һ���������������¼�
    window.addEventListener('scroll', searchOpacity);
    searchOpacity();

    function searchOpacity() {
        // 2. ��ȡ�����������ľ���
        var scrollTop = getScrollTop();
        console.log(scrollTop);
        var slideHeight = document.querySelector('#slide').offsetHeight;
        if (scrollTop < slideHeight) {
       //     console.log("jjj");
            var opacity = (scrollTop / slideHeight) * 0.8;
            document.querySelector('#topbar').style.backgroundColor = 'rgba(255,0,0,' + opacity + ')';
        } else {
            document.querySelector('#topbar').style.backgroundColor = 'rgba(255,0,0,0.8)';
        }
    }
}
function getScrollTop() {
    var scrollPos;
    if (window.pageYOffset) {
        scrollPos = window.pageYOffset;
    } else if (document.compatMode && document.compatMode != 'BackCompat') {
        scrollPos = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollPos = document.body.scrollTop;
    }
    return scrollPos;
}

