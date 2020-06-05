<template>
  <div class="zl-title-wrap">
    <!-- 左侧的盒子 -->
    <div class="title_left">
      <div class="title_left_top">
        <span />
        <slot name="title">
          <span>{{ title }}</span>
        </slot>
        <span v-if="isDetail && detailInfor.stadus">{{ detailInfor.stadus }}</span>
        <div class="title-child" style="display: inline-block; margin-left: 10px;">
          <slot name="left"></slot>
        </div>
      </div>
      <div v-if="isDetail" class="title_left_bottom">
        <slot name="desc" ></slot>
      </div>
    </div>
    <!-- 右侧的盒子里面是槽口，自己配置需要的按钮或元素 -->
    <div class="title_right">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    props: {
      // 当页的标签
      title: {
        type: String,
        default: ''
      },
      // 是否是详情页面
      isDetail: {
        type: Boolean,
        default: false
      },
      // 详情页面需要传的数据
      detailInfor: {
        type: Object,
        default() {
          return {
            stadus: '',
            name: '创建人',
            time: '创建时间',
            creatName: '',
            creatTime: '',
            assetModel: '',
            assetModelTitle: '适用型号'
          }
        }
      }
    },
    computed: {
      assetModel() {
        const list = this.detailInfor.assetModel.split(',')
        if (list.length > 2) {
          return list.slice(0, 2).join(',') + '...'
        }
        return this.detailInfor.assetModel
      }
    }
  }
</script>

<style scoped>
.zl-title-wrap{
  width: 100%;
  min-height: 50px;
  box-sizing: border-box;
  padding: 10px;
	display: flex;
	text-align: left;
}
.title_left .title_left_top{
	margin: 0;
	font-size: 16px;
	color: #333;
}
.title_left_top span:nth-child(1){
	display: inline-block;
	width: 6px;
	height: 14px;
	background-color: #96b327;
	border-radius: 3px;
	margin-right: 10px;
	position: relative;
	top: 1px;
}
.title_left_top span:nth-child(3){
	display: inline-block;
	font-size: 12px;
	color: #96b327;
	border: 1px solid #96b327;
	border-radius: 3px;
	margin-left: 10px;
	padding: 3px 5px;
}
.title_left_bottom{
	margin: 0;
	font-size: 12px;
	color: #999;
	position: relative;
	top: 7px;
	padding-left: 15px;
}
.title_right{
	text-align: right;
}
</style>
