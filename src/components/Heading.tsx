type IProps = {
  children: string
}

export const Heading = (props: IProps) => {
  return <h2>{props.children}</h2>
}