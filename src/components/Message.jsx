const Message = ({quotes}) => {
  return (
    <>
    <h3 className="text-primary">{quotes.content}</h3>
    <h4 className="text-secondary">{quotes.author}</h4>
    </>
  )
}

export default Message