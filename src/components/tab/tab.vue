<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/recommend">
            <span class="tab-link">推荐</span>
        </router-link> 
        <router-link tag="div" class="tab-item" to="/recommend1">
            <span class="tab-link">歌手</span>
        </router-link> 
        <router-link tag="div" class="tab-item" to="/recommend2">
            <span class="tab-link">排行</span>
        </router-link> 
        <router-link tag="div" class="tab-item" to="/recommend3">
            <span class="tab-link">搜索</span>
        </router-link> 
    </div>
</template>



<script>
export default {
    
}
</script>



<style lang="less" scoped>
@import "~common/varible";

.tab{
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: @fontSizeMedium;
    .tab-item{
        flex:1;
        text-align: center;
        .tab-link{
            padding-bottom: 5px;
            color:@colorThemeD;
        }
        &.router-link-active{
            .tab-link{
                color:@colorTheme;
                border-bottom: 2px solid @colorTheme;
            }
        }
    }
}
</style>