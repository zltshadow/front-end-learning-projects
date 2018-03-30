function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    //取得所有缩略词
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    var defs = new Array();
    //遍历这些缩略词
    for (var i=0; i<abbreviations.length; i++) {
        var currentAbbr = abbreviations[i];
        if (currentAbbr.childNodes.length < 1) continue;
        var definition = currentAbbr.getAttribute("title");
        var key = currentAbbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    //创建定义列表
    var dlist = document.createElement("dl");
    for (key in defs) {
        var definition = defs[key];
    //创建dt,dd元素
        var dtitle = document.createElement("dt");
        var dtitleText = document.createTextNode(key);
        dtitle.appendChild(dtitleText);
        var ddesc = document.createElement("dd");
        var ddescText = document.createTextNode(definition);
        ddesc.appendChild(ddescText);
    //将创建的dt,dd元素加入定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (dlist.childNodes.length < 1) return false;
    //创建标题
    var header = document.createElement("h2");
    var headerText = document.createTextNode("Abbreviations");
    header.appendChild(headerText);
    //将标题元素添加到页面主体
    document.body.appendChild(header);
    //将dl元素添加到页面主体
    document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);