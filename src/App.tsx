import{ useEffect } from 'react';
import users from './users.json';
import  { useFormattedData }  from './hooks/useFormattedData';

const App = () => {
  const { formatted, sortBy, filter, search } = useFormattedData(users);


  useEffect(() => {
    search('anderson');
    filter(({ zip }) => zip > 486);
     sortBy('firstName');
  }, []);

  return (
    <div>
      {formatted.map(({ id, firstName, lastName, birthdate }) => (
        <div key={id}>
          <div>
            {firstName} {lastName}
          </div>
          <div>{birthdate}</div>
        </div>
      ))}
    </div>
  );
};
 export default App;
