<template>
    <div id="app">
        <div id="nav">
            <Header
                :numCOrrect="numCorrect"
                :numTotal="numTotal"
            />

            <b-container class="bv-example-row">
                <b-row>
                    <b-col sm="6" offset="3">
                        <QBox
                                v-if="questions.length"
                            :currentQuestion="questions[index]"
                            :next="next"
                                :increment="increment"
                        />
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import Header from '../Quiz/Header.vue'
    import QBox from '../Quiz/QBox.vue'

    export default {
        name: 'app',
        components: {
            Header,
            QBox
        },
        data() {
          return {
              questions: [],
              index: 0,
              numCorrect: 0,
              numTotal: 0
          }
        },
        methods:{
          next() {
              this.index++
          },
            increment(isCorrect){
              if (isCorrect){
                  this.numCorrect++
              }
              this.numTotal++
            }
        },
        mounted: function() {
            fetch('https://opentdb.com/api.php?amount=10&category=20&type=multiple', {
                method: 'get'
            })
                .then((response) => {
                    return response.json()
                })
                .then((jsonData) =>{
                    this.questions = jsonData.results
                })
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
