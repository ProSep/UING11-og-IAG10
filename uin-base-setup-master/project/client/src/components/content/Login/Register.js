import { useState } from 'react';
import { createRegister } from '../../../utils/registerService';

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
  const [email, setUsername] = useState('');

  const handleChange = (event) => {
    setUsername(event.target.value);
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
      <form loading={loading} onSubmit={handleSubmit}>
        <label id="email">
          E-post Adresse:
          <input
            onChange={handleChange}
            value={email}
            type="text"
            id="email"
            placeholder="skriv inn epost-adresse"
            required
          />
        </label>
        <button type="submit">{loading ? 'Registrerer ...' : 'Meld på'}</button>
      </form>
    </>
  );
};
export default Register;
