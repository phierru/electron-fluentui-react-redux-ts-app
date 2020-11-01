import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice'

import { TextField, PrimaryButton, Stack } from '@fluentui/react'

export function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <Stack horizontalAlign="center" gap="20">
      <Stack horizontal gap="20">
        <PrimaryButton text="+" onClick={() => dispatch(increment())} />
        <TextField value={count.toString()} style={{width: 80, textAlign: "center"}}/>
        <PrimaryButton text="-" onClick={() => dispatch(decrement())} />
      </Stack>
      <Stack horizontal gap="20">
        <TextField
          value={incrementAmount.toString()}
          style={{width: 80, textAlign: "center"}}
          onChange={(e, value) => setIncrementAmount(value as string)} />
        <PrimaryButton
          text="Add Amount"
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))} />
        <PrimaryButton
          text="Add Async"
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))} />
      </Stack>
    </Stack>
  )
}
