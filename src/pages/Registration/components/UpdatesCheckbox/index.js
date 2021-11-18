import React from 'react';

const UpdatesCheckbox = ({ defaultChecked, name, onChange }) => {
  return (
    <div class='form-group' style={{ paddingTop: '4rem' }}>
      <div class='form-check'>
        <input
          class='form-check-input'
          type='checkbox'
          id='gridCheck'
          defaultChecked={defaultChecked}
          name={name}
          onChange={onChange}
        />
        <label class='form-check-label' for='gridCheck'>
          <span>I want to receive important updates on </span>
          <i class='fab fa-whatsapp'></i>
          <span> WhatsApp</span>
        </label>
      </div>
    </div>
  );
};

export default UpdatesCheckbox;
