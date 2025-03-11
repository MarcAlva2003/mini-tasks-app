import { DotsLoader } from '@/components/loaders/dots-loader.component'
import { GeminiIcon } from '@/components/icons/icons'
import ReactMarkdown from 'react-markdown'
import styles from './chat-box.module.css'

interface IBotMessageComponent {
  message: string
  loading?: boolean
}

export const BotMessageComponent: React.FC<IBotMessageComponent> = (props) => {
  const { message, loading } = props
  return (
    <div className={'flex mb-6'}>
      <div>
        <GeminiIcon className="h-10 w-10 mr-6" />
      </div>

      {loading ? (
        <div className='mt-3'>
        <DotsLoader />
        </div>
      ) : (
        <div className="w-full">
          <div className={styles['chat-bot-message']}>
            <ReactMarkdown>{message}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  )
}
