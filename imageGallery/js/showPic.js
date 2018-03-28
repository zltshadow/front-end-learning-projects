//1.找出id属性值为placeholder的图片并修改其src属性 2.找出id属性值为description的元素并修改其第一个子元素的nodeValue属性
function showPic(whichpic) {
    if (!document.getElementById("placeholder")) {
        return false;
    }
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    if (!document.getElementById("description")) {
        var text = whichpic.getAttribute("title");
        var description = document.getElementById("description");
        description.firstChild.nodeValue = text;
    }
    return true;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}

//window.onload = countBodyChildren;

function prepareGallery(){
    if (!document.getElementsByTagName || !document.getElementById){
        return false;
    }
    if (!document.getElementById("imagegallery")) {
        return false;
    }
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a")
    for( var i=0; i < links.length; i++){
        links[i].onclick = function(){
            return showPic(this) ? false : true;
        }
    }
}

//window.onload = prepareGallery;
//页面加载完毕后追加执行函数
function addLoadEvent(func) {
    var oldonload = window.onload
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);