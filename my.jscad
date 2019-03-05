function main () {
  return union(
      cube({size : 20,
           center: true}),
           translate([10,10,0], sphere({r: 12,
               center: true})),
            translate([0,10,10], sphere({r: 12,
               center: true})),
            translate([10,0,10], sphere({r: 12,
               center: true})),
            translate([0,10,10], sphere({r: 12,
               center: true}))

           )
}
