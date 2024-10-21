import Header from "./Header";

function Signup() {
  return (
    <>
      <Header />
      <div className="signup">
        <div className="signup-left">
          <div>
            <img src="src/image/weather.png" alt="weather" />
          </div>
          <div>
            <h1>Weather Updates</h1>
            Acess real-time weather forecasts to make informed decision for your
            crops and farming activities.
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
