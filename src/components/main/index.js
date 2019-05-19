import React from 'react';
import Geosuggest from 'react-geosuggest';

import './main.css';
import DatePicker from './DatePicker';
import { history } from '../../helpers/history';

const google = window.google;

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      pickUpLocation: undefined,
      dropOffLocation: undefined,
      pickupTime: "12:00 PM",
      dropOffTime: "12:00 PM",
    };
  }

  onPickupLocationSelected = (pickUpLocation) => {
    this.setState({ pickUpLocation, dropOffLocation: pickUpLocation });
  };

  onDropOffLocationSelected = (dropOffLocation) => {
    this.setState({ dropOffLocation });
  };

  onPickUpTimeSelected = e => {
    this.setState({ pickupTime: e.target.value });
  };

  onDropOffTimeSelected = e => {
    this.setState({ dropOffTime: e.target.value });
  };
  
  onDatesSelected = (dates) => {
    this.props.setRentedDates(dates);
  };

  render() {
    const { pickUpLocation, dropOffLocation } = this.state;
    const { rentedDates } = this.props;

    return (
      <div className="main-container">
        <div className="container">
          <div className="search">
            <form name="form" onSubmit={this.handleSubmit}>

              <div className="row">
                <div className="col-lg-8 col- col-sm-8">
                  <Geosuggest
                    initialValue={this.state.pickUpLocation && this.state.pickUpLocation.description}
                    placeholder="Pick-up location"
                    onSuggestSelect={this.onPickupLocationSelected}
                    location={new google.maps.LatLng(53.558572, 9.9278215)}
                    radius="20"
                  />
                </div>

                <div className="col-lg-4 co-6 col-sm-4">
                  <select className="form-control" defaultValue={"string:12:00 PM"} onChange={this.onPickUpTimeSelected}>
                    <option label="midnight" value="string:12:00 AM">midnight</option><option label="12:30 AM" value="string:12:30 AM">12:30 AM</option><option label="1:00 AM" value="string:1:00 AM">1:00 AM</option><option label="1:30 AM" value="string:1:30 AM">1:30 AM</option><option label="2:00 AM" value="string:2:00 AM">2:00 AM</option><option label="2:30 AM" value="string:2:30 AM">2:30 AM</option><option label="3:00 AM" value="string:3:00 AM">3:00 AM</option><option label="3:30 AM" value="string:3:30 AM">3:30 AM</option><option label="4:00 AM" value="string:4:00 AM">4:00 AM</option><option label="4:30 AM" value="string:4:30 AM">4:30 AM</option><option label="5:00 AM" value="string:5:00 AM">5:00 AM</option><option label="5:30 AM" value="string:5:30 AM">5:30 AM</option><option label="6:00 AM" value="string:6:00 AM">6:00 AM</option><option label="6:30 AM" value="string:6:30 AM">6:30 AM</option><option label="7:00 AM" value="string:7:00 AM">7:00 AM</option><option label="7:30 AM" value="string:7:30 AM">7:30 AM</option><option label="8:00 AM" value="string:8:00 AM">8:00 AM</option><option label="8:30 AM" value="string:8:30 AM">8:30 AM</option><option label="9:00 AM" value="string:9:00 AM">9:00 AM</option><option label="9:30 AM" value="string:9:30 AM">9:30 AM</option><option label="10:00 AM" value="string:10:00 AM">10:00 AM</option><option label="10:30 AM" value="string:10:30 AM">10:30 AM</option><option label="11:00 AM" value="string:11:00 AM">11:00 AM</option><option label="11:30 AM" value="string:11:30 AM">11:30 AM</option><option label="noon" value="string:12:00 PM">noon</option><option label="12:30 PM" value="string:12:30 PM">12:30 PM</option><option label="1:00 PM" value="string:1:00 PM">1:00 PM</option><option label="1:30 PM" value="string:1:30 PM">1:30 PM</option><option label="2:00 PM" value="string:2:00 PM">2:00 PM</option><option label="2:30 PM" value="string:2:30 PM">2:30 PM</option><option label="3:00 PM" value="string:3:00 PM">3:00 PM</option><option label="3:30 PM" value="string:3:30 PM">3:30 PM</option><option label="4:00 PM" value="string:4:00 PM">4:00 PM</option><option label="4:30 PM" value="string:4:30 PM">4:30 PM</option><option label="5:00 PM" value="string:5:00 PM">5:00 PM</option><option label="5:30 PM" value="string:5:30 PM">5:30 PM</option><option label="6:00 PM" value="string:6:00 PM">6:00 PM</option><option label="6:30 PM" value="string:6:30 PM">6:30 PM</option><option label="7:00 PM" value="string:7:00 PM">7:00 PM</option><option label="7:30 PM" value="string:7:30 PM">7:30 PM</option><option label="8:00 PM" value="string:8:00 PM">8:00 PM</option><option label="8:30 PM" value="string:8:30 PM">8:30 PM</option><option label="9:00 PM" value="string:9:00 PM">9:00 PM</option><option label="9:30 PM" value="string:9:30 PM">9:30 PM</option><option label="10:00 PM" value="string:10:00 PM">10:00 PM</option><option label="10:30 PM" value="string:10:30 PM">10:30 PM</option><option label="11:00 PM" value="string:11:00 PM">11:00 PM</option><option label="11:30 PM" value="string:11:30 PM">11:30 PM</option>
                  </select>
                </div>
              </div>
              
              <DatePicker 
                onDatesSelected={this.onDatesSelected}
              />

              <div className="row">
                <div className="col-lg-8 col- col-sm-8">
                  <Geosuggest
                    initialValue={this.state.dropOffLocation && this.state.dropOffLocation.description}
                    placeholder="Drop-off location"
                    onSuggestSelect={this.onDropOffLocationSelected}
                    location={new google.maps.LatLng(53.558572, 9.9278215)}
                    radius="20"
                  />
                </div>

                <div className="col-lg-4 co-6 col-sm-4">
                  <select className="form-control" defaultValue={"string:12:00 PM"} onChange={this.onDropOffTimeSelected}>
                    <option label="midnight" value="string:12:00 AM">midnight</option><option label="12:30 AM" value="string:12:30 AM">12:30 AM</option><option label="1:00 AM" value="string:1:00 AM">1:00 AM</option><option label="1:30 AM" value="string:1:30 AM">1:30 AM</option><option label="2:00 AM" value="string:2:00 AM">2:00 AM</option><option label="2:30 AM" value="string:2:30 AM">2:30 AM</option><option label="3:00 AM" value="string:3:00 AM">3:00 AM</option><option label="3:30 AM" value="string:3:30 AM">3:30 AM</option><option label="4:00 AM" value="string:4:00 AM">4:00 AM</option><option label="4:30 AM" value="string:4:30 AM">4:30 AM</option><option label="5:00 AM" value="string:5:00 AM">5:00 AM</option><option label="5:30 AM" value="string:5:30 AM">5:30 AM</option><option label="6:00 AM" value="string:6:00 AM">6:00 AM</option><option label="6:30 AM" value="string:6:30 AM">6:30 AM</option><option label="7:00 AM" value="string:7:00 AM">7:00 AM</option><option label="7:30 AM" value="string:7:30 AM">7:30 AM</option><option label="8:00 AM" value="string:8:00 AM">8:00 AM</option><option label="8:30 AM" value="string:8:30 AM">8:30 AM</option><option label="9:00 AM" value="string:9:00 AM">9:00 AM</option><option label="9:30 AM" value="string:9:30 AM">9:30 AM</option><option label="10:00 AM" value="string:10:00 AM">10:00 AM</option><option label="10:30 AM" value="string:10:30 AM">10:30 AM</option><option label="11:00 AM" value="string:11:00 AM">11:00 AM</option><option label="11:30 AM" value="string:11:30 AM">11:30 AM</option><option label="noon" value="string:12:00 PM">noon</option><option label="12:30 PM" value="string:12:30 PM">12:30 PM</option><option label="1:00 PM" value="string:1:00 PM">1:00 PM</option><option label="1:30 PM" value="string:1:30 PM">1:30 PM</option><option label="2:00 PM" value="string:2:00 PM">2:00 PM</option><option label="2:30 PM" value="string:2:30 PM">2:30 PM</option><option label="3:00 PM" value="string:3:00 PM">3:00 PM</option><option label="3:30 PM" value="string:3:30 PM">3:30 PM</option><option label="4:00 PM" value="string:4:00 PM">4:00 PM</option><option label="4:30 PM" value="string:4:30 PM">4:30 PM</option><option label="5:00 PM" value="string:5:00 PM">5:00 PM</option><option label="5:30 PM" value="string:5:30 PM">5:30 PM</option><option label="6:00 PM" value="string:6:00 PM">6:00 PM</option><option label="6:30 PM" value="string:6:30 PM">6:30 PM</option><option label="7:00 PM" value="string:7:00 PM">7:00 PM</option><option label="7:30 PM" value="string:7:30 PM">7:30 PM</option><option label="8:00 PM" value="string:8:00 PM">8:00 PM</option><option label="8:30 PM" value="string:8:30 PM">8:30 PM</option><option label="9:00 PM" value="string:9:00 PM">9:00 PM</option><option label="9:30 PM" value="string:9:30 PM">9:30 PM</option><option label="10:00 PM" value="string:10:00 PM">10:00 PM</option><option label="10:30 PM" value="string:10:30 PM">10:30 PM</option><option label="11:00 PM" value="string:11:00 PM">11:00 PM</option><option label="11:30 PM" value="string:11:30 PM">11:30 PM</option>
                  </select>
                </div>
              </div>

              <button
                disabled={
                  pickUpLocation === undefined ||
                  dropOffLocation === undefined ||
                  rentedDates.from === undefined ||
                  rentedDates.to === undefined
                }
                type="button" 
                className="btn btn-primary main-custom-button"
                onClick={() => history.push('/rent')}
              >
                Search
              </button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default Main;