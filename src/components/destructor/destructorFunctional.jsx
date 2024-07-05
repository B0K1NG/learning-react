                                                                                    // BEGINNING FUNCTION

// import React from 'react'

// const Greet = props => {
//     console.log(props)
//     return (
//         <>
//             <h1>
//                 Hello {props.name}
//         </h1>
//         </>
//     )
// }

                                                                        // 1.1 Destructuring In the parameter itself code example
// import React from 'react'

// const Greet = ({name, heroName}) => {
//     return (
//         <>
//             <h1>
//                 Hello {name} a.k.a {heroName}
//         </h1>
//         </>
//     )
// }

// export default Greet

                                                                        // 1.2 Destructuring In the body code example
import React from 'react'

const Greet = props => {
    const {name, heroName} = props
    return (
        <>
            <h1>
                Hello {name} a.k.a {heroName}
        </h1>
        </>
    )
}

export default Greet