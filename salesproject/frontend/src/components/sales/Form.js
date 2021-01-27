import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSale } from "../../actions/sales";

export class Form extends Component {
  state = {
    title: "",
    name_of_client: "",
    email: "",
    category: "",
    sub_category: "",
    description: "",
    total_duration: "",
    total_price: "",
    tools_used: ""
  };

  static PropTypes = {
    addSale: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const {
      title,
      name_of_client,
      email,
      category,
      sub_category,
      description,
      total_duration,
      total_price,
      tools_used
    } = this.state;
    const sale = {
      title,
      name_of_client,
      email,
      category,
      sub_category,
      description,
      total_duration,
      total_price,
      tools_used
    };
    this.props.addSale(sale);
    this.setState({
      title = "",
      name_of_client = "",
      email = "",
      category = "",
      sub_category = "",
      description = "",
      total_duration = "",
      total_price = "",
      tools_used = ""
    })
  };

  render() {
    const {
      title,
      name_of_client,
      email,
      category,
      sub_category,
      description,
      total_duration,
      total_price,
      tools_used
    } = this.state;
    return (
      // Set up form
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="form-group col">
              <label>Title</label>
              <input
                className="form-control"
                type="text"
                name="title"
                placeholder="Title"
                onChange={this.onChange}
                value={title}
              />
            </div>
            <div className="form-group col">
              <label>Name of Client</label>
              <input
                className="form-control"
                type="text"
                name="name_of_client"
                placeholder="Name of Client"
                onChange={this.onChange}
                value={name_of_client}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control col"
                type="email"
                name="email"
                placeholder="johnsmith@domain.com"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="form-group col">
              <label>Category</label>
              <input
                className="form-control"
                type="text"
                name="category"
                onChange={this.onChange}
                value={category}
              />
            </div>
            <div className="form-group col">
              <label>Sub-Category</label>
              <input
                className="form-control"
                type="text"
                name="sub_category"
                onChange={this.onChange}
                value={sub_category}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              type="text"
              name="description"
              placeholder="Short description of the project..."
              onChange={this.onChange}
              value={description}
            />
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label>Total Duration</label>
              <textarea
                className="form-control"
                type="number"
                name="total_duration"
                step=".01"
                onChange={this.onChange}
                value={total_duration}
              />
            </div>
            <div className="form-group col">
              <label>Total Price</label>
              <textarea
                className="form-control"
                type="number"
                name="total_price"
                step=".01"
                onChange={this.onChange}
                value={total_price}
              />
            </div>
            <div className="form-group col">
              <label>Technology Used</label>
              <textarea
                className="form-control"
                type="text"
                name="tools_used"
                placeholder="e.g. Python, R, etc."
                onChange={this.onChange}
                value={tools_used}
              />
            </div>
          </div>
          {/* Submit button */}
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addSale }
)(Form);
