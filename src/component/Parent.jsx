import Child from "./Child";

const Parent = () => {
    const cars = [
      { brand: "Toyota", model: "Corolla", year: 2020 },
      { brand: "Honda", model: "Civic", year: 2019 },
      { brand: "Ford", model: "Mustang", year: 2021 },
    ];
    return ( <><div><Child brand={cars[0].brand} 
    year={cars[1].year}
    life={cars[1].model}
    company={cars}
    /></div></> );
}
 
export default Parent;