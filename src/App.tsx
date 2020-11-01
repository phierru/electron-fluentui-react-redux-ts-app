import React from 'react'
import logo from './assets/fluent-ui-logo.png'
import { Counter } from './features/counter/Counter'
import './App.css'

import { Provider, teamsTheme } from '@fluentui/react-northstar'
import { Stack, Image } from '@fluentui/react'

function App() {
  return (
    <Provider theme={teamsTheme}>
      <Stack horizontalAlign="center" verticalAlign="center" gap="20" style={{height: 400}}>
        <Image src={logo} style={{width: 160}} className="App-logo" />
        <Counter />
      </Stack>
    </Provider>
  )
}

export default App
