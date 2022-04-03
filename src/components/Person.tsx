interface IProps {
  name: {
    first: string
    last: string
  }
}

export const Person = (props: IProps) => {
  return (
    <div>{props.name.first} {props.name.last}</div>
  )
}