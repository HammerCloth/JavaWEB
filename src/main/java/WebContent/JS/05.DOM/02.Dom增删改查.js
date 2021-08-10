window.onload = function (){
    //1. 修改
    var bj = document.getElementById("bj");
    bj.innerText = "南京";
    bj.id = "bj2";//修改id值,但是源代码不会变，修改的只是DoM对象
    //2.删除
    var bj = document.getElementById("bj");
    var parent = bj.parentNode;
    parent.removeChild(bj);//需要通过父节点来删除
    //3.替换
    var bj = document.getElementById("bj");
    var parent = bj.parentNode;//获取父节点
    var nanjing = document.createTextNode("南京");//创建文本节点并返回，但不会自动添加到文档中
    var liele = document.createElement("li");//创建元素节点并返回，但不会自动添加到文档中
    //将子节点加入到父节点
    liele.appendChild(nanjing);//节点组装完成
    parent.replaceChild(liele,bj);//替换完成
    //4.在一个节点之前插入这个节点
    var bj = document.getElementById("bj");
    var parent = bj.parentNode;//获取父节点
    var nanjing = document.createTextNode("南京");//创建文本节点并返回，但不会自动添加到文档中
    var liele = document.createElement("li");//创建元素节点并返回，但不会自动添加到文档中
    //将子节点加入到父节点
    liele.appendChild(nanjing);//节点组装完成
    parent.insertBefore(liele,bj);



    //
}