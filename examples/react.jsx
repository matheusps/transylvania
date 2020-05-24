import * as React from 'react'
import './styles.css'

function Vampire({ name, isHungry }) {
  const className = isHungry ? 'red' : 'gray'
  return (
    <h1 className={className}>{name}</h1>
  )
}

function App() {
  const [isHungry, setIsHungry] = React.useState(false)

  React.useEffect(() => {
    alert('⚠️ WATCH OUT!')
  }, [isHungry])

  const toggle = useCallback(() => {
    setIsHungry(prev => !prev)
  }, [])

  return (
    <React.Fragment>
      <button onClick={toggle}>Click</button>
      <Vampire name="Vlad" isHungry />
      {isHungry && (
        <h2>Is hungry! Run to a sunny place!</h2>
      )}
    </React.Fragment>
  )
}