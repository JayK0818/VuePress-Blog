<template>
  <div class='container'>
    <div class="title">Simple Float example</div>
    <img src="../images/iu.jpeg" alt="">
    <div class="text">
    李知恩（IU），1993年5月16日出生于韩国首尔特别市，韩国流行乐女歌手、影视演员、节目主持人。
2008年9月，在音乐节目《M! Countdown》中演唱歌曲《迷儿》，由此正式出道；随后，发行首张迷你专辑《Lost And Found》。2009年4月，发行首张正规专辑《Growing Up》 [1]  ；11月，发行迷你专辑《IU...Im》 [2]  。2010年末，她的迷你专辑《Real》主打歌《好日子》连续五周位居韩国Gaon榜榜首 [3-7]  。2011年1月，出演校园剧《dream high》；随后，成为音乐节目《人气歌谣》的固定主持人；11月，发行第二张正规专辑《Last Fantasy》，专辑中歌曲总下载量超过1700万次 [8]  。
2012年3月，发行首张日文单曲《Good Day》并位列周榜第六名。2013年10月，发行第三张正规专辑《Modern Times》；之后，她还凭借周末剧《最佳李顺心》获得了KBS演技大赏新人女演员奖 [15]  。2014年5月，发行翻唱专辑《花书签》，并获得Mnet亚洲音乐大奖最佳女歌手奖。2015年3月，主演职场剧《制作人》；10月，发行第四张迷你专辑《CHAT-SHIRE》，同时还被“Billboard”认可为韩国流行音乐百强榜领跑者 [10-13]  。2016年8月，主演古装剧《步步惊心：丽》 [16]  。2017年4月，发行第四张正规专辑《Palette》 [14]  ；后获得Mnet亚洲音乐大奖最佳女歌手奖 [17]  。2018年1月，获得韩国金唱片奖音源部门大奖 [18]  。
2019年7月，主演奇幻爱情剧《德鲁纳酒店》 [20]  。2021年1月，发行第五张正规专辑《lilac》
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'float-text'
})
</script>
<style lang="scss" scoped>
.container{
  height: 300px;
  border: 1px solid #d9d9d9;
  padding: 5px 10px;
  overflow: auto;
  .title{
    font-weight: bold;
    padding: 8px 0 8px 10px;
    color: #000;
  }
  img{
    margin-right: 10px;
    width: 240px;
    float: left;
  }
  .text{
    margin: 0;
  }
}
</style>
