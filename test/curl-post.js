const {curl} = require("../http/axios");
const x =async () => {
    try {
        //逻辑代码
      let res =  await   curl({"token":null,"url":"http://127.0.0.1:9865/pushData","method":"post","data":{"mid":"2","address":"TFVY3fB3ugweT7kkdcLrzMmbVwLrR1XMCp","from":"TDKx8FiLzgs7ACx2iKH15rhjvrRdVASpuX","to":"TFVY3fB3ugweT7kkdcLrzMmbVwLrR1XMCp","amount":52.49,"transfer_time":1697001373,"txID":"920a6b1858f99dca30966ff7c8bdf0a6cf146984091cc8a178137241f56ddd4e","coin":"USDT","status":true,"chain":"tron","coin_type":"trc20","trnsfer_type":0}})
    console.log(res)
    } catch (e) {

        console.log(
            e.message
        )
        return false;
    }
}
x()