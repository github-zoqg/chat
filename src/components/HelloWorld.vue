<template>
  <div class="hello">
    <el-button @click="send">send message</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      ws: null
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      console.log('%c初始化','color:blue')
        if ("WebSocket" in window)
        {
            console.log("您的浏览器支持 WebSocket!");

            // 打开一个 web socket
            const ws = new WebSocket("ws://localhost:8088");
            this.ws = ws

            ws.onopen = function()
            {
              // Web Socket 已连接上，使用 send() 方法发送数据
              ws.send(JSON.stringify({type: 'server', content:{ name: 'text',context:'测试数据'}}));
              console.log("数据发送中...");
            };

            ws.onmessage = function (evt){
              const received_msg = JSON.parse(evt.data);
              console.log("数据已接收...",evt);
              if(received_msg){
                console.log(received_msg)
              }
            };

            ws.onclose = function()
            {
              // 关闭 websocket
              alert("连接已关闭...");
            };
        }

        else
        {
            // 浏览器不支持 WebSocket
            alert("您的浏览器不支持 WebSocket!");
        }
    },
    send(){
      console.log(this.ws)
        this.ws.send(JSON.stringify({type: 'server', content:{ name: 'text',context:'测试数据'}}));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
