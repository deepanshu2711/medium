import { Auth } from "../components/auth";
import { Quote } from "../components/quote";

export const Signin = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type="signin" />
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
};
