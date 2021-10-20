// App.js is the starting point of the component hierarchy. Depending upon the step value
// different components are rendered. And the step values are incremented/decremented on
// clicking next/previous buttons. Also the nextStep,prevStep,handleChange,toggleChange,
// state values are passed as props to the components which are rendered

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

import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

class App extends React.Component {
  state = {
    step: 1,
    // Basic Information States
    isCheckedvisibleOnStorefront: false,
    productName: '',
    sku: '',
    productType: '',
    defaultPrice: '',
    brand: '',
    weight: '',
    categories: {
      ShopAll: false,
      Bath: false,
      Garden: false,
      Kitchen: false,
      Publications: false,
      Utility: false,
    },
    // --> Description states
    descEditorState: EditorState.createEmpty(),
    descEditorContent: '',
    // --> Product Identifiers Only States
    ManufacturerPartNumber: '',
    ProductUPCorEAN: '',
    GlobalTradeNumber: '',
    BinPickingNumber: '',
    // --> Pricing Only States
    taxClass: '',
    taxCode: '',
    showAdvancedPricing: false,
    // if showAdvancedPricing = true under Pricing states
    cost: '',
    msrp: '',
    salePrice: '',
    bulkPricingDiscountType: '% Discount',
    discountTiers: [{}],
    // --> Inventory states
    trackInventory: false,
    // if track inventory is true, these states are activated under Inventory states
    levelofInventoryTracking: '',
    stock: '',
    lowStock: '',
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
  onEditorStateChange = (descEditorState) => {
    this.setState({
      descEditorState,
    });
    this.setState({
      descEditorContent: draftToHtml(
        convertToRaw(this.state.descEditorState.getCurrentContent())
      ),
    });
  };
  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  handleChangeTable = (idx) => (e) => {
    const { name, value } = e.target;
    const discountTiers = [...this.state.discountTiers];
    switch (name) {
      case 'minQuantity':
        discountTiers[idx].minQuantity = value;
        break;
      case 'discount':
        discountTiers[idx].discount = value;
        break;
      case 'unitPrice':
        discountTiers[idx].unitPrice = value;
        break;
      default:
    }
    this.setState({
      discountTiers,
    });
  };
  handleAddRow = (e) => {
    e.preventDefault();
    const item = {
      minQuantity: '',
      discount: '',
      unitPrice: '',
    };
    this.setState({
      discountTiers: [...this.state.discountTiers, item],
    });
  };
  // handleRemoveRow = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     discountTiers: this.state.discountTiers.slice(0, -1),
  //   });
  //   console.log(this.state.discountTiers);
  // };
  handleRemoveSpecificRow = (idx) => (e) => {
    e.preventDefault();
    const discountTiers = [...this.state.discountTiers];
    discountTiers.splice(idx, 1);
    this.setState({ discountTiers });
  };
  toggleChange = (e) => {
    if (e.target.name in this.state.categories) {
      this.setState({
        categories: {
          ...this.state.categories,
          [e.target.name]: !this.state.categories[e.target.name],
        },
      });
    }
    //for radios
    else if (e.target.name === 'levelofInventoryTracking') {
      this.setState({ [e.target.name]: e.target.value });
    }
    //for the show/hide advanced pricing button in pricing.js
    else if (e.target.title === 'showAdvancedPricing') {
      this.setState({ [e.target.title]: !this.state[e.target.title] });
    }
    //for other checkboxes
    else {
      this.setState({ [e.target.name]: !this.state[e.target.name] });
    }
  };

  render() {
    const step = this.state.step;
    const values = {
      ...this.state,
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
                onEditorStateChange={this.onEditorStateChange}
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
                handleChangeTable={this.handleChangeTable}
                handleAddRow={this.handleAddRow}
                handleRemoveRow={this.handleRemoveRow}
                handleRemoveSpecificRow={this.handleRemoveSpecificRow}
                toggleChange={this.toggleChange}
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
                toggleChange={this.toggleChange}
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
    // return (
    //   <div className='homepage'>
    //     <Navbar />
    //     <div style={{ display: 'flex' }}>
    //       <Sidemenu step={step} />
    //       <div>
    //         <BasicInformation
    //           nextStep={this.nextStep}
    //           toggleChange={this.toggleChange}
    //           handleChange={this.handleChange}
    //           values={values}
    //         />
    //         <Description
    //           prevStep={this.prevStep}
    //           nextStep={this.nextStep}
    //           handleChange={this.handleChange}
    //           values={values}
    //         />
    //         <Description
    //           prevStep={this.prevStep}
    //           nextStep={this.nextStep}
    //           handleChange={this.handleChange}
    //           values={values}
    //         />
    //         <Description
    //           prevStep={this.prevStep}
    //           nextStep={this.nextStep}
    //           handleChange={this.handleChange}
    //           values={values}
    //         />
    //         <Description
    //           prevStep={this.prevStep}
    //           nextStep={this.nextStep}
    //           handleChange={this.handleChange}
    //           values={values}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default App;
