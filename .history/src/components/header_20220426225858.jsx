import { ReactComponent as Svg } from "../data/Images/undraw.svg";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <Svg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
