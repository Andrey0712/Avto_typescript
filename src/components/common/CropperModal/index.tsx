import "cropperjs/dist/cropper.min.css";
import * as React from "react";
import { Modal, Col, Row,Button } from "antd";
import Cropper from "cropperjs";
import { ICropperProps } from "./types";
//import {urlBackend} from '../../../http_common';

const CropperModal: React.FC<ICropperProps> = ({
  onSelected,//метод который срабатывает когда фотка выбрана
  aspectRation=1/1//параметры кропера
}) => {
  const [visible, setVisible] = React.useState(false);//открытие модалки
  const[imgValue, setImgValue]= React.useState("https://cdnn21.img.ria.ru/images/147479/74/1474797473_0:25:5428:3078_600x0_80_0_0_97485954c5b3570b0ba740021d0451ad.jpg")
  const imgRef = React.useRef<HTMLImageElement>(null);//ссылка на фотку
  const prevRef = React.useRef<HTMLImageElement>(null);//ссылка на превью
  const [cropperObj, setCropperObj] = React.useState<Cropper>();// сам кропер

  //вибір файла
  const handleChangeFile = async (e: any) => {
    const file = (e.target.files as FileList)[0];
    if (file) {
      const url = URL.createObjectURL(file);

      await setVisible(true);
      console.log("Image ref ", imgRef);
      let cropper = cropperObj;
      if (!cropper) {
        cropper = new Cropper(imgRef.current as HTMLImageElement, {
            aspectRatio: 1 / 1,
          viewMode: 1,
          preview: prevRef.current as HTMLImageElement,
        });
      }
      cropper.replace(url);
      e.target.value = "";// очистка инпута
      setCropperObj(cropper);
    }
  };

  const handleOk = async () => {
    const base64 = cropperObj?.getCroppedCanvas().toDataURL() as string;//обработчик для получения басе64
    console.log("base64", base64);
    await setVisible(false);//скрыть модалку
    onSelected(base64);// передать фотку
  };
  return (
    <>
      <label htmlFor="uploading">
        <img src={`https://pngicon.ru/file/uploads/plus.png`}  alt="" width="30%" style={{ cursor: "pointer" }} />
      </label>

      <input
        id="uploading"
        style={{ display: "none" }}
        type="file"
        onChange={handleChangeFile}
      />

      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <Row gutter={[8, 8]}>
          <Col md={18} xs={24}>
            <div style={{ maxHeight: "600px" }}>
              <img
                src={imgValue}
                width="100%"
                ref={imgRef}
              />
            </div>
          </Col>
          <Col md={6} xs={24}>
            <div
              ref={prevRef}
              style={{
                height: "150px",
                border: "1px solid silver",
                overflow: "hidden",
              }}
            ></div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default CropperModal;