// App.js is the starting point of the component hierarchy. Depending upon the step value
// different components are rendered. And the step values are incremented/decremented on
// clicking next/previous buttons. Also the nextStep,prevStep,handleChange,toggleChange,
// state values are passed as props to the components which are rendered

import React from 'react';
import Sidemenu from './SideMenu';
import Navbar from './Navbar';
import BasicInformation from './BasicInformation';
import Description from './Description';
import ImagesVideos from './ImagesVideos';
import ProductIdentifiers from './ProductIdentifiers';
import Pricing from './Pricing';
import Inventory from './Inventory';
import Variations from './Variations';
import Customizations from './Customizations';
import StorefrontDetails from './StorefrontDetails';
import CustomFields from './CustomFields';
import RelatedProducts from './RelatedProducts';
import DimensionsWeights from './DimensionsWeights';
import ShippingDetails from './ShippingDetails';
import Purchasability from './Purchasability';
import GiftWrapping from './GiftWrapping';
import CustomsInformation from './CustomsInformation';
import SEO from './SEO';
import OpenGraphSharing from './OpenGraphSharing';

import './../../../src/App.css';
import './../../../node_modules/font-awesome/css/font-awesome.min.css';

const Dashboard = ({
  values,
  prevStep,
  nextStep,
  onEditorStateChange,
  handleChange,
  toggleChange,
  toggleSharedChange,
  handleAddValue,
  handleChangeVariantValue,
  handleChangeTable,
  handleAddRow,
  handleRemoveSpecificRow,
}) => {
  const step = values.step;

  switch (step) {
    case 1:
      return (
        <div className='homepage'>
          <Navbar />
          <div style={{ display: 'flex' }}>
            <Sidemenu step={step} />
            <BasicInformation
              nextStep={nextStep}
              toggleChange={toggleChange}
              handleChange={handleChange}
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
              prevStep={prevStep}
              nextStep={nextStep}
              onEditorStateChange={onEditorStateChange}
              handleChange={handleChange}
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
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
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
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
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
              prevStep={prevStep}
              nextStep={nextStep}
              handleAddValue={handleAddValue}
              handleChangeTable={handleChangeTable}
              handleAddRow={handleAddRow}
              handleRemoveSpecificRow={handleRemoveSpecificRow}
              toggleChange={toggleChange}
              handleChange={handleChange}
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
              prevStep={prevStep}
              nextStep={nextStep}
              toggleChange={toggleChange}
              handleChange={handleChange}
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
              prevStep={prevStep}
              nextStep={nextStep}
              toggleChange={toggleChange}
              toggleSharedChange={toggleSharedChange}
              handleAddValue={handleAddValue}
              handleChangeVariantValue={handleChangeVariantValue}
              handleChangeTable={handleChangeTable}
              handleAddRow={handleAddRow}
              handleRemoveSpecificRow={handleRemoveSpecificRow}
              handleChange={handleChange}
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
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
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
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
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
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
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
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
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
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
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
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
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
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
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
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
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
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
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
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
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
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
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
  //           nextStep={nextStep}
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
};

export default Dashboard;
