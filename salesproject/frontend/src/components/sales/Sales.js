import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSales, deleteSale } from "../../actions/sales";

export class Sales extends Component {
  static propTypes = {
    sales: PropTypes.array.isRequired,
    getSales: PropTypes.func.isRequired,
    deleteSale: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getSales();
  }

  render() {
    return (
      <Fragment>
        <h2>Sales List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Name of Client</th>
              <th>e-Mail</th>
              <th>Category</th>
              <th>Sub-Category</th>
              <th>Description</th>
              <th>Total Duration</th>
              <th>Total Price</th>
              <th>Tools Used</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.sales.map(sale => (
              <tr key={sale.id}>
                <td>{sale.id}</td>
                <td>{sale.title}</td>
                <td>{sale.name_of_client}</td>
                <td>{sale.email}</td>
                <td>{sale.category}</td>
                <td>{sale.sub_category}</td>
                <td>{sale.description}</td>
                <td>{sale.total_duration}</td>
                <td>{sale.total_price}</td>
                <td>{sale.tools_used}</td>
                <td>
                  <button
                    onClick={this.props.deleteSale.bind(this, sale.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  // map the state of the reducer, initialState, to the Props of this component [Sales.js]
  sales: state.sales.sales
});

export default connect(
  mapStateToProps,
  { getSales, deleteSale }
)(Sales);
