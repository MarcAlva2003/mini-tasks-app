interface IUserMessageComponent {
  message: string
}

export const UserMessageComponent: React.FC<IUserMessageComponent> = (props) => {
  const { message } = props
  return (
    <div className="w-full flex justify-end mb-6">
      <div className="py-2 px-4 rounded-[12px_0px_12px_12px] bg-blue-400 w-fit max-w-[80%]">
        <p>{message}</p>
      </div>
    </div>
  )
}
