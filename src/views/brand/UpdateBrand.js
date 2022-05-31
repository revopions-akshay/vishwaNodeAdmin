import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import {useNavigate} from 'react-router-dom';

const UpdateBrand = () => {
  const [brand_name, setBrand_name] = useState("");
  const [status, setStatus] = useState("");
  const thumbnail = 1;
  const product_count = 1;
  const created_by = 1;
  const navigate = useNavigate();

  const params = useParams();
  useEffect(() => {
    console.warn(params);
    getBrandDetails();
   }, [])
   

  const collectData = async () => {
    // console.warn(brand_name, status);
    let result = await fetch(`http://localhost:5000/brand/update/${params.id}`, {
      method: "post",
      cors: 'no-core', 
      body: JSON.stringify({ brand_name, status}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    

  };

  const getBrandDetails = async ()=>{
      let result = await fetch(`http://localhost:5000/brand/details/${params.id}`)
      result = await result.json();
      console.warn(result);
      setBrand_name(result.brand_name)
      setStatus(result.status)
  }



  return (
    <CRow>
           
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong></strong> <small>Add New Brand</small>
          </CCardHeader>
          <CCardBody>
      
            <DocsExample>
              <CForm>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="brandname" className="col-sm-2 col-form-label">
                    Brand Name
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" value={brand_name} onChange={(e) => setBrand_name(e.target.value)}  id="inputEmail3" />
                  </CCol>
                </CRow>

                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputState" className="col-sm-2 col-form-label">State</CFormLabel>
                  <CCol sm={10}>
                    <CFormSelect id="inputState" value={status} onChange={(e) => setStatus(e.target.value)} >
                      <option value="">select</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </CFormSelect>
                  </CCol>
                </CRow>
                <CButton type="button" onClick={collectData}>Update</CButton>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
     
    </CRow>
  )
}

export default UpdateBrand
