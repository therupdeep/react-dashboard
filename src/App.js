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
import './../node_modules/font-awesome/css/font-awesome.min.css';

class App extends React.Component {
  state = {
    step: 1,
    isCheckedvisibleOnStorefront: false,
    productName: '',
    sku: '',
    productType: '',
    defaultPrice: '',
    brand: '',
    weight: 0,
    categories: {
      ShopAll: false,
      Bath: false,
      Garden: false,
      Kitchen: false,
      Publications: false,
      Utility: false,
    },
    //Product Identifiers States
    ManufacturerPartNumber: '',
    ProductUPCorEAN: '',
    GlobalTradeNumber: '',
    BinPickingNumber: '',
    //Pricing States
    taxClass: '',
    taxCode: '',
    //Inventory
    trackInventory: false,
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
  toggleChange = (e) => {
    if (e.target.name in this.state.categories) {
      this.setState({
        categories: {
          ...this.state.categories,
          [e.target.name]: e.target.checked,
        },
      });
    } else {
      this.setState({ [e.target.name]: e.target.checked });
    }
  };

  render() {
    const step = this.state.step;
    const {
      isCheckedvisibleOnStorefront,
      productName,
      sku,
      productType,
      defaultPrice,
      brand,
      weight,
      categories,
      ManufacturerPartNumber,
      ProductUPCorEAN,
      GlobalTradeNumber,
      BinPickingNumber,
      taxClass,
      taxCode,
      trackInventory,
    } = this.state;
    const values = {
      isCheckedvisibleOnStorefront,
      productName,
      sku,
      productType,
      defaultPrice,
      brand,
      weight,
      categories,
      ManufacturerPartNumber,
      ProductUPCorEAN,
      GlobalTradeNumber,
      BinPickingNumber,
      taxClass,
      taxCode,
      trackInventory,
    };
    switch (step) {
      case 1:
        return (
          <div className='homepage'>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <BasicInformation
                nextStep={this.nextStep}
                toggleChange={this.toggleChange}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className='homepage'>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <Description
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className='homepage'>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <ImagesVideos
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className='homepage'>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <ProductIdentifiers
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 5:
        return (
          <div className='homepage'>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <Pricing
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 6:
        return (
          <div className='homepage'>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <Inventory
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 7:
        return (
          <div className='homepage'>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <Variations
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 8:
        return (
          <div className='homepage'>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <Customizations
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 9:
        return (
          <div className='homepage'>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <StorefrontDetails
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 10:
        return (
          <div className='homepage'>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <CustomFields
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 11:
        return (
          <div className='homepage'>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <RelatedProducts
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 12:
        return (
          <div className='homepage'>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <DimensionsWeights
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 13:
        return (
          <div className='homepage'>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <ShippingDetails
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 14:
        return (
          <div className='homepage'>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <Purchasability
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 15:
        return (
          <div className='homepage'>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <GiftWrapping
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 16:
        return (
          <div className='homepage'>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <CustomsInformation
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 17:
        return (
          <div className='homepage'>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <SEO
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 18:
        return (
          <div className='homepage'>
            <Navbar />
            <div style={{ display: 'flex' }}>
              <Sidemenu step={step} />
              <OpenGraphSharing
                prevStep={this.prevStep}
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
