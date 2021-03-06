$oneline-height: 180px;

@import url(https://fonts.googleapis.com/css?family=Francois+One);

BODY {
  background: #000;
  }

.l--wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 485px;
  height: $oneline-height*3;
}

svg {
  width: 485px;
  height: $oneline-height*3;
/*   border: 1px solid red; */
  }

text {
  stroke-width: 10;
  stroke-opacity: .5;
  font-family: 'Francois One', sans-serif;
  font-size: 12em;
  }
.t--water {
  fill: url(#pt--water);
  stroke: darken(dodgerblue, 30%);
}

.t--fire {
  fill: url(#pt--fire);
  stroke: darken(red, 35%);
}

.t--and {
  fill: none;
  stroke-width: 5;
  stroke: darken(lightslategrey, 27%);
  font-size: 7em;
}

rect {
  fill: url(#pt--fire);
  stroke: darken(red, 35%);
}
$(function () {
  let count = 1;
  let click = true;
  let num = $(".cart").length;
  $(".cart").click(function() {
      if(!click) {
          return;
      }
      click = false;
      let card = $(this);
      if(count < num) {
          $(this).addClass("bottom");
          count++;
          }  else {
          $(this).addClass("bottom_last");
          count++;
      }
      if(count == num + 1) {
          setTimeout(function () {
              $(".cart").removeClass("bottom").removeClass("bottom_last");
              count = 1;
          }, 1000);  
      }
      setTimeout(function () {
          click = true;
      }, 1000);         
  });
});