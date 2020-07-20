<template>
<div class="recommond">
    <div class="slider-wrap" ref="sliderWrap">
    <slider v-if="recommonds.length">
        <div :key="index" v-for="(item,index) in recommonds" class="slider-item">
            <a href="javascript:;">
                <img :src="item.image"/>
            </a>
        </div>
    </slider>
    </div>
</div>
    
</template>




<script>
import {getRecommond} from 'api/recommond'
import {ERR_OK} from 'api/config'
import Slider from 'base/slider'

export default {
    data(){
        return {
            recommonds:[]
        }       
    },
    components:
    {
        Slider
    },
    created(){
        this._getCommond()
    },
    mounted(){
        setTimeout(()=>{
            this._setWrapHeight()
        },20)

        window.addEventListener('resize',()=>{
            this._setWrapHeight()
        })
    },
    methods:{
        _getCommond(){
            getRecommond().then((res)=>{
                if(res.ret){
                    this.recommonds=res.songInfo
                }
                
                console.log(res)
            })
        },
        _setWrapHeight(){
            let sw=this.$refs.sliderWrap
            sw.style.height=sw.clientWidth*0.5+'px'
        }
    }
}
</script>

<style lang="less" scoped>

.slider-wrap
{
    position: relative;
    width: 100%;
    overflow: hidden;
}
</style>