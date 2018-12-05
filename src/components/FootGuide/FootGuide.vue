<template>
  <div>
    <footer class="footer_guide">
      <span class="guide_item">
        <span class="item_icon">
          <i class="iconfont icon-yemian-copy-copy"></i>
        </span>
        <span>首页</span>
      </span>
      <span class="guide_item">
        <span class="item_icon">
          <i class="iconfont icon-shiwu"></i>
        </span>
        <span>分类</span>
      </span>
      <span class="guide_item">
        <span class="item_icon">
          <i class="iconfont icon-renwu"></i>
        </span>
        <span>食物</span>
      </span>
      <span class="guide_item">
        <span class="item_icon">
          <i class="iconfont icon-gouwuche"></i>
        </span>
        <span>购物车</span>
      </span>
      <span class="guide_item">
        <span class="item_icon">
          <i class="iconfont icon-leimupinleifenleileibie"></i>
        </span>
        <span>个人</span>
      </span>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "FootGuide",
  }
</script>

<style scoped lang="stylus">
  .footer_guide //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
