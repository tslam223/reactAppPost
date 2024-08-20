const Child = ({brand,year,life,company}) => {
    return (
      <>
        <h2>Child</h2>
        <p>hello {brand} {year} {life} {company[1].brand}</p>
      </>
    );
}
 
export default Child;