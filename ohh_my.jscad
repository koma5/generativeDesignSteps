function main () {
  
  var height = 60;  
  var width  = 30;
  var thicknes = 10;
 
  
  return union(
       cube({size: [thicknes, width, height]}),
       cube({size: [height/2, width, thicknes]}),
       translate([height/2, 0, 0],
               cube([thicknes, width, height/2]))

)
    
}
