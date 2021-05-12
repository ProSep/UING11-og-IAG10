import { useState } from 'react';
import styled from 'styled-components';
import { createRegister } from '../../../utils/registerService';

const NewsInput = styled.input`
  background-color: ${({ theme }) => theme.colors.brownish};
  color:  ${({ theme }) => theme.colors.dark};
  border: none;
  outline: none;
  display: inline-block;
  width: 200px;
  font-size: 18px;
`;

const NewsButton = styled.button`
  background: ${({ theme }) => theme.colors.light};
  color:  ${({ theme }) => theme.colors.dark};
  border: 1px solid black;
  display: inline-block;
  transition-duration: 0.1s;
  width: 100px;
  font-size: 18px;
  border-radius: 30px;
  padding: 10px;
  :hover {
    color:  ${({ theme }) => theme.colors.light};
    background-color:  ${({ theme }) => theme.colors.red};
  }
`

const NewsForm = styled.form`
  background-color: ${({ theme }) => theme.colors.light};
  border: 2px solid black;
  width: 320px;
  padding: 14px;
  align-items: center;
  display: flex;
  border-radius: 30px;
`

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (email) => {
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      await createRegister(email);
      setSuccess(true);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email);
  };
  return (
    <>
      <title title="Registrer" />
      {error ? <p>{error}</p> : null}
      {success ? (
        <p>
          Gratulerer! Du er nå meldt på nyhetsbrevet med epost-adresse {email}
        </p>
      ) : null}
      <NewsForm loading={loading} onSubmit={handleSubmit}>
        <label id="email">
          <NewsInput
            onChange={handleChange}
            value={email}
            type="text"
            id="email"
            placeholder="Skriv inn epost-adresse"
            required
          />
        </label>
        <NewsButton type="submit">{loading ? 'Registrerer ...' : 'Meld på'}</NewsButton>
      </NewsForm>
    </>
  );
};
export default Register;
