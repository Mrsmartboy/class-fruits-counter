import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onClickMango = () => {
    this.setState(prevState => ({...prevState, mango: prevState.mango + 1}))
  }

  onClickBanana = () => {
    this.setState(prevState => ({...prevState, banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span>{mango} </span>mangoes <span>{banana} </span>bananas
          </h1>
          <div className="image-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickMango}
              >
                Eat Mango
              </button>
            </div>

            <div className="banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
