import PropTypes from 'prop-types'

const FeedbackStats = ({ feedback }) => {
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

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired
}

export default FeedbackStats