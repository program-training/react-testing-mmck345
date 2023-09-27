import { useRef } from 'react';
import styles from './InputURL.module.css';

type Props = {
    setQRData: React.Dispatch<React.SetStateAction<string>>
};

export default function InputURL({setQRData}: Props) {

    const refInput = useRef<HTMLInputElement>(null)

    function handleClickGenerate(): void {
        const text = refInput.current?.value
        if (text) {
            const QRUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${text}&size=300x300`
            setQRData(QRUrl)
        }
    }

    return (
        <div className={styles.divInputAndButton}>
            <input type="text" placeholder='Enter Url for encoded to QR code' ref={refInput}/>
            <button type="button" onClick={handleClickGenerate}>Generate</button>
        </div>
    );
}