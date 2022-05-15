<template>
  <button class='button primary-button small' @click.stop='cancel_request_1'>取消请求</button>
  <button class='button primary-button small' @click.stop='cancel_request_2'>取消请求</button>
  <button class='button primary-button small' @click.stop='get_player_list'>正常请求</button>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

let cancel;

export default defineComponent({
  name:'AxiosCancel',
  setup() {
    function get_player_list_1() {
      axios({
        url:'/api/player.json',
        method:'get',
        cancelToken:source.token
      }).then(res => {
        if(res.status === 200){
          console.log(res.data)
        }
      })
    }

    function get_player_list_2() {
      axios({
        url:'/api/player.json',
        method:'get',
        cancelToken: new CancelToken(function executor(c){
          cancel = c
        })
      })
    }

    function cancel_request_1() {
      get_player_list_1()
      setTimeout(() => {
        source.cancel('请求被取消了')
      },0)
    }

    function cancel_request_2(){
      get_player_list_2()
      setTimeout(() => {
        cancel('请求被取消了')
      },0)
    }

    function get_player_list() {
      axios({
        url:'/api/player.json',
        method:'get',
      }).then(res => {
        console.log(res.data)
      })
    }

    return {
      cancel_request_1,
      cancel_request_2,
      get_player_list
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
