export const scream = (inp) => `${inp.toUpperCase()}!`

const dFn = () => {
    console.log('I am default');
}

export default dFn

// export {
//     scream,
//     dFn as default
// }