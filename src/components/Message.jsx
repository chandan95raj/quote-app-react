const Message = ({quotes,emoji}) => {
  return (
    <>
    <h3 className="text-primary font-monospace"><span>{emoji.character}</span>{quotes.content}</h3>
    <h4 className="text-secondary fst-italic">-{quotes.author}</h4>
    </>
  )
}

export default Message