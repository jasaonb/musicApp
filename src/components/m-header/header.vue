<template>
    <div class="m-header">
        <div class="icon"></div>
        <h1 class="text">Jackson Music</h1>
    </div>
</template>

<script>
export default {
    
}
</script>


<style lang="less" scoped>
@import "~common/varible";

*{
    margin:0;
    padding:0;
}

.image(@url){
    background-image: url(@url);
}

.m-header{
    background:linear-gradient(to bottom,#333,#666);
    position: relative;
    height:44px;
    text-align: center;
    font-size: 0;
    color:@colorTheme;
    .icon{
        display: inline-block;
        vertical-align: top;
        width:30px;
        line-height: 44px;
        height: 32px;
        margin-right: 9px;
        .image('logo@2x.png');
        background-size: 100% 100%;
    }
    .text{
        display: inline-block;
        vertical-align: top;
        line-height: 44px;
        font-size: @fontSizeLarge;
    }
}
</style>