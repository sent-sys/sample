export default function Home() {
  return (
    <div className="m-2 p-2 d-flex flex-column justify-content-center">
      <div className="row justify-content-center">
        <img
          src="images/logo.svg"
          className="img-fluid w-50"
          alt="FrontPage"
        ></img>
      </div>
      <div className="row justify-content-center">
        <h1 className="text-center p-2">What do we cook today?</h1>
      </div>
    </div>
  );
}
