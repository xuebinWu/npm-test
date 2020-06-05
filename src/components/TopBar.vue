<template>
  <div class="title-wrapper">
    <div class="title-txt">
      <slot></slot>
    </div>
    <label class="title-line"></label>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {},
  mounted() {}
}
</script>

<style scoped>
.title-wrapper {
  width: 100%;
  height: 36px;
}
.title-txt {
	position: absolute;
	z-index: 2;
	height: 36px;
	line-height: 36px;
	color: #000;
	font-size: 18px;
	padding: 0 3%;
	font-weight: 700;
}
.title-line {
	position: absolute;
	z-index: 1;
	width: 60%;
	height: 1px;
	left: 120px;
	margin: 0 3%;
	margin-top: 17px;
	background: #e0e0e0;
}
</style>
