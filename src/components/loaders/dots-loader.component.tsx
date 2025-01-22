export const DotsLoader = () => {
  return (
    <div className="flex space-x-1 justify-center items-center h-4 dark:invert">
      <div className="h-[6px] w-[6px] bg-slate-200 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-[6px] w-[6px] bg-slate-200 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-[6px] w-[6px] bg-slate-200 rounded-full animate-bounce"></div>
    </div>
  )
}
