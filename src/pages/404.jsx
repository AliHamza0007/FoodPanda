import Layout from "../components/Layout";
import WraperCon from "../components/WraperCon";

const NotFound = () => {
  return (
    <Layout>
      <WraperCon>
        <div className="text-center ">
          <h1 className=" notFound">404</h1>
          <p>
            <span className="color-pink     fs-3  fw-lighter d-block">
              Something went wrong
            </span>
            <span className="    fs-4  fw-lighter">
              {" "}
              We're deeply sorry, but something went wrong. Please try to
              refresh the page or
            </span>
            <span className="color-pink     fs-4  fw-lighter d-block">
              {" "}
              start . over
            </span>
          </p>
        </div>
      </WraperCon>
    </Layout>
  );
};

export default NotFound;
