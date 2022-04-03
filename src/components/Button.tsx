import React from "react"

interface IProps {
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props: IProps) => {
  return <button onClick={e => props.clickHandler(e, 1)}>Click Me!</button>
}