import React, { Component } from 'react';
import Dashboard from './pages/Dashboard';
import Registration from './pages/Registration';

import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

class App extends Component {
  state = {
    //Registration --->
    registrationStep: 1,
    mobileNo: '',
    otp: '',
    emailId: '',
    password: '',
    showPassword: false,
    getUpdates: false,

    //GST Details --->
    gstIN: '',

    //Pickup Address --->
    address_on_gst: false,
    room_floor_buildingno: '',
    st_local_landmk: '',
    pin: '',
    city: '',
    st: 'Uttar Pradesh',

    //Bank Details --->
    acc_no: '',
    acc_no2: '',
    ifsc_code: '',

    //Supplier Details --->
    store_name: '',
    fullname: '',
    supplier_terms: false,

    //Dashboard ---->
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
    // --> Variant states
    variantOptions: [],
    setSelectAll: false,
    sharedOptions: [
      {
        optionName: 'Color',
        displayLabel: 'Color',
        type: 'Dropdown',
        values: 'Blue, Green, Red',
        products: 0,
        selected: false,
      },
      {
        optionName: 'Product Size',
        displayLabel: 'Size',
        type: 'Dropdown',
        values: 'M, S, XL',
        products: 0,
        selected: false,
      },
    ],
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
  // go back to previous step
  prevStepRegistration = () => {
    const { registrationStep } = this.state;
    this.setState({ registrationStep: registrationStep - 1 });
    console.log(this.state);
  };

  // proceed to the next step
  nextStepRegistration = () => {
    const { registrationStep } = this.state;
    this.setState({ registrationStep: registrationStep + 1 });
    console.log(this.state);
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
    console.log(this.state);
  };
  handleChangeVariantValue = (idx, index) => (e) => {
    const { name, value } = e.target;
    if (name === 'variantValues') {
      const variantOptions = [...this.state.variantOptions];
      variantOptions[idx].variantValues[index] = value;
      this.setState({
        variantOptions,
      });
      console.log(this.state);
    }
  };

  handleChangeTable = (idx) => (e) => {
    const { name, value } = e.target;
    if (this.state.step === 5) {
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
    } else if (this.state.step === 7) {
      const variantOptions = [...this.state.variantOptions];
      switch (name) {
        case 'name':
          variantOptions[idx].name = value;
          break;
        case 'type':
          variantOptions[idx].type = value;
          break;
        case 'isDefault':
          variantOptions[idx].isDefault = value;
          break;
        default:
      }
      this.setState({
        variantOptions,
      });
    }
    console.log(this.state);
  };
  handleAddRow = (e) => {
    e.preventDefault();
    if (this.state.step === 5) {
      const item = {
        minQuantity: '',
        discount: '',
        unitPrice: '',
      };
      this.setState({
        discountTiers: [...this.state.discountTiers, item],
      });
    } else if (this.state.step === 7) {
      const item = {
        name: '',
        type: 'Radio Buttons',
        variantValues: [''],
        isDefault: '',
      };
      this.setState({
        variantOptions: [...this.state.variantOptions, item],
      });
      console.log(this.state);
    }
  };
  handleAddValue = (idx) => (e) => {
    e.preventDefault();
    console.log('calling addvalue');
    const variantOptions = [...this.state.variantOptions];
    variantOptions[idx].variantValues = [
      ...variantOptions[idx].variantValues,
      '',
    ];
    this.setState({
      variantOptions,
    });
    console.log(variantOptions[idx].variantValues);
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
    if (this.state.step === 5) {
      const discountTiers = [...this.state.discountTiers];
      discountTiers.splice(idx, 1);
      this.setState({ discountTiers });
    } else if (this.state.step === 7) {
      const variantOptions = [...this.state.variantOptions];
      variantOptions.splice(idx, 1);
      this.setState({ variantOptions });
    }
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
    //for the show/hide advanced pricing button in pricing.js & show/hide password
    else if (
      e.target.title === 'showAdvancedPricing' ||
      e.target.title === 'showPassword'
    ) {
      this.setState({ [e.target.title]: !this.state[e.target.title] });
    } else if (e.target.name === 'setSelectAll') {
      //Doing a callback function as the individual checkboxes depend upon selectall value
      this.setState({ [e.target.name]: !this.state[e.target.name] }, () => {
        const sharedOptions = [...this.state.sharedOptions];
        sharedOptions.forEach((item) => {
          item.selected = this.state.setSelectAll;
        });
        this.setState({ sharedOptions });
      });
    }
    //for other checkboxes
    else {
      this.setState({ [e.target.name]: !this.state[e.target.name] });
    }
    console.log(this.state);
  };
  //to be modified
  toggleSharedChange = (idex) => (e) => {
    const sharedOptions = [...this.state.sharedOptions];
    sharedOptions[idex].selected = !sharedOptions[idex].selected;
    this.setState({ sharedOptions });
  };
  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };
  render() {
    const values = {
      ...this.state,
    };
    return (
      <Registration
        values={values}
        prevStep={this.prevStepRegistration}
        nextStep={this.nextStepRegistration}
        handleChange={this.handleChange}
        toggleChange={this.toggleChange}
        handleClickShowPassword={this.handleClickShowPassword}
      />
      // <Dashboard
      //   values={values}
      //   prevStep={this.prevStep}
      //   nextStep={this.nextStep}
      //   onEditorStateChange={this.onEditorStateChange}
      //   handleChange={this.handleChange}
      //   toggleChange={this.toggleChange}
      //   toggleSharedChange={this.toggleSharedChange}
      //   handleAddValue={this.handleAddValue}
      //   handleChangeVariantValue={this.handleChangeVariantValue}
      //   handleChangeTable={this.handleChangeTable}
      //   handleAddRow={this.handleAddRow}
      //   handleRemoveSpecificRow={this.handleRemoveSpecificRow}
      // />
    );
  }
}

export default App;
