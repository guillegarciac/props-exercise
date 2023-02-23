function Card(props) {
  const {client} = props;
  const myClass = client.isPremium ? 'premium' : 'normal';
  const isPremium = client.isPremium ? 'Yes' : 'No';
  let greeting = client.country;

  function sayHello(){
    if (greeting === 'fr') {
      return "Bonjour"
    } else if (greeting === 'es') {
      return "Hola"
    } else if (greeting === 'de') {
      return "Hallo"
    } else if (greeting === 'en') {
      return "Hello" };
  }
  
  return (
    <div className={`card ${myClass}`}>
      <span className="card-details">
        <span className="name">{sayHello()} {client.name}</span><br></br>
        <span className="age">Age: {client.age}</span><br></br>
        <span className="isPremium">Is it a premium client? {isPremium} </span><br></br>
        <span className="country"></span>
      </span>
    </div>
  );
}

export default Card;