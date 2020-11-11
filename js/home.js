$(function () {
//判断手机端还是PC端
    var system = {
        win: false,
        mac: false,
        xll: false,
        ipad:false
    };
    //检测平台
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    system.ipad = (navigator.userAgent.match(/iPad/i) != null)?true:false;
    if (system.win || system.mac || system.xll ||system.ipad) {
        $(".pc").show();
        $(".andr").hide();
    } else {
        $(".pc").hide();
        $(".andr").show();
    }

    $("#nv").click(function () {
        $(".nv-bar").toggleClass("show");
    });
    //关于我们
    // $(".aboutUs").click(function () {
    //     $(".alertUsBox").toggle();
    // });
    $(".aboutUs").click(function () {
        $("#myModalLabel").text("关于我们");
        $(".modal-body").html(`<p style="line-height: 1.5">财富森林是一款基于DAO理念的开源财富DAPP社区，在这片财富森林中，每位用户都是建设者，大家通过建设自己的财富树，最终让财富森林布满全球。</p>`)
    });
    $(".rule").click(function () {
        // $(".alertUsBox").toggle();
        $("#myModalLabel").text("会员规则");
        $(".modal-body").html(`<div style="line-height: 1.5"><p>L1：只获得 1 代奖励，1 代每日分红的 50%；</p><br/>
                <p>L2：只获得 2 代奖励，1 代每日分红的 70%，2 代每日分红的 50% </p><br/>
                <p>L3：可获取 30 代奖励，1 代每日分红的 100%，2 代每日分红的 70%，
                3 代每日分红的 50%，4 代至 10 代每日分红的 10%，11 至 20 代每
                日分红的 5%，21-30 代每日分红的 0.5%。</p><br/>
                <p>L4：可获取无限代奖励，1 代每日分红的 100%，2 代每日分红的
                70%，3 代每日分红的 50%，4 代至 10 代每日分红的 10%，11 至 20
                代每日分红的 5%，21-30 代每日分红的 0.5%，30 代之后 0.1%。</p><br/></div>`)
    });
    $(".certificate").click(function () {
        $("#myModalLabel").text("公平可证");
        $(".modal-body").html(`<p style="line-height: 1.5;">哪种在线游戏可以证明其公平性？</br></br>
简单来说，可以证明其公平性意味着任何投入及投注结果都可以进行独立验证，并且运营商或其他玩家都无法没篡改智能合约规定的过程和结果。</br></br>
WealthForest 是否可以证明其公平性？</br></br>
是的。 整个游戏玩法都由以太坊智能合约进行控制，并且智能合约是开源的。 任何一方都可以对合约进行审核，并检查任何交易，确保WealthForest以及恶意玩家都不会拥有合约中ETH的所有权并串改智能合约规定的过程和结果。</br></br>
您与其他游戏网站有什么不同？</br></br>
我们的游戏非常简单易懂，只需要下注ETH并按照智能合约既定的规则获取ETH即可。</br></br>
您明白了吗？ 请尽可能用通俗易懂的方式向我解释一下它是如何运作的。</br></br>
我们的智能合约是开源的并且可以被任何人来证明没有任何后门及串改结果的可能性，用户投入的以太坊被锁定在智能合约上并不属于任何人，开发者也无法拿走智能合约上的ETH，只能按照智能合约既定的规则来公平的按照游戏规则获取ETH。
WealthForest是否可以篡改流程或者拿走合约中所有的ETH？</br></br>
不可以，因为合约没有任何后门能拿走其中的ETH，这就意味着运营商在接受用户的投注后无法转移任何ETH，如果您看不懂智能合约，可以邀请专业的开发者来对公开的合约代码进行审计。</p>`)
    });
    $(".contract").click(function () {
        $("#myModalLabel").text("合约透明");
        $(".modal-body").html(`内容`)
    });

    $("#sub").click(function () {
        $(".specialNum").text(function (index,content) {
            let num=parseInt(content)-1;
            if(num>0&&num<30) return num;
        })
    });
    $("#add").click(function () {
        $(".specialNum").text(function (index,content) {
            let num=parseInt(content)+1;
            if(num>0&&num<31) return num;
        })
    });
    //点击nav下划线
    $(".custom-nv1 li").click(function () {
        $(this).addClass('custom-active').siblings().removeClass('custom-active');
    });
    $(".custom-nv2 li").click(function () {
        $(this).addClass('custom-active2').siblings().removeClass('custom-active2');
    });
    $(".close").click(function () {
        $(".alertUsBox").hide();
    });

    //投注比特币

    $(".ETH-1").hover(function(){
        $(".ETH-1").attr("src","imgs/on1ETH.png");
    },function(){
        $(".ETH-1").attr("src","imgs/1ETH.png");
    });
    $(".ETH-1").click(function () {
       $(".specialNum").text("1");
    });
    $(".ETH-6").hover(function(){
        $(".ETH-6").attr("src","imgs/on6ETH.png");
    },function(){
        $(".ETH-6").attr("src","imgs/6ETH.png");
    });
    $(".ETH-6").click(function () {
        $(".specialNum").text("6");
    });
    $(".ETH-11").hover(function(){
        $(".ETH-11").attr("src","imgs/on11ETH.png");
    },function(){
        $(".ETH-11").attr("src","imgs/11ETH.png");
    });
    $(".ETH-11").click(function () {
        $(".specialNum").text("11");
    });
    $(".ETH-15").hover(function(){
        $(".ETH-15").attr("src","imgs/on15ETH.png");
    },function(){
        $(".ETH-15").attr("src","imgs/15ETH.png");
    });
    $(".ETH-15").click(function () {
        $(".specialNum").text("15");
    });

})