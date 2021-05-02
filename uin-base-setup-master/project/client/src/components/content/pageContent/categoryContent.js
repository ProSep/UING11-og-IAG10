import SingleItemFetch from "../singelItemFetch";

const Category = ({whatContent}) => {
    const {status, data} = SingleItemFetch( whatContent );

    console.log(data);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'error') return <p>Noe gikk galt når data ble hentet. {data?.message}</p>;

    return(
    <>
    <h1>{data?.kategori}</h1>
    </>
    )};

export default Category;