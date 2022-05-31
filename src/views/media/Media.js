import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as axios from 'axios'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CFormText,
  CFormTextarea,
  CFormLabel,
  CForm,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'

import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Media = () => {
  // const [media, setNewMedia] = useState(
  //    {
  //      media:''
  //    }
  // )

  // const [media, setNewMedia] = useState("");

  // const imageUpload = (e) => {
  //     setNewMedia({...media, media: e.target.files});
  // }

  const [file, setFile] = useState([])
  // const [fileName, setFileName] = useState([])

  const saveFile = (e) => {
    setFile(e.target.files)
    setFileName(e.target.files.name)
  }

  const handleSubmit = async () => {
    const formData = new FormData()

    for (var i = 0; i < file.length; i++) {
      formData.append(`files`, file[i])
    }

    // const formData = new FormData();
    // formData.append("files", file);
    // formData.append("fileName", fileName);
    // console.warn(formData.files);

    // let result = await fetch("http://localhost:5000/addmedia", {
    //   method: "post",
    //   cors: 'no-core',
    //   body: formData,
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });
    // result = await result.json();
    // console.warn(result);


    axios({
      method: 'post',
      url: 'http://localhost:5000/addmedia',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(function (response) {
        //handle success
        console.log(response)
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      })
  }

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     formData.append('media', newMedia.media);

  //     axios.post('http://localhost:5000/users/add/', formData)
  //          .then(res => {
  //             console.log(res);
  //          })
  //          .catch(err => {
  //             console.log(err);
  //          });
  // }

  useEffect(() => {
    getMedia()
  }, [])

  const getMedia = async () => {
    let result = await fetch('http://localhost:5000/media')
    result = await result.json()
    console.log(result.data)
    setFile(result.data)
  }

  // const deleteMedia = async (id) => {
  //   let result = await fetch(`http://localhost:5000/media/delete/${id}`,{
  //     method: "Delete"
  //   });
  //   result = await result.json();
  //   if(result){
  //     getMedia();
  //   }
  // }

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            {/* <CCardHeader></CCardHeader> */}
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        {/* <div className="text-medium-emphasis small">New Clients</div>
                        <div className="fs-5 fw-semibold">9,123</div> */}
                        <a href="/addcategory">Add Category</a>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Recurring Clients</div>
                        <div className="fs-5 fw-semibold">22,643</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Pageviews</div>
                        <div className="fs-5 fw-semibold">78,623</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Organic</div>
                        <div className="fs-5 fw-semibold">49,123</div>
                      </div>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>

              <br />

              <CRow>
                <CCol xs={12}>
                  <CCard className="mb-4">
                    <CCardHeader>
                      <strong></strong> <small>Add New Media</small>
                    </CCardHeader>
                    <CCardBody>
                      <CForm>
                        <CRow className="mb-3">
                          <CFormLabel htmlFor="brandname" className="col-sm-2 col-form-label">
                            Upload Image
                          </CFormLabel>
                          <CCol sm={10}>
                            <CFormInput
                              type="file"
                              multiple
                              accept=".png, .jpeg, .jpg"
                              onChange={saveFile}
                              size="sm"
                              id="formFileSm"
                            />
                          </CCol>
                        </CRow>
                        <CButton type="button" onClick={handleSubmit}>
                          Save{' '}
                        </CButton>
                      </CForm>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>

              <br />
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow></CTableRow>
                </CTableHead>
                <CTableBody>
                  {/* <div class="row">
                  {file.map((item,index) => (
                    // <CTableRow v-for="item in tableItems" key={index}>
                    //   <CTableDataCell className="text-center">

                    
                      
                        <div class="col-md-3"  key={index}><img src={ item.thumbnail } height="200" className="card-img-top img-responsive" alt="img"/></div>
                     
                  ))}
                  </div> */}
                  <div class="row">
                   
                  {file ? file.map((item,index) => (
                    <div class="col-lg-2 col-sm-4" key={index}>
                     
                      <div class="card mb-4">
                        <div class="card-body text-center">
                          {/* <div class="text-medium-emphasis small text-uppercase fw-semibold"> */}
                          <img src={ item.thumbnail }  className="card-img-top img-responsive" alt="img"/>
                          {/* </div> */}
                         
                          
                        </div>
                      </div>

                    </div>
    )) : <div class="col-lg-2 col-sm-4"></div>}

                    

                  </div>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Media
