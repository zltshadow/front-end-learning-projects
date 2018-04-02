function displayAccesskeys() {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
  //  取得文档中所有链接
  var links = document.getElementsByTagName("a");
  var akeys = new Array();
  for (var i = 0; i < links.length; i++) {
    var current_link = links[i];
    if (!current_link.getAttribute("accesskey")) continue;
    var key = current_link.getAttribute("accesskey");
    var text = current_link.lastChild.nodeValue;
    akeys[key] = text;
  }
  var list = document.createElement("ul");
  for (key in akeys) {
    var text = akeys[key];
    var str = key + ":" + text;
    var item = document.createElement("li");
    var itemText = document.createTextNode(str);
    item.appendChild(itemText);
    list.appendChild(item);
  }
  var header = document.createElement("h3");
  var headerText = document.createTextNode("Accesskeys");
  header.appendChild(headerText);
  document.body.appendChild(header);
  document.body.appendChild(list);
}

addLoadEvent(displayAccesskeys);