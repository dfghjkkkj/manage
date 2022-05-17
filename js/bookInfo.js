//查询 type:图书类别
function selectByType(type) {
    $.ajax({
        type:'get',
        url:'http://1.14.150.103:80/inquire',
        data:{Type:type},
        dataType:'json',
        success:function (data) {
            //（2）图书信息添加至表格中
            for(var i=0;i<data.length;i++){
                var tr=$("<tr>");
                $("<td>").html("<input type='checkbox'>").appendTo(tr);
                $("<td>").html(data[i].ID).appendTo(tr);
                $("<td>").html(data[i].Name).appendTo(tr);
                $("<td>").html(data[i].Publish).appendTo(tr);
                $("<td>").html(data[i].isBorrowing).appendTo(tr);
                $("<td>").html(data[i].borrowName).appendTo(tr);
                $("<td>").html(data[i].borrowTime).appendTo(tr);
                $("<td>").html("<input type=\"button\" class=\"delete\" value=\"删除\"/><input type=\"button\" class=\"update\" value=\"修改\"/>").appendTo(tr);
                $("tbody").append(tr);
            }
        }
    })
}