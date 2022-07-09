import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

const AboutPage = () => {
  return (
    <Card>
      <h1>This a React Project built using React 18 and 6th version of React router dom</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione pariatur rem quo quisquam fuga ullam exercitationem sunt quos aspernatur beatae!</p>
      <p>
        <Link to='/'>Back to Home</Link>
      </p>

    </Card>
  )
}
export default AboutPage