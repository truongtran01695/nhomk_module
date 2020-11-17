import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBlocking: false,
      isRedirect: false,
      txtName: '',
      txtEmail: '',
      txtSubject:'',
      txtMessage:'',
    };
  }
  isInputChange = (event) => {
    const target = event.target;
    const name =target.name;
    const value =target.value;
    console.log(name);
    this.setState({
      isBlocking: target.value.lenght > 0,
     [name]:value
    });
    
  }
  submitForm = (event) => {
    event.preventDefautl()
    event.target.reset()
    this.setState({
      isBlocking: false,
      tisRedirect: true,
    });
    const content = '';
    
    content +='Ho Ten:'+this.state.txtName;
    content +='Ho Ten:'+this.state.txtEmail;
    content +='Ho Ten:'+this.state.txtSubject;
    content +='Ho Ten:'+this.state.txtMessage;
  }
  render() {
    
    if(this.state.isRedirect){
      return(
        <Redirect to="/index"></Redirect>
      )
    }
    return (
      <div className="body-wrapper">

        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
              <div className="contact-page-side-content">
                <h3 className="contact-page-title">Contact Us</h3>
                <p className="contact-page-message mb-25">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
                <div className="single-contact-block">
                  <h4><i className="fa fa-fax" /> Address</h4>
                  <p>123 Main Street, Anytown, CA 12345 – USA</p>
                </div>
                <div className="single-contact-block">
                  <h4><i className="fa fa-phone" /> Phone</h4>
                  <p>Mobile: (08) 123 456 789</p>
                  <p>Hotline: 1009 678 456</p>
                </div>
                <div className="single-contact-block last-child">
                  <h4><i className="fa fa-envelope-o" /> Email</h4>
                  <p>yourmail@domain.com</p>
                  <p>support@hastech.company</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-2 order-lg-1">
              <div className="contact-form-content pt-sm-55 pt-xs-55">
                <h3 className="contact-page-title">Tell Us Your Message</h3>
                <div className="contact-form">
                  <form onSubmit={(event)=> this.submitForm(event)} >
                    <div className="form-group">
                      <label>Your Name <span className="required">*</span></label>
                      <input type="text" name="txtName"  id="customername" onChange={(event)=> this.isInputChange(event)} required />
                    </div>
                    <div className="form-group">

                      <label>Your Email <span className="required">*</span></label>
                      <input type="email" name="txtEmail"  id="customerEmail" onChange={(event)=> this.isInputChange(event)} required />
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input type="text" name="txtSubject"  id="contactSubject"onChange={(event)=> this.isInputChange(event)}  />
                    </div>
                    <div className="form-group mb-30">
                      <label>Your Message</label>
                      <textarea name="contactMessage"  id="txtMessage" defaultValue={""} onChange={(event)=> this.isInputChange(event)}  />
                    </div>
                    <div className="form-group">
                      <button type="submit" value="submit" id="submit" className="li-btn-3 btn  btn-default" name="submit">send</button>
                    </div>
                  </form>
                </div>
                <p className="form-messege" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default contact;