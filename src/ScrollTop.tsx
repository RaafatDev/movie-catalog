import { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<{ id: string }> {}
// console.log("Scroll to top !!!");

const ScrollToTop: React.FC<Props> = ({ history }) => {
  useEffect(() => {
    // console.log("use Effect ini Scroll to top !!!");

    const unListen = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unListen();
    };
  }, []);

  return null;
};

export default withRouter(ScrollToTop);
