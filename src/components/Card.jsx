function Card() {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT6d6ZLbV0Tof3cN9uEqEuru0fZN5JxQhmwfi5nxE3g6xHxszFC"
            alt="eco"
          />
          <h3>Eco</h3>
        </div>
        <div className="card">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR-cfOOaoXpmamIL4m3BeU2vamotMOyzyOcTDGVU-XQdINQnyxs"
            alt="fresh-icon"
          />
          <h3>Fresh Produce</h3>
        </div>
        <div className="card">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT58UJeb60u2ErBeg11CxWbtEeuHasXiHHvWuYWcvecQkJQlGcB"
            alt="safety"
          />
          <h3>Safety First</h3>
        </div>
        <div className="card">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMI86AKzMN6k5BBw2MAASiarFpTY2UHIfd3asGqHCbqyrCgjUI"
            alt="easy-icon"
          />
          <h3>Simply First</h3>
        </div>
      </div>
    </>
  );
}

export default Card;
