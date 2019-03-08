<template>
  <div>
    <div>This is kevin huang</div>
    <div>ages:{{$store.state.kevin.ages}}</div>
    <div>money:{{$store.state.kevin.money}}</div>
    <button @click="getKevinOlder">older</button>
    <button @click="getKevinYounger">younger</button>
    <button @click="earnMoney">earnMoney</button>
    <button @click="spendMoney">spendMoney</button>
    <div style="margin-top: 40px;">This is shirley huang</div>
    <div>ages:{{$store.state.shirley.ages}}</div>
    <div>appearance:{{$store.state.shirley.appearance}}</div>
    <button @click="getOlder">older</button>
    <button @click="getYounger">younger</button>
    <button @click="morePretty">morePretty</button>
    <button @click="fewPretty">fewPretty</button>
    <div  style="margin-top: 40px;">kevin and shirley ages</div>
    <div>ages:{{kevinAndShirleyAges}}</div>
    <div style="height: 10px; background: red"></div>
    <div style="margin-top: 30px"></div>
    <span>gasRate: {{gasRate}}</span><span style="margin-left: 50px">temperatureRate: {{temperatureRate}}</span>
    <div>gasAndTemperatureRate:  {{$store.getters.gasAndTemperatureRate}}</div>
    <button @click="gasRateUp">gasRateUp</button>
    <button @click="gasRateDown">gasRateDown</button>
    <div style="margin-top:  30px">gas:  {{oil}}</div>
    <div>speed:  {{speed}}</div>
    <div>temperature:  {{temperature}}</div>
    <button @click="moreOil(5)">加油门</button>
    <button @click="fewOil(4)">松油门</button>
    <div style="margin-top: 30px">authorName: {{authorName}}</div>
    <button @click="getAuthorName">get authorName</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'DisplayScreen',
  computed: {
    ...mapGetters(['kevinAndShirleyAges', 'gasRate', 'temperatureRate', 'gasAndTemperatureRate']),
    ...mapGetters(['oil', 'speed', 'temperature', 'authorName'])
  },
  methods: {
    ...mapActions('kevin', {getKevinOlder: 'getOlder', getKevinYounger: 'getYounger'}), // 使用命名空间，修改与其它Module冲突的action名称
    ...mapActions('kevin', ['earnMoney', 'spendMoney']),
    ...mapActions('shirley', ['getOlder', 'getYounger', 'morePretty', 'fewPretty']),
    ...mapActions(['moreOil', 'fewOil', 'gasRateUp', 'gasRateDown', 'getAuthorName'])
  }
}
</script>

<style scoped>

</style>
