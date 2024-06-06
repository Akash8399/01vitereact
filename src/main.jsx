import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}
                                                    //banaya
//const ReactElement = {    // ReactElement jo object ^ hai uska naam hamesha Pascel case me rahenga
//  type : 'a',
//  props: {
//    href: 'https://google.com',
//    target : '_blank',
//  },
//  children: 'click me to visit Google'
//}

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

const otherUser = 'Chai Aur Code'

const reactElement = React.createElement(
  'a',
  {href:'https://www.google.com', target:'_blank'},
  'click me to visit Google',
  otherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
  //<App/> 
)
