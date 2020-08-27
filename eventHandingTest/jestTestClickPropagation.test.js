import { mount, shallow } from 'enzyme';
import React from 'react';

import HostStatusModal from "../../src/views/Monitoring/Hosts/HostStatusModal";
import ClickPropagationRemoveWrapper from "../../src/components/ClickPropagationRemoveWrapper";
import { Provider } from 'react-redux';

//test-utils
import { makeStore, flushPromises } from '../setup/test-util';

class Foo extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { count: 0 };
  }

  // clickEvent() {

  // }

  render() {
    //const { count } = this.state;
    return (

      <ClickPropagationRemoveWrapper>
        {/* <div
          className={`clickDiv`}
          onClick={() => { this.setState({ count: count + 1 }); }}>
          <p className={`clicks-${count}`}>
            {count} clicks
        </p>
        </div> */}
        {/* <HostStatusModal onClick={this.clickEvent}/> */}
        <HostStatusModal show={true} />
      </ClickPropagationRemoveWrapper>

      // <div
      //   className={`clickDiv`}
      //   onClick={() => { this.setState({ count: count + 1 }); }}>
      //   <p className={`clicks-${count}`}>
      //     {count} clicks
      //   </p>
      // </div>

    );
  }
}


describe('<ClickPropagationRemoveWrapper />', function () {

  let wrapper = null;

  // before test
  beforeEach(() => {

  });

  // after test
  afterEach(() => {
    wrapper = null;
  })

  it('Should stop event propagation when a mouse click event occurs', function () {

    // when
    wrapper = mount(
      <Provider store={makeStore()}>
        <Foo />
      </Provider>
      // <ClickPropagationRemoveWrapper>
      //   <Foo />
      // </ClickPropagationRemoveWrapper>
    );


    // then
    // real try
    //expect(wrapper.find('.clicks-0').length).toEqual(1);
    wrapper.find('.modal-content').simulate('click');
    expect(wrapper.find('.clicks-1').length).toEqual(0);
    //expect(wrapper)

    // test try
    // expect(wrapper.find('.clicks-0').length).toEqual(1);
    // wrapper.find('.clickDiv').simulate('click');
    // expect(wrapper.find('.clicks-1').length).toEqual(0);


  });
});
