//e.	Write a React program to display text using String literals
// Reusable component that builds a string from props
const UserInfo = ({ firstName, lastName, age, city }) => {
  const fullName = `${firstName} ${lastName}`;
  // Conditional message based on age
const message = age ? `Hello, my name is ${fullName}. I am ${age} years old and I live in ${city}.`
    : `Hello, my name is ${fullName}. Age information is not available.`;

  return (
    <div style={{ marginBottom: '20px' }}>
      <p>{message}</p>
    </div>
  );
};
// Main  component
const Dynstrliterals = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>User Info Display (Props + Template Literals)</h1>
      {/* Reusing the component with different props */}
      <UserInfo firstName="Alice" lastName="Johnson" age={28} city="San Francisco" />
      <UserInfo firstName="Bob" lastName="Smith"  city="London" />
      <UserInfo firstName="Charlie" lastName="Brown" age={22} city="Toronto" />
    </div>
  );
};
export default Dynstrliterals;