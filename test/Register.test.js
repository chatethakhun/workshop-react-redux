import React from 'react'
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Register } from '../src/features/event/Register'
import { expect } from 'chai'

Enzyme.configure({ adapter: new Adapter() })

describe('<Register />', () => {
  it('should render title correctly', () => {
    //must have props setField because in componentdidmount in Register call this.props.setField
    const wrapper = shallow(<Register setField={() => {}} />)
    expect(wrapper.find('.title').text()).to.equal('Evenn Register Form')
  })
})
