import "cropperjs/dist/cropper.min.css";
import * as React from "react";
import { Modal, Button, Upload, message,  Row, Col } from 'antd';

const CropperPage : React.FC =() => {
  const imgRef = React.useRef<HTMLImageElement>(null);
    const [visible, setVisible] = React.useState(false);

    return (
        <>
          <h1>Список користувачів</h1>
          <Button type="primary" onClick={()=>setVisible(true)}>
          Редагування фото
        </Button>
        <Modal
          title="Обробка фото"
          centered
          visible={visible}
          onOk={()=>setVisible(false)}
          onCancel={() => setVisible(false)}
          width={1000}
          maskClosable={false}//чтобі модалка не віпадала при клике за областью
        >
          <p>content</p>
          <Row gutter={[8,8]}>
              <Col md={18} xs={24}>
                  <div>
                      <img src="https://vovalohika.tk/images/1200_431btv0l.ykj.jpeg"
                        ref={imgRef} 
                        width="100%" />
                  </div>
              </Col>
              {/* <Col md={6} xs={24}>
              <div
                    ref = {prevRef}
                    style={{
                        height: "150px",
                        border: "1px solid silver",
                        overflow: "hidden"
                    }}>
                </div>
              </Col> */}
          </Row>
        </Modal>
          </>
    )

}
export default CropperPage;