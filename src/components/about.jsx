export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/curtain/1.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Про нас</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Как мы работаем:</h3>
              <div className="list-style">
                <div>
                  
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
