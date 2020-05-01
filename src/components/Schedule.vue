<template>
  <div class="feeding-schedule">
      <h1>Feeding Chart</h1>

      <label id="week-label">
        <span data-button>Week</span>
        <input id="week" type="number" onchange="setActiveWeek(this);" value="1" min="1" max="12">
      </label>
      <button data-button onclick="switchUnits();">ml/tsp</button>
      <br>
      <button data-button onclick="switchMedium();">dwc/coco</button>
      <br>
      <button data-button="more-info" onclick="moreInfo()">More info &#9662;</button>
      <div id="more-info"></div>

      <div class="container">
        <table id="feeding">
          <caption><h2 class="section-title center"><span id="medium">DWC</span></h2></caption>
          <colgroup id="columns">
            <div v-for="(item, index) in cocoNutes[0].m.length" :key="index" span="1" class="week1">
              {{item}}
            </div>
          </colgroup>
          <thead id="tablehead">
            <tr>
              <th>Week</th>
              <th v-for="(nute, index) in cocoNutes" :key="index">
                {{nute.name}}
              </th>
            </tr>
          </thead>
          <tbody id="nutes">
            <!-- <tr>
              <td></td>
              <td v-for="(power, index) in crop.nutes.power" :key="index">
                <span v-html="percentSelect(power.p, power.name)"></span>
              </td>
              <td><strong>Strength</strong></td>
            </tr> -->
            <tr v-for="(week, index) in cocoNutes[0].m.length" :key="index">
              <td>{{weekName(week)}}</td>
              <td v-for="(nute, index) in cocoNutes" :key="index">
                {{nute.m[week-1]}}
                <span>{{crop.nutes?crop.nutes.units:'ml'}}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div><!-- .container -->
  </div>
</template>
<script>
export default {
  props: ['crop'],
  data() {
    return {
      cocoNutes: [
        {
          name: 'si',
          m: [0, 0.5, 1, 1, 1.5, 1.5, 1.5, 1.5, 1.5, 1, 0.5, 0, 0],
        },
        {
          name: 'calmag',
          m: [5, 5, 5, 5, 4, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 1.5, 0],
        },
        {
          name: 'micro',
          m: [1.25, 2.25, 2.25, 2.5, 2.25, 2.5, 2.5, 2.25, 2.25, 2.25, 2.25, 1, 0],
        },
        {
          name: 'gro',
          m: [0.6, 2.25, 2.5, 2.5, 2.25, 1, 1, 0.5, 0.5, 0, 0, 0, 0],
        },
        {
          name: 'bloom',
          m: [0.6, 0.6, 1, 1.2, 2.25, 2.5, 2.5, 3, 3, 4, 4, 4, 0],
        },
        {
          name: 'ppm',
          m: [200, 550, 600, 625, 575, 575, 575, 600, 600, 650, 650, 475, 0],
        },
      ],
    }
  },
  methods: {
    weekName(week){
      var new_week = week-1;
      if (new_week === 0) {
        return 'S'+new_week;
      } else if (new_week > 0 && new_week <= 3) {
        return 'V'+(new_week);
      } else {
        return 'F'+(new_week-3);
      }
    },
    /*percentSelect(p, nute) {
      var choices = [];
      var x = 0;
      for (x=0;x<=100;x++) {
        if (Number.isInteger(x / 5)) {
          choices.push(x);
        }
      }
      var select = "<select id="+nute+" name="+nute+" onchange=setPercent(this,'"+nute+"')>";
      var j = 0;
      for (j=0;j<choices.length;j++) {
        select += '<option value="'+choices[j]+'">'+choices[j]+'%</option>';
      }
      select += '</select>';
      return select;
    },*/
    /*setPercent(p, nute) {
      var nutes = this.crop.nutes;
      var power = p?p.value:100;
      var i = 0;
      for(i=0;i<nutes.length;i++){
        if (nutes[i].name === nute) {
          nutes[i].p = power;
        }
      }
    }*/
  }
}
</script>
<style scoped>
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: auto;
}
html {
  min-height: 100%;
  font-size: 1em;
  line-height: 1.4;
  font-weight: 400;
  font-family: 'Open Sans', 'Source Sans Pro', Roboto, 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', 'Myriad Pro', 'Segoe UI', Myriad, Helvetica, 'Lucida Grande', 'DejaVu Sans Condensed', 'Liberation Sans', 'Nimbus Sans L', Tahoma, Geneva, Arial, sans-serif;
  -webkit-text-size-adjust: 100%;
  background: rgb(95,195,228);
  color: #ffffff;
  /*background: linear-gradient(-45deg, rgba(229,93,135,.7), rgba(95,195,228,.7)),
    url(bg3.jpg) center center / cover no-repeat;*/
}
body {
  margin: 0;
  padding-bottom: 30px;
  position: relative;
  text-align: center;
  text-shadow: 0 1px 5px #000000;
}
h1 {
    display: block;
    margin: 20px auto 10px auto;
}
p.intro {
    display: block;
    width: 550px;
    max-width: 100%;
    margin: 0 auto 15px auto;
    padding: 0 15px;
}
h3 {
  position: relative;
  display: block;
  width: 200px;
  max-width: 100%;
  margin: auto;
  padding: 15px;
  background: #0073a4;
  color: #ffffff;
}
h3:before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #333333;
  position: absolute;
  top: calc(50% - 10px);
  left: 0;
}
a,
a:visited {
  color: #0073a4;
}
a:hover,
a:focus {
  color: #ffffff;
}
input[type="text"],
input[type="number"] {
  width: auto;
  padding: 5px;
  max-width: 100%;
  font-size: 16px;
  line-height: 18px;
  border: none;
}
input[type="text"]:focus,
input[type="number"]:focus {
  outline: none;
  box-shadow: inset 0 1px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,0.75);
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.75);
}
/*---------------------*
 *------ Buttons ------*
 *---------------------*/
[data-button],
[data-button]:visited {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  width: auto;
  margin: .5em auto;
  padding: .4em 1.5em .36em 1.5em;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  background: #0073a4;
  font-weight: 600;
  font-kerning: auto;
  text-decoration: none !important;
  text-align: center;
  font-size: 1.25em;
  line-height: 1;
  color: #ffffff !important;
  text-transform: none;
  border: none;
  border-top: 1px solid transparent;
    border-left: 1px solid transparent;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  border-radius: 0;
  text-shadow: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
    transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
}
[data-button]:hover,
[data-button]:focus {
  background: #0f5d7e;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  border-left: 1px solid rgba(0, 0, 0, 0.25);
}
[data-button]:active {
  background: #15485e;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.75);
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  border-left: 1px solid rgba(0, 0, 0, 0.5);
}
[data-button="local"] {
  display: inline-block;
  width: 56px;
  height: 28px;
  margin: 0 -5px 0 -56px;
  padding: 0;
  font-size: 12px;
  line-height: 20px;
  vertical-align: top;
}
[data-button="more-info"] {
  font-size: 16px;
  line-height: 20px;
}
#more-info {
  display: block;
  width: 650px;
  max-height: 0px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
}
#more-info.active {
  opacity: 1;
  max-height: 500px;
}
#more-info ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
h2.title {
  display: block;
  margin: 10px 0 0 0;
}
#week-label {
  margin-right: 20px;
}
#week-label [data-button] {
  margin: 0;
}
#week-label input {
  height: 36px;
  position: relative;
  top: 1px;
  font-size: 22px;
  text-align:center;
}
/*--- Table ---*/
.container {
  display: block;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px 30px 30px;
  overflow-x: scroll;
}
.container:after {
  content: "";
  display: block;
  clear: both;
}
table#feeding {
  width: 100%;
  border: 1px solid #204a69;
  border-collapse: collapse;
  overflow: hidden;
  background: rgba(255,255,255,0.75);
  color: #000000;
  text-shadow: 0 1px 5px #ffffff;
}
table#feeding .section-title {
  color: #ffffff;
  text-shadow: 0 1px 5px #000000;
}
table#feeding tr,
table#feeding td {
  position: relative;
  border: 1px solid #204a69;
  z-index: 2
}
table#feeding td {
  padding: 15px;
}
col.active {
  background: rgba(118,211,109,0.5);
}
#nutes > tr > td:first-of-type {
  text-align: left;
}
#nutes > tr > td > span {
  margin-left: 5px;
  font-size: 75%;
}
</style>