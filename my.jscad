function main () {
  
  var edgeDings = sphere({r: 10, center: true})
  
  var shapes = []
  
  //shapes.push(cube({size : 20, center: true}))
  
  var coords = []
  
  for(var i=-10; i<=10; i+=10){ // -10, 0, 10
      for(var j=-10; j<=10; j+=10){
          for(var k=-10; k<=10; k+=10){
              if(abs(i)+abs(j)+abs(k) != 0 && abs(i)+abs(j)+abs(k) == 20) {
                //on every edge but not the corners and not the middle
                coords.push([i,j,k])
              }
          }
      }
  }
  
  
  coords.forEach(function (v){
      shapes.push(translate(v, edgeDings));
  });
  
  return union(shapes)
    
}
