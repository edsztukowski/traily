var React = require('react');
var api = require('./utils/api')

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      state: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var target = event.target;
    var value = target.value;
    const name = target.name;
    this.setState(function() {
      return {
        [name]:value,
      }
    })
  }

  handleSubmit(event) {
    console.log('fired handlesubmit')
    event.preventDefault();
    api.fetchTrails(this.state.city, this.state.state);
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="search-query">Where do you want to hike?</label>
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="Enter a city"
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
            <input
              type="text"
              name="state"
              className="form-control"
              placeholder="Enter a state"
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
            <input
              className="hide-submit"
              type="submit"
            />
          </div>
        </form>
      </div>
    )
  }
}

module.exports = Search
