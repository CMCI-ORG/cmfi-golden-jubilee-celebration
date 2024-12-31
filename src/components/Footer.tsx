import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto py-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <div className="container flex items-center justify-center text-sm text-muted-foreground">
        <Copyright className="h-4 w-4 mr-2" />
        <p>
          1975—2025 | Christian Missionary Fellowship International | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;