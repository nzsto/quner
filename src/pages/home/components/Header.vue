<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            城市
            <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
    display:flex
    height:$headerHeight
    background:$bgColor
    color:#fff
    line-height:$headerHeight
    .header-left
        width: .64rem
        .back-icon
            text-align:center;
            font-size: .4rem
            display:block
    .header-input
        flex: 1
        background:#fff
        border-radius: .1rem
        margin-top:.12rem
        height:.64rem
        line-height:.64rem
        margin-left:.2rem
        padding-left:.2rem
        color:#ccc
    .header-right
        width: 1.24rem
        text-align:center
        .arrow-icon
            font-size: .2rem
</style>
