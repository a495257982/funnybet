$(function () {
    /*******************************************************************************************************************************/
    //检查是否安装metamask
    //if (typeof window.ethereum !== 'undefined'|| (typeof window.web3 !== 'undefined'))
    if (typeof web3 !== 'undefined') {
        // Web3 browser user detected. You can now use the provider.
        // web3 = window['ethereum'] || window.web3.currentProvider
        web3 = new Web3(web3.currentProvider);
        if (!web3.eth.coinbase) {   //判断登录 获取当前MetaMask帐户的钱包地址
            ethereum.enable()
        }else {
            console.log(web3.eth.defaultAccount)
        }


    }else {
        //安装metamask
        $(".bet-ok").hide();
        $(".install").show();
    }

    web3.eth.defaultAccount = web3.eth.accounts[0];
    web3.eth.getAccounts(function (err,result) {
        $("#addre").text(result)
    });

    var account=web3.eth.accounts[0];
    if(account){
        var inviteCode=account.substr(-8, 8)//取账号后八位为邀请码
        $("#inviteCode").text(inviteCode);
        $("#inviteCodeT").text(inviteCode)
    }


    console.log("当前活动账户：",web3.eth.coinbase)

    //var webABI=[{"constant":false,"inputs":[],"name":"closeAct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"userAddress","type":"address"},{"name":"inputAmount","type":"uint256"},{"name":"inviteCode","type":"string"},{"name":"beInvitedCode","type":"string"}],"name":"invest","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"startLength","type":"uint256"},{"name":"endLength","type":"uint256"},{"name":"times","type":"uint256"}],"name":"sendAward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"startLength","type":"uint256"},{"name":"endLength","type":"uint256"},{"name":"times","type":"uint256"}],"name":"countShareAndRecommendedAward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getSomeInfo","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"userAddress","type":"address"},{"name":"freezeAmount","type":"uint256"},{"name":"inviteCode","type":"string"},{"name":"beInvitedCode","type":"string"},{"name":"freeAmount","type":"uint256"},{"name":"times","type":"uint256"}],"name":"remedy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserByAddress","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"inviteCode","type":"string"}],"name":"getUserByinviteCode","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"userAddress","type":"address"}],"name":"userWithDraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"startLength","type":"uint256"},{"name":"endLength","type":"uint256"},{"name":"times","type":"uint256"}],"name":"countRecommend","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"test","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getallmoney","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}]
    var webABI=[
        {
            "constant": false,
            "inputs": [],
            "name": "closeAct",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "startLength",
                    "type": "uint256"
                },
                {
                    "name": "endLength",
                    "type": "uint256"
                },
                {
                    "name": "times",
                    "type": "uint256"
                }
            ],
            "name": "countRecommend",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "startLength",
                    "type": "uint256"
                },
                {
                    "name": "endLength",
                    "type": "uint256"
                },
                {
                    "name": "times",
                    "type": "uint256"
                }
            ],
            "name": "countShareAndRecommendedAward",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "userAddress",
                    "type": "address"
                },
                {
                    "name": "inputAmount",
                    "type": "uint256"
                },
                {
                    "name": "inviteCode",
                    "type": "string"
                },
                {
                    "name": "beInvitedCode",
                    "type": "string"
                }
            ],
            "name": "invest",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "userAddress",
                    "type": "address"
                },
                {
                    "name": "freezeAmount",
                    "type": "uint256"
                },
                {
                    "name": "inviteCode",
                    "type": "string"
                },
                {
                    "name": "beInvitedCode",
                    "type": "string"
                },
                {
                    "name": "freeAmount",
                    "type": "uint256"
                },
                {
                    "name": "times",
                    "type": "uint256"
                }
            ],
            "name": "remedy",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "startLength",
                    "type": "uint256"
                },
                {
                    "name": "endLength",
                    "type": "uint256"
                },
                {
                    "name": "times",
                    "type": "uint256"
                }
            ],
            "name": "sendAward",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "userAddress",
                    "type": "address"
                }
            ],
            "name": "userWithDraw",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getSomeInfo",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "userAddress",
                    "type": "address"
                }
            ],
            "name": "getUserByAddress",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "inviteCode",
                    "type": "string"
                }
            ],
            "name": "getUserByinviteCode",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "test",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ];

    var infoContract = web3.eth.contract(webABI);
    //合约地址
    var info = infoContract.at('0x29D92737BBf9282B8a3055AEBa45E464B1468F1d');
  //  console.log("info:",info);
   // info.st(function (err,res) {
      //  console.log("st:");
        //    if(!err) {
        //        console.log(res);
        //    }else{
         //       console.log(err);
       //     }
   // });
    // info.getlevel(24000000000000000000,function (err,res) {
    //     console.log("getlevel:")
    //     if(!err) {
    //         console.log(res);
    //     }else{
    //         console.log(err);
    //     }
    // });
    // info.compareStr('a','a',function (err,res) {
    //     console.log("compareStr:")
    //     if(!err) {
    //         console.log(res);
    //     }else{
    //         console.log(err);
    //     }
    // })
    // info.methods.gu().call(null,function(error, result){
    //     console.log("the data:"+result);
    // });

    // console.log(info);
    // info.methods.getallmoney().call(null,function(error,result){
    //     console.log("hello");
    //     console.log("contract name "+result);
    // })


    //info.getallmoney(function (err, res) {
      //  console.log("getallmoney");
        //if(!err) {
        //    console.log(res);
       // }else{
         //   console.log(err);
     //   }
  //  });
    //所有以太币和投资次数
    info.getSomeInfo(function (err, res) {
        console.log("getSomeInfo");
        if(!err) {
            console.log(res);
            var total=res[0].c[0];
            console.log("total:",total)
            $("#betTatal").text(total/10000)
            $("#stockTotal").text(total/10000)
            var num=res[1].c[0];
            console.log("num:",num)
            $("#beNum").text(num)
            $("#elementNum").text(num)
        }else{
            console.log(err);
        }
    });
    //节点数，入股数总数，分红等级，节点等级，钱包余额
    info.getUserByAddress(web3.eth.coinbase,function (err,res) {
        console.log("getUserByAddress");
        if(!err) {
            console.log(res);
            //分红等级
            $("#shareLevel").text(res[11].c[0])
            //节点等级
            $("#elementLevel").text(res[11].c[0])
            //钱包余额
            $("#walletBalance").text((res[1].c[0]+res[2].c[0])/10000)
            //入股总数
           /// $("#stockTotal").text(res[2].c[0]/10000)
           // $("#elementNum").text(res[1].c[0])
            $("#daybonus").text((res[4].c[0])/10000)
            $("#totalincome").text((res[4].c[0])/10000)
            $("#feer").text((res[2].c[0])/10000)
            $("#reward").text((res[3].c[0])/10000)
            $("#send").text((res[7].c[0]+res[8].c[0])/10000)


        }else{
            console.log(err)
        }
    })


    //合约调用

    //返回交易
    console.log("当前选中账户:",ethereum.selectedAddress);
    // web3.eth.getTransaction('0x5b5e8e6a6e8b4692a3d5f803f143afe06b91d602b1cfc85a7b0f382889020370',function (err,result) {
    //     if (err) {
    //         console.log("err:", err)
    //     } else {
    //         console.log("返回交易：", result);
    //         console.log("返回交易金额：", result.value);
    //
    //     }
    // });

    // var data={from:web3.eth.coinbase,to:'0x9e219557C4491707Acc7D908c2F4aB805Ae7E1D3',value:web3.toWei(100,'ether')}
    // web3.eth.sendTransaction(data, function(error, hash){
    //     if(error){
    //         console.log("交易错误",error)
    //     }else {
    //         console.log("hash:",hash);
    //
    //     }
    //
    // });
    // web3.eth.getTransaction('0x2841143875d69bdccf99d30d046600cf97aa9a1a27dc2e0555b3f84578017c3b',function (err,result) {
    //     if(err){
    //         console.log("err:",err)
    //     }else {
    //         console.log("返回交易：",result)
    //
    //     }
    //
    //     // console.log("money:",web3.utils.toHex(result.v))
    // });
    //确定投注
    $(".affirm_btn").click(function () {
        // $(".alertUsBox").show();
        // let amount=Number($(".specialNum").text());
        // let amount=0.01;
        //alert("投注:"+"邀请码："+inviteCode+"当前账户："+web3.eth.coinbase);
        //var code = "0x41b3d1ee30853beef7d14b372ea63b7756596c76";
        // var toAccount='0x41b3d1ee30853beef7d14b372ea63b7756596c76';
        $(".modal_hide").hide();
       // var message = {from: web3.eth.defaultAccount, to:toAccount, value: web3.toWei(amount, 'ether')};
        console.log($('.specialNum').text());   //   /100000000
        console.log($('.form-control_input').val());

        //转换
        var integer = $(".specialNum").text();
        var decimals = integer/10000;
        console.log(decimals);
        info.invest.sendTransaction(web3.eth.coinbase,web3.toWei(decimals,'ether'),inviteCode,$(".form-control_input").val(),{value:web3.toWei(decimals,'ether')},function (err,result) {
            console.log("调用合约");

            if(err){
                console.log(err);
            }else {

                console.log(result);
            }
        });
      //   web3.eth.sendTransaction(message, function(err, address) {
      //      if (!err)
      //         console.log(address); // "0x7f9fade1c0d57a7af66ab4ead7c2eb7b11a91385"
      // });
    });


    $(".bet-ok").click(function(){
        $(".modal_hide").show();
    });


    //提取
    $('#withdraw').click(function(){
        console.log($('#withdraw').val());
        info. userWithDraw.sendTransaction(web3.eth.coinbase,function (err,result) {
            console.log('111');
            if(err){
                console.log(err);
            }else {
                console.log(result);
            }
        });
    });






    //用户切换metamask账号
    ethereum.on('accountsChanged', function (accounts) {
        console.log("切换账户：",accounts[0])
        $("#addre").text(accounts[0])
    })
});





