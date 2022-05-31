import React, { useState, useEffect } from 'react'
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

const addCategory = () => {
  const [category_name, setCategory_name] = useState("");
  const [status, setStatus] = useState("");
  const thumbnail = 1;
  const sub_category_count = 1;
  const created_by = 1;
  const navigate = useNavigate();


  const collectData = async () => {
    console.warn(category_name, status);
    let result = await fetch("http://localhost:5000/addcategory", {
      method: "post",
      cors: 'no-core', 
      body: JSON.stringify({ category_name, thumbnail, status, sub_category_count, created_by}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    navigate('/category');
    

  };



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
                    <CFormInput type="text" value={category_name} onChange={(e) => setCategory_name(e.target.value)}  id="inputEmail3" />
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
                <CButton type="button" onClick={collectData}>Save</CButton>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
     
    </CRow>
  )
}

export default addCategory
