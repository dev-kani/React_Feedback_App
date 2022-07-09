import { useContext, useEffect, useState } from "react"
import FeedbackContext from "../context/FeedbackContext"
import RatingSelect from "./RatingSelect"
import Button from "./shared/Button"
import Card from "./shared/Card"

const FeedbackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    const minLength = 5
    e.preventDefault()
    if (text.trim().length >= minLength) {
      const newFeedback = {
        text,
        rating
      }
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would your rate our service?</h2>
        <RatingSelect select={rating => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" >Send</Button>
        </div>
      </form>
    </Card>
  )
}
export default FeedbackForm