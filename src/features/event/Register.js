import React from 'react'
import './Register.scss'
import moment from 'moment'
import { connect } from 'react-redux'
import * as action from './redux'
import Input from '../../common/Input'
import { compose, lifecycle, withHandlers } from 'recompose'

const closeTime = moment('2018-04-01 17:00:00.000 ')

const enhance = compose(
  connect(state => state, {
    setField: action.setField,
    resetField: action.resetField
  }),
  withHandlers({
    functionTest: props => () => {
      //console.log()
    },
    countDownTime: props => () => {
      console.log(props)
      const millis = closeTime.diff(moment())
      const duration = moment.duration(millis)
      if (duration.asHours() > 0) {
        props.setField(
          'countDown',
          `${Math.floor(
            duration.asHours()
          )} hours ${duration.minutes()} minutes ${duration.seconds()}`
        )
      }
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.countDownTime()
      this.interval = setInterval(() => {
        this.props.countDownTime()
      }, 1000)
    },
    componentWillUnmount() {
      clearInterval(this.interval)
    }
  })
)

const Register = ({
  name,
  email,
  food,
  ticketType,
  agreeTerm,
  setField,
  countDown,
  resetField
}) => (
  <section className="section">
    <div className="container">
      <h1 className="title">Evenn Register Form</h1>
      <p>Registration close in {countDown}</p>
      <Input
        value={name}
        onChange={value => setField('name', value)}
        placeholder="Text input"
        className="input"
        label="Name"
      />
      <Input
        value={email}
        onChange={value => setField('email', value)}
        placeholder="Email Input"
        label="Email"
        icon="envelope"
        //error="Invalid E-mail"
      />
      <div className="field">
        <label className="label">Ticket Type</label>
        <div className="control">
          <div className="select">
            <select
              value={ticketType}
              onChange={evt => {
                setField('ticketType', evt.target.value)
              }}
            >
              <option>...Select Type</option>
              <option value="regular">Regular 100 THB</option>
              <option value="premium">Premium 1000 THB</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Add Food</label>
        <div className="control">
          <label className="radio">
            <input
              type="radio"
              name="question"
              value={food}
              checked={food}
              onChange={() => {
                setField('food', !food)
              }}
            />{' '}
            Yes (+50 bath)
          </label>
          <label className="radio">
            <input
              type="radio"
              name="question"
              value={food}
              checked={!food}
              onChange={() => {
                setField('food', !food)
              }}
            />{' '}
            No
          </label>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input
              type="checkbox"
              value={agreeTerm}
              checked={agreeTerm}
              onChange={evt => {
                setField('agreeTerm', evt.target.checked)
              }}
            />{' '}
            I agree to the <p>terms and conditions</p>
          </label>
        </div>
      </div>

      <p>Price: 100THB</p>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Register</button>
        </div>
        <div className="control">
          <button
            className="button is-text"
            onClick={() => {
              resetField()
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default enhance(Register)
