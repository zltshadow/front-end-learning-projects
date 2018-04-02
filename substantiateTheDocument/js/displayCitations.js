function displayCitations() {
  if (!document.getElementById || !document.createElement || !document.createTextNode) return false;
  //  遍历文档中的所有blockquote元素
  var quotes = document.getElementsByTagName("blockquote");
  //  遍历插入
  for (var i = 0; i < quotes.length; i++) {
    //  若无cite属性，继续下次循环
    if (!quotes[i].getAttribute("cite")) continue;
    //  保存cite属性
    var url = quotes[i].getAttribute("cite");
    //  取得blockquote元素中的所有元素节点
    var quoteChildren = quotes[i].getElementsByTagName('*');
    //  若无元素节点，继续下次循环
    if (quoteChildren.length < 1) continue;
    //  取得引用中的最后一个元素节点
    var elem = quoteChildren[quoteChildren.length - 1];
    //  创建标记
    var link = document.createElement("a");
    var linkText = document.createTextNode("source");
    link.appendChild(linkText);
    link.setAttribute("href", url);
    var superscript = document.createElement("sup");
    superscript.appendChild(link);
    //  插入标记
    elem.appendChild(superscript);
  }
}

addLoadEvent(displayCitations);