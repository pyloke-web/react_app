import './gallery.css'
import {AiFillCaretRight} from "react-icons/ai"

const gallery = () => {
  return (
    <div className="container">
    <div className="to_be_continued"> 
      <h4>Something is brewing... </h4>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorum optio eum impedit, assumenda laboriosam nobis rerum beatae. Minima dignissimos praesentium consequuntur eos quidem, velit dolorum laudantium sed necessitatibus doloribus.</p>
      <a href="https://www.linkedin.com/in/lokepak-yen/" target='_blank'rel='noreferrer noopener' className="btn lg"> Connect with me on LinkedIn <AiFillCaretRight/> </a>
    </div>
  </div>
  )
}

export default gallery