import styled from 'styled-components';
import { urlFor } from "../../../utils/imageHandler";
import SingleItemFetch from "../singelItemFetch";
    


    const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 50px 50px;
    grid-gap: 5px;
    `;

    const ProduktTittel = styled.h1`
    font-weight: 300;
    display: flex;
    justify-content: center;
    padding: .5rem;
    grid-row: 2 / span 2;
    grid-column: 3rem / span 1;
    `;

    const ProduktDetaljer = styled.h2`
    display: flex;
    justify-content: center;
    padding: .5rem;
    `; 

    const ProduktBilde = styled.img`
    display: flex;
    justify-content: center;
    padding: .5rem;
    grid-row: 1 / span 2;
    grid-column: 1 / span 2;
    `;

const Product = ({whatContent}) => {
    const {status, data} = SingleItemFetch( whatContent );

    console.log(data);
    



    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'error') return <p>Noe gikk galt når data ble hentet. {data?.message}</p>;

    return(
    <>
    <Grid>
    <ProduktTittel>{data?.tittel}</ProduktTittel>
    <ProduktDetaljer>{data?.detaljer}</ProduktDetaljer>
    <ProduktDetaljer>{data?.forfatter}</ProduktDetaljer>
    {data?.bilde ? (
        <ProduktBilde src={urlFor(data.bilde).width(800).format('webp').url()}
        alt={data.bilde.beskrivelse} />
    ): null}
    </Grid>
    </>
    )};

export default Product;