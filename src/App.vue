<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <nav class="navbar navbar-dark bg-dark">
      <h3 class="m-2" :class="[alive? 'service_alive': 'service_dead']">Auto Check</h3>
      <div class="nav justify-content-center">
        <img class="nav-item icons m-2" src="@/assets/mail_icon.svg">
        <a class="m-2" style="color:white; cursor:text">parthjshah95@gmail.com</a>
        <div style="height:40px;width:0.5px;" class="bg-light"></div>
        <a class="m-2" style="color:white; cursor:text">nmabhi42@gmail.com</a>
        <img class="nav-item icons m-2" src="@/assets/phone_icon.svg">
        <a class="m-2" style="color:white">+1 (352)327-1943</a>
      </div>
    </nav>
    <loading :active.sync="isLoading" 
    :can-cancel="false" 
    :is-full-page="fullPage"></loading>
    <div class="m-5 ml-10 mr-10">
      <h5>Automatic assessment of answer papers</h5>
      Auto-check can automatically evaluate a student's answer paper using <br> machine learning, handwriting recognition and a dynamic knowledge base. 
    </div>
    <div class="card m-4 flex-row flex-wrap">
      <div class="card-header w-100">
        <h4 class="m-0">Try it out!</h4>
      </div>
      <div class="card-block flex-col card-img col-sm-10 col-md-8 col-lg-6 p-0">
        <img :src="demo.image_file" class="card-img" alt="image not found">
        <button class="m-3 btn btn-primary" v-on:click="test(demo)">Submit image as answer</button>
      </div>

      <div class="card-block p-3 flex-col flex-fill col-md-4 col-lg-6">
        Submit the image on the left to see whether the answer is correct.
        <hr>
        <h5>Expected answer:</h5>
        <blockquote>{{demo.template.answer}}</blockquote>
        <hr/>
        <result v-if="demo.result" :result="demo.result"/>
      </div>
    </div>
    <div class="card m-4 flex-row flex-wrap">
      <div class="card-header w-100">
        <h4 class="m-0">Upload your own answer</h4>
      </div>
      <div class="card-block flex-col card-img col-sm-10 col-md-8 col-lg-6 p-0 border-right">
        <vue-base64-file-upload
          @load="on_image_upload"
          @file="on_image_select"
          placeholder="Choose file to upload"
          input-class="w-auto m-3 border shadow-sm"
          image-class="card-img"/>
        <button class="btn btn-primary w-auto m-2" v-on:click="test(uploaded)">Submit</button>
      </div>
      <div class="card-block p-3 flex-col flex-fill col-md-4 col-lg-6">
        Write the same answer as above on a piece <br/>of paper (including some mistakes if you want to test) <br/>and submit a photograph.
        <hr/>
        <result v-if="uploaded.result" :result="uploaded.result"/>
      </div>
    </div>
    <div class="card m-4 flex-row flex-wrap">
      <div class="card-header w-100">
        <h4 class="m-0">Math</h4>
      </div>
      <div class="card-block flex-col card-img col-sm-10 col-md-8 col-lg-6 p-0">
        <img :src="math.image_file" class="card-img" alt="image not found">
        <button class="m-3 btn btn-primary" v-on:click="test(math)">Submit image</button>
      </div>

      <div class="card-block p-3 flex-col flex-fill col-md-4 col-lg-6">
        We have added support for recognizing math symbols too.
        <hr/>    
        <div v-if="math.result">
          <h5>detections:</h5>
          <blockquote>{{math.result.detected_words}}</blockquote>
        </div>
      </div>

      <h5 class="card-divider-horizontal" >OR</h5>
      <div class="card-block flex-col card-img col-sm-10 col-md-8 col-lg-6 p-0 border-right">
        <vue-base64-file-upload
          @load="on_image_upload_math"
          @file="on_image_select_math"
          placeholder="Choose file to upload"
          input-class="w-auto m-3 border shadow-sm"
          image-class="card-img"/>
        <button class="btn btn-primary w-auto m-2" v-on:click="test(math_upload)">Submit</button>
      </div>
      <div class="card-block p-3 flex-col flex-fill col-md-4 col-lg-6">
        <hr/>    
        <div v-if="math_upload.result">
          <h5>detections:</h5>
          <blockquote>{{math_upload.result.detected_words}}</blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import demo_image from "@/assets/1_cropped.jpg";
import math_image from "@/assets/Maths_cropped.jpg";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueBase64FileUpload from 'vue-base64-file-upload';
import Result from './components/Result';

export default {
  name: "app",
  components: {
    Loading, VueBase64FileUpload, Result
  },
  created(){
    this.convert_images_to_b64()
    this.heartbeat()
  },
  data(){
    var template = {
      "question": "demo",
      "answer": "History is a coherent account of the significant past events in the progress of human culture."
    }
    var math_template = {
      question: "math",
      answer: "\\frac { \\sqrt { x ^ { 2 } + 4 ^ { 2 } } } { z ^ { 2 } } + \\sqrt { a ^ { 2 } + b ^ { 2 } }"
    }
    return {
      alive:false,
      demo: {
        image_file: demo_image,
        image: null,
        result: null,
        template: template
      },
      uploaded: {
        image_file: null,
        image: null,
        result: null,
        template: template
      },
      math: {
        image_file: math_image,
        image: null,
        result: null,
        template: math_template,
        category: "math"
      },
      math_upload: {
        image_file: null,
        image: null,
        result: null,
        template: math_template,
        category: "math"
      },
      isLoading: false,
      fullPage: true,
      endpoints: {
        heartbeat: "/heartbeat",
        assessImage: "/assessImage",
        addTemplate:"/addTemplate"
      }
    }
  },
  methods:{
    url(endpoint){
      return process.env.VUE_APP_SERVICE_URL + this.endpoints[endpoint]
    },
    convert_images_to_b64(){
      this.$image2base64(demo_image)
      .then(
          (response) => {
            this.demo.image = response
          }
      )
      this.$image2base64(math_image)
      .then(
        (response) => {
          this.math.image = response
        }
      )
    },
    heartbeat(){
      this.$http.get(this.url("heartbeat")).then(
        function success(response){this.alive = true},
        function failure(response){this.alive = false}
      )
    },
    addTemplate(template){
      function success(response){
      }
      function failure(response){
        console.log(response)
      }
      
    },
    test(testGroup){
      function error(e){
        console.error(e)
        this.isLoading = false
        alert('sorry, something went wrong')
      }
      if (!this.alive){
        alert("Sorry, the service is not available currently.\nKindly try again after some time.\nIf the problem persists, please contact the creators.")
      } else {
        console.log("Hi Tirth");
        this.isLoading = true
        this.$http.post(this.url("addTemplate" ), testGroup.template).then(function sendImage(){
          var body = {
            "question": testGroup.template.question,
            "image": testGroup.image,
            "category": testGroup.category? testGroup.category: "general"
          }
          this.$http.post(this.url("assessImage"), body).then(
            function success(response){
              console.log(response)
              this.isLoading = false
              testGroup.result = response.body
            },
            error
          )
        }, error)
      }
      
      
      
    },
    // test(testGroup){
      // this.addTemplate(testGroup.template)
      // this.testImage(testGroup.image, testGroup.template.question, testGroup.result)
    // },
    on_image_upload(image_uri){
      var image_b64 = image_uri.split(",")[1]
      this.uploaded.image = image_b64
    },
    on_image_select(file){
      this.uploaded.image_file = file
    },
    on_image_upload_math(image_uri){
      var image_b64 = image_uri.split(",")[1]
      this.math_upload.image = image_b64
    },
    on_image_select_math(file){
      this.math_upload.image_file = file
    }
  }
}
</script>


<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.service_alive {
  color: lightblue;
}
.service_dead{
  color: lightgray;
}
.img-input{
  box-shadow: 0px 2px 1px 20px #ccc;
}
.icons{
  height: 20px;
}
$div-border: 0.25px solid lightgray;
.card-divider-horizontal{
  padding: 5px;
  margin:0px;
  width:100%; 
  text-align: centre; 
  border-top: $div-border;
  border-bottom: $div-border;
}
</style>
