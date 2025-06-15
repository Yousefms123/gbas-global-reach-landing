
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-13rem)] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <p className="text-2xl md:text-3xl font-light text-muted-foreground mt-4">Oops! Page not found.</p>
      <p className="mt-2 text-muted-foreground">The page you are looking for does not exist.</p>
      <Button asChild className="mt-8 bg-brand-orange hover:bg-brand-orange/90 text-white">
        <Link to="/">Return to Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
