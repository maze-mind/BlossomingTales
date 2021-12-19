import React from 'react';
import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import Firebase from '../../utils/Firebase';


const Home = () => {
  const [value, loading, error] = useCollection(
    collection(getFirestore(Firebase), 'books'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div className="home">
      <h2>This is the home page!</h2>
      <h1>Current Firestore Records:</h1>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Books: Loading...</span>}
      {value && (
        <span>
          Collection:{' '}
          {value.docs.map((doc) => (
            <React.Fragment key={doc.id}>
              {JSON.stringify(doc.data())},{' '}
            </React.Fragment>
          ))}
        </span>
      )}
    </div>
  );
};

export default Home;