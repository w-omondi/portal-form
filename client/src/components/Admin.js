import React, { Component } from "react";
import { CSVLink } from 'react-csv';
import axios from "axios";
import AdminHeader from "./AdminHeader";
export class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      applications: [],
    };
  }
  componentDidMount() {
    axios
      .get("/applications")
      .then((response) => {
        response.length !== 0
          ? this.setState({ applications: response.data })
          : alert("Applications not found");
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  render() {
    const columns = [
      "email",
      "fullname",
      "salutation_title",
      "position_applied",
      "vacancy_no",
      "national_id",
      "date_of_birth",
      "phone",
      "academic_professional_credentials",
      // "home_county",
      // "sub_county",
      // "ward",
      // "location",
      // "sub_location",
      // "postal_address",
      // "postal_code",
      // "academic_certificates",
      // "academic_qualifications",
      // "certification",
      // "professional_membership",
      // "testimonials",
      // "experience",
      // "employed",
      // "current_employer",
      // "ethnicity",
      // "minority_group",
      // "plwd",
      // "chapter6_compliance",
      // "referees"
    ];
    return (
      <div className="admin">
        <AdminHeader />
        <div className="admin-tab">
          <div className="control-wrapper" style={{ width: "70%" }}>
            <div className="tabcontrol">
              <label htmlFor="limit">Limit</label>
              <input id="limit" type="number" min={5} placeholder="limit" />
            </div>
            <div className="tabcontrol">
              <label htmlFor="date">From</label>
              <input id="date" type="date" />
            </div>
          </div>
          <div className="control-wrapper" style={{ width: "30%" }}>
            <CSVLink style={{color:"white"}} data={this.state.applications} filename={Date.now()+ "APPLICANTS LIST"}>Download full .xls file</CSVLink>
          </div>

        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              {columns.map((column, index) => (
                <th>{column.replace(/_/g, " ")}</th>
              ))}
            </thead>
            <tbody>
              {this.state.applications.map((colvalue, index) => (
                <tr key={index}>
                  <td>{colvalue.email}</td>
                  <td>{colvalue.fullname}</td>
                  <td>{colvalue.salutation_title}</td>
                  <td>{colvalue.position_applied}</td>
                  <td>{colvalue.vacancy_no}</td>
                  <td>{colvalue.national_id}</td>
                  <td>{colvalue.date_of_birth.split("T")[0]}</td>
                  <td>{colvalue.phone}</td>
                  <td>{colvalue.academic_professional_credentials}</td>
                  {/* <td>{colvalue.home_county}</td>
                <td>{colvalue.sub_county}</td>
                <td>{colvalue.ward}</td>
                <td>{colvalue.location}</td>
                <td>{colvalue.sub_location}</td>
                <td>{colvalue.postal_address}</td>
                <td>{colvalue.postal_code}</td>
                <td>{colvalue.academic_certificates}</td>
                <td>{colvalue.academic_qualifications}</td>
                <td>{colvalue.certification}</td>
                <td>{colvalue.professional_membership}</td>
                <td>{colvalue.testimonials}</td>
                <td>{colvalue.experience}</td>
                <td>{colvalue.employed}</td>
                <td>{colvalue.current_employer}</td>
                <td>{colvalue.ethnicity}</td>
                <td>{colvalue.minority_group}</td>
                <td>{colvalue.plwd}</td>
                <td>{colvalue.chapter6_compliance}</td>
                <td>{colvalue.referees}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Admin;
