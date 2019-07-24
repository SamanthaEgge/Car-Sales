import React from 'react';
import { connect } from 'react-redux'

import { addCarFeature, removeCarFeature } from './store/actions'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  removeFeature = (itemID) => {
    // dispatch an action here to remove an item
    // event.preventDefault();
    this.props.removeCarFeature(itemID)
  };

  buyItem = (itemID) => {
    // dipsatch an action here to add an item
    // event.preventDefault();
    console.log('App.js Buy Item itemID : ',itemID)
    this.props.addCarFeature(itemID)
  };

  render() {
    console.log(this.props.car)
    return (
      <div className="boxes">
        <div className="box">
          <Header car={this.props.car} />
          <AddedFeatures car={this.props.car} removeFeature={this.removeFeature} />
        </div>
        <div className="box">
          <AdditionalFeatures store={this.props.store} buyItem={this.buyItem} />
          <Total car={this.props.car} additionalPrice={this.props.additionalPrice} />
        </div>
      </div>
    )}
};

const mapStateToProps = (state) => ({
  additionalPrice: state.additionalPrice,
  car: state.car,
  store: state.store
})

export default connect(mapStateToProps, { addCarFeature, removeCarFeature })(App);
