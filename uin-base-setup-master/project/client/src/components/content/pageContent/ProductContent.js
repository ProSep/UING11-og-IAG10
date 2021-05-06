import styled from 'styled-components';
import { urlFor } from "../../../utils/imageHandler";
import SingleItemFetch from "../singelItemFetch";
    


    const Grid = styled.div`
    display: grid;
    grid-template-columns: 40% 20% auto;
    grid-template-rows: 20% 25% 25% auto;
    grid-gap: 5px;
    `;

    const ProduktTittel = styled.h1`
    text-align: center;
    font-size: 3rem;
    outline: 1px solid transparent;
    margin-top: 4.2rem;
    font-weight: 900;
    line-height: 1.125;
    text-transform: uppercase;
    font-style: italic;
    display: grid;
    grid-area: 1 / 2;
    

    `;

    const TitleBox = styled.div`
    width: 800px;
    margin-left: 4rem;
    display: grid;
    grid-area: 4 / 1;
    `;

    const ProduktForfatter = styled.h2`
    text-align: center;
    font-size: 2rem;
    margin-top: 11rem;
    font-weight: 400;
    line-height: 1.5;
    display: grid;
    grid-area: 1 / 2;
    `; 

    const ProduktDetaljer = styled.h2`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 400;
    line-height: 1.5;
    display: grid;
    grid-area: 4 / 2;
    `; 

    const ProduktBilde = styled.img`
    padding: 3.5rem;
    display: grid;
    margin-left: 20rem;
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
    <ProduktForfatter>{data?.forfatter}</ProduktForfatter>
    {data?.bilde ? (
        <ProduktBilde src={urlFor(data.bilde).width(400).format('webp').url()}
        alt={data.bilde.beskrivelse} />
    ): null}
      <TitleBox><ProduktDetaljer>{data?.detaljer}</ProduktDetaljer></TitleBox>
      </Grid>
    </>
    )};

export default Product;