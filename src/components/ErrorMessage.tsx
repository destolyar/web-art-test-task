import { FC } from 'react'
import '../styles/components/error-message.scss'

interface ErrorMessageProps {
    error: string | undefined
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ error="" }) => {
  return(
    <div className="error-container" style={(!!error) ? { maxHeight: 100 } : { maxHeight: 0 }}>
      <h2 className="error-container__error">{error}</h2>
    </div>
  )
}