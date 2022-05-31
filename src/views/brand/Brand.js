import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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

const BrandList = () => {
 
 
  // const BrandList = () => {
  const [brands, setBrands] = useState([])
  
  
  useEffect(() => {
    getBrands()
  }, [])
  
 
  const getBrands = async () => {
    let result = await fetch('http://localhost:5000/brand');
    result = await result.json();
    setBrands(result.data);
    
  }


  const deleteBrand = async (id) => {
    console.warn(id); 
    let result = await fetch(`http://localhost:5000/brand/delete/${id}`,{
      method: "Delete"
    });
    result = await result.json();
    if(result){
      getBrands();
    }
  }

   
  


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
                        <a href="/addbrand" >Add Brand</a>
                      
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

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    {/* <CTableHeaderCell className="text-center"><CIcon icon={cilPeople} />
                    </CTableHeaderCell> */}
                    <CTableHeaderCell>Id</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Brand Name</CTableHeaderCell>
                    <CTableHeaderCell>Product Count</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">thumbnail</CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {brands ? brands.map((item,index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        {/* <CAvatar size="md" src={item.brand_name} status={item.status} /> */}
                        <div>{item.brand_id}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.brand_name}</div>
                        {/* <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div> */}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      <div>{item.product_count}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      <div>{item.thumbnail}</div>
                       
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      <div>{item.status}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <button type="button" onClick={()=>deleteBrand(item._id)}>Delete</button>
                        <a href={"/brand/update/"+item._id}>Edit</a>
                      </CTableDataCell>
                    </CTableRow>
                  )) : <CTableRow></CTableRow>}
                </CTableBody>
              </CTable>
            </CCardBody>  
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default BrandList
