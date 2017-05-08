5/8
用js模拟点击a标签href事件(场景1：文件下载无法用http请求来获取，需要a标签去打开)

                    var el=document.createElement("a");
                    document.body.appendChild(el);
                    el.href=urlStr;
                    el.target='_parent';
                    el.click();
                    document.body.removeChild(el);
