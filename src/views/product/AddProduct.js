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

const AddProduct = () => {
  const [product_name, setProduct_name] = useState("");
  const [status, setStatus] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail ]= useState([]);
  const [images, setImages] = useState([]);
  const [sub_category, setSub_category] = useState("");
  const [sub_category_type, setSub_category_type] = useState("");
  const [gst_id, setGst_id] = useState("");
  const [type, setType] = useState("");
  const [quality, setQuality] = useState("");
  const [size, setSize] = useState("");
  const [mrp, setMrp] = useState("");
  const [dp, setDp] = useState("");
  const [total, setTotal] = useState("");
  const [discountgross, setDiscountgross] = useState("");
  const [discountnet, setDiscountnet] = useState("");
  const [discountonmrp, setDiscountonmrp] = useState("");
  const [hsn, setHsn] = useState("");
  const [code, setCode] = useState("");
  const [quantity, setQuantity] = useState("");
  const [gstrate, setGstrate] = useState("");
  const [margin, setMargin] = useState("");
  const [customernetrate, setCustomernetrate] = useState("");
  const [includingtax, setIncludingtax] = useState("");
  const [customergrossdiscount, setCustomergrossdiscount] = useState("");
  const [customernetdiscount, setCustomernetdiscount] = useState("");
  const [shipping, setShipping] = useState("");

  const navigate = useNavigate();








  const collectData = async () => {
    console.warn(product_name, status);
    let result = await fetch("http://localhost:5000/product/add", {
      method: "post",
      cors: 'no-core', 
      body: JSON.stringify({ product_name, thumbnail, status, quantity, created_by}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    

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
                    Product Name
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" value={product_name} onChange={(e) => setProduct_name(e.target.value)}  id="inputEmail3" />
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

                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputState" className="col-sm-2 col-form-label">Brand</CFormLabel>
                  <CCol sm={10}>
                    <CFormSelect id="inputState" value={brand} onChange={(e) => setBrand(e.target.value)} >
                      <option value="">select</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </CFormSelect>
                  </CCol>
                </CRow>
                
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputState" className="col-sm-2 col-form-label">Category</CFormLabel>
                  <CCol sm={10}>
                    <CFormSelect id="inputState" value={category} onChange={(e) => setCategory(e.target.value)} >
                      <option value="">select</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </CFormSelect>
                  </CCol>
                </CRow>

                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputState" className="col-sm-2 col-form-label">Category</CFormLabel>
                  <CCol sm={10}>
                    <CFormSelect id="inputState" value={sub_category} onChange={(e) => setSub_category(e.target.value)} >
                      <option value="">select</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </CFormSelect>
                  </CCol>
                </CRow>

                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputState" className="col-sm-2 col-form-label">Category</CFormLabel>
                  <CCol sm={10}>
                    <CFormSelect id="inputState" value={sub_category_type} onChange={(e) => setSub_category_type(e.target.value)} >
                      <option value="">select</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </CFormSelect>
                  </CCol>
                </CRow>

                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputState" className="col-sm-2 col-form-label">Category</CFormLabel>
                  <CCol sm={10}>
                    <CFormSelect id="inputState" value={gst_id} onChange={(e) => setGst_id(e.target.value)} >
                      <option value="">select</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </CFormSelect>
                  </CCol>
                </CRow>


                
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputState" className="col-sm-2 col-form-label">Category</CFormLabel>
                  <CCol sm={10}>
                    <CFormSelect id="inputState" value={type} onChange={(e) => setType(e.target.value)} >
                      <option value="">select</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </CFormSelect>
                  </CCol>
                </CRow>


                <CRow className="mb-3">
                  <CFormLabel htmlFor="brandname" className="col-sm-2 col-form-label">
                    Quality
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" value={quality} onChange={(e) => setQuality(e.target.value)}  id="inputEmail3" />
                  </CCol>
                </CRow>


                <CRow className="mb-3">
                  <CFormLabel htmlFor="brandname" className="col-sm-2 col-form-label">
                    Size
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" value={size} onChange={(e) => setSize(e.target.value)}  id="inputEmail3" />
                  </CCol>
                </CRow>

                <CRow className="mb-3">
                  <CFormLabel htmlFor="brandname" className="col-sm-2 col-form-label">
                    MRP
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" value={mrp} onChange={(e) => setMrp(e.target.value)}  id="inputEmail3" />
                  </CCol>
                </CRow>

                <CRow className="mb-3">
                  <CFormLabel htmlFor="brandname" className="col-sm-2 col-form-label">
                    DP
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" value={dp} onChange={(e) => setDp(e.target.value)}  id="inputEmail3" />
                  </CCol>
                </CRow>

                <CRow className="mb-3">
                  <CFormLabel htmlFor="brandname" className="col-sm-2 col-form-label">
                    Total
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" value={total} onChange={(e) => setTotal(e.target.value)}  id="inputEmail3" />
                  </CCol>
                </CRow>

                

                 <CRow className="mb-3">
                  <CFormLabel htmlFor="brandname" className="col-sm-2 col-form-label">
                  Gross Discount
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" value={discountgross} onChange={(e) => setDiscountgross(e.target.value)}  id="inputEmail3" />
                  </CCol>
                </CRow>


                <CRow className="mb-3">
                  <CFormLabel htmlFor="brandname" className="col-sm-2 col-form-label">
                  Net Discount
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" value={discountnet} onChange={(e) => setDiscountnet(e.target.value)}  id="inputEmail3" />
                  </CCol>
                </CRow>

                <CRow className="mb-3">
                  <CFormLabel htmlFor="brandname" className="col-sm-2 col-form-label">
                  Discount On Mrp
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" value={discountonmrp} onChange={(e) => setDiscountonmrp(e.target.value)}  id="inputEmail3" />
                  </CCol>
                </CRow>
                
                
                <CRow className="mb-3">
                  <CFormLabel htmlFor="brandname" className="col-sm-2 col-form-label">
                  HSN
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" value={hsn} onChange={(e) => setHsn(e.target.value)}  id="inputEmail3" />
                  </CCol>
                </CRow>

                <CRow className="mb-3">
                  <CFormLabel htmlFor="brandname" className="col-sm-2 col-form-label">
                  Code
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" value={code} onChange={(e) => setCode(e.target.value)}  id="inputEmail3" />
                  </CCol>
                </CRow>


                <CRow className="mb-3">
                  <CFormLabel htmlFor="brandname" className="col-sm-2 col-form-label">
                  Quantity
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)}  id="inputEmail3" />
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

export default AddProduct





