import styled from 'styled-components';
import { urlFor } from "../../../utils/imageHandler";
import SingleItemFetch from "../singelItemFetch";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

const Grid2 = styled.div`
    display: grid;
    grid-gap: 0.5em;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(6, 1fr);
    width: 84.5vw;
    height: 50vh;
    `;

const SectionBox1 = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row: 1;
    `;

const SectionBox3 = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row: 2;
    `;

const SectionBox4 = styled.div`
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row: 2;
    `;

const BestillBoks = styled.section`
    box-shadow: 0px 0px 10px 1px rgb(0 0 0 / 20%);
    display: block;
    align-items: center;
    height: 190px;
    overflow: hidden;
    width: 350px;
    border-radius: 15px;
    padding: 5%;
    margin-top: 2rem;
    `;

const VolumBoks = styled.section`
    box-shadow: 0px 0px 10px 1px rgb(0 0 0 / 20%);
    display: block;
    align-items: center;
    height: 190px;
    overflow: hidden;
    width: 350px;
    border-radius: 15px;
    padding: 5%;
    margin-top: 29.5rem;
    font-weight: 450;
    `;

const Title = styled.h1`
    font-size: 3rem;
    margin-top: 4.2rem;
    font-weight: 300;
    line-height: 1.125;
    `;

const ForfatterStil = styled.h1`
    font-size: 1.8rem;
    margin-top: 1.5rem;
    font-weight: 300;
    line-height: 1.125;
    `;

const Pris = styled.h2`
    font-size: 3rem;

    line-height: 1.125;
    `;

// Main Grid
const Grid = styled.div`
    display: grid;
    grid-gap: 0.5em;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(6, 1fr);
    width: 100vw;
    height: 70vh;
    `;

// Top Left Grid
const MainBox1 = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row: 1;
    margin-top: 5rem;
    `;

// Top Right Grid
const MainBox2 = styled.div`
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row: 1;
    margin-left: 12rem;
    `;

// Bottom Left Grid
const MainBox3 = styled.div`
    grid-column: 1 / 3;
    grid-row: 2;
    margin-top: 5rem;
    font-size: 2rem;
    font-weight: 450;
    line-height: 3rem;
    `;

// Bottom Right Grid
const MainBox4 = styled.div`
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row: 2;
    display: block;
    align-items: center;
    height: 5rem;
    overflow: hidden;
    width: 60rem;
    position: relative;
    background-color: #F9F9F9;
    `;

const PrisTittel = styled.h2`
    margin-top: 12rem;
    margin-left: 3rem;
    `;

const InfoListe = styled.li`
    font-size: 1.5rem;
    margin-top: 1.5rem;
    `;

const InfoBox = styled.div`
    margin-top: 2rem;
    `;

const KlikkOgVelg = styled.h2`
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 1.5rem;
`;

const NettbestillingBoks = styled.h2`
    font-weight: 500;
    font-size: 2rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`;

const Product = ({ whatContent }) => {
    const { status, data } = SingleItemFetch(whatContent);

    console.log(data);




    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'error') return <p>Noe gikk galt når data ble hentet. {data?.message}</p>;

    return (
        <>
            <Grid>
                <MainBox2>
                    <Grid2>

                        <SectionBox1>
                            <Title>{data?.tittel}</Title>
                            <ForfatterStil>Av {data?.forfatter}</ForfatterStil>
                        </SectionBox1>

                        <SectionBox3>
                            <PrisTittel>PRIS</PrisTittel>
                            <Pris><LocalShippingIcon fontSize="large" /> {data?.price} kr</Pris>

                            <InfoBox>
                                <InfoListe>Sjangere: {data?.sjanger}</InfoListe>
                                <InfoListe>Kategori: {data?.kategori}</InfoListe>
                                <InfoListe>Forfatter: {data?.forfatter}</InfoListe>
                            </InfoBox>

                            <BestillBoks> 
                                <NettbestillingBoks>NETTBESTILLING</NettbestillingBoks>
                                <p>Få varen levert rett hjem!</p>
                            </BestillBoks>
                        </SectionBox3>

                        <SectionBox4>
                            <VolumBoks>
                                
                                    <KlikkOgVelg>KLIKK &amp; VELG</KlikkOgVelg>
                                    <p>Hvilket volum leter du etter?</p>
                                    <p></p>
                                 
                            </VolumBoks>
                        </SectionBox4>

                    </Grid2>  
                </MainBox2>

                <MainBox1>{data?.bilde ? (
                    <img src={urlFor(data.bilde).width(400).format('webp').url()}
                        alt={data.bilde.beskrivelse} />
                ) : null}
                </MainBox1>

                <MainBox4>
                    <footer>
                        Her er en kul footer
                    </footer>
                </MainBox4>
                
                <MainBox3>
                    {data?.detaljer}
                </MainBox3>
            </Grid>
        </>
    )
};

export default Product;