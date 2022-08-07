<template>
  <div class="numberContainer">
    <div class="number">
      <ul>
        <li>12434</li>
        <li>10983</li>
      </ul>
    </div>
    <div class="text">
      <ul>
        <li>前端需求人数</li>
        <li>市场供应人数</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.numberContainer{
  background-color: rgba(101, 132, 226, 0.1);
  padding: 0.1875rem;
}

.number{
  position: relative;
  border: 1px solid rgba(25, 186, 139, 0.17);
  ul{
    display: flex;
    justify-content: space-evenly;
    li {
    position: relative;
    flex: 1;
    font-size: 0.875rem;
    color: #ffeb7b;
    font-family: electronicFont;
    text-align: center;
    }
    li:first-child::after{
      position: absolute;
      content: ' ';
      top:25%;
      right: 0;
      height: 50%;
      width: 1px;
      background-color: rgba(225, 225, 225, .2);
    }
  }
  &::before{
    position: absolute;
    left: 0;
    top: 0;
    content: ' ';
    width: 30px;
    height: 10px;
    border-top: 2px solid #02a6b5;
    border-left: 2px solid #02a6b5;
  }
  &::after{
    position: absolute;
    right: 0;
    bottom: 0;
    content: ' ';
    width: 30px;
    height: 10px;
    border-bottom: 2px solid #02a6b5;
    border-right: 2px solid #02a6b5;
  }

}

.text{

  ul{
    display: flex;
    justify-content: space-evenly;
    li{
      flex: 1;
      font-size: .225rem;
      color: rgba(225, 225, 225, .6);
      text-align: center;
      padding-top: .1875rem;
    }
  }
}

</style>
