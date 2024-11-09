const Message = ({joke}) => {
  return (
    <>
    <h3 className="text-primary">{joke.content}</h3>
    <h4 className="text-secondary">{joke.author}</h4>
    </>
  )
}

export default Message