import { urlFor } from "../../../utils/imageHandler";
import SingleItemFetch from "../singelItemFetch";

const Product = ({whatContent}) => {
    const {status, data} = SingleItemFetch( whatContent );

    console.log(data);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'error') return <p>Noe gikk galt når data ble hentet. {data?.message}</p>;

    return(
    <>
    <h1>{data?.tittel}</h1>
    <h2>{data?.detaljer}</h2>
    <h2>{data?.forfatter}</h2>
    {data?.bilde ? (
        <img src={urlFor(data.bilde).width(800).format('webp').url()}
        alt={data.bilde.beskrivelse} />
    ): null}
    </>
    )};

export default Product;