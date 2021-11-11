import React from 'react';
import './../../css/component.css';

const ImagesVideos = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h5 style={{ fontWeight: '600' }}>Product Information</h5>
        <div>Information to help define a product</div>
      </div>
      <div className='tab-card'>
        {/* Heading Part along with upload buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h5 style={{ fontWeight: '600' }}>Images {'&'} Videos</h5>
          <div>
            <button type='button' className='btn btn-outline-primary'>
              <i class='fas fa-plus'></i>&nbsp; Add from URL
            </button>
            &nbsp;&nbsp;
            <button type='button' className='btn btn-outline-primary'>
              <i class='fas fa-cloud-upload-alt'></i>&nbsp; Upload Images
            </button>
          </div>
        </div>
        <span>Add images and videos of your product to engage customers</span>
        {/* Images Section */}
        <div>
          <h5 className='sub-heading'>Images</h5>
          <div className='images-section'>
            <i
              class='fas fa-photo-video fa-3x'
              style={{
                color: '#3469fa',
                padding: '1rem 0',
              }}
            ></i>
            <div style={{ fontWeight: '600' }}>
              Drag {'&'} Drop images here to upload
            </div>
            <div>or click the "Add from URL""Upload Images" buttons</div>
          </div>
        </div>
        {/* Videos section */}
        <div>
          <h5 className='sub-heading'>Videos</h5>
          <div>No videos have been added yet</div>
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type='button'
            className='btn btn-outline-primary'
            style={{ minWidth: '10vw' }}
          >
            SAVE
          </button>
          &nbsp;&nbsp;
          <button
            type='button'
            className='btn btn-outline-primary'
            style={{ minWidth: '10vw' }}
            onClick={Previous}
          >
            PREVIOUS
          </button>
          &nbsp;&nbsp;
          <button
            type='button'
            className='btn btn-outline-primary'
            style={{ minWidth: '10vw' }}
            onClick={Continue}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagesVideos;
