function Signup() {
  return (
    <>
      <div className="signup">
        <div>
          <div className="signup-left">
            <div className="signup-left-img">
              <img
                src="https://i.pinimg.com/564x/cf/38/50/cf385028e0845ff151f41992b8c37709.jpg"
                alt="weather"
              />
            </div>
            <div className="signup-left-content1">
              <span className="signup-left-content1-title">
                Weather Updates
              </span>
              <span className="signup-left-content1-content">
                Access real-time weather forecasts to make informed decision for
                your crops and farming activities.
              </span>
            </div>
          </div>
          <div className="signup-left">
            <div className="signup-left-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl3sSQK-J8HzQYaz7Vsss_lfJWS549Jh1N3KPEFYXbVr2RwWrj"
                alt="plant-disease"
              />
            </div>
            <div className="signup-left-content1">
              <span className="signup-left-content1-title">
                Check Plant Yield
              </span>
              <span className="signup-left-content1-content">
                Utilize our plant disease detection features to identify
                potential issues early and take corrective actions.
              </span>
            </div>
          </div>
          <div className="signup-left">
            <div className="signup-left-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzGy3Cb9Fah3F8Qa625KNo4T6fevPgguTZJnVh7aqHKwiy5n3"
                alt="calculate-yield"
              />
            </div>
            <div className="signup-left-content1">
              <span className="signup-left-content1-title">
                Calculate Yield
              </span>
              <span className="signup-left-content1-content">
                Estimate your crop yield with our specialized tools,ensuring
                better planning and resource allocation.
              </span>
            </div>
          </div>
          <div className="signup-left">
            <div className="signup-left-img">
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTefdmbSyEMRYPKskQmCXQa6-7cx5BVpbFAC58RRUzc0iUmeN_e"
                alt="weather"
              />
            </div>
            <div className="signup-left-content1">
              <span className="signup-left-content1-title">Market Trends </span>
              <span className="signup-left-content1-content">
                Analyze market trends and make informed decisions with our
                market data.
              </span>
            </div>
          </div>
        </div>
        <div className="login-page">
          <div className="login-page-title">USER LOG-IN</div>
          <div className="login-page-content">
            <input
              type="text"
              id="email"
              required
              className="login-page-input"
              placeholder="email"
            />
            <label htmlFor="email"></label>
            <br />
            <br />
            <input
              type="password"
              id="password"
              required
              className="login-page-input"
              placeholder=""
            />
            <label htmlFor="password"></label>
            <p>password is required</p>
            <p>forgotten password?</p>
            <button className="login-page-button">LOGIN</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
