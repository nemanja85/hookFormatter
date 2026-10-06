import { useEffect } from "react";
import { useFormattedData } from "./hooks/useFormattedData";
import type { User } from "./types";
import users from "./users.json";

const App = () => {
  const { formatted, sortBy, filter, search } = useFormattedData<User>(
      users as User[],
  );

  useEffect(() => {
    search("anderson");
    filter(({ zip }) => zip > 486);
    sortBy("birthdate");
  }, [search, filter, sortBy]);

  return (
      <div id="data">
        {formatted.map(({ id, firstName, lastName, birthdate }) => (
            <div className="info" key={id}>
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