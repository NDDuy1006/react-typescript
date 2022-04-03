import React from "react"

type IProps = {
  value: string
  changeHandler: (e: React.ChangeEvent) => void
}

export const Input = (props: IProps) => {
  const InputChangehandler = (e: React.ChangeEvent<HTMLInputElement>) => {

  }

  return <input type='text' value={props.value} onChange={InputChangehandler}/>
}