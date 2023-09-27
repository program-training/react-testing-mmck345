export default interface DataQR {
    urlImg: string;
    metaData: MetaData;
}

interface MetaData {
    dateTime: number
    urlQRCode: string
    sizes: string
}