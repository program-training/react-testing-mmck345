import { useState } from 'react';
import DataQR from '../../Interfaces/InterfaceDataQR';
import QRView from '../QRView/QRView';
import styles from './OutArea.module.css';


type Props = {
    QRData: DataQR
};
     
export default function OutArea({QRData}: Props) {

    const [visibleMD, setVisibleMD] = useState<boolean>(false)

    function handleShowMetaData() {
        setVisibleMD(!visibleMD)
    }

    function formatDateTime(timestamp: number): string {
        const date = new Date(timestamp);
      
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
      
        const hours = date.getHours().toString().padStart(2, '0');
        const mins = date.getMinutes().toString().padStart(2, '0');
        const secs = date.getSeconds().toString().padStart(2, '0');
      
        return `${month}/${day}/${year} ${hours}:${mins}:${secs}`;
    }

    return (
        <div className={styles.main}>

            <div className={styles.subDiv} onClick={handleShowMetaData}>
                <QRView urlImageQr={QRData.urlImg}></QRView>
            </div>

            {
                visibleMD &&
                <div className={`${styles.metaData}`}>
                    <ul style={{listStyleType: 'none'}}>
                        <li>Data Time: {formatDateTime(QRData.metaData.dateTime)}</li>
                        <li>URL Image: <a href={QRData.metaData.urlQRCode}>URL QR Code</a></li>
                        <li>Sizes Image: {QRData.metaData.sizes}</li>
                    </ul>
                </div>
            }
            
        </div>
    );
}

// <div>
//  <button type="button" onClick={handleShowMetaData}>Show MetaData</button>
// </div>