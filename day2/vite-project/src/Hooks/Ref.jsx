import React, { use } from 'react'

const Ref = () => {
    const [count, setCount] = React.useState(0);
    const value = useRef(0);
      useEffect(() => {
        value.current = value.current + 1;
      }


  return (
    <div></div>
  )
}

export default Ref