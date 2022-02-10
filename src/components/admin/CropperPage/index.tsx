import "cropperjs/dist/cropper.min.css";
import * as React from "react";
import { Modal, Button, Upload, message,  Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Cropper from "cropperjs";
import {InputGroup} from "../../common/InputGroup";

const CropperPage : React.FC =() => {

  const[imgValue, setImgValue]= React.useState("https://cdnn21.img.ria.ru/images/147479/74/1474797473_0:25:5428:3078_600x0_80_0_0_97485954c5b3570b0ba740021d0451ad.jpg")
  const imgRef = React.useRef<HTMLImageElement>(null);
    const [visible, setVisible] = React.useState(false);
    const prevRef = React.useRef<HTMLImageElement>(null);
    const [cropperObj, setCropperObj] = React.useState<Cropper>();

    const handleChangeFile = async (e: any) => {
      const file = (e.target.files as FileList)[0];
      if (file) {
        const url = URL.createObjectURL(file);
         
        await setVisible(true);
        let cropper= cropperObj;
        if (!cropper) {
          cropper = new Cropper(imgRef.current as HTMLImageElement, {
            aspectRatio: 1 / 1,
            viewMode: 1,
            preview: prevRef.current as HTMLImageElement,
          });
        }
        cropper?.replace(url);
        setCropperObj(cropper);
      }
    }


    const handleShow= async()=>{

      await setVisible(true)
      let cropper= cropperObj;
        if (!cropper) {
          cropper = new Cropper(imgRef.current as HTMLImageElement, {
            aspectRatio: 1 / 1,
            viewMode: 1,
            preview: prevRef.current as HTMLImageElement,
          });
        }
        cropper?.replace(imgValue);
        setCropperObj(cropper);
    }

    const handleCropped = async () => {
      const base64 = cropperObj?.getCroppedCanvas().toDataURL() as string;
      console.log("base64", base64);
      setVisible(false);
  }
  
    return (
        <>
          <h1>CROPPER</h1>
          {/* <Button type="primary" onClick={handleShow}>
          Редагування фото
        </Button> */}
        <div className="col-6 mb-4">
          <InputGroup
                field="photo"
                label="Фоточка"
                type="file"
                onChange={handleChangeFile}
               
              />
        </div>
        
        {/* <input
          id="uploadimg"
          className="d-none"
          type="file"
          onChange={handleChangeFile}
        /> */}

        <Modal
          title="Обробка фото"
          centered
          visible={visible}
          onOk={handleCropped}
          onCancel={() => setVisible(false)}
          width={1000}
          maskClosable={false}//чтобі модалка не віпадала при клике за областью
        >
          <p>content</p>
          <Row gutter={[8,8]}>
              <Col md={18} xs={24}>
                  <div>
                      <img src={imgValue}
                        ref={imgRef} 
                        width="100%" />
                  </div>
              </Col>
              {/* вівод превьюшки фотки */}
              <Col md={6} xs={24}>
              <div
                    ref = {prevRef}
                    style={{
                        height: "150px",
                        border: "1px solid silver",
                        overflow: "hidden"
                    }}>
                </div>
              </Col>
          </Row>
        </Modal>
          </>
    )

}
export default CropperPage;