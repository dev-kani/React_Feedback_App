import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext)
  // Calculate the rating average
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length

  console.log(average)

  return (
    <div>
      <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating : {isNaN(average) ? 0 :
          (average.toFixed(1).replace(/[.,]0$/, ''))}</h4 >
      </div>
    </div>
  )
}

export default FeedbackStats