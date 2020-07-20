<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup" :style="styleObject"> 
            <slot>
            </slot>
        </div>
        <div class="dots">
            <span class="dot" :class="{active:currentIndex===index}" v-for="(item, index) in dots" :key="index"></span>
        </div>
    </div>
</template>



<script>
import {fgInit} from 'api/fgslider'

export default {
    data(){
        return {
            styleObject:{
                  left:'0px',
                  transition:'none'
            },
            imgWidth:0,
            currentIndex:0,
            dots:[]
        }
    },
    mounted(){
        setTimeout(()=>{
            this._setSliderImgWidth(this.dots)
            fgInit({
                slider:this.$refs.sliderGroup,
                duration:800,
                loopDuration:3000,
            },(i)=>{
                console.log(i)
                this.currentIndex=i
            })
        },20)
        window.addEventListener('resize',()=>{
            this._setSliderImgWidth()
        })
    },
    methods: {
        _setSliderImgWidth(dots){
            let sliderGroup=this.$refs.sliderGroup
            let clientWidth=sliderGroup.parentNode.clientWidth
            let childs=sliderGroup.children
            let width=0
            for(let i=0;i<childs.length;i++){
                if(dots){
                    dots.push(1)
                }
                let c=childs[i]
                c.classList.add('slider-item')
                c.style.width=clientWidth+'px'
                width+=clientWidth
            }
            width+=clientWidth*2
            sliderGroup.style.width=width+'px'
        },
    }
}
</script>


<style lang="less" scoped>
@import "common/varible";

.slider{
    min-height: 1px;
    // overflow: hidden;
    position: relative;
    .slider-group{
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        text-align: center;
        .slider-item{
            float:left;
            box-sizing: border-box;
           
            &:nth-child(2n+1){
                background-color:#333;
            }
            &:nth-child(2n){
                background-color:#3333ee;
            }
            a{
                display: block;
                width: 100%;
                overflow: hidden;
                text-decoration: none;
                text-align: center;
            }
            img{
                width: 100%;
                height:auto;
                vertical-align: middle;
            }
        }
    }
    .dots{
        position: absolute;
        right:0;
        left:0;
        bottom:12px;
        text-align: center;
        font-size: 0;
        height: 10px;
        .dot{
            display: inline-block;
            margin: 0 4px;
            width:8px;
            height: 8px;
            border-radius: 50%;
            background-color: @colorTextL;
        }
        .active{
                width: 20px;
                border-radius: 5px;
                background-color: @colorTextLL;
        }
    }
}
</style>