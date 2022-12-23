<template>
<br>
<br>
  <div class="photography">
    <span class="container" v-for="image in images" :key="image.id">
      <figure class="figurefx pushup"> 
        <img :src="image.imgSrc" class="image">
        <figcaption>{{image.description}}</figcaption>
      </figure>
    </span> 
  </div>
</template>

<script>
// Figure Caption Hover: https://codepen.io/jhermansen/pen/YqEReZ
export default {
  name: 'PhotoGraphy',
  data() {
    return {
        images: [{
                id: 1,
                imgSrc: require("@/assets/photos/1.jpg"),
                description: "Zion National Park, Utah"
            },
            {
                id: 2,
                imgSrc: require("@/assets/photos/2.jpg"),
                description: "Great Smoky Mountains National Park"
            },
            {
                id: 3,
                imgSrc: require("@/assets/photos/3.jpg"),
                description: "śarasvati vīṇa"
            },
            {
                id: 4,
                imgSrc: require("@/assets/photos/4.jpg"),
                description: "Lake Tahoe"
            },
            {
                id: 5,
                imgSrc: require("@/assets/photos/5.jpg"),
                description: "Chantilly, VA"
            },
            {
                id: 6,
                imgSrc: require("@/assets/photos/6.jpg"),
                description: "Heraklion, Greece"
            }      
        ]
    };
  }
}
</script>

<style scoped>
.image{
  width: 500px;
  height: auto;
}

figure.figurefx {
  width: 600px;
  margin: 30px auto;
	padding: 0;
	display: block;
	position: relative;
	overflow: hidden; /* hide overflowing elements by default */
}

figure.figurefx figcaption {
	position: absolute;
	display: block;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
	text-align: center;
	padding: 15px;
	z-index: 100;
	width: 100%;
	max-height: 100%;
	overflow: hidden;
	top: 50%;
	left: 0;
	-moz-transform: translate3d(-100%, -50%, 0); /* position caption outside layout horizontally and centered vertically */
	-webkit-transform: translate3d(-100%, -50%, 0);
	transform: translate3d(-100%, -50%, 0);
	opacity: 0;
	-moz-transition: all 0.5s;
	-webkit-transition: all 0.5s;
	transition: all 0.5s;
}

figure.figurefx figcaption a {
	text-decoration: none;
}

/*** Push Up effect ****/
figure.pushup img {
	-moz-transform: translate3d(0, 0, 0);
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
	-moz-transition: all 0.5s;
	-webkit-transition: all 0.5s;
	transition: all 0.5s;
}

figure.pushup figcaption {
	top: 100%;
	opacity: 1;
	-moz-transform: translate3d(0, 0, 0);
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
}


figure.pushup:hover img {
	-moz-transform: translate3d(0, -40px, 0); /* move image up vertically a bit for parallax effect */
	-webkit-transform: translate3d(0, -40px, 0);
	transform: translate3d(0, -40px, 0);
  opacity: .5;
 
}

figure.pushup:hover figcaption{
	-moz-transform: translate3d(0, -100%, 0); /* move caption up vertically to fully reveal caption */
	-webkit-transform: translate3d(0, -100%, 0);
	transform: translate3d(0, -100%, 0);
	-moz-transition: all 0.5s;
	-webkit-transition: all 0.5s;
	transition: all 0.5s;
  //box-shadow: 0px -2px 28px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
</style>


