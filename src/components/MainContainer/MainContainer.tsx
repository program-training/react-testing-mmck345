import { useState } from 'react';
import InArea from '../InArea/InArea';
import OutArea from '../OutArea/OutArea';
import QRView from '../QRView/QRView';
import styles from './MainContainer.module.css';
import DataQR from '../../Interfaces/InterfaceDataQR';

export default function MainContainer() {

    const [QRUrl, setQRUrl] = useState('')

    const dataQR: DataQR = { 
        urlImg: QRUrl,
        metaData: {
            dateTime: Date.now(),
            urlQRCode: QRUrl,
            sizes: '300x300'
        }
    }

    return (
        <>
            <div className={styles.main}>
                <h1>Create QR Code</h1>
                <div>
                    { QRUrl && <OutArea QRData={dataQR}></OutArea>}
                </div>
                <div>
                    <InArea setQRData={setQRUrl}/>
                </div>
            </div>  
        </>

    );
}
