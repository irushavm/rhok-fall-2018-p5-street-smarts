import StartSearchPage from '../components/StartSearchPage';
import SearchPage from '../components/SearchPage';
const Search = (props) => {
  if(props.query.type === undefined) {
    return (
      <div>
        <StartSearchPage />
      </div>
    );
  }
  return (
    <div>
      <SearchPage {...props} />
    </div>
  );
};
    
    export default Search;
    