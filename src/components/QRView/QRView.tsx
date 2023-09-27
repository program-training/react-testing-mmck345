// import styles from './QRView.module.css';

type Props = {
    urlImageQr: string
};
     
export default function QRView({urlImageQr}: Props) {
    console.log(urlImageQr);
    return (
        <div>
            <img src={urlImageQr} alt="qr view" />
        </div>
    );
}
