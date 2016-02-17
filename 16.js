function getDependencies( tree ) {
    var depsArray = []

    if ( !tree || !tree.hasOwnProperty( "dependencies" ) ) return []
    
    //for each object in "dependencies":
    function recurse( deps ) {
        for ( branch in deps ) {
            // add module to depsArray
            var depString = branch + "@" + deps[branch][ "version" ]
            
            if ( depsArray.indexOf( depString ) === -1 ) 
                depsArray.push( depString )

            if ( deps[branch].hasOwnProperty( "dependencies" ) ) {
                // go down one level
                recurse( deps[branch][ "dependencies" ] )
            }
        }
    }
    
    // kickstart recursion
    recurse( tree[ "dependencies" ] )

    return depsArray.sort()
}

module.exports = getDependencies

// Official solution:

// function getDependencies(mod, result) {
//       result = result || []
//       var dependencies = mod && mod.dependencies || []
//       Object.keys( dependencies ).forEach( function ( dep ) {
//      var key = dep + '@' + mod.dependencies[ dep ].version
//      if ( result.indexOf( key ) === -1 ) result.push( key )
//      getDependencies( mod.dependencies[ dep ], result )
//  } )
//  return result.sort()
//  }