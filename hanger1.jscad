function main () {
  
  var height = 60;  
  var width  = 30;
  var thickness = 10;
 
  var horizontalBar = height/2

  var hanger = union(
       cube({size: [thickness, width, height]}),
       cube({size: [horizontalBar, width, thickness]}),
       translate([horizontalBar, 0, 0],
               cube([thickness, width, height/2]))

  )

  return hanger;
    
}
