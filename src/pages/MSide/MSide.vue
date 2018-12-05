<template>
  <div>
    <header class="header">
      <div class="wrap">
        <a href="javascript:;" class="logo"></a>
        <div class="search">
          <img class="icon" src="./images/search_1.png" alt="">
          <span class="input_text">搜索商品,共11987件好物</span>
        </div>
        <a href="javascript:;" class="login">
          <span class="middle">登录</span>
        </a>
      </div>
      <div class="BScroll">
        <div class="scroll_content">
          <div class="content_item">
            <span class="item">推荐</span>
          </div>
          <div class="content_item">
            <span class="item">居家</span>
          </div>
          <div class="content_item content_item3">
            <span class="item">鞋包配饰</span>
          </div>
          <div class="content_item">
            <span class="item">服装</span>
          </div>
          <div class="content_item">
            <span class="item">电器</span>
          </div>
          <div class="content_item">
            <span class="item">洗护</span>
          </div>
          <div class="content_item">
            <span class="item">饮食</span>
          </div>
          <div class="content_item">
            <span class="item">餐厨</span>
          </div>
          <div class="content_item">
            <span class="item">婴童</span>
          </div>
          <div class="content_item">
            <span class="item">文体</span>
          </div>
          <div class="content_item">
            <span class="item">特色区</span>
          </div>
          <div class="draw_slip"></div>
        </div>
      </div>
    </header>
    <div class="content clearfix">
      <SlideShow></SlideShow>
      <div class="category_wrap clearfix">
        <div class="img_text">
          <div class="img_wrap">
            <img class="img" src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
          </div>
          <div class="text">居家</div>
        </div>
        <div class="img_text">
          <div class="img_wrap">
            <img class="img" src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
          </div>
          <div class="text">鞋包配饰</div>
        </div>
        <div class="img_text">
          <div class="img_wrap">
            <img class="img" src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
          </div>
          <div class="text">居家</div>
        </div>
        <div class="img_text">
          <div class="img_wrap">
            <img class="img" src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
          </div>
          <div class="text">居家</div>
        </div>
        <div class="img_text">
          <div class="img_wrap">
            <img class="img" src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
          </div>
          <div class="text">居家</div>
        </div>
        <div class="img_text">
          <div class="img_wrap">
            <img class="img" src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
          </div>
          <div class="text">居家</div>
        </div>
        <div class="img_text">
          <div class="img_wrap">
            <img class="img" src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
          </div>
          <div class="text">居家</div>
        </div>
        <div class="img_text">
          <div class="img_wrap">
            <img class="img" src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
          </div>
          <div class="text">居家</div>
        </div>
        <div class="img_text">
          <div class="img_wrap">
            <img class="img" src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
          </div>
          <div class="text">居家</div>
        </div>
        <div class="img_text">
          <div class="img_wrap">
            <img class="img" src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
          </div>
          <div class="text">超会秒杀</div>
        </div>
      </div>
<!--==============================================-->
      <div class="m-freshmanModule">
        <div class="moduleTitle">
          <span class="txt">新人专享礼</span>
        </div>

        <div class="content">
          <a href="javascript:" class="left">
            <div class="name">新人专享礼包</div>
            <div class="imgWrap">
              <div class="m-lazyload">
                <img class="img" src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png" alt="">
              </div>
            </div>
            <div class="animate"></div>
          </a>

          <div class="right">
            <div class="module1">
              <a href="javascript:" class="m-activityItem">
                <div class="picWrap">
                  <div class="pic">
                    <img class="img" src="https://yanxuan.nosdn.127.net/13ae17d083a2328d4a0016ebe232a57b.png" alt="">
                  </div>
                  <div class="discount">
                    <div class="line1">¥42</div>
                    <div class="line2">¥58</div>
                  </div>
                </div>

                <!--=======================-->
                <div class="cnt">
                  <div class="title">福利社</div>
                  <div class="subTitle">今日特价</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SlideShow from '../../components/SlideShow/SlideShow.vue'
  export default {
    name: "MSide",
    components: {
      SlideShow
    }
  }
</script>

<style scoped lang="stylus">
  .header
    background-color #fff;
    border-bottom 1px solid #d9d9d9
    .wrap
      width 6.9rem
      height 0.56rem
      padding 0.16rem 0.3rem
      &.clearfix::after
        content ""
        display block
        clear both
      .logo
        float left
        width 1.38rem
        height .4rem
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
        display inline-block
        margin-right .2rem
        background-size cover
        position relative
        top .08rem
      .search
        float left
        display flex
        flex-flow row nowrap
        align-items center
        justify-content center
        width 4.42rem
        height 0.56rem
        color #666
        line-height .4rem
        font-size .37333rem
        background-color #ededed
        border-radius .10667rem
        .icon
          width 0.28rem
          height 0.28rem
          margin-right 0.1rem
        .input_text
          display inline-block
          width 3.45rem
          height 0.41rem
          font-size 0.28rem
      .login
        float left
        width 0.72rem
        height 0.38rem
        border 0.01rem solid #b4282d
        color #b4282d
        border-radius 0.05rem
        font-size 0.24rem
        display inline-block
        position relative
        top 0.08rem
        margin-left 0.16rem
        .middle
          display inline-block
          line-height 0.38rem
          position relative
          left 0.12rem
          text-align center
    .BScroll
      width 7.5rem
      height 0.6rem
      .scroll_content
        width 13.1231rem
        height 0.6rem
        line-height 0.6rem
        font-size 0.37rem
        padding 0 0.3rem
        .content_item
          float left
          width 0.8803rem
          height 0.6rem
          line-height 0.6rem
          margin-left 0.2rem
          color #333
          opacity 0.8
          font-size 0.28rem
        .content_item3
          float left
          width 1.5rem
          height 0.6rem
  .content
    width 100%
    .category_wrap
      width 7.5rem
      height 3.41rem
      background #FFEDDB
      margin-bottom 0.32rem
      &.clearfix::after
        content ""
        display block
        clear both
      .img_text
        width 1.1rem
        height 1.56rem
        float left
        margin 0.1rem 0.2rem
        text-align center
        .img_wrap
          width 1.1rem
          height 1.1rem
          .img
            width 1.1rem
            height 1.1rem
        .text
          font-size 0.24rem
          margin-top 0.1rem
          line-height 0.36rem
          color #333333

    .m-freshmanModule
      width 7.5rem
      height 5.28rem
      margin 0.2rem 0
      padding-bottom 0.3rem
      background #FFFFFF
      .moduleTitle
        width 6.9rem
        height 0.9rem
        font-size 0.32rem
        color #333
        text-align center
        padding 0 0.3rem
        .txt
          line-height 0.9rem
      .content
        width 7.2rem
        height 4.38rem
        padding-left 0.3rem
        &.clearfix::after
          content ''
          display block
          clear both
        .left
          float left
          position relative
          display inline-block
          width 3.43rem
          height 4.34rem
          background #F9E9CF
          margin-right 0.04rem
          .name
            width 3.43rem
            height 0.78rem
            color #333
            padding 0.3rem 0 0 0.3rem
            box-sizing border-box
          .imgWrap
            width 3.43rem
            height 3.29rem
            .m-lazyload
              width 2.28rem
              height 2.29rem
              margin 0.5rem 0.57rem
              .img
                display inline-block
                width 2.28rem
                height 2.29rem
          .animate
            display block
            width .9rem
            height .4rem
            background url("//yanxuan.nosdn.127.net/3f7e731c6650bc1770589c78bd5a18b7.png") no-repeat
            background-size  0.3rem
            position absolute
            bottom .76rem
            right 0.45rem
            z-index 100
        .right
          float left
          width 3.43rem
          height 4.34rem
          box-sizing border-box
          .module1
            width 3.43rem
            height 2.15rem
            margin-bottom 0.04rem
            padding 0.2rem 0 0 0.3rem
            box-sizing border-box
            background #FBE2D3
            .m-activityItem
              zoom 1
              .picWrap
                position relative
                .pic
                  position relative
                  .img
                    width 2rem
                    height 2rem
                    position absolute
                    right 0
                    top 0


                .discount
                  width 0.8rem
                  height 0.8rem
                  line-height 0.8rem
                  color white
                  border-radius 50%
                  background-color darkorange
                  opacity 0.6
                  position absolute
                  right 0.3rem
                  .line1
                    width 0.8rem
                    height 0.36rem
                    font-size 0.28rem
                    text-align center
                  .line2
                    width 0.8rem
                    height 0.29rem
                    text-align center
                    font-size 0.22rem
                    text-decoration line-through

              .cnt
                zoom 1
                .title
                  width 3.43rem
                  height .48rem
                  line-height .48rem
                .subTitle
                  color #7F7F7F
                  font-size .24rem
</style>
