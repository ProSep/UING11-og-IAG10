import styled from 'styled-components';
import { urlFor } from "../../../utils/imageHandler";
import SingleItemFetch from "../singelItemFetch";


    const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
    outline: 1px solid transparent;
    margin-top: 4.2rem;
    font-weight: 900;
    line-height: 1.125;
    text-transform: uppercase;
    font-style: italic;
    `;

    const Grid = styled.div`
    display: grid;
    grid-gap: 0.5em;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(6, 1fr);
    width: 100vw;
    height: 100vh;
    `;

    const Box1 = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row: 1;
    `;

    const Box2 = styled.div`
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row: 1;
    `;

    const Box3 = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row: 2;
    `; 

    // const Box4 = styled.div`
    // grid-column-start: 3;
    // grid-column-end: 5;
    // grid-row: 2;
    // `; 

    const ProduktBilde = styled.img`
    padding: 1.5rem;
    `;

const Product = ({whatContent}) => {
    const {status, data} = SingleItemFetch( whatContent );

    console.log(data);
    



    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'error') return <p>Noe gikk galt når data ble hentet. {data?.message}</p>;

    return(
        <>
    <Grid>
    <Box2>
        
    <Title>{data?.tittel}</Title>
    <Title>{data?.forfatter}</Title>
        
    </Box2>
    <Box1>{data?.bilde ? (
        <ProduktBilde src={urlFor(data.bilde).width(400).format('webp').url()}
        alt={data.bilde.beskrivelse} />
    ): null}</Box1>
      <Box3>{data?.detaljer}</Box3>
      </Grid>
      </>
    )};

export default Product;