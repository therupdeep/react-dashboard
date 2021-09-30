import React from 'react';
import Sidemenu from './components/SideMenu';
import Navbar from './components/Navbar';
import BasicInformation from './components/BasicInformation';
import Description from './components/Description';
import ImagesVideos from './components/ImagesVideos';
import ProductIdentifiers from './components/ProductIdentifiers';
import Pricing from './components/Pricing';
import Inventory from './components/Inventory';
import Variations from './components/Variations';
import Customizations from './components/Customizations';
import StorefrontDetails from './components/StorefrontDetails';
import CustomFields from './components/CustomFields';
import RelatedProducts from './components/RelatedProducts';
import DimensionsWeights from './components/DimensionsWeights';
import ShippingDetails from './components/ShippingDetails';
import Purchasability from './components/Purchasability';
import GiftWrapping from './components/GiftWrapping';
import CustomsInformation from './components/CustomsInformation';
import SEO from './components/SEO';
import OpenGraphSharing from './components/OpenGraphSharing';

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
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <Description
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div style={homepageStyle}>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <ImagesVideos
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div style={homepageStyle}>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <ProductIdentifiers
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 5:
        return (
          <div style={homepageStyle}>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <Pricing
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 6:
        return (
          <div style={homepageStyle}>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <Inventory
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 7:
        return (
          <div style={homepageStyle}>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <Variations
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 8:
        return (
          <div style={homepageStyle}>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <Customizations
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 9:
        return (
          <div style={homepageStyle}>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <StorefrontDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 10:
        return (
          <div style={homepageStyle}>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <CustomFields
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 11:
        return (
          <div style={homepageStyle}>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <RelatedProducts
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 12:
        return (
          <div style={homepageStyle}>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <DimensionsWeights
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 13:
        return (
          <div style={homepageStyle}>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <ShippingDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 14:
        return (
          <div style={homepageStyle}>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <Purchasability
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 15:
        return (
          <div style={homepageStyle}>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <GiftWrapping
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 16:
        return (
          <div style={homepageStyle}>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <CustomsInformation
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 17:
        return (
          <div style={homepageStyle}>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <SEO
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 18:
        return (
          <div style={homepageStyle}>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <OpenGraphSharing
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );

      default:
    }
  }
}

export default App;
