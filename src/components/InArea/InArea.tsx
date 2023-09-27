import InputURL from '../InputURL/InputURL';
import styles from './InArea.module.css';


type Props = {
    setQRData: React.Dispatch<React.SetStateAction<string>>
};

export default function InArea({setQRData} : Props) {
    return (
        <div>
            <InputURL setQRData={setQRData}/>
        </div>
    );
}

