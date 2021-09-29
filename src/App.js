import React from 'react';
import Sidemenu from './components/SideMenu';
import BasicInformation from './components/BasicInformation';
import Description from './components/Description';
import ImagesVideos from './components/ImagesVideos';
import Navbar from './components/Navbar';
import './../src/App.css';

class App extends React.Component {
  state = {
    step: 1,
    productName: '',
    sku: '',
    productType: '',
    defaultPrice: '',
    brand: '',
    weight: '',
    categories: '',
  };

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const step = this.state.step;
    const {
      productName,
      sku,
      productType,
      defaultPrice,
      brand,
      weight,
      categories,
    } = this.state;
    const values = {
      productName,
      sku,
      productType,
      defaultPrice,
      brand,
      weight,
      categories,
    };
    const homepageStyle = {
      backgroundColor: 'rgba(128, 128, 128, 0.05)',
      paddingTop: '10px',
    };
    switch (step) {
      case 1:
        return (
          <div style={homepageStyle}>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <BasicInformation
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div style={homepageStyle}>
            <Sidemenu step={step} />
            <Description
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 3:
        return (
          <div style={homepageStyle}>
            <Sidemenu step={step} />
            <ImagesVideos
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 4:
        return (
          <div style={homepageStyle}>
            <Sidemenu step={step} />
            <Description
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      default:
    }
  }
}

export default App;
