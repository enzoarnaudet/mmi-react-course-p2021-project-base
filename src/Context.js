import {createContext} from 'react'

const Context=createContext({
    src:null, 
    changeSrc: () => {}
})
export default Context