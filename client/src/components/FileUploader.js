import axios from 'axios'
import React, { Component } from 'react'

export class FileUploader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      files: '',
      applicant: this.props.name,
      success: false,
      loading: false
    }
  }

  onChangeHandler = (e) => {
    this.setState({ files: e.target.files })
  }

  onSave = () => {
    const formData = new FormData();
    formData.append('applicant', this.state.applicant);
    for (let i = 0; i < this.state.files.length; i++) {
      formData.append('file', this.state.files[i]);
    }
    this.setState({ loading: true })
    axios.post('/upload', formData)
      .then(response => {
        this.setState({ success: true, loading: false })
        this.props.setValue(this.state.applicant, response.data);
        console.log(response)
      }
      )
      .catch(err => console.log(err.message))
  }

  render() {

    return (
      this.state.success ?
        <span style={{ color: "#32a86d", fontWeight: "bold" }}>Files uploaded <i className='fas fa-check-circle' /></span>
        :
        (this.state.loading && !this.state.success ?
          <span><i class="fas fa-spinner fa-pulse"></i> Uploading</span>
          :
          <>
            <input type="file" name="upload" id="upload" multiple onChange={this.onChangeHandler} />
            {this.state.files.length !== 0 ?
              <button onClick={this.onSave}>upload</button>
              :
              null
            }
          </>
        )
    )
  }
}

export default FileUploader