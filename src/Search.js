var React = require('react');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }
  }

  render() {
    return (
      <div className="search-bar">
        <form>
          <div className="form-group">
            <label htmlFor="search-query">Where do you want to hike?</label>
            <input
            type="text"
            className="form-control"
            placeholder="Enter a location"/>
          </div>
        </form>
      </div>
    )
  }
}

module.exports = Search
