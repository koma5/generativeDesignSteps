function main () {
  
  var height = 60;  
  var width  = 30;
  var thickness = 10;
 
  var horizontalBar = height/2
  var verticalBar   = horizontalBar


  var invisibleWall = cube([5000, 5000, 5000])

  var wallCutOff = translate([-5000, 0, 0], invisibleWall)

  var hanger = union(
	linear_extrude({height: height, twist: 15},
		square([thickness, width])),
       cube({size: [horizontalBar, width, thickness]}),
       translate([horizontalBar, 0, 0],
               linear_extrude({height: verticalBar, twist: 15},
			square([thickness, width])))

  )

  return difference(hanger, wallCutOff);
    
}
