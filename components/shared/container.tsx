import React from "react"

interface ContainerProps {
    children : React.ReactNode
}

const Container = (props: ContainerProps) => {
    const {children} = props
  return (
    <div className=" px-12 py-20 md:px-30 md:py-30 max-w-3xl mx-auto ">
        {children}
    </div>
  )
}
export default Container